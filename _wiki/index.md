---
title: Index
layout: default
---

# Welcome to the Mine Wyrtruman wiki!

## Pages

{% for page in site.wiki %}
- [{{page.title}}]({{page.url}})
{% endfor %}
