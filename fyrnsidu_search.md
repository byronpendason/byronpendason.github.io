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
<div id="sites">
<h2>Sites to Search</h2>
<div id="sitesList">
<h3>Fyrnsidu Sites</h3>
<input type="checkbox" id="fyrnsiduFaith" value="fyrnsidu.faith" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;" checked><label style="display: inline-block" for="fyrnsiduFaith">Fyrnsidu.faith</label><br>
<input type="checkbox" id="larhusFyrnsida" value="larhusfyrnsida.com" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;" checked><label style="display: inline-block" for="larhusFyrnsida">Larhus Fyrnsida</label><br>
<input type="checkbox" id="axeAndPlough" value="axeandplough.com" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;" checked><label style="display: inline-block" for="axeAndPlough">Of Axe and Plough</label><br>
<input type="checkbox" id="windInTheWorldtree" value="windintheworldtree.wordpress.com" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;" checked><label style="display: inline-block" for="windInTheWorldtree">Wind in the Worldtree</label><br>
<input type="checkbox" id="mineWyrtruman" value="minewyrtruman.com" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;" checked><label style="display: inline-block" for="mineWyrtruman">Mine Wyrtruman</label><br>
<input type="checkbox" id="seolforCwyllaHeorth" value="seolforcwyllaheorth.wordpress.com" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;" checked><label style="display: inline-block" for="seolforCwyllaHeorth">Seolfor Cwylla Heorþ</label>
<h3>Heathen Sites of Other Traditions</h3>
<input type="checkbox" id="ostriuwi" value="ostriuwi.wordpress.com/" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;"><label style="display: inline-block" for="ostriuwi">Ostriuwi (Old Saxon Heathenry)</label><br>
<input type="checkbox" id="theLongship" value="thelongship.net" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;"><label style="display: inline-block" for="theLongship">The Longship (Pan-Germanic)</label><br>
<input type="checkbox" id="ingwine" value="ingwine.org" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;"><label style="display: inline-block" for="ingwine">Ingwina Ferræden (Ingwine Heathenship)</label><br>
<h3>Other Resources</h3>
<input type="checkbox" id="bosworthToller" value="bosworthtoller.com" style="margin-left: 1em; margin-right: 1em; padding-left: 0px; padding-right: 0px;"><label style="display: inline-block" for="bosworthToller">Bosworth-Toller (Old English dictionary)</label>
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
