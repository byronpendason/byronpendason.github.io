---
title: Blog
author: ByronTheFyrnsidere
permalink: /blog
---

{% for post in site.posts %}

{% if post.layout == "post" %}

### [{{ post.title }}]({{ post.url }}) 

({{ post.date | date: "%B %-d, %Y"}}) 

Categories: *{{ post.categories | array_to_sentence_string}}*

{{ post.excerpt | strip_html | strip_newlines | truncatewords: 50 }}
----- 

{% endif %}

{% endfor %}
