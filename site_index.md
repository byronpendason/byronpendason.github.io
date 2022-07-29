---
title: Site Index
author: Byron Pendason
layout: page
permalink: /site_index
---

# Site Index

{% assign categories = site.categories | sort_natural %}
{% for category in categories %}
{% assign category_name = category | first %}

### {{ category_name | capitalize }}

{% for post in site.categories[category_name] %}

- [{{ post.title }}]({{post.url}})

{% endfor %}
{% endfor %}
