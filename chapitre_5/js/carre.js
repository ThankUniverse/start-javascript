function carre(x) {
	var calcul = x * x;
	return calcul;
}


var nombre = 0;
while (nombre < 10) {
	console.log(carre(nombre)); // Doit afficher 0
	nombre++;
}