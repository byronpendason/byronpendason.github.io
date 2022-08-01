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
  fetch('http://jsonplaceholder.typicode.com/users').then(function(response) {
  // response.json() returns a promise, use the same .then syntax to work with the results
  response.json().then(function(users){
    // users is now our actual variable parsed from the json, so we can use it
    users.forEach(function(user){
      console.log(user.name)
    });
  });
}).catch(err => console.error(err));
</script>
