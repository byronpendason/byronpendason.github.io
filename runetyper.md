---
layout: page
title: RuneTyper
date: 2021-03-06 23:38
author: byronarn
permalink: /runetyper
comments: false
excerpt: "RuneTyper is my gift to people who love or have an interest in runes! Whether you are interested in runes for religious reasons (for example, if you're a heathen or other variety of pagan), historical reasons (perhaps you are into historical reconstruction), or any other reason, I hope RuneTyper will be useful to you!"
---

<h1 style="font-size: 64px; font-variant: small-caps; text-align: center; margin: 0px;">RuneTyper</h1>
<textarea id="input" type="text" style="width: 100%; height: 250px; font-size: 32px;"></textarea>
<select id="runeSelect" style="width: 100%; margin-top: 8px;">
	<option value="futhorc">Futhorc</option>
	<option value="elder">Elder Futhark</option>
	<option value="long-branch">Younger Futhark (Long Branch)</option>
	<option value="short-twig">Younger Futhark (Short Twig)</option>
</select>
<div id="control" style="width: 100%;  margin-top: 8px;"></div>
<div id="keyboard" style="width: 100%; height:50%;  margin-top: 8px; display: grid; gap: 8px;grid-template-columns: repeat(10, 8%); grid-template-rows: repeat(5, 4em);"></div>

<script>
const input = document.getElementById("input");
const keyboard = document.getElementById("keyboard");
const runeSelect = document.getElementById("runeSelect");
const control = document.getElementById("control");

const futhorc = "ᚠ ᚢ ᚦ ᚩ ᚱ ᚳ ᚷ ᚹ ᚻ ᚾ ᛁ ᛄ ᛇ ᛈ ᛉ ᛋ ᛏ ᛒ ᛖ ᛗ ᛚ ᛝ ᛟ ᛞ ᚪ ᚫ ᚣ ᛠ ᛡ ᛣ ᛤ ᚸ ᛢ ᛥ ᚴ ᛫ ᛬ ᛭".split(" ");
const elder = "ᚠ ᚢ ᚦ ᚫ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ ᛫ ᛬ ᛭".split(" ");
const long_branch = "ᚠ ᚢ ᚦ ᚬ ᚱ ᚴ ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ ᛘ ᛚ ᛦ ᛫ ᛬ ᛭".split(" ");
const short_twig = "ᚠ ᚢ ᚦ ᚭ ᚱ ᚴ ᚽ ᚿ ᛁ ᛆ ᛌ ᛐ ᛓ ᛙ ᛚ ᛧ ᛫ ᛬ ᛭".split(" ");

runeSelect.style.fontSize = "20px";
runeSelect.style.textAlign = "center";
runeSelect.addEventListener('change', updateKeyboard);

const clearBtn = document.createElement('button');
clearBtn.innerText = "Clear Text";
clearBtn.style.width = "31%";
clearBtn.style.fontSize = "20px";
clearBtn.addEventListener('click', () => {
	input.value = "";
});
control.appendChild(clearBtn);

const copyBtn = document.createElement('button');
copyBtn.innerText = "Copy Text";
copyBtn.style.width = "31%";
copyBtn.style.fontSize = "20px";
copyBtn.style.margin= " 0px 0px 0px 8px";
copyBtn.addEventListener('click', copyToClipboard);
control.appendChild(copyBtn);

const backspace = document.createElement('button');
backspace.innerText = "⌫";
backspace.style.width = "31%";
backspace.style.fontSize = "20px";
backspace.style.margin= " 0px 0px 0px 8px";
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
		default:
			keyboard.innerText = "There has been an error. Please let Byron know about this.";
			break;
	}
	
	// add runes to keyboard
	for (let i=0; i<runes.length; i++) {
		const button = document.createElement('button');
		button.innerText = runes[i];
		button.style.fontSize = "24px";
		button.addEventListener('click', () => {
			input.value += button.innerText;
		});
		keyboard.appendChild(button);
	}
	
	// add space key to keyboard
	const button = document.createElement('button');
	button.innerText = " ";
	button.style.fontSize = "32px";
	button.addEventListener('click', () => {
		input.value += " ";
	});
	keyboard.appendChild(button);
}
</script>

<!--
## Type Runes on your Android Phone or Windows PC!

