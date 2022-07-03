---
title: Welcome to Mīne Wyrtruman!
author: ByronTheFyrnsidere
permalink: /
---

This website is dedicated to ***Fyrnsidu***, a modern religion based upon the religion of the
pre-Christian Germanic tribes that settled in Britain in the fifth century of the common era.
These people, commonly known as the Anglo-Saxons, brought with them a religion that is both
similar to, yet distinct from, the religion of the pre-Christian Nordic peoples. Fyrnsidu is a
religion based upon the worship of the Anglo-Saxon gods, one's ancestors, and the wights (spirits)
of the land around us and in our homes. If you're curious about Fyrnsidu, the best resource to
learn more about it is [Fyrnsidu.faith](https://Fyrnsidu.faith). Feel free to check out this
websites as well, once your familiar with the basics.

## Recent Blog Posts

{% for post in site.posts | limit:3 %}

{% if post.layout == "post" %}

### [{{ post.title }}]({{ post.url }}) 

({{ post.date | date: "%B %-d, %Y"}}) 

Categories: *{{ post.categories | array_to_sentence_string}}*

{{ post.excerpt | truncatewords: 20 | "" }} [*Read more...*]({{ post.url }})

-----

{% endif %}

{% endfor %}
