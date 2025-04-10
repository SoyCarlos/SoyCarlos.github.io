---
title: Adventures in Homelabbing
reading_duration: 5
publishDate: 4/9/25
blurb: Much has been discussed on humanity's progress and how it behaves more
  like a pendulum instead of a linear matter. Now, it definitely applies to some
  of today's political landscape, but I am not going to discuss that today.
  Instead, we're focused on the cloud and on-premises servers.
hero_image: /blog/adventures-in-homelabbing/hero.jpg
hero_image_owner: Ivan N
hero_image_owner_url: https://unsplash.com/@_ivann
hero_image_location: Unsplash
hero_image_location_url: https://unsplash.com/photos/a-bunch-of-wires-and-wires-in-a-room-AfStyhXC5kM
subtitle: From Cloud Obsession to Self-Hosted Shenanigans
---

Much has been discussed on humanity's progress and how it behaves more like a pendulum instead of a linear matter. Now, it definitely applies to some of today's political landscape, but I am not going to discuss that today. Instead, we're focused on the cloud and on-premises servers.

Like any other young software developer, I am obsessed with the Cloud, AI, and am struggling in this job market. However, despite my love for the cloud, I've also been into building computers for almost 2 decades. 

After upgrading some parts of my desktop a few years ago, I was left with an extra CPU and GPU. So, I've been looking at giving them a new life and was interested in building a homeserver, or homelab as the cool kids call it. But, I did not want to financially commit to buying the other parts (motherboard, RAM, storage, case) if I wasn't sure my interest would continue. 

That's how I decided to dip my toes into homelabbing by buying a used Lenovo M715q mini pc on eBay. If I am being completely honest, this was absolutely unnecessary. For a couple of reasons. For starters, I had already started self-hosting some services on my desktop, although I did not run it 24/7, so I knew I was interested in homelabbing. But more importantly, I had a Raspberry Pi 5 that was not running anything. The ultimate tech enthusiast crime: unused hardware collecting dust!

Anyways, I bought the mini pc, initially installed Ubuntu Desktop, and got to work. Much of my interest was driven by YouTube and they provided ideas to what apps to self-host. Just a few to mention are <a href="https://www.youtube.com/@Techdox" target="_blank">Techdox</a>, <a href="https://www.youtube.com/@TechnoTim" target="_blank">Techno Tim</a>, <a href="https://www.youtube.com/@HardwareHaven" target="_blank">Hardware Haven</a>, <a href="https://www.youtube.com/@RaidOwl" target="_blank">Raid Owl</a>, <a href="https://www.youtube.com/@NetworkChuck" target="_blank">NetworkChuck</a>, and the infamous <a href="https://www.youtube.com/@JeffGeerling" target="_blank">Jeff Geerling</a> (all hail the Pi Master).

I began to self-host a Minecraft server using <a href="https://craftycontrol.com/" target="_blank">Crafty Controller</a>, an <a href="https://excalidraw.com/" target="_blank">Excalidraw</a> instance, <a href="https://docmost.com/" target="_blank">Docmost</a> to replace Notion, <a href="https://plane.so/" target="_blank">Plane</a> to replace Jira, and <a href="https://penpot.app/" target="_blank">Penpot</a> to replace Figma. To be able to access them from the internet, I used <a href="https://nginxproxymanager.com/" target="_blank">Nginx Proxy Manager</a> to set up reverse proxies with SSL. You can use <a href="https://traefik.io/traefik/" target="_blank">Traefik</a> or <a href="https://caddyserver.com/" target="_blank">Caddy</a> instead, but I enjoyed the ease-of-use of NPM. For a dashboard solution, I started with <a href="https://homarr.dev/" target="_blank">Homarr</a>, but later switched to <a href="https://gethomepage.dev/" target="_blank">Homepage</a> because I'm apparently incapable of making a decision and sticking with it.

Getting NPM up and running was a bit confusing at first, but at the end of the day it was just a matter of port-forwarding on my router to the mini PC, and making sure all containers are on the same Docker network as NPM. P.S. For the "Forward Hostname/IP" in NPM, you can put in the name of the container instead of the IP. It simplifies the deployment, especially if for whatever reason the internal IP of the container changes. Consider this your free pro-tip of the day!