**RuneTyper** is my gift to people who love or have an interest in runes! Whether you are interested in runes for religious reasons (for example, if you're a heathen or other variety of pagan), historical reasons (perhaps you are into historical reconstruction), or any other reason, I hope RuneTyper will be useful to you!

## How to use *RuneTyper*

When you first open the RuneTyper, you'll see a textbox and a bunch of buttons below it. When you click on a button with a rune on it, it will be inserted into the textbox. When you are done typing your runes, press/click "Copy to Clipboard" to copy the contents to your device's clipboard. You can now go to any other app/program that supports unicode (most text editors, web browsers, and social media apps should support unicode).

When you first open RuneTyper, you will see the *futhorc* (Anglo-Saxon) runes. You can press "Menu" to select any of the other rune sets. All the other buttons of the app should be self-explanatory.

## Keyboard Support

RuneTyper has keyboard support. If you have the Windows version, you can start typing on your keyboard as soon as you open the program. On the Android version, press the "Show System Keyboard", and your phone's on-screen keyboard will pop up. You can consult the following chart for which letter will give you which rune. Please note that capital and lowercase letters can give you different runes.

<figure class="wp-block-table aligncenter is-style-stripes"><table><tbody><tr><td class="has-text-align-center" data-align="center">Letter</td><td class="has-text-align-center" data-align="center">Futhorc</td><td class="has-text-align-center" data-align="center">Elder<br>Futhark</td><td class="has-text-align-center" data-align="center">Long<br>Branch</td><td class="has-text-align-center" data-align="center">Short<br>Twig</td></tr><tr><td class="has-text-align-center" data-align="center">q</td><td class="has-text-align-center" data-align="center">ᛢ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">w</td><td class="has-text-align-center" data-align="center">ᚹ</td><td class="has-text-align-center" data-align="center">ᚹ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">e</td><td class="has-text-align-center" data-align="center">ᛖ</td><td class="has-text-align-center" data-align="center">ᛖ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">E</td><td class="has-text-align-center" data-align="center">ᛇ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">r</td><td class="has-text-align-center" data-align="center">ᚱ</td><td class="has-text-align-center" data-align="center">ᚱ</td><td class="has-text-align-center" data-align="center">ᚱ</td><td class="has-text-align-center" data-align="center">ᚱ</td></tr><tr><td class="has-text-align-center" data-align="center">R</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">ᛦ</td><td class="has-text-align-center" data-align="center">ᛧ</td></tr><tr><td class="has-text-align-center" data-align="center">t</td><td class="has-text-align-center" data-align="center">ᛏ</td><td class="has-text-align-center" data-align="center">ᛏ</td><td class="has-text-align-center" data-align="center">ᛏ</td><td class="has-text-align-center" data-align="center">ᛐ</td></tr><tr><td class="has-text-align-center" data-align="center">T</td><td class="has-text-align-center" data-align="center">ᚦ</td><td class="has-text-align-center" data-align="center">ᚦ</td><td class="has-text-align-center" data-align="center">ᚦ</td><td class="has-text-align-center" data-align="center">ᚦ</td></tr><tr><td class="has-text-align-center" data-align="center">y</td><td class="has-text-align-center" data-align="center">ᚣ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">u</td><td class="has-text-align-center" data-align="center">ᚢ</td><td class="has-text-align-center" data-align="center">ᚢ</td><td class="has-text-align-center" data-align="center">ᚢ</td><td class="has-text-align-center" data-align="center">ᚢ</td></tr><tr><td class="has-text-align-center" data-align="center">U</td><td class="has-text-align-center" data-align="center">ᛠ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">i</td><td class="has-text-align-center" data-align="center">ᛁ</td><td class="has-text-align-center" data-align="center">ᛁ</td><td class="has-text-align-center" data-align="center">ᛁ</td><td class="has-text-align-center" data-align="center">ᛁ</td></tr><tr><td class="has-text-align-center" data-align="center">I</td><td class="has-text-align-center" data-align="center">ᛡ</td><td class="has-text-align-center" data-align="center">ᛇ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">o</td><td class="has-text-align-center" data-align="center">ᚩ</td><td class="has-text-align-center" data-align="center">ᛟ</td><td class="has-text-align-center" data-align="center">ᚬ</td><td class="has-text-align-center" data-align="center">ᚭ</td></tr><tr><td class="has-text-align-center" data-align="center">O</td><td class="has-text-align-center" data-align="center">ᛟ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">p</td><td class="has-text-align-center" data-align="center">ᛈ</td><td class="has-text-align-center" data-align="center">ᛈ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">a</td><td class="has-text-align-center" data-align="center">ᚪ</td><td class="has-text-align-center" data-align="center">ᚫ</td><td class="has-text-align-center" data-align="center">ᛅ</td><td class="has-text-align-center" data-align="center">ᛆ</td></tr><tr><td class="has-text-align-center" data-align="center">A</td><td class="has-text-align-center" data-align="center">ᚫ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">s</td><td class="has-text-align-center" data-align="center">ᛋ</td><td class="has-text-align-center" data-align="center">ᛊ</td><td class="has-text-align-center" data-align="center">ᛋ</td><td class="has-text-align-center" data-align="center">ᛌ</td></tr><tr><td class="has-text-align-center" data-align="center">S</td><td class="has-text-align-center" data-align="center">ᛥ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">d</td><td class="has-text-align-center" data-align="center">ᛞ</td><td class="has-text-align-center" data-align="center">ᛞ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">f</td><td class="has-text-align-center" data-align="center">ᚠ</td><td class="has-text-align-center" data-align="center">ᚠ</td><td class="has-text-align-center" data-align="center">ᚠ</td><td class="has-text-align-center" data-align="center">ᚠ</td></tr><tr><td class="has-text-align-center" data-align="center">g</td><td class="has-text-align-center" data-align="center">ᚷ</td><td class="has-text-align-center" data-align="center">ᚷ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">G</td><td class="has-text-align-center" data-align="center">ᚸ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">h</td><td class="has-text-align-center" data-align="center">ᚻ</td><td class="has-text-align-center" data-align="center">ᚺ</td><td class="has-text-align-center" data-align="center">ᚼ</td><td class="has-text-align-center" data-align="center">ᚽ</td></tr><tr><td class="has-text-align-center" data-align="center">j</td><td class="has-text-align-center" data-align="center">ᛄ</td><td class="has-text-align-center" data-align="center">ᛃ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">k</td><td class="has-text-align-center" data-align="center">ᛣ</td><td class="has-text-align-center" data-align="center">ᚲ</td><td class="has-text-align-center" data-align="center">ᚴ</td><td class="has-text-align-center" data-align="center">ᚴ</td></tr><tr><td class="has-text-align-center" data-align="center">K</td><td class="has-text-align-center" data-align="center">ᛤ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">l</td><td class="has-text-align-center" data-align="center">ᛚ</td><td class="has-text-align-center" data-align="center">ᛚ</td><td class="has-text-align-center" data-align="center">ᛚ</td><td class="has-text-align-center" data-align="center">ᛚ</td></tr><tr><td class="has-text-align-center" data-align="center">z</td><td class="has-text-align-center" data-align="center">ᚴ</td><td class="has-text-align-center" data-align="center">ᛉ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">x</td><td class="has-text-align-center" data-align="center">ᛉ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">c</td><td class="has-text-align-center" data-align="center">ᚳ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">v</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">b</td><td class="has-text-align-center" data-align="center">ᛒ</td><td class="has-text-align-center" data-align="center">ᛒ</td><td class="has-text-align-center" data-align="center">ᛒ</td><td class="has-text-align-center" data-align="center">ᛓ</td></tr><tr><td class="has-text-align-center" data-align="center">n</td><td class="has-text-align-center" data-align="center">ᚾ</td><td class="has-text-align-center" data-align="center">ᚾ</td><td class="has-text-align-center" data-align="center">ᚾ</td><td class="has-text-align-center" data-align="center">ᚿ</td></tr><tr><td class="has-text-align-center" data-align="center">N</td><td class="has-text-align-center" data-align="center">ᛝ</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td><td class="has-text-align-center" data-align="center">--</td></tr><tr><td class="has-text-align-center" data-align="center">m</td><td class="has-text-align-center" data-align="center">ᛗ</td><td class="has-text-align-center" data-align="center">ᛗ</td><td class="has-text-align-center" data-align="center">ᛘ</td><td class="has-text-align-center" data-align="center">ᛙ</td></tr><tr><td class="has-text-align-center" data-align="center">,</td><td class="has-text-align-center" data-align="center">᛭</td><td class="has-text-align-center" data-align="center">᛭</td><td class="has-text-align-center" data-align="center">᛭</td><td class="has-text-align-center" data-align="center">᛭</td></tr><tr><td class="has-text-align-center" data-align="center">.</td><td class="has-text-align-center" data-align="center">᛬</td><td class="has-text-align-center" data-align="center">᛬</td><td class="has-text-align-center" data-align="center">᛬</td><td class="has-text-align-center" data-align="center">᛬</td></tr><tr><td class="has-text-align-center" data-align="center">SPACE</td><td class="has-text-align-center" data-align="center">᛫</td><td class="has-text-align-center" data-align="center">᛫</td><td class="has-text-align-center" data-align="center">᛫</td><td class="has-text-align-center" data-align="center">᛫</td></tr></tbody></table></figure>>

Keyboard support is not available in Old English mode at this time.

## Where to get RuneTyper

<a rel="noreferrer noopener" href="https://play.google.com/store/apps/details?id=org.be1.runetyper" target="_blank">You can get RuneTyper on the Google Play Store!</a>
-->
