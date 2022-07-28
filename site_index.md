---
title: Site Index
author: Byron Pendason
layout: page
permalink: /site_index
---

# Site Index
{% assign site_categories = site.categories | sort_natural %}
{% for category in site_categories %}
{% capture category_name %}{{ category | first }}{% endcapture %}

### {{ category_name | capitalize }}
{% for post in site_categories[category_name] %}
- [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
{% endfor %}
{% endfor %}
