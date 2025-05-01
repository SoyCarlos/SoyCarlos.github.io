---

title: "Privacidad de Datos en una Pandemia"
subtitle: "Analizando Diferentes Enfoques del Rastreo de Contactos del Covid-19"
reading_duration: 6
publishDate: 05/27/2020
blurb: "Mientras los países del mundo comienzan a reabrir poco a poco, los gobiernos están considerando todas las opciones con la esperanza de contener futuros brotes. Su santo grial: Apps de Rastreo de Contactos"
hero_image: "/blog/data-privacy-pandemic/hero.jpeg"
hero_image_owner: "Tim Mossholder"
hero_image_owner_url: "https://unsplash.com/@timmossholder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
hero_image_location: "Unsplash"
hero_image_location_url: "https://unsplash.com/s/photos/corona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
---
Publicado originalmente en <a href="https://medium.com/towards-data-science/data-privacy-in-a-pandemic-901e828b850a" target="_blank" class="italic underline">Towards Data Science</a>

Mientras los países del mundo comienzan a reabrir poco a poco, los gobiernos están considerando todas las opciones con la esperanza de contener futuros brotes.

Su santo grial: Apps de Rastreo de Contactos

Expertos ya han levantado preocupaciones sobre la seguridad y efectividad de estas apps. Pero antes de entrar en eso, hablemos de su contraparte analógica.

Para muchos de nosotros, esta puede ser la primera vez que escuchamos sobre <a href="https://www.webmd.com/lung/news/20200504/what-is-contact-tracing-and-how-does-it-work#1" target="_blank" class="underline">el rastreo de contactos</a>, pero no es algo nuevo. El rastreo de contactos ha sido utilizado por autoridades de salud pública desde hace siglos. Especialmente para contener la transmisión de ETS.

Primero, aíslan a la persona infectada para evitar más contagios, y luego rastrean a todas las personas con las que estuvo en contacto. Todo esto lo hacen <a class="italic">sin revelar la identidad de la persona</a>. Ese último punto es clave para que esto funcione: el rastreo de contactos no requiere revelar la identidad y la privacidad es esencial.

Entonces, ¿qué han hecho los gobiernos y empresas privadas para digitalizar el proceso? Bueno, veamos los dos enfoques que se están usando.

<div class="flex justify-center"><img src="/./blog/data-privacy-pandemic/electric_cabinets.jpg" alt="Cuarto lleno de servidores" class=""></div>  
<div class="text-center">Foto por <a href="https://unsplash.com/@ismailenesayhan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" class="underline">İsmail Enes Ayhan</a> en <a href="https://unsplash.com/s/photos/centralized-server?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" class="underline">Unsplash</a></div>

<h1 class="text-2xl pt-5 font-black">Enfoque Centralizado</h1>

En un enfoque centralizado, el teléfono del usuario envía su ubicación GPS a un servidor central, junto con la hora en que estuvo allí. Tanto el NHS del Reino Unido como Francia han decidido irse por este camino.

Los mayores problemas de este enfoque son: seguridad, privacidad y batería.

El hecho de que el gobierno sepa la ubicación exacta de sus ciudadanos en cualquier momento solía ser una pesadilla estilo “Gran Hermano” que mantenía despierto a George Orwell. Una pandemia después, millones en todo el mundo están ofreciendo esa información voluntariamente. Como estadounidense, desconfiar del gobierno es parte de la cultura, pero proveer ubicación en tiempo casi real definitivamente parece sacado de una novela distópica para jóvenes.

El Reino Unido y Francia han argumentado que la app será segura y que los datos no se usarán para nada más que rastreo de contactos. En un mundo ideal, las protecciones del GDPR para los ciudadanos de la UE (ni idea de cómo aplica esto con el Brexit) les darían las salvaguardas legales necesarias. Pero, si el gobierno miente y usa los datos ilegalmente, ¿quién los hará responsables? ¿Ese mismo gobierno?

Más allá del Gran Hermano, expertos también se han mostrado preocupados por actores maliciosos accediendo a los datos. La app del Reino Unido se está probando en la Isla de Wight. Al mismo tiempo, han dado acceso a expertos en ciberseguridad para recibir retroalimentación. Como era de esperarse, los <a href="https://www.businessinsider.com/cybersecurity-experts-find-security-flaws-in-nhs-contact-tracing-app-2020-5" target="_blank" class="underline">expertos encontraron fallas de seguridad</a>. Para acabarla, una de sus recomendaciones fue cambiar a un enfoque descentralizado, que ya habían <a href="https://news.yahoo.com/nhs-rejects-apple-google-coronavirus-150047833.html" target="_blank" class="underline">rechazado el mes pasado</a>.

Para que cualquier app de rastreo funcione, sea centralizada o no, el teléfono debe estar transmitiendo información continuamente. Sumando todas las veces que hace esto al día, el impacto en la batería es considerable. Además, los enfoques centralizados tienen una desventaja extra, especialmente en iOS. Apple no permite que las apps transmitan info por Bluetooth en segundo plano. Ya dejaron claro que <a href="https://www.bbc.com/news/technology-52366129" target="_blank" class="underline">no van a relajar esa política</a>. Para evitar esto, algunas apps en iOS necesitan <a href="https://www.theguardian.com/australia-news/2020/may/15/covid-safe-app-australia-how-download-does-it-work-australian-government-covidsafe-covid19-tracking-downloads" target="_blank" class="underline">estar abiertas para funcionar</a>.

