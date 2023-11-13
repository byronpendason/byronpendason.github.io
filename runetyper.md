---
layout: page
title: RuneTyper
date: 2021-03-06 23:38
author: byronarn
permalink: /runetyper
runes: true
excerpt: "RuneTyper is my gift to people who love or have an interest in runes! Whether you are interested in runes for religious reasons (for example, if you're a heathen or other variety of pagan), historical reasons (perhaps you are into historical reconstruction), or any other reason, I hope RuneTyper will be useful to you!"
---
<div id="runetyper" style="margin: 0px; padding: 0px; font-family:Junicode,serif">
	<h1 style="font-size: 64px; font-variant: small-caps; text-align: center; margin: 2px 0px;">RuneTyper</h1>
	<textarea id="input" type="text" style="width: 100%; height: 250px; font-size: 32px; margin: 2px 0px;"></textarea>
	<select id="runeSelect" style="width: 100%; font-size: 24px; margin: 2px 0px;">
		<option value="futhorc">Futhorc (Anglo-Saxon Runes)</option>
		<option value="elder">Elder Futhark</option>
		<option value="long-branch">Younger Futhark (Long Branch)</option>
		<option value="short-twig">Younger Futhark (Short Twig)</option>
		<option value="medieval">Medieval Runes</option>
	</select>
	<div id="control" style="width: 100%; margin: 2px 0px; display: grid; gap: 4px; grid-template-columns: repeat(4, minmax(0, 1fr));"></div>
	<div id="keyboard" style="width: 100%; margin: 2px 0px; display: grid; gap: 4px; grid-template-columns: repeat(10, minmax(0, 1fr));"></div>

<div id="help" style="display: none; position: absolute; top: 0; left: 0; background-color: #F6EDDC; padding: 8px; border-style: solid; margin: 8px;">
	<button onclick='javascript: help.style.display = "none";' style="float: right">X</button>
