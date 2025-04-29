---
title: "Home Lab Adventures: The Importance of Backup Access"
publishDate: 4/28/25
updatedDate: 4/28/25
tags:
  - homelab
---

As I shared in my [last post](/blog/adventures-in-homelabbing), I've recently gotten into homelabbing. Here's what's happened since then:

* I've built a new home server using a spare Ryzen 7 3700X and a GTX 1060. If you want to see the full parts list, check it out on [PCPartPicker](https://pcpartpicker.com/user/Ethoss/saved/gp3QGX).
* I've replaced Ubuntu Server on my Lenovo M715q mini PC with Debian, and since then it hasn't crashed once. (Score!)
* I've added Adguard Home as an add-on to Home Assistant running on my Raspberry Pi 5.

## The Mishap

I've been working on connecting my services to my domains on my local network using Nginx Proxy Manager and Adguard Home's DNS Rewrites. My goal was to have Home Assistant accessible through something like `hass.example.com`. In the process, I added an HTTP block with proxy hosts in Home Assistant's `configuration.yaml`.

Well, once I restarted the service, I completely lost connection to Home Assistant's web UI. Some services were still running—for example, the add-ons (specifically Adguard Home) were still accessible via port 3000. But Home Assistant itself was inaccessible through the web UI, and its integrations weren't functioning.

## The Rescue Operation

Unfortunately, I had neglected to set up SSH access beforehand. After wrangling a weird Frankenstein of daisy-chained dongles to connect the Pi to a portable monitor, I was finally able to get video output. After some further internet sleuthing, I managed to navigate the Home Assistant shell and remove my changes to `configuration.yaml`.

## The Lesson

Always have a backup plan for accessing your devices! This means:
* Set up SSH connections in advance
* Have a plan for easy video output—either a portable monitor (any cheap one online will do) or a KVM switch
  * The [JetKVM](https://jetkvm.com/) is great, but due to the ongoing tariff situation, they're no longer shipping to the U.S. for now
  * The [GL.iNet Comet](https://www.gl-inet.com/products/gl-rm1/) may be a good alternative

Don't make my mistake—prepare your escape routes before you need them!