Singapur ha intentado lograr un equilibrio entre usar un enfoque centralizado y atender las preocupaciones del público. Han liberado el código de su app y dicen que los datos no se envían a un servidor central a menos que <a href="https://www.bloomberg.com/news/articles/2020-05-23/singapore-contract-trace-app-is-opt-in-as-long-as-possible-fm" target="_blank" class="underline">des positivo</a>.

Si es cierto, Singapur podría ser un modelo para otros países que siguen tercos con lo centralizado. La última preocupación que queda es el dilema de hacerlo opcional u obligatorio.

India, la democracia más grande del mundo, ya ha obligado a sus ciudadanos a descargar la app si quieren seguir trabajando o evitar castigos. Incluso Singapur, aunque sea opcional por ahora, ha dicho que podría dejar de serlo. El sistema universitario de Alabama en EE.UU. está “alentando” a estudiantes y profesores a usar su app, <a href="https://www.nytimes.com/reuters/2020/05/22/technology/22reuters-health-coronavirus-alabama-apps.html" target="_blank" class="underline">pero no está claro si será obligatoria en campus</a>. Dado que las leyes de protección de datos siguen siendo limitadas en el mundo, podrías verte forzado a usar estas apps. Si no por el gobierno, por tu empleador, supermercado o cualquier negocio con el que quieras interactuar.

Debido a esto, un programador en <a href="https://www.buzzfeednews.com/article/pranavdixit/india-aarogya-setu-hacked" target="_blank" class="underline">India logró burlar la app</a>. Ahora camina libremente con un badge de “Seguro” sin transmitir ningún dato. Ese es el mejor escenario. Expertos también se preocupan por <a href="https://www.brookings.edu/techstream/inaccurate-and-insecure-why-contact-tracing-apps-could-be-a-disaster/" target="_blank" class="underline">usuarios mandando falsos positivos</a>, lo cual haría más daño que bien.

<div class="flex justify-center"><img src="/./blog/data-privacy-pandemic/person_on_phone.jpeg" alt="Mujer con cubrebocas viendo su celular." class=""></div>  
<div class="text-center">Foto por <a href="https://www.pexels.com/es-es/@ketut-subiyanto?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" target="_blank" class="underline">Ketut Subiyanto</a> en <a href="https://www.pexels.com/es-es/foto/mujer-telefono-inteligente-vehiculo-efecto-desenfocado-4429299/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels" target="_blank" class="underline">Pexels</a></div>

<h1 class="text-2xl pt-5 font-black">Enfoque Descentralizado</h1>

El enfoque descentralizado ha sido liderado por una colaboración entre <a href="https://www.apple.com/newsroom/2020/04/apple-and-google-partner-on-covid-19-contact-tracing-technology/" target="_blank" class="underline">Apple y Google</a>. Ambas compañías han lanzado actualizaciones a sus sistemas agregando esta API opcional.

La API funciona de forma simple: el teléfono genera códigos identificadores que cambian frecuentemente. Si detecta otro teléfono cerca por cierto tiempo, intercambian esos códigos. Si una persona da positivo a Covid-19, la app sube sus códigos de las últimas dos semanas a un servidor. Todos los teléfonos revisan ese servidor y, si encuentran un código con el que hayan estado cerca, les notifica.

Con este enfoque, la batería sigue siendo un problema porque el Bluetooth debe estar siempre encendido, pero en iOS no es necesario que la app esté abierta como sí pasa con el enfoque centralizado.

Hasta ahora, <a href="https://www.engadget.com/switzerland-swisscovid-coronavirus-contact-tracing-app-pilot-153813626.html?guccounter=1" target="_blank" class="underline">Suiza</a> ha sido de los primeros en probar esta API, el gobierno australiano indicó que también la <a href="https://www.theguardian.com/australia-news/2020/may/15/covid-safe-app-australia-how-download-does-it-work-australian-government-covidsafe-covid19-tracking-downloads" target="_blank" class="underline">incorporará en su app existente</a> y Alemania la <a href="https://news.yahoo.com/coronavirus-german-contact-tracing-app-174902502.html" class="underline" target="_blank">adoptó tras haber trabajado en una versión centralizada</a>.

<h1 class="text-2xl pt-5 font-black">¿Entonces, el enfoque descentralizado es perfecto?</h1>

Desafortunadamente, no. Dejando de lado privacidad y seguridad, la efectividad sigue siendo una duda.

Si los diagnósticos los ingresan los usuarios, hay garantía de que algunos trolls mandarán falsos positivos, afectando la confianza pública en la app.

¿Y qué pasa si no llevas tu celular? ¿O si se te muere la batería? ¿O si eres pobre o adulto mayor y simplemente no tienes un <a href="https://appleinsider.com/articles/20/05/13/nhs-admits-contact-tracing-app-wont-work-on-older-iphones" target="_blank" class="underline">celular compatible?</a>

Reconozco el esfuerzo de Apple y Google en crear una API con privacidad y seguridad como prioridad. También reconozco el trabajo de los ingenieros que están desarrollando estas apps. Pero esta tecnología es nueva; aún no sabemos qué tan efectiva será. Incluso si funciona perfecto, solo te avisa que estuviste cerca de alguien infectado, probablemente después de que tú ya contagiaste a alguien más.

Las apps de rastreo no reemplazan tratamientos efectivos ni vacunas, ni reemplazan las pruebas masivas o el equipo de protección personal. Como todos, espero que cualquier cosa ayude a frenar la pandemia, pero es importante no caer en una falsa sensación de seguridad que termine empeorando todo.

Gracias por leer mi publicación. Me encantaría saber tu opinión, ya sea en los comentarios o en <a href="https://twitter.com/SoyCarlosEO" target="_blank" class="underline">Twitter (@SoyCarlosEO)</a>.
