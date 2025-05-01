---

title: "¿Han tomado los Sad Bois la radio?"
subtitle: "Un estudio empírico sobre los estados de ánimo en la música en Estados Unidos"
reading_duration: 5
publishDate: 12/08/2018
blurb: "A menudo se dice que la música es un reflejo de la sociedad en ese momento. Encender las noticias cualquier día suele traer información sombría sobre una nueva epidemia o un nuevo estudio sobre la mala salud mental del público, o cualquier otro tema igualmente desalentador..."
hero_image: "/blog/sadbois/hero.jpeg"
hero_image_owner: "Mohammad Metri"
hero_image_owner_url: "https://unsplash.com/photos/1oKxSKSOowE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
hero_image_location: "Unsplash"
hero_image_location_url: "https://unsplash.com/search/photos/music?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
---
<h1 class="text-2xl pt-5 font-black">Introducción</h1>

A menudo se dice que la música es un reflejo de la sociedad en ese momento. Encender las noticias cualquier día suele traer información sombría sobre una nueva epidemia, un nuevo estudio sobre la mala salud mental del público, o cualquier otro tema igualmente desalentador. Al mismo tiempo, parece haber un aumento en la música triste, especialmente en el mundo del hip-hop. Artistas como Lil Uzi Vert, conocido por "All My Friends are Dead", y Lil Peep, pionero del emo rap, han ganado notoriedad. Ambos son parte del subgénero emo del hip-hop y rap. Aunque este subgénero existe desde los 2000s, solo recientemente se ha vuelto mainstream. Decidí revisar los rankings musicales en Estados Unidos a lo largo de las décadas para ver si la música se ha vuelto más emo.

<br>

Si solo te interesan los resultados, puedes ir directamente a esa sección.

<br>

<h1 class="text-2xl pt-5 font-black">Obteniendo los Datos</h1>

