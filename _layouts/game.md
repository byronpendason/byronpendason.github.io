---
layout: default
---
    <textarea id='source' markdown={% if page.title != "Index" %}0{% else %}1 style='display:none'{% endif %}>
        {{ content }}
    </textarea>
{% if page.title != "Index" %}
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
