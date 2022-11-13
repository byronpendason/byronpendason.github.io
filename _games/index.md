---
title: Games Index
exclude: yes
---

{% for game in games %}

{% if game.exclude != "yes" %}- [{{game.title}}]({{game.url}}){% endif %}

{% endfor %}
