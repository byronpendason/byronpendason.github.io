---
title: Site Index
author: Byron Pendason
layout: page
permalink: /site_index
---

# Site Index
{% assign site_categories = site.categories | sort_natural %}
{% for category in site_categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">{{ category_name | capitalize }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site_categories[category_name] %}
    <article class="archive-item">
- <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