<h2>Keyboard Support</h2>
<p>Currently, only the Futhorc (Anglo-Saxon runes) and Elder Futhark supports keyboard support. Keyboard Support is <em>not</em> a rune converter. Each rune is represented by a key. The following table shows what key represents what rune. The two Younger Futhark rune sets are not supported by keyboard support, but when they are added, it'll be according to the table below.</p>
<p>To use keyboard support, just click in the textarea, and start typing. If you type a key that doesn't have a rune associated with it, a � will be outputted.</p>
<table style="width: 100%">
	<tbody>
		<tr>
			<td class="has-text-align-center" data-align="center">Letter</td>
			<td class="has-text-align-center" data-align="center">Futhorc</td>
			<td class="has-text-align-center" data-align="center">Elder<br>Futhark</td>
			<td class="has-text-align-center" data-align="center">Long<br>Branch</td>
			<td class="has-text-align-center" data-align="center">Short<br>Twig</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">q</td>
			<td class="has-text-align-center" data-align="center">ᛢ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">w</td>
			<td class="has-text-align-center" data-align="center">ᚹ</td>
			<td class="has-text-align-center" data-align="center">ᚹ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">e</td>
			<td class="has-text-align-center" data-align="center">ᛖ</td>
			<td class="has-text-align-center" data-align="center">ᛖ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">E</td>
			<td class="has-text-align-center" data-align="center">ᛇ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">r</td>
			<td class="has-text-align-center" data-align="center">ᚱ</td>
			<td class="has-text-align-center" data-align="center">ᚱ</td>
			<td class="has-text-align-center" data-align="center">ᚱ</td>
			<td class="has-text-align-center" data-align="center">ᚱ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">R</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">ᛦ</td>
			<td class="has-text-align-center" data-align="center">ᛧ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">t</td>
			<td class="has-text-align-center" data-align="center">ᛏ</td>
			<td class="has-text-align-center" data-align="center">ᛏ</td>
			<td class="has-text-align-center" data-align="center">ᛏ</td>
			<td class="has-text-align-center" data-align="center">ᛐ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">T</td>
			<td class="has-text-align-center" data-align="center">ᚦ</td>
			<td class="has-text-align-center" data-align="center">ᚦ</td>
			<td class="has-text-align-center" data-align="center">ᚦ</td>
			<td class="has-text-align-center" data-align="center">ᚦ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">y</td>
			<td class="has-text-align-center" data-align="center">ᚣ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">u</td>
			<td class="has-text-align-center" data-align="center">ᚢ</td>
			<td class="has-text-align-center" data-align="center">ᚢ</td>
			<td class="has-text-align-center" data-align="center">ᚢ</td>
			<td class="has-text-align-center" data-align="center">ᚢ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">U</td>
			<td class="has-text-align-center" data-align="center">ᛠ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">i</td>
			<td class="has-text-align-center" data-align="center">ᛁ</td>
			<td class="has-text-align-center" data-align="center">ᛁ</td>
			<td class="has-text-align-center" data-align="center">ᛁ</td>
			<td class="has-text-align-center" data-align="center">ᛁ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">I</td>
			<td class="has-text-align-center" data-align="center">ᛡ</td>
			<td class="has-text-align-center" data-align="center">ᛇ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">o</td>
			<td class="has-text-align-center" data-align="center">ᚩ</td>
			<td class="has-text-align-center" data-align="center">ᛟ</td>
			<td class="has-text-align-center" data-align="center">ᚬ</td>
			<td class="has-text-align-center" data-align="center">ᚭ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">O</td>
			<td class="has-text-align-center" data-align="center">ᛟ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">p</td>
			<td class="has-text-align-center" data-align="center">ᛈ</td>
			<td class="has-text-align-center" data-align="center">ᛈ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">a</td>
			<td class="has-text-align-center" data-align="center">ᚪ</td>
			<td class="has-text-align-center" data-align="center">ᚫ</td>
			<td class="has-text-align-center" data-align="center">ᛅ</td>
			<td class="has-text-align-center" data-align="center">ᛆ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">A</td>
			<td class="has-text-align-center" data-align="center">ᚫ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">s</td>
			<td class="has-text-align-center" data-align="center">ᛋ</td>
			<td class="has-text-align-center" data-align="center">ᛊ</td>
			<td class="has-text-align-center" data-align="center">ᛋ</td>
			<td class="has-text-align-center" data-align="center">ᛌ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">S</td>
			<td class="has-text-align-center" data-align="center">ᛥ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">d</td>
			<td class="has-text-align-center" data-align="center">ᛞ</td>
			<td class="has-text-align-center" data-align="center">ᛞ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">f</td>
			<td class="has-text-align-center" data-align="center">ᚠ</td>
			<td class="has-text-align-center" data-align="center">ᚠ</td>
			<td class="has-text-align-center" data-align="center">ᚠ</td>
			<td class="has-text-align-center" data-align="center">ᚠ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">g</td>
			<td class="has-text-align-center" data-align="center">ᚷ</td>
			<td class="has-text-align-center" data-align="center">ᚷ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">G</td>
			<td class="has-text-align-center" data-align="center">ᚸ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">h</td>
			<td class="has-text-align-center" data-align="center">ᚻ</td>
			<td class="has-text-align-center" data-align="center">ᚺ</td>
			<td class="has-text-align-center" data-align="center">ᚼ</td>
			<td class="has-text-align-center" data-align="center">ᚽ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">j</td>
			<td class="has-text-align-center" data-align="center">ᛄ</td>
			<td class="has-text-align-center" data-align="center">ᛃ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">k</td>
			<td class="has-text-align-center" data-align="center">ᛣ</td>
			<td class="has-text-align-center" data-align="center">ᚲ</td>
			<td class="has-text-align-center" data-align="center">ᚴ</td>
			<td class="has-text-align-center" data-align="center">ᚴ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">K</td>
			<td class="has-text-align-center" data-align="center">ᛤ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">l</td>
			<td class="has-text-align-center" data-align="center">ᛚ</td>
			<td class="has-text-align-center" data-align="center">ᛚ</td>
			<td class="has-text-align-center" data-align="center">ᛚ</td>
			<td class="has-text-align-center" data-align="center">ᛚ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">z</td>
			<td class="has-text-align-center" data-align="center">ᚴ</td>
			<td class="has-text-align-center" data-align="center">ᛉ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">x</td>
			<td class="has-text-align-center" data-align="center">ᛉ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">c</td>
			<td class="has-text-align-center" data-align="center">ᚳ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">v</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">b</td>
			<td class="has-text-align-center" data-align="center">ᛒ</td>
			<td class="has-text-align-center" data-align="center">ᛒ</td>
			<td class="has-text-align-center" data-align="center">ᛒ</td>
			<td class="has-text-align-center" data-align="center">ᛓ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">n</td>
			<td class="has-text-align-center" data-align="center">ᚾ</td>
			<td class="has-text-align-center" data-align="center">ᚾ</td>
			<td class="has-text-align-center" data-align="center">ᚾ</td>
			<td class="has-text-align-center" data-align="center">ᚿ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">N</td>
			<td class="has-text-align-center" data-align="center">ᛝ</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
			<td class="has-text-align-center" data-align="center">--</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">m</td>
			<td class="has-text-align-center" data-align="center">ᛗ</td>
			<td class="has-text-align-center" data-align="center">ᛗ</td>
			<td class="has-text-align-center" data-align="center">ᛘ</td>
			<td class="has-text-align-center" data-align="center">ᛙ</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">,</td>
			<td class="has-text-align-center" data-align="center">᛭</td>
			<td class="has-text-align-center" data-align="center">᛭</td>
			<td class="has-text-align-center" data-align="center">᛭</td>
			<td class="has-text-align-center" data-align="center">᛭</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">.</td>
			<td class="has-text-align-center" data-align="center">᛬</td>
			<td class="has-text-align-center" data-align="center">᛬</td>
			<td class="has-text-align-center" data-align="center">᛬</td>
			<td class="has-text-align-center" data-align="center">᛬</td>
		</tr>
		<tr>
			<td class="has-text-align-center" data-align="center">SPACE</td>
			<td class="has-text-align-center" data-align="center">᛫</td>
			<td class="has-text-align-center" data-align="center">᛫</td>
			<td class="has-text-align-center" data-align="center">᛫</td>
			<td class="has-text-align-center" data-align="center">᛫</td>
		</tr>
	</tbody>
