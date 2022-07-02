---
title: Blog
author: ByronTheFyrnsidere
permalink: /
---

{% for post in site.posts %}

{% if post.layout == "post" %}

## [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%B %-d, %Y"}}) 

**Categories:** | {{% for tag in page.categories %} {{tag}} |{% endfor %}

{% endif %}

{% endfor %}
