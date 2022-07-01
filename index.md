---
title: Blog
author: ByronTheFyrnsidere
permalink: /
---

{% for post in site.posts %}

{% if page.title != "" %}
## [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%B %-d, %Y"}})
{% endif %}

{{ post.excerpt }}
{% endfor %}
