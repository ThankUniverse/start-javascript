var mot =(prompt("Encodez un mot pour avoir des informations sur lui:"));
	var longueurMot = mot.length;
	var minuscules = mot.toLowerCase();
	var majuscules = mot.toUpperCase();

function compterNbVoyelles(mot) {
	var nbVoyelles = 0;
	for (var i = 0; i < mot.length; i++) {
		var lettre = mot[i].toLowerCase();
		if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") || (lettre === "u") || (lettre === "y")) {
			nbVoyelles++;
		}
	}

}	
var nbVoyelles = compterNbVoyelles(mot);
console.log("Le mot " + mot + " contient " + longueurMot + " caractère(s)");
console.log("Il s'écrit en minuscules " + minuscules);
console.log("Il s'écrit en majuscules " + majuscules);
console.log("Il contient " + compterNbVoyelles(mot) + " voyelles");