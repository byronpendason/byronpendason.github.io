---
title: Fyrnsidic Life
author: ByronTheFyrnsidere
permalink: /
---

## Wes hal!

Welcome to *Mine Wyrtruman*!

## Blog posts

{% for post in site.posts %}

* [{{ post.title }}]({{ post.url }}) *{{ post.date  | date_to_string: "ordinal", "US" }}*

{% endfor %}
