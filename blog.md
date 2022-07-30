---
title: Blog
author: Byron Pendason
permalink: /blog
sitemap:
  exclude: true
---

{% for post in site.posts %}

{% if post.layout == "post" %}

### [{{ post.title }}]({{ post.url }}) 

{{ post.date | date: "%B %-d, %Y"}}

<h6>Categories: {% for category in post.categories %}<a href="/site_index#{{ category | slugify}}">{{ category | capitalize }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</h6>

{{ post.excerpt | strip_html | strip_newlines | truncatewords: 50 }}

-------

{% endif %}

{% endfor %}
