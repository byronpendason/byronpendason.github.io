---
layout: default
---

{% if page.title != "Games Index" %}

        {{ content }}

    <div id='game'></div>
    <script src='/js/ficdown.js'></script>
    <script>
      var player = new Ficdown({
        id: 'game',
        source: document.getElementById('source').value,
        scroll: true,
      });
      player.play();
    </script>

{% else %}

    {{ content }}

{% endif %}
