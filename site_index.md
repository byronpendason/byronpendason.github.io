---
title: Site Index
author: Byron Pendason
layout: page
permalink: /site_index
---

# Site Index

{% for category in site.categories %}
{% capture category_name %}{{ category | first }}{% endcapture %}

### {{ category_name }}
{% for post in site.categories[category_name] %}
- [{{post.title}}]({{ site.baseurl }}{{ post.url }})
{% endfor %}
{% endfor %}
