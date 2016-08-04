//Created by codeGenerator.com
function classStats(){
if(document.getElementById("knight").checked= true){
	var health = "100";
	var mana = "50";
	var dexterity = "75";
	var intelligence = "25";

	document.getElementById("health").value = health;
	document.getElementById("mana").value = mana;
	document.getElementById("dexterity").value = dexterity;
	document.getElementById("intelligence").value = intelligence;
	}
}
function wizardStats(){
if(document.getElementById("wizard").checked = true){
	var health = "75";
	var mana = "100";
	var dexterity = "25";
	var intelligence = "100";

	document.getElementById("health").value = health;
	document.getElementById("mana").value = mana;
	document.getElementById("dexterity").value = dexterity;
	document.getElementById("intelligence").value = intelligence;

	}
}
function archerStats(){
if(document.getElementById("archer").checked = true){
	var health = "100";
	var mana = "25";
	var dexterity = "50";
	var intelligence = "25";

	document.getElementById("health").value = health;
	document.getElementById("mana").value = mana;
	document.getElementById("dexterity").value = dexterity;
	document.getElementById("intelligence").value = intelligence;

	}
}
function thiefStats(){
if(document.getElementById("thief").checked = true){
	var health = "100";
	var mana = "25";
	var dexterity = "50";
	var intelligence = "25";

	document.getElementById("health").value = health;
	document.getElementById("mana").value = mana;
	document.getElementById("dexterity").value = dexterity;
	document.getElementById("intelligence").value = intelligence;

	}
}

function genderChoice(){
	if(document.getElementById("male").checked = true){
		document.getElementById("image").style.display = "block";
		document.getElementById("image").src = "images/knight.png";}

	else if(document.getElementById("knight").checked = true && document.getElementById("female").checked = true){
		document.getElementById("image").style.display = "block";
		document.getElementById("image").src = "images/knightF.png";}

	else if(document.getElementById("wizard").checked = true && document.getElementById("male").checked = true){
		document.getElementById("image").style.display = "block";
		document.getElementById("image").src = "images/wizardM.png";}

	else if(document.getElementById("wizard").checked = true && document.getElementById("female").checked = true){
		document.getElementById("image").style.display = "block";
		document.getElementById("image").src = "images/wizardF.png";}
}
