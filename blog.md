---
title: Blog
author: ByronTheFyrnsidere
permalink: /blog
---

{% for post in site.posts %}

{% if post.layout == "post" %}

## [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%B %-d, %Y"}}) *{{ post.categories | array_to_sentence_string}}*



{% endif %}

{% endfor %}
