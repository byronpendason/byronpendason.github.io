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

</select>

<div id="control" style="width: 100%; margin: 2px 0px; display: grid; gap: 4px; grid-template-columns: repeat(3, minmax(0, 1fr));"></div>

<div id="keyboard" style="width: 100%; margin: 2px 0px; display: grid; gap: 4px; grid-template-columns: repeat(10, minmax(0, 1fr));"></div>

</div>


<script>

const input = document.getElementById("input");

const keyboard = document.getElementById("keyboard");

const runeSelect = document.getElementById("runeSelect");

const control = document.getElementById("control");


input.style.fontFamily = "Junicode, serif";


const futhorc = "ᚠ ᚢ ᚦ ᚩ ᚱ ᚳ ᚷ ᚹ ᚻ ᚾ ᛁ ᛄ ᛇ ᛈ ᛉ ᛋ ᛏ ᛒ ᛖ ᛗ ᛚ ᛝ ᛟ ᛞ ᚪ ᚫ ᚣ ᛠ ᛡ ᛣ ᛤ ᚸ ᛢ ᛥ ᚴ ᛫ ᛬ ᛭".split(" ");

const elder = "ᚠ ᚢ ᚦ ᚫ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ ᛫ ᛬ ᛭".split(" ");

const long_branch = "ᚠ ᚢ ᚦ ᚬ ᚱ ᚴ ᚼ ᚾ ᛁ ᛅ ᛋ ᛏ ᛒ ᛘ ᛚ ᛦ ᛫ ᛬ ᛭".split(" ");

const short_twig = "ᚠ ᚢ ᚦ ᚭ ᚱ ᚴ ᚽ ᚿ ᛁ ᛆ ᛌ ᛐ ᛓ ᛙ ᛚ ᛧ ᛫ ᛬ ᛭".split(" ");



runeSelect.style.fontSize = "20px";

runeSelect.style.textAlign = "center";

runeSelect.style.fontFamily = "Junicode, serif";
runeSelect.addEventListener('change', updateKeyboard);

if (localStorage.getItem("runeSet")) {

	runeSelect.value = localStorage.getItem("runeSet");

}



const clearBtn = document.createElement('button');

clearBtn.innerText = "Clear Text";

clearBtn.style.width = "auto";

clearBtn.style.fontSize = "20px";

clearBtn.style.fontFamily = "Junicode, serif";
clearBtn.addEventListener('click', () => {

	input.value = "";

});

control.appendChild(clearBtn);



const copyBtn = document.createElement('button');

copyBtn.innerText = "Copy Text";

copyBtn.style.width = "auto";

copyBtn.style.fontSize = "20px";

copyBtn.style.fontFamily = "Junicode, serif";
copyBtn.addEventListener('click', copyToClipboard);

control.appendChild(copyBtn);



const backspace = document.createElement('button');

backspace.innerText = "⌫";

backspace.style.width = "auto";

backspace.style.fontSize = "18px";

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


document.onload = function(){
	document.getElementById("runetyper").scrollIntoView(true);
};
</script>

<p>RuneTyper is my gift to people who love or have an interest in runes! Whether you are interested in runes for religious reasons (for example, if you're a heathen or other variety of pagan), historical reasons (perhaps you are into historical reconstruction), or any other reason, I hope RuneTyper will be useful to you!</p>
