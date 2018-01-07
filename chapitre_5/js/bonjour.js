function direBonjour(prenom, nom) {
	var message = "Bonjour, " + prenom + " " + nom + " !";
	return message;
}


var p =(prompt(prenom = "Veuillez encoder votre prénom:"));
var n =(prompt(nom = "Veuillez encoder votre nom:"));
alert(direBonjour(p, n));