I thought I had gotten through the hard part, but I was wrong. After a couple of days of the mini PC being up and running just fine, I started to get random crashes. But these were not random shutdowns, instead, my Docker containers would crash, the homelab server would lose connection to the Internet, and USB mice/keyboard would not work anymore. The digital equivalent of your car making a weird noise, then the radio stops working, and suddenly your windshield wipers are possessed.

I went through a week of debugging. I upgraded the RAM, set up a Watchdog service to reboot the machine if it loses connection to the network, did a clean install with Ubuntu Server since I was using the machine mostly through SSH anyways, set up a bash script to ping a public website and reboot the machine if it failed, and nothing worked. I found that there were an extremely large number of interrupt requests which I unsuccessfully attempted to fix with `irqbalance`. At this point, I was considering performing an exorcism on the machine.

I was hoping that at this point in my blog post I would come out victorious and explain the solution, but I failed. My Watchdog service and bash script ironically also fail during this failure, so they don't even reboot the machine when they're supposed to. I do however, have a band-aid solution. I mentioned I had a Pi 5 on-hand, and during this exploration I ended up installing Home Assistant on it since for a long time I wanted my Reolink NVR cameras to be accessible through the Apple Home app. Well, I also have an extra Meross Smart Plug. I set up a monitor on <a href="https://uptimerobot.com/" target="_blank">Uptime Robot</a> to ping one of my public-facing websites and send me notifications when it goes down. On Home Assistant, I used an automation using the Uptime Robot integration to switch off the smart plug for 10 seconds and then turn it back on. Now, obviously, this fixes nothing, but at this point it's better for it to automatically reboot than to wait to find out my services are down and then go to the computer to manually reboot it. My last suspects, assuming hardware is the issue, is that either my CPU or SSD is the culprit, but for now I will leave it be as is. Sometimes you have to work with what you've got, even if what you've got is a temperamental mini PC with an identity crisis.

Now that I know I do enjoy homelabbing, I have moved forward with purchasing the last computer parts I need for a basic home server before these tariffs skyrocket the prices even further. For that machine, I will most likely set up <a href="https://proxmox.com/en/" target="_blank">Proxmox</a>, and either set up <a href="https://casaos.zimaspace.com/" target="_blank">CasaOS</a> on the mini PC or set it up as a node in a Proxmox cluster to serve as a sandbox environment. 

--- 

I can think of a myriad of reasons why a home server would be beneficial to most:

- Your favorite movie/series is removed from one of the 20 streaming services that are constantly increasing prices? Buy only your favorite media and use <a href="https://jellyfin.org/" target="_blank">Jellyfin</a> or <a href="https://www.plex.tv/" target="_blank">Plex</a> and never worry about "content leaving next month" again!
- Need to back up your photos without paying monthly? <a href="https://immich.app/" target="_blank">Immich</a> or <a href="https://www.photoprism.app/" target="_blank">Photoprism</a> has your precious memories covered.
- Want to feel like a tech wizard while simultaneously developing a newfound appreciation for IT professionals? Start a homelab!

I hope that in the future our machines will be able to more easily maintain services running in the background, or cheaper/simpler solutions for home servers will be more accessible. Something like a cheap <a href="https://www.zimaspace.com/products/cube-personal-cloud?utm_source=head&utm_medium=menu" target="_blank">Zimacube</a>. There are already more self-hosted solutions available today than 10 years ago, as well as solutions like CasaOS and <a href="https://coolify.io/" target="_blank">Coolify</a> that make it easier to deploy, so hopefully we are moving in the right direction.

My next steps will be building out that home server, setting up better logging and visualizing of those logs, and setting up <a href="https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/" target="_blank">Cloudflare Tunnels</a> to sit in front of my reverse proxies for more security. Hopefully at some point I fix the mini PC, or at least discover what dark magic is causing its issues. Happy homelabbing!  

P.S. For more about the services I've explored homelabbing check out my <a href="https://github.com/SoyCarlos/homelab/" target="_blank">repo</a>. Feel free to star it, fork it, or judge my Docker configuration choices - all feedback welcome!
