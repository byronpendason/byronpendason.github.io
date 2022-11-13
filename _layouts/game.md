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

      $("#footer").html('<p>This game was written using <a href="https://www.ficdown.com">Ficdown</a>. Displayed on this page using <a href="https://github.com/rudism/ficdown.js/">Ficdown.js</a>.</p>');
    </script>

{% else %}

    {{ content }}

{% endif %}
