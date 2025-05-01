---
title: "Muéstrame Tu Teléfono: Analizando Mis Mensajes de Texto"
subtitle: ""
reading_duration: 4
publishDate: 07/30/2019
blurb: "Recientemente, en el trabajo, he estado usando algunas técnicas de procesamiento de lenguaje natural. Lo cual me hizo pensar: ¿hay alguna forma de aplicar estas técnicas a mis conversaciones?"
hero_image: "/blog/imessage-analysis/hero.jpeg"
hero_image_owner: "Thom Holmes"
hero_image_owner_url: "https://unsplash.com/@thomholmes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
hero_image_location: "Unsplash"
hero_image_location_url: "https://unsplash.com/search/photos/texting?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
---
Recientemente, en el trabajo, he estado usando algunas técnicas de procesamiento de lenguaje natural. Lo cual me hizo pensar: ¿hay alguna forma de aplicar estas técnicas a mis conversaciones?

(Des?)Afortunadamente, descubrí que las copias de seguridad del iPhone también guardan los historiales de mensajes. Siguiendo ejemplos del <a href="https://medium.com/u/2c4731836156?source=post_page-----6a2b70d8f776--------------------------------" target="_blank" class="underline">blog de Yorgos Askalidis</a> y la inspiración del <a href="https://medium.com/u/89213a5e3ef?source=post_page-----6a2b70d8f776--------------------------------" target="_blank" class="underline">blog de David Richard Holtz</a>, hice un análisis básico de mis mensajes de texto.

Después de enlazar los frames que quería usar desde la base de datos local sqlite3, descubrí que tenía 78,977 mensajes guardados, siendo el más antiguo del 29 de octubre de 2016. Al graficar las marcas de tiempo de todos los mensajes, obtuve el siguiente gráfico:

<div class="justify-center flex"><img src="/./blog/imessage-analysis/all_texts.png" alt="Gráfico de línea" class=""></div>

Comparar el total de mensajes por mes no tendría mucho sentido ya que 2019 no está completo y 2016 no está representado en su totalidad, por lo que hay una brecha de agosto a octubre entre los años.

<div class="justify-center flex"><img src="/./blog/imessage-analysis/years.png" alt="Gráfico de barras" class=""></div>

Al graficar por años, descubrí que 2018 fue un año muy malo para mis DMs. 2016 es el más bajo, pero solo se incluyeron dos meses completos de ese año (y aun así fue como la mitad de 2018, qué triste).

Luego decidí ver cuándo estaba respondiendo o enviando mensajes de texto. Esto se muestra en formato de 24 horas en hora local, lo que significa que es una mezcla entre hora del Pacífico, Este y Central.

<div class="justify-center flex"><img src="/./blog/imessage-analysis/time_of_day.png" alt="Gráfico de línea" class=""></div>

Si alguna vez quieres que responda de inmediato, de 6 p.m. a 1 a.m. probablemente sea el horario ideal. Estaba disfrutando las visualizaciones e ideas, pero me estaba aburriendo de los colores. Así que decidí encontrar los momentos en los que mis conversaciones eran más activas.

<div class="justify-center flex"><img src="/./blog/imessage-analysis/time_heatmap.png" alt="Mapa de calor" class=""></div>

Descubrí que no tengo precisamente las conversaciones más emocionantes entre las 3 a.m. y la 1 p.m. cualquier día. Curiosamente, los martes a las 8 p.m. son los momentos más activos de mis conversaciones. Casualidad o no, tengo reuniones la mayoría de los martes a las 8 p.m.

Luego decidí graficar las conversaciones entre algunos amigos y yo, incluyendo a mi mamá.

<div class="justify-center flex"><img src="/./blog/imessage-analysis/people_comparison.png" alt="Gráfico de línea" class=""></div>

Aunque los resultados no representan con exactitud con quién hablo, debido al uso de otras formas de comunicación, es muy interesante ver el panorama general de mi actividad de mensajes. Las conversaciones con el Amigo B se desplomaron justo cuando decidimos usar Messenger, qué coincidencia. Mis conversaciones con los Amigos C y D son muy esporádicas.

Si esto demuestra algo, es que nadie es más constante que mi mamá.

<div class="text-2xl pl-10 text-gray-500">Un saludo para ti, mamá.</div>

Ahora, todos sabemos que si quieres conocer a alguien, debes mirar sus emojis más usados.

<div class="justify-center flex"><img src="/./blog/imessage-analysis/emoijis_sent_and_received.png" alt="Gráfico de emojis más usados" class=""></div>

Para agregar más detalle, decidí encontrar los emojis más comunes en mis conversaciones con mi mamá y mis amigos en orden alfabético.

<div class="justify-center flex"><img src="/./blog/imessage-analysis/all_emojis_convos.png" alt="Gráfico de emojis por conversación" class=""></div>

Si algo podemos aprender de estos emojis, es que soy un tipo bastante gracioso. Además, parece que la gente llora mucho a mi alrededor. Probablemente por lo gracioso que soy (contacta a mi agente para contrataciones).

Si quieres reproducir lo que hice o ver algunas visualizaciones que no incluí aquí, revisa mi Jupyter Notebook: <a href="https://github.com/SoyCarloss/iMessage-Analysis" target="_blank" class="underline">Repositorio en Github</a>.

Lo siguiente será aplicar análisis de sentimiento a mis conversaciones para finalmente entender qué fue lo que dije mal y por qué me dejaron en visto. Tal vez incluso cree un chatbot con mis mensajes para que responda automáticamente por mí.

El límite es la data.
