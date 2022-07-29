---
title: Blog
author: Byron Pendason
excerpt: "Mīne Wyrtruman means My Roots in Old English. As a Fyrnsidere (Anglo-Saxon Heathen), the culture and religion of the ancient pre-Christian Anglo-Saxon peoples are the roots of my faith. I use the little that we know about them as a foundation upon which I build my religion."
permalink: /blog
---

{% for post in site.posts %}

{% if post.layout == "post" %}

### [{{ post.title }}]({{ post.url }}) 

{{ post.date | date: "%B %-d, %Y"}}

<h6>Categories: {% for category in page.categories %}<a href="/site_index#{{ category | slugify}}">{{ category | capitalize }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</h6>

{{ post.excerpt | strip_html | strip_newlines | truncatewords: 50 }}

-------

{% endif %}

{% endfor %}
