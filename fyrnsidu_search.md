---
title: Fyrnsidu Search
author: Byron Pendason
layout: page
permalink: /fyrnsidu_search
description: Search the websites of Fyrnsideras and sister branches of Heathenry!
excerpt: Search the websites of Fyrnsideras and sister branches of Heathenry!
---

<h1>Fyrnsidu Search</h1>
<div id="searchBar" style="margin: 12px auto;">
<input type="text" id="search" style="width:66%;font-size: 2em;border-radius:25px;padding-left:25px;"><button id="searchSubmit" style="font-size: 2em;border-radius:25px;padding-left:15px;padding-right:15px;margin-left: 8px;">&#128269;</button>
</div>

<h2>Sites to Search</h2>
<div id="sitesList">
<h3>Fyrnsidu Sites</h3>
<label for="fyrnsiduFaith"> <input type="checkbox" id="fyrnsiduFaith" value="fyrnsidu.faith" checked> Fyrnsidu.faith </label><br>
<label for="larhusFyrnsida"> <input type="checkbox" id="larhusFyrnsida" value="larhusfyrnsida.com" checked> Larhus Fyrnsida </label><br>
<label for="axeAndPlough"> <input type="checkbox" id="axeAndPlough" value="axeandplough.com" checked> Of Axe and Plough </label><br>
<label for="windInTheWorldtree"> <input type="checkbox" id="windInTheWorldtree" value="windintheworldtree.wordpress.com" checked> Wind in the Worldtree </label><br>
<label for="mineWyrtruman"> <input type="checkbox" id="mineWyrtruman" value="minewyrtruman.com" checked> Mine Wyrtruman </label><br>
<input type="checkbox" id="seolforCwyllaHeorth" value="seolforcwyllaheorth.wordpress.com" checked><label for="seolforCwyllaHeorth"> Seolfor Cwylla Heorþ</label><br>
<input type="checkbox" id="forthweard" value="forthweard.blog" checked><label for="forthweard">Forþ-weard</label>

<h3>Heathen Sites of Other Traditions</h3>
<label for="ostriuwi"><input type="checkbox" id="ostriuwi" value="ostriuwi.wordpress.com/"> Ostriuwi (Old Saxon Heathenry)</label><br>
<label for="theLongship"><input type="checkbox" id="theLongship" value="thelongship.net"> The Longship (Pan-Germanic)</label><br>
<label for="ingwine"><input type="checkbox" id="ingwine" value="ingwine.org"> Ingwina Ferræden (Ingwine Heathenship)</label><br>
<h3>Other Resources</h3>
<label for="bosworthToller"><input type="checkbox" id="bosworthToller" value="bosworthtoller.com"> Bosworth-Toller Online (Old English dictionary)</label>
</div>
<br>
<div>
<a href="javascript:selectAll()">Select all</a> | <a href="javascript:unselectAll()">Unselect all</a>
</div>

<script>
const search = document.getElementById("search");
const btn = document.getElementById("searchSubmit");
const sites = document.getElementById("sitesList");

btn.addEventListener('click', function(e) {
	let text = search.value.toLowerCase();
	text = text.replace(" ", "+") + "+";
	let checkboxes = sites.getElementsByTagName("input");
	let websites = [];
	for (check of checkboxes) {
		if (check.checked)
			websites.push("site%3A"+check.value);
	}
	
	let url = "https://www.google.com/search?q=" + text + websites.join("+OR+");
	//console.log(url);
	window.location.href = url;
});

function selectAll() {
	let checkboxes = sites.getElementsByTagName("input");
	
	for (check of checkboxes) {
		check.checked = true;
	}
}

function unselectAll() {
	let checkboxes = sites.getElementsByTagName("input");
	
	for (check of checkboxes) {
		check.checked = false;
	}
}
</script>
