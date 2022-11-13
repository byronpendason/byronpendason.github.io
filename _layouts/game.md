---
layout: default
---

{% if page.title != "Games Index" %}
    <textarea markdown=0 id="source" style='display:none`>
        {{ content }}
    </textarea>
    <div id='game' />
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
