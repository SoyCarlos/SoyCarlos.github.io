---
title: Aventuras en Homelabbing
reading_duration: 5
publishDate: 4/9/25
blurb: Se ha discutido mucho sobre el progreso de la humanidad y cómo se comporta más
  como un péndulo que como un asunto lineal. Ahora, definitivamente se aplica a algunos
  aspectos del panorama político actual, pero no voy a discutir eso hoy. En su lugar,
  nos centraremos en la nube y los servidores locales.
hero_image: /blog/adventures-in-homelabbing/hero.jpg
hero_image_owner: Ivan N
hero_image_owner_url: https://unsplash.com/@_ivann
hero_image_location: Unsplash
hero_image_location_url: https://unsplash.com/photos/a-bunch-of-wires-and-wires-in-a-room-AfStyhXC5kM
subtitle: De la Obsesión por la Nube a las Travesuras de Autoalojamiento
---

Se ha discutido mucho sobre el progreso de la humanidad y cómo se comporta más como un péndulo que como un asunto lineal. Ahora, definitivamente se aplica a algunos aspectos del panorama político actual, pero no voy a discutir eso hoy. En su lugar, nos centraremos en la nube y los servidores locales.

Como cualquier otro joven desarrollador de software, estoy obsesionado con la Nube, la IA, y estoy luchando en este mercado laboral. Sin embargo, a pesar de mi amor por la nube, también he estado construyendo computadoras durante casi 2 décadas.

Después de actualizar algunas partes de mi escritorio hace unos años, me quedé con una CPU y GPU extra. Así que, he estado buscando darles una nueva vida y estaba interesado en construir un servidor doméstico, o homelab como lo llaman los chicos cool. Pero, no quería comprometerme financieramente a comprar las otras partes (placa madre, RAM, almacenamiento, caja) si no estaba seguro de que mi interés continuaría.

Así es como decidí mojar mis pies en el homelabbing comprando una mini PC Lenovo M715q usada en eBay. Si soy completamente honesto, esto fue absolutamente innecesario. Por un par de razones. Para empezar, ya había comenzado a autoalojar algunos servicios en mi escritorio, aunque no lo ejecutaba 24/7, así que sabía que estaba interesado en el homelabbing. Pero más importante aún, tenía un Raspberry Pi 5 que no estaba ejecutando nada. ¡El crimen definitivo del entusiasta de la tecnología: hardware sin usar acumulando polvo!

De todos modos, compré la mini PC, inicialmente instalé Ubuntu Desktop y me puse a trabajar. Gran parte de mi interés fue impulsado por YouTube y proporcionaron ideas sobre qué aplicaciones autoalojar. Solo por mencionar algunas están <a href="https://www.youtube.com/@Techdox" target="_blank">Techdox</a>, <a href="https://www.youtube.com/@TechnoTim" target="_blank">Techno Tim</a>, <a href="https://www.youtube.com/@HardwareHaven" target="_blank">Hardware Haven</a>, <a href="https://www.youtube.com/@RaidOwl" target="_blank">Raid Owl</a>, <a href="https://www.youtube.com/@NetworkChuck" target="_blank">NetworkChuck</a>, y el infame <a href="https://www.youtube.com/@JeffGeerling" target="_blank">Jeff Geerling</a> (¡todos alaben al Maestro del Pi).

Comencé a autoalojar un servidor de Minecraft usando <a href="https://craftycontrol.com/" target="_blank">Crafty Controller</a>, una instancia de <a href="https://excalidraw.com/" target="_blank">Excalidraw</a>, <a href="https://docmost.com/" target="_blank">Docmost</a> para reemplazar Notion, <a href="https://plane.so/" target="_blank">Plane</a> para reemplazar Jira, y <a href="https://penpot.app/" target="_blank">Penpot</a> para reemplazar Figma. Para poder acceder a ellos desde internet, usé <a href="https://nginxproxymanager.com/" target="_blank">Nginx Proxy Manager</a> para configurar proxies inversos con SSL. Puedes usar <a href="https://traefik.io/traefik/" target="_blank">Traefik</a> o <a href="https://caddyserver.com/" target="_blank">Caddy</a> en su lugar, pero disfruté la facilidad de uso de NPM. Para una solución de panel de control, comencé con <a href="https://homarr.dev/" target="_blank">Homarr</a>, pero luego cambié a <a href="https://gethomepage.dev/" target="_blank">Homepage</a> porque aparentemente soy incapaz de tomar una decisión y mantenerla.

Poner en marcha NPM fue un poco confuso al principio, pero al final del día solo era cuestión de reenvío de puertos en mi router a la mini PC, y asegurarme de que todos los contenedores estén en la misma red Docker que NPM. P.D. Para el "Forward Hostname/IP" en NPM, puedes poner el nombre del contenedor en lugar de la IP. Simplifica el despliegue, especialmente si por alguna razón la IP interna del contenedor cambia. ¡Considera esto tu consejo profesional gratuito del día!

Pensé que había superado la parte difícil, pero estaba equivocado. Después de un par de días de que la mini PC funcionara bien, comencé a tener fallos aleatorios. Pero estos no eran apagados aleatorios, en su lugar, mis contenedores Docker se bloqueaban, el servidor homelab perdía conexión a Internet, y los ratones/teclados USB dejaban de funcionar. El equivalente digital de que tu auto haga un ruido extraño, luego la radio deje de funcionar, y de repente tus limpiaparabrisas estén poseídos.

Pasé una semana depurando. Actualicé la RAM, configuré un servicio Watchdog para reiniciar la máquina si pierde conexión a la red, hice una instalación limpia con Ubuntu Server ya que estaba usando la máquina principalmente a través de SSH, configuré un script bash para hacer ping a un sitio web público y reiniciar la máquina si fallaba, y nada funcionó. Encontré que había un número extremadamente grande de solicitudes de interrupción que intenté sin éxito arreglar con `irqbalance`. En este punto, estaba considerando realizar un exorcismo en la máquina.

Esperaba que en este punto de mi publicación de blog saldría victorioso y explicaría la solución, pero fallé. Mi servicio Watchdog y script bash irónicamente también fallan durante este fallo, así que ni siquiera reinician la máquina cuando se supone que deben hacerlo. Sin embargo, tengo una solución temporal. Mencioné que tenía un Pi 5 a mano, y durante esta exploración terminé instalando Home Assistant en él ya que durante mucho tiempo quise que mis cámaras NVR Reolink fueran accesibles a través de la aplicación Apple Home. Bueno, también tengo un enchufe inteligente Meross extra. Configuré un monitor en <a href="https://uptimerobot.com/" target="_blank">Uptime Robot</a> para hacer ping a uno de mis sitios web públicos y enviarme notificaciones cuando se cae. En Home Assistant, usé una automatización usando la integración de Uptime Robot para apagar el enchufe inteligente durante 10 segundos y luego volver a encenderlo. Ahora, obviamente, esto no arregla nada, pero en este punto es mejor que se reinicie automáticamente que esperar a descubrir que mis servicios están caídos y luego ir a la computadora para reiniciarla manualmente. Mis últimos sospechosos, asumiendo que el hardware es el problema, son que o mi CPU o SSD son los culpables, pero por ahora lo dejaré como está. A veces tienes que trabajar con lo que tienes, incluso si lo que tienes es una mini PC temperamental con una crisis de identidad.

Ahora que sé que disfruto el homelabbing, he avanzado con la compra de las últimas partes de computadora que necesito para un servidor doméstico básico antes de que estos aranceles hagan que los precios se disparen aún más. Para esa máquina, probablemente configuraré <a href="https://proxmox.com/en/" target="_blank">Proxmox</a>, y ya sea configuraré <a href="https://casaos.zimaspace.com/" target="_blank">CasaOS</a> en la mini PC o la configuraré como un nodo en un clúster de Proxmox para servir como un entorno de pruebas.

---

Puedo pensar en una miríada de razones por las que un servidor doméstico sería beneficioso para la mayoría:

- ¿Tu película/serie favorita fue eliminada de uno de los 20 servicios de streaming que constantemente aumentan los precios? ¡Compra solo tu contenido favorito y usa <a href="https://jellyfin.org/" target="_blank">Jellyfin</a> o <a href="https://www.plex.tv/" target="_blank">Plex</a> y nunca más te preocupes por "el contenido que se irá el próximo mes"!
- ¿Necesitas respaldar tus fotos sin pagar mensualmente? <a href="https://immich.app/" target="_blank">Immich</a> o <a href="https://www.photoprism.app/" target="_blank">Photoprism</a> tienen tus preciados recuerdos cubiertos.
- ¿Quieres sentirte como un mago de la tecnología mientras simultáneamente desarrollas una nueva apreciación por los profesionales de TI? ¡Comienza un homelab!

Espero que en el futuro nuestras máquinas puedan mantener más fácilmente los servicios ejecutándose en segundo plano, o que las soluciones más baratas/simples para servidores domésticos sean más accesibles. Algo como un <a href="https://www.zimaspace.com/products/cube-personal-cloud?utm_source=head&utm_medium=menu" target="_blank">Zimacube</a> barato. Ya hay más soluciones autoalojadas disponibles hoy que hace 10 años, así como soluciones como CasaOS y <a href="https://coolify.io/" target="_blank">Coolify</a> que facilitan el despliegue, así que espero que estemos avanzando en la dirección correcta.

Mis próximos pasos serán construir ese servidor doméstico, configurar un mejor registro y visualización de esos registros, y configurar <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/" target="_blank">Cloudflare Tunnels</a> para estar frente a mis proxies inversos para mayor seguridad. Con suerte, en algún momento arreglaré la mini PC, o al menos descubriré qué magia oscura está causando sus problemas. ¡Feliz homelabbing!

P.D. Para más información sobre los servicios que he explorado en homelabbing, consulta mi <a href="https://github.com/SoyCarlos/homelab/" target="_blank">repositorio</a>. Siéntete libre de darle una estrella, hacer un fork, o juzgar mis elecciones de configuración de Docker - ¡todos los comentarios son bienvenidos!
