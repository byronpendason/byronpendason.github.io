---
layout: default
---
    <textarea id='source' markdown={% if page.title != "Games Index" %}0 style='display:none`{% else %}1{% endif %}>
        {{ content }}
    </textarea>
{% if page.title != "Games Index" %}
    <div id='game' />
    <script src='js/ficdown.js'></script>
    <script>
      var player = new Ficdown({
        id: 'game',
        source: document.getElementById('source').value,
        scroll: true,
      });
      player.play();
    </script>
{% endif %}
