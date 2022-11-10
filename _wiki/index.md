---
title: Index
layout: default
---

# Welcome to the *Mine Wyrtruman Wiki*!

In the *Mine Wyrtruman Wiki*, you will find pages for different things of importance for Fyrnsidu. Feel free to browse the pages, and contact me if you'd like to help!

## Pages

{% for page in site.wiki %}

{% if page.title != "Index" %}- [{{page.title}}]({{page.url}}){% endif %}

{% endfor %}
