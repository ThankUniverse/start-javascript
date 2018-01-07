var nombre1 = Number(prompt("Insérer le nombre 1 :"));
var nombre2 = Number(prompt("Insérer le nombre 2 :"));

if (nombre1 > nombre2) {
	console.log (nombre1 + " est plus grand que " + nombre2);	
} else if (nombre1 < nombre2) {
	console.log (nombre1 + " est plus petit que " + nombre2);
} else if (nombre1 === nombre2) {
	console.log (nombre1 + " est égal à " + nombre2);	
} else {
	console.log ("Veuillez encoder une valeur correcte !");
}