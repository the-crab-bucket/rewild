---
layout: post
title: "Setup Retrospective"
date: 2025-02-16 8:00:00 -0500
categories: jekyll update
author: evelyn
---

When Esti and I put re-wild together, it seemed like it was probably already pretty easy to get started and make your own website. And it was! All things considered, it's pretty smooth. I went from "Evelyn we should make a community blog" to "Come visit flinta.forum" in like a couple hours.

### **What is Re-wild?**

Esti's already explained this on our very similar looking [homepage](https://re-wild.ing/), but essentially the idea is a pretty bare-bones desktop app that serves as a very involved and particularly useful tutorial for self-hosting a blog. Theoretically, all you need to do is install our app, install docker, and set up your domain name with Cloudflare tunnels, and your site will be up and running. You can check out the source code [here](https://github.com/the-crab-bucket/rewild).

It's an Electron app that builds a Jekyll static site, serves it with nginx, then uses Cloudflare tunnels to share that with the public internet.

### **How it went**

While I figured out how to set up an Electron app and get it to run docker containers, Esti was learning how to set up Cloudflare tunnels, so I didn't really get a chance to see exactly what the process looks like. It turns out, setting up DNS is actually not that straightforward, and I didn't listen to Esti's advice. I went ahead and bought a domain name on Namecheap instead of Cloudflare because that's where I have all my other domains like [Evelyn Website](https://evelynwebsite.com/) and I saw a domain I liked on there.

Namecheap has some documentation for doing all this, and it really isn't that hard. You just replace the nameservers in your Namecheap dashboard with the ones Cloudflare gives you, and then you have to add a DNS record for your tunnel specifically. This last part tripped me up. Last thing I was missing was that I needed to specify what port the nginx server was listening on. Really not that hard!