Comencé con un dataset curado por @walkerkq en GitHub (<a href="https://github.com/walkerkq/musiclyrics" target="_blank" class="underline">[https://github.com/walkerkq/musiclyrics](https://github.com/walkerkq/musiclyrics)</a>). Este dataset incluye nombre de la canción, artista, ranking, letra, y el año en que estuvo en el Billboard Top 100 de 1965 a 2015. Usé Pandas para leer el archivo CSV en un notebook de Python. Añadí una columna 'Query' para utilizar con la API de Spotify posteriormente.

<br>

<script src="https://gist.github.com/SoyCarlos/8baedaa5465f1accce526554344ffb3f.js"></script>

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/table.png" alt="Imagen de tabla" class=""></div>
<div class="text-center">Tabla Billboard Top 100 de WalkerKQ</div>

<br>

Luego, utilicé Spotipy, una biblioteca ligera en Python para interactuar con la API de Spotify, para obtener la valencia y duración de cada canción. De las 5,100 canciones originales, eliminé aquellas sin letra, valencia o duración, resultando en 4,868 canciones.

<br>

<script src="https://gist.github.com/SoyCarlos/1901dbfbca2df6e5b5d602935ff95b2e.js"></script>

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/table2.png" alt="Imagen de tabla" class=""></div>
<div class="text-center">Tabla Billboard con Valencia y Duración</div>

<br>

<h1 class="text-2xl pt-5 font-black">Trabajando con los Datos</h1>

Para evitar reinventar la rueda, usé la API de Google Cloud Natural Language para realizar el análisis de sentimiento en todas las letras. Esta API sólo funciona con inglés, español y japonés. Algunas canciones fueron descartadas por tener letras corruptas o inexistentes, quedando un total de 4,073 canciones. En general, cada año tuvo un número similar de canciones, con algunas diferencias entre 1965-2000 y 2000-2015.

<br>

<script src="https://gist.github.com/SoyCarlos/de4037ec5fc74de902af8d9a1835970e.js"></script>

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/table3.png" alt="Imagen de tabla" class=""></div>
<div class="text-center">Agregando Análisis de Sentimiento de Google Cloud</div>

<br>

Luego utilicé la fórmula del "Gloom Index" de RCharlie (vinculada al final del artículo), que considera la densidad lírica (número de palabras por duración), el sentimiento de la API de Google, y la valencia de Spotify.

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/gloom_index.png" alt="Imagen de tabla" class=""></div>
<div class="text-center">Fuente: <a href="https://www.rcharlie.com/post/fitter-happier/" target="_blank" class="underline">https://www.rcharlie.com/post/fitter-happier/</a></div>

<br>

Para el cálculo final, normalicé los valores del "Gloom Index" entre -1 y 1.

<br>

<script src="https://gist.github.com/SoyCarlos/b9de9f5beccf06228f28b52abfd06b48.js"></script>

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/table4.png" alt="Imagen de tabla" class=""></div>

<h1 class="text-2xl pt-5 font-black">Resultados</h1>

La primera visualización fue un scatter plot de todas las canciones por año y su correspondiente valor de "Gloom Index".

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/scatter_plot.png" alt="Scatter plot" class=""></div>
<div class="text-center">Gráfico de dispersión de canciones y su Gloom Index normalizado</div>

<br>

Esto no muestra mucho, pero al hacer un box plot por década, se vuelve más interesante.

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/box_plot.png" alt="Box plot" class=""></div>
<div class="text-center">Box plot de canciones y Gloom Index normalizado por década</div>

<br>

El promedio por década, marcado por la línea amarilla, no cambia mucho, pero las décadas recientes tienen mayor variabilidad, con mínimos que bajan hasta -5. Esto sugiere que la música popular se ha vuelto más polarizante emocionalmente.

<br>

Finalmente, hice una gráfica de línea con el promedio anual del "Gloom Index" para ver una tendencia más clara.

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/line_graph.png" alt="Gráfico de línea" class=""></div>
<div class="text-center">Gráfica del promedio anual del Gloom Index (1965–2015)</div>

<br>

Como se ve, en promedio las canciones se han vuelto más tristes, con el valor más bajo en 2015. Luego, graficamos estos puntos con un ajuste polinómico de grado 3.

<br>

<div class="justify-center flex"><img src="/./blog/sadbois/scatter_plot2.png" alt="Scatter plot" class=""></div>
<div class="text-center">Gráfico de dispersión del Gloom Index promedio anual con línea de ajuste</div>

<br>

<h1 class="text-2xl pt-5 font-black">Conclusión</h1>

La tendencia general muestra que la música se está volviendo más triste o negativa, aunque aún se inclina hacia lo positivo. Esto probablemente se deba a varios factores como eventos mundiales, la economía o condiciones de vida. Aunque no se puede probar causalidad, graficamos el promedio anual del Gloom Index junto a algunos eventos clave de la historia moderna de EE.UU.

<br><br>

<div class="justify-center flex"><img src="/./blog/sadbois/line_graph2.png" alt="Gráfico de línea" class=""></div>

<br>

No se sabe cuánto impactaron estos eventos en el estado de ánimo musical. Pero los datos respaldan que la música mainstream se ha vuelto más triste y polarizante. Si la música de Lil Peep y Lil Uzi Vert seguirá dominando dependerá del público. El tiempo dirá si EE.UU. volverá a la música positiva de los 70.

<br>

<h1 class="text-2xl pt-5 font-black">Créditos</h1>

Quiero dar crédito a RCharlie. Este proyecto fue inspirado en gran parte por su artículo "fitteR happieR" (<a href="https://www.rcharlie.com/post/fitter-happier/" target="_blank" class="underline">[https://www.rcharlie.com/post/fitter-happier/](https://www.rcharlie.com/post/fitter-happier/)</a>) donde investigó cuál es el álbum más triste de Radiohead.

<br>

También agradezco a Oscar Syu y al comité de Investigación y Publicaciones de la Asociación de Estudiantes de Estadística de UC Berkeley por el apoyo y recursos para completar este proyecto.
