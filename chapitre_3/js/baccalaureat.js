var bac = Number(prompt("Encoder ici votre note d'examen :"));

if (bac < 10) {
	alert("Désolé vous n'avez pas assez travailler, vous êtes une merde, vous doubler votre année, allez faire carrière au quick");
} else if ((bac >= 10) && (bac < 12)) {
	alert("Vous passez votre année de justesse, il faudra lustrer l'égo de votre professeur l'année prochaine si vous espérez continuer !");
} else if ((bac >= 12) && (bac <= 20)) {
	alert("Vous avez réeussi votre année avec mention, vous êtes au top ! N'oubliez pas d'insulter vos camarades qui n'ons pas réeussi");
} else {
	alert("Vous êtes renvoyé car vous n'avez pas taper une valeur correcte ! Aller postulé a Bruxelles Propretée");
}
