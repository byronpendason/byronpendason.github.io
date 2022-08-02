---
title: Test
layout: default
permalink: /test
sitemap:
  exclude: 'yes'
---

# jQuery .get()

<p id="demo"></p>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/JavaScript">
  $(document).ready(function() {
    $("demo").text = "Hello world!"
    $.get("http://jsonplaceholder.typicode.com/users", function(data, status){
      $("#demo").html = data;
    });
  });
</script>
