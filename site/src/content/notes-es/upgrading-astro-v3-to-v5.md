---
title: Actualizando Astro de v3 a v5
publishDate: 2/12/25
updatedDate: 2/12/25
tags:
  - astro
---

Normalmente no soy de actualizar paquetes y frameworks hasta que sea absolutamente necesario por nuevas características interesantes o razones de seguridad. Bueno, ha llegado el momento de actualizar mi sitio de Astro de v3.6 a v5.2.  

**NOTA**  
Las actualizaciones como esta siempre deben hacerse en una nueva rama para evitar romper el código en producción. Haz commit con frecuencia, revierte cuando sea necesario. Git es tu amigo. 

Ahora, la forma más fácil de hacer esto es con el comando de actualización.
```
npx @astrojs/upgrade
```

Desafortunadamente, esto no funcionó en mi situación, demasiados errores. En su lugar, procedí a abrirme paso usando `npm update` y arreglando problemas manualmente según fuera necesario.

## Tailwind CSS
A partir de Tailwind v4, @astrojs/tailwind ya no se mantiene y la forma recomendada de usar Tailwind es el plugin de Vite. Así que, ejecuté un simple comando `npm install tailwindcss @tailwindcss/vite`. 
Luego en mi configuración de Astro:  
```
// Eliminar
import tailwindcss from "@astrojs/tailwind";

// Agregar
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
vite: {
  plugins: [tailwindcss()],
  },
});


```
Crea `src/styles/global.css` y agrega `@import "tailwindcss";`. También necesitarás agregar una línea al frontmatter, ver más abajo.

## Nuevo Problema
Cuando intento ejecutar el entorno de desarrollo, obtengo: 
```
1:43:53 PM [vite] Pre-transform error: Failed to load url @astrojs/vercel/serverless 
```
Este paquete específico debe ser de cuando estaba probando las funciones serverless de Vercel mientras estaban en beta. Actualmente, además del hosting, solo uso las analíticas web de Vercel. Así que, lo reemplazaré con `@astrojs/vercel`.

Yada yada yada. Cuando tengas dudas ejecuta `npx astro check` para verificar el proyecto en busca de errores y elimina node_modules si tienes problemas con versiones antiguas de paquetes que no quieren desaparecer.

Ejecuté `npx @astrojs/upgrade` para llegar a v5. No hubo problemas con eso. 

## Problema con npx add
Tuve algunos paquetes con problemas al intentar ejecutar `npm run dev` y luego intentar instalar dichos paquetes con `npx astro add`, así que en su lugar fui uno por uno y los instalé usando `npm install`. Aproveché esta oportunidad para también eliminar los paquetes que ya no usaba.

## Renderizado híbrido

El renderizado híbrido se eliminó y se fusionó con el estático, que es el predeterminado. Así que hay que eliminar `output:"hybrid"` de la configuración de astro. 

## Colecciones de Contenido

Las colecciones de contenido ahora están obsoletas. Deberían seguir funcionando por ahora, posiblemente con algunos cambios que rompan la compatibilidad. Mientras mi caso de uso actual funcione, las dejaré y me centraré en la estabilidad del nuevo sitio antes de actualizarlas. [Guía para actualizar colecciones de contenido]([https://docs.astro.build/en/guides/content-collections/](https://docs.astro.build/en/guides/upgrade-to/v5/#legacy-v20-content-collections-api)). El único cambio que necesité hacer fue arreglar una llamada mal formada a `getCollection` que causaba el siguiente problema: 
```
No overload matches this call.
```
Pero, esto fue un arreglo fácil.

## Configuración de Typescript cambiada - [env.d.ts](https://docs.astro.build/en/guides/upgrade-to/v5/#changed-typescript-configuration)
Elimina `env.d.ts` y agrega lo siguiente a `.tsconfig`:  
```
{
  "extends": "astro/tsconfigs/base",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"]
}
```

## [compiledContent](https://docs.astro.build/en/guides/upgrade-to/v5/#changed-compiledcontent-is-now-an-async-function)  
El contenido compilado es ahora una función asíncrona, así que requiere `await`. Tengo un pequeño dilema, `await` solo está permitido en el nivel superior, mientras que el único lugar donde uso `.compiledContent()` es dentro de una función map dentro de un div. Desafortunadamente, eso rompe.

![Screenshot 2025-02-12 at 2.41.55 PM.png](../../assets/notes/upgrading-astro-v3-to-v5/screenshot-2025-02-12-at-2-41-55-pm-e8745cd07b.png)

Afortunadamente, esto fue un arreglo fácil. Solo necesitaba cambiar en el frontmatter cómo empaquetaba los datos. Mientras que antes, simplemente usaba `Astro.glob` y accedía al método `.compiledContent()` dentro de mi página. Ahora simplemente llamo a `.compiledContent()` dentro de mi frontmatter y lo empaqueto como parte de la prop. 

```
// Antes
const volunteers = await Astro.glob("../content/volunteer/*.md");

// Después
const volunteerFiles = await Astro.glob("../content/volunteer/*.md");
const volunteers = await Promise.all(
  volunteerFiles.map(async (file) => {
    const content = await file.compiledContent();
    return { ...file, content };
  })
);
```

## [astro:content ya no se puede usar en el cliente](https://docs.astro.build/en/guides/upgrade-to/v5/#changed-astrocontent-can-no-longer-be-used-on-the-client)  
Necesitaré verificar que pasé los datos a props, lo cual creo que en la mayoría de los casos ya estaba haciendo esto.

## [astro.glob Obsoleto](https://docs.astro.build/en/guides/upgrade-to/v5/#deprecated-astroglob)
No creo que haya usado esto demasiado, pero lo reemplazaré cuando sea necesario. Dado que está obsoleto y no está inmediatamente roto (creo), pondré esta tarea en la lista de pendientes.

## ¿Qué ahora?
![Screenshot 2025-02-12 at 2.32.59 PM.png](../../assets/notes/upgrading-astro-v3-to-v5/screenshot-2025-02-12-at-2-32-59-pm-c733f740fc.png)

Bueno, conseguí que mi sitio web funcione con Astro v5.2.6, pero claramente todavía hay algunos problemas que arreglar. 
5 minutos de búsqueda después...oops. Eso fue mi error. Me perdí que ahora tenemos que agregar lo siguiente en el frontmatter de las páginas .astro:
```
---
import "../styles/global.css";
---
```
Todas mis páginas usan un layout `Primary.astro`, así que agregarlo ahí fue un arreglo fácil.

La mayor parte del sitio parece estar funcionando bien. Pero claramente el problema de compiledContent es algo que necesita arreglarse antes que después.

También, ahora que Tailwind ha pasado de ser una integración de Astro a un plugin de Vite, parece que mi plugin de Tailwind Typography ya no está configurado correctamente y necesitaré reinstalarlo ya que mi blog/notas dependen de él para verse decentes. 

¡Otro arreglo fácil! Dado que todavía estaba instalado vía npm, solo tuve que agregar una línea a la hoja de estilos `global.css`:
```
@plugin "@tailwindcss/typography";
```