</table>
</div>
</div>

<script>
document.body.onload = function() {
	// hide the header and footer
	document.getElementById("header").style.display = "none";
	document.getElementById("footer").style.display = "none";
	document.getElementById("runetyper").style.minHeight = window.innerHeight;
}

	// define page elements
	const input = document.getElementById("input");
	const keyboard = document.getElementById("keyboard");
	const runeSelect = document.getElementById("runeSelect");
	const control = document.getElementById("control");
	const help = document.getElementById("help");
	
	input.addEventListener("keyup", function(event) {
		input.value = convert();
	});
	input.placeholder = "ᚹᛖᛋ᛫ᚻᚪᛚ᛬";
	
	//set fonts
	input.style.fontFamily = "Junicode, serif";
	
	// define rune sets
	const futhorc = "ᚠ ᚢ ᚦ ᚩ ᚱ ᚳ ᚷ ᚹ ᚻ ᚾ ᛁ ᛄ ᛇ ᛈ ᛉ ᛋ ᛏ ᛒ ᛖ ᛗ ᛚ ᛝ ᛟ ᛞ ᚪ ᚫ ᚣ ᛠ ᛡ ᛣ ᛤ ᚸ ᛢ ᛥ ᚴ ᛫ ᛬ ᛭".split(" ");
	const elder = "ᚠ ᚢ ᚦ ᚫ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ ᛫ ᛬ ᛭".split(" ");
	const long_branch = "ᚠ ᚢ ᚦ ᚬ ᚱ ᚴ ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ ᛘ ᛚ ᛦ ᛫ ᛬ ᛭".split(" ");
	const short_twig = "ᚠ ᚢ ᚦ ᚭ ᚱ ᚴ ᚽ ᚿ ᛁ ᛆ ᛌ ᛐ ᛓ ᛙ ᛚ ᛧ ᛫ ᛬ ᛭".split(" ");
	const medieval = "ᛆ ᛒ ᛍ ᛑ ᛂ ᚠ ᚵ ᚼ ᛁ ᚴ ᛚ ᛘ ᚿ ᚮ ᛔ ᛩ ᚱ ᛌ ᛐ ᚢ ᚡ ᛪ ᛦ ᛎ ᚦ ᚧ ᛅ ᚯ ᛫ ᛬ ᛭".split(" ");
	let allRunes = [...new Set([...futhorc, ...elder, ...long_branch, ...short_twig, ...medieval])];
	//allRunes = [...new Set(allRunes)];
	let runes = [];
	
	runeSelect.style.fontSize = "20px";
	runeSelect.style.textAlign = "center";
	runeSelect.style.fontFamily = "Junicode, serif";
	runeSelect.addEventListener('change', updateKeyboard);
	
	if (localStorage.getItem("runeSet")) {
		runeSelect.value = localStorage.getItem("runeSet");
	}
	
	// define buttons
	const clearBtn = document.createElement('button');
	clearBtn.innerText = "Clear";
	clearBtn.style.width = "auto";
	clearBtn.style.height = "2em";
	clearBtn.style.fontSize = "20px";
	clearBtn.style.fontFamily = "Junicode, serif";
	clearBtn.addEventListener('click', () => {
		input.value = "";
	});
	control.appendChild(clearBtn);
	
	const copyBtn = document.createElement('button');
	copyBtn.innerText = "Copy";
	copyBtn.style.width = "auto";
	copyBtn.style.height = "2em";
	copyBtn.style.fontSize = "20px";
	copyBtn.style.fontFamily = "Junicode, serif";
	copyBtn.addEventListener('click', copyToClipboard);
	control.appendChild(copyBtn);
	
	const helpBtn = document.createElement('button');
	helpBtn.innerText = "Help";
	helpBtn.style.width = "auto";
	helpBtn.style.height = "2em";
	helpBtn.style.fontSize = "20px";
	helpBtn.style.fontFamily = "Junicode, serif";
	helpBtn.addEventListener('click', function () {
		help.style.display = "block";
});
	control.appendChild(helpBtn);
	
	const backspace = document.createElement('button');
	backspace.innerText = "⌫";
	backspace.style.width = "auto";
	backspace.style.height = "2em";
	backspace.style.fontSize = "20px";
	backspace.style.fontFamily = "Junicode, serif";
	backspace.addEventListener('click', () => {
		input.value = input.value.slice(0, -1);
	});
	control.appendChild(backspace);
	
	updateKeyboard();
	
	function copyToClipboard() {
		let text = input.value;
		input.select();
		input.setSelectionRange(0, 99999);
		document.execCommand('copy');
		input.blur();
	}
	
	function updateKeyboard() {
		// clear keyboard
		keyboard.innerHTML = "";	
	
		// get rune set
		let runeSet = runeSelect.value;
		switch (runeSet) {
			case "futhorc":
				runes = futhorc;
				break;
			case "elder":
				runes = elder;
				break;
			case "long-branch":
				runes = long_branch;
				break;
			case "short-twig":
				runes = short_twig;
				break;
			case "medieval":
				runes = medieval;
				break;
			default:
				keyboard.innerText = "There has been an error. Please let Byron know about this.";
				break;
		}
	
		localStorage.setItem("runeSet", runeSet);	
	
		// add runes to keyboard
		for (let i=0; i<runes.length; i++) {
			const button = document.createElement('button');
			button.innerText = runes[i];
			button.style.fontSize = "24px";
			button.style.height = "3em";
			button.style.fontFamily = "Junicode, serif";
			button.addEventListener('click', () => {
				input.value += button.innerText;
			});
			keyboard.appendChild(button);
		}
	
		// add space key to keyboard
		const button = document.createElement('button');
		button.innerText = "␣";
		button.style.fontSize = "24px";
		button.style.fontFamily = "Junicode, serif";
		button.addEventListener('click', () => {
			input.value += " ";
		});
	
		keyboard.appendChild(button);
	}
	
	function convert(text = -1) {
		if (text == -1) {
			text = input.value;
		}
		sets = "futhorc elder".split(" ");
		if (!sets.includes(runeSelect.value)) {
			return;
		}
		
		let chars = [];
		switch (runeSelect.value) {
			case 'futhorc':
				chars = "f u T o r c g w h n i j E p x s t b e m l N O d a A y U I k G K q S z".split(" ");
				runes = futhorc;
				break;
			case 'elder':
				chars = "f u T a r k g w h n i j I p z s t b e m l N d o".split(" ");
				runes = elder;
				break;
			default:
				break;
		}
		chars.push(" ");
		chars.push(".");
		chars.push(",");
		
		let result = "";	
		for (let char of text) {
			if (chars.includes(char)) {
				let index = chars.indexOf(char);
				result += runes[index];
			} else if (allRunes.includes(char) || char == "\n") {
				result += char;
			} else {
				result += "�";
			}
		}
		return result;
	}
</script>
