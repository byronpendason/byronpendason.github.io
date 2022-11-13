---
layout: default
---

    <textarea id='source' markdown= 0 style='display: none;'>
        {{ content }}
    </textarea>
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
