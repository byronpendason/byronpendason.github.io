---
title: Blog
author: ByronTheFyrnsidere
permalink: /
---

{% for post in site.posts %}

{% unless post.title == "" %}
## [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%B %-d, %Y"}})
{% endunless %}

{{ post.excerpt }}
{% endfor %}
