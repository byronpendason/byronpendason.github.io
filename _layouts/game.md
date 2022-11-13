---
layout: default
---

{% if page.title != "Games Index" %}

        {{ content }}

    <div id='game'></div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src='/js/ficdown.js'></script>
    <script>
      var player = new Ficdown({
        id: 'game',
        source: document.getElementById('source').value,
        scroll: true,
      });
      player.play();

      $("#footer").html('<p>Story © 2022 Byron Pendason. This game was written using <a href="https://www.ficdown.com">Ficdown</a>. The story is displayed on this page using <a href="https://github.com/rudism/ficdown.js/">Ficdown.js</a>.</p>');
    </script>

{% else %}

    {{ content }}

{% endif %}
