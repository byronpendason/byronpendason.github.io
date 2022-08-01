---
title: Test
layout: default
permalink: /test
sitemap:
  exclude: 'yes'
---

# JavaScript Fetch API
## The fetch() Method
<p id="demo">Fetch a file to change this text.</p>

<script>
$(document).ready(function() {
  getText("https://aa.usno.navy.mil/api/moon/phases/date?date=2022-05-03&nump=52");
}

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await JSON.parse(myObject);
  document.getElementById("demo").innerHTML = "Hello World!";
}
</script>
