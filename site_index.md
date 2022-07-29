---
title: Site Index
author: Byron Pendason
layout: page
permalink: /site_index
---

# Site Index

{% assign categories = site.categories | sort %}

## Categories

{% for category in categories %}
{% assign category_name = category | first %}
- [{{ category_name | capitalize }}](#{{ category_name | slugify }})
{% endfor %}
* * *
## All Blog Posts (in Alphabetic order)
{% assign posts = site.posts | sort: "title" %}
{% for post in posts %}
- [{{ post.title }}]({{post.url}})
{% endfor %}
{% for category in categories %}

* * *

{% assign category_name = category | first %}

<h2 id="{{ category_name | slugify }}">{{ category_name | capitalize }}</h2>

{% for post in site.categories[category_name] %}

- [{{ post.title }}]({{post.url}})

{% endfor %}
{% endfor %}
