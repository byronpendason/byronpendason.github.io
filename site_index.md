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

    <h3>{{ category_name | capitalize }}</h3>
    <ul>
        {% for post in site_categories[category_name] %}
        <li><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></li>
        {% endfor %}
    </ul>
{% endfor %}
