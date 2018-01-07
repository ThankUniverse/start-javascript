var heures = (prompt("Entrez les heures :"));
var minutes = (prompt("Entrez les minutes :"));
var secondes = (prompt("Entrez les secondes :"));

	if (secondes < 59) {
		secondes = secondes;
	} else if (secondes = 59) {
		secondes = 0;
	} else if (secondes = 0) {
		secondes = 00;
	}

	if (minutes < 59) {
		minutes++;
	} else if ((secondes === 59) && (minutes === 59)) {
		minutes--;
	} else if (minutes = 59) {
		heures++;
		minutes = 0;
	}

	if (heures < 23) {
		heures = heures;
	} else if ((heures === 0) || (heures === 00)) {
		heures = 00;
	}

	alert("Dans 1 minute, il sera " + heures + "h" + minutes + " minutes " + secondes + " secondes ");
