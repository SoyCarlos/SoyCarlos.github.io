---
title: "Aventuras en el Home Lab: La Importancia del Acceso de Respaldo"
publishDate: 4/28/25
updatedDate: 4/28/25
tags:
  - homelab-es
---

Como compartí en mi [última publicación](/es/blog/adventures-in-homelabbing), recientemente me he adentrado en el mundo del homelabbing. Esto es lo que ha sucedido desde entonces:

* He construido un nuevo servidor doméstico usando un Ryzen 7 3700X de repuesto y una GTX 1060. Si quieres ver la lista completa de componentes, échale un vistazo en [PCPartPicker](https://pcpartpicker.com/user/Ethoss/saved/gp3QGX).
* He reemplazado Ubuntu Server en mi mini PC Lenovo M715q con Debian, y desde entonces no se ha bloqueado ni una vez. (¡Punto a favor!)
* He añadido Adguard Home como complemento a Home Assistant que se ejecuta en mi Raspberry Pi 5.

## El Incidente

He estado trabajando en conectar mis servicios a mis dominios en mi red local usando Nginx Proxy Manager y las Reescribir DNS de Adguard Home. Mi objetivo era tener Home Assistant accesible a través de algo como `hass.example.com`. En el proceso, añadí un bloque HTTP con hosts proxy en el `configuration.yaml` de Home Assistant.

Bueno, una vez que reinicié el servicio, perdí completamente la conexión con la interfaz web de Home Assistant. Algunos servicios seguían funcionando—por ejemplo, los complementos (específicamente Adguard Home) seguían siendo accesibles a través del puerto 3000. Pero Home Assistant en sí era inaccesible a través de la interfaz web, y sus integraciones no funcionaban.

## La Operación de Rescate

Desafortunadamente, había descuidado configurar el acceso SSH de antemano. Después de lidiar con una extraña combinación de adaptadores en cadena para conectar el Pi a un monitor portátil, finalmente pude obtener salida de video. Después de algunas búsquedas en internet, logré navegar por el shell de Home Assistant y eliminar mis cambios en `configuration.yaml`.

## La Lección

¡Siempre ten un plan de respaldo para acceder a tus dispositivos! Esto significa:
* Configura conexiones SSH con anticipación
* Ten un plan para una salida de video fácil—ya sea un monitor portátil (cualquiera barato en línea servirá) o un conmutador KVM
  * El [JetKVM](https://jetkvm.com/) es excelente, pero debido a la situación actual de aranceles, ya no envían a los EE. UU. por ahora
  * El [GL.iNet Comet](https://www.gl-inet.com/products/gl-rm1/) puede ser una buena alternativa

¡No cometas mi error—prepara tus rutas de escape antes de que las necesites!
