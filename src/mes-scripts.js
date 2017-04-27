function changerLiensSociauxPourImage()
{
	var listeNomLiens = document.querySelectorAll("#liens-sociaux a span");
	
	for(var position = 0; position < listeNomLiens.length; position++)
	   listeNomLiens[position].style.visibility = "hidden";
	
	var listeLiens = document.querySelectorAll("#liens-sociaux a");
	
	for(var position = 0; position < listeLiens.length; position++)
	{
		listeLiens[position].style.display = "inline-block";
		listeLiens[position].style.height = "64px";
		listeLiens[position].style.width = "64px";
	}
	
	listeLiens[0].style.backgroundImage = "url('decorations/icon-lien-twitter.png')";
	listeLiens[1].style.backgroundImage = "url('decorations/icon-lien-facebook.png')";
	listeLiens[2].style.backgroundImage = "url('decorations/icon-lien-reddit.png')";
	listeLiens[3].style.backgroundImage = "url('decorations/icon-lien-rss.png')";
	listeLiens[4].style.backgroundImage = "url('decorations/icon-lien-github.png')";
}

function afficherInfobulles()
{
	champsGenre = document.getElementById('genre');
	champsInfobulleGenre = document.getElementById('infobulle-genre');
	champsNomUtilisateur = document.getElementById('label-nom-d-utilisateur');
	champsInfobulleNomUtilisateur = document.getElementById('infobulle-nom-d-utilisateur');
	
	champsGenre.onmouseover = function()
							  {
								champsInfobulleGenre.innerHTML = "Choississez votre sexe. Homme (gauche) ou femme (droite).";
								champsInfobulleGenre.style.width = "256px"
								champsInfobulleGenre.style.display = "block";
								champsInfobulleGenre.style.padding = "6px";
								champsInfobulleGenre.style.border = "1px solid #720404";
								champsInfobulleGenre.style.borderRadius = "15px";
								champsInfobulleGenre.style.backgroundColor = "white";
								champsInfobulleGenre.style.color = "black";
								champsInfobulleGenre.style.textAlign = "center";
								champsInfobulleGenre.style.position = "absolute";
								champsInfobulleGenre.style.marginLeft = "175px";
							  };

   champsGenre.onmouseout = function()
							{
								champsInfobulleGenre.style.display = "none";
							};
							
	champsNomUtilisateur.onmouseover = function()
							  {
								champsInfobulleNomUtilisateur.innerHTML = "Le nom d'utilisateur ne doit pas comporter des symboles spéciaux (!@#$%?&*).";
								champsInfobulleNomUtilisateur.style.width = "256px"
								champsInfobulleNomUtilisateur.style.display = "block";
								champsInfobulleNomUtilisateur.style.padding = "6px";
								champsInfobulleNomUtilisateur.style.border = "1px solid #720404";
								champsInfobulleNomUtilisateur.style.borderRadius = "15px";
								champsInfobulleNomUtilisateur.style.backgroundColor = "white";
								champsInfobulleNomUtilisateur.style.color = "black";
								champsInfobulleNomUtilisateur.style.textAlign = "center";
								champsInfobulleNomUtilisateur.style.position = "absolute";
								champsInfobulleNomUtilisateur.style.marginLeft = "175px";
							  };

   champsNomUtilisateur.onmouseout = function()
							{
								champsInfobulleNomUtilisateur.style.display = "none";
							};
}