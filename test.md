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

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/JavaScript">
  $(document).ready(function() {
    $.get("http://jsonplaceholder.typicode.com/users", function(data, status){
      $("#demo").html = data;
    });
  });
</script>
