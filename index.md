---
title: Fyrnsidic Life
author: ByronTheFyrnsidere
---

## Blog posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
