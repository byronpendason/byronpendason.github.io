---
title: Blog
author: ByronTheFyrnsidere
permalink: /
---

{% for post in site.posts %}

{% if post.layout == "post" %}

## [{{ post.title }}]({{ post.url }}) ({{ post.date | date: "%B %-d, %Y"}}) *Categories: {{ post.categories | array_to_sentence_string}}*



{% endif %}

{% endfor %}
