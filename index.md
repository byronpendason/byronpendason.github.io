---
title: Blog
author: ByronTheFyrnsidere
permalink: /
---

{% for post in site.posts %}
# [{{ post.title }}]({{ post.url }})

## Posted {{ post.date | date: "%B %-d, %Y"}}

{{ post.excerpt }}
{% endfor %}
