/* Condition 

var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
	console.log(nombre + " est positif");
} else { // nombre <= 0
	if (nombre < 0) {
		console.log(nombre + " est négatif");
	} else { // nombre === 0
		console.log(nombre + " est nul");
	}
}
*/

/* // Programme qui propose en fonction du temps comment s'habiller ?

var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
	console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
	console.log("Sortez en pull.");
} else if (meteo === "pluie") {
	console.log("Sortez en blouson");
} else if (meteo === "neige") {
	console.log("Restez au chaud à la maison.");
} else {
	console.log("Je n'ai pas compris !")
}

*/
// Le même programme utilisant l'instruction javascript switch
var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
	console.log("Sortez en t-shirt.");
	break;
case "vent":
	console.log("Sortez en pull.");
	break;
case "pluie":
	console.log("Sortez en blouson.");
	break;
case "neige":
	console.log("Je n'ai pas compris !");
}