---
title: Home
author: ByronTheFyrnsidere
permalink: /
---

## Wes hal and welcome!

*Mīne Wyrtruman* means *My Roots* in Old English. As a Fyrnsidere (Anglo-Saxon Heathen), the culture and religion of the ancient pre-Christian Anglo-Saxon peoples are the roots of my faith. I use the little that we know about them as a foundation upon which I build my religion.

# Recent Blog Posts

{% for post in site.posts limit:3 %}
## [{{ post.title }}]({{ post.url }})

### {{ post.date | date: "%B %-d, %Y"}}

{{ post.excerpt }}
{% endfor %}
