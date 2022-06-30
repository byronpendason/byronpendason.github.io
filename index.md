---
title: Home
author: ByronTheFyrnsidere
permalink: /
---

## Wes hal!

{{ site.description }}

## Blog posts

{% for post in site.posts %}

[{{ post.title }}]({{ post.url }}) *{{ post.date  | date_to_string: "ordinal", "US" }}*

{% endfor %}
