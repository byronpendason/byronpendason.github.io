---
title: Games Index
exclude: yes
---

# Games Index

{% for game in site.games %}

{% unless game.exclude %}
- [{{game.title}}]({{game.url}}) {% if completed %}(***Completed!***)
{% endif %}
{% endunless %}

{% endfor %}
