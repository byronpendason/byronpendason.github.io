---
layout: default
---

{% if page.title != "Games Index" %}

    <textarea id="source" style="display: none;" markdown=0>

        {{ content }}

    </textarea>
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
