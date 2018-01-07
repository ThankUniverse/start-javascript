var nombre =Number(prompt("Entrez le numéro d'un mois :"));


	if ((nombre == 2) && (nombre < 13)){
		alert("Ce mois contient 28 jours");
	} else if ((nombre%2 == 0) && (nombre < 13)){  	//résultat = nombre pair
		alert("Ce mois contient 30 jours");
	} else if ((nombre%2 <= 1) && (nombre < 13)){   //résultat = nombre impair
		alert("Ce mois contient 31 jours");
	} else {
		alert("Valeur incorrecte")
	}
