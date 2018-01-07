/* function direBonjour() {
	console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");

//Autre méthode pour les fonctions
function direBonjour() {
	return "Bonjour !";
}

console.log("Début du programme");
var resultat = direBonjour();
console.log(resultat);
console.log("Fin du programme"); */

// Message de bienvenue personnalisé 
function direBonjour(prenom) {
	var message = "Bonjour, " + prenom + " !";
	return message;
}

console.log(direBonjour("Baptiste"));
console.log(direBonjour("Sophie"));