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
<div id="sitesList" style="border-style: dashed; padding: 0px;">
<h3>Fyrnsidu Sites</h3>
<input type="checkbox" style="padding: 0px; margin: 0px" id="fyrnsiduFaith" value="fyrnsidu.faith" checked><label style="padding: 0px; margin: 0px" for="fyrnsiduFaith">Fyrnsidu.faith</label><br>
<input type="checkbox" style="padding: 0px; margin: 0px" id="larhusFyrnsida" value="larhusfyrnsida.com" checked><label style="padding: 0px; margin: 0px" for="larhusFyrnsida">Larhus Fyrnsida</label><br>
<input type="checkbox" style="padding: 0px; margin: 0px" id="axeAndPlough" value="axeandplough.com" checked><label style="padding: 0px; margin: 0px" for="axeAndPlough">Of Axe and Plough</label><br>
<input type="checkbox" style="padding: 0px; margin: 0px" id="windInTheWorldtree" value="windintheworldtree.wordpress.com" checked><label style="padding: 0px; margin: 0px" for="windInTheWorldtree">Wind in the Worldtree</label><br>
<input type="checkbox" style="padding: 0px; margin: 0px" id="mineWyrtruman" value="minewyrtruman.com" checked><label style="padding: 0px; margin: 0px" for="mineWyrtruman">Mine Wyrtruman</label><br>
<input type="checkbox" style="padding: 0px; margin: 0px" id="seolforCwyllaHeorth" value="seolforcwyllaheorth.wordpress.com" checked><label style="padding: 0px; margin: 0px" for="seolforCwyllaHeorth">Seolfor Cwylla Heorþ</label>
<h3>Heathen Sites of Other Traditions</h3>
<input type="checkbox" style="padding: 0px; margin: 0px" id="ostriuwi" value="ostriuwi.wordpress.com/"><label style="padding: 0px; margin: 0px" for="ostriuwi">Ostriuwi (Old Saxon Heathenry)</label><br>
<input type="checkbox" style="padding: 0px; margin: 0px" id="theLongship" value="thelongship.net"><label style="padding: 0px; margin: 0px" for="theLongship">The Longship (Pan-Germanic)</label><br>
<input type="checkbox" style="padding: 0px; margin: 0px" id="ingwine" value="ingwine.org"><label style="padding: 0px; margin: 0px" for="ingwine">Ingwina Ferræden (Ingwine Heathenship)</label><br>
<h3>Other Resources</h3>
<input type="checkbox" style="padding: 0px; margin: 0px" id="bosworthToller" value="bosworthtoller.com"><label style="padding: 0px; margin: 0px" for="bosworthToller">Bosworth-Toller Online (Old English dictionary)</label>
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
</script>
