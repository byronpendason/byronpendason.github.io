---
title: Site Index
author: Byron Pendason
layout: page
permalink: /site_index
---

# Site Index

{% assign site_categories = site.categories | sort_natural: 'title' %}
{% for category in site_categories %}
{% capture category_name %}{{ category | first }}{% endcapture %}
{{ category | first }}
<!--
### {{ category_name }}

{% for post in site_categories[category_name] %}

- {{ post.title }}

{% endfor %} -->
{% endfor %}
