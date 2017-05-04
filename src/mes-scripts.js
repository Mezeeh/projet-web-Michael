function validerFormatEmail()
{
    //alert('test');

    var champsEmail = document.getElementById("emailContact");

    //alert(champsEmail);

    //alert(champsEmail.value);

    /*([A-Za-z0-9_\-\.]) 
    A à Z en majuscule ou en minuscule
    Chiffre de 0 à 9 
    Accepte les "_", "-" et les points
    ======================================
    +\@
    Doit contenir un "@"
    ======================================
    +\.
    Doit contenir un "."
    ======================================
    ([A-Za-z]{2,4})
    A à Z en majuscule ou en minuscule
    formant un mot de 2 à 4 chiffre*/
    var validateurEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //alert(champsEmail.value.match(validateurEmail));

    if(!champsEmail.value.match(validateurEmail))
    {
        var cibleMessage = document.getElementById("erreur");
        var carreEmail = document.getElementById("email")
        cibleMessage.innerHTML = "Le format de votre e-mail est invalide. Il doit contenir un '@' et finir par '.com' par exemple. Veuillez corriger le champs puis cliquez sur Envoyer.";
        cibleMessage.style.display = "block";
        carreEmail.style.padding = "5px"
        carreEmail.style.border = "solid 3px red"
        return false;
    }
    return true;
}

function effacerValeurChampsEmail()
{
    //alert('test');

    var valeurChampsEmail = document.getElementById("emailContact");

    //alert(valeurChampsEmail);

    var valeurChampsEmailDefaut = "courriel@exemple.com";

    if(valeurChampsEmail.value.match(valeurChampsEmailDefaut))
    {
        //alert('1 2 test');
        valeurChampsEmail.value="";
    }
}

function afficherValeurChampsEmail()
{
    //alert('test');

    var valeurChampsEmail = document.getElementById("emailContact");

    //alert(valeurChampsEmail);

    var valeurChampsEmailDefaut = "courriel@exemple.com";

    if(valeurChampsEmail.value=="")
    {
        //alert('1 2 test');
        valeurChampsEmail.value=valeurChampsEmailDefaut;
    }
}

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

function etendreDescriptionMod(mod)
{
    modSelectioner = mod.parentNode;
    boutonDevelopper = modSelectioner.getElementsByClassName('bouton-developper')[0];
    spanTexteCache = document.getElementById(modSelectioner.id + "-affichage");
    
    //alert(modSelectioner.id);

    //alert(boutonDevelopper);
    
    spanTexteCache.style.display = (boutonDevelopper.innerHTML == '⮟') ? "inline-block" : "none";
    boutonDevelopper.innerHTML= (boutonDevelopper.innerHTML=='⮟') ? '⮝' : '⮟';
    
    //spanTexteCache.style.transition = "height 2s";
    //spanTexteCache.style.height = "300px";
}

function afficherDetailsPageVignette(personnage)
{
    //alert("afficherDetailsPageVignette(personnage)");
    personnageSelectionne = personnage.parentNode;
    vignetteDetail = document.getElementById('vignette-detail');
    personnageDejaActif = personnageSelectionne.classList.contains("active");
    if(personnageSelectionne == document.querySelector(".personnages.active")){
        personnageSelectionne.classList.remove("active");
        vignetteDetail.classList.remove("active");
        
    }
    
    
    
    nomPersonnage = personnageSelectionne.querySelector('.nom-personnage').innerHTML;
    detailsPersonnage = personnageSelectionne.querySelector('.details-personnage').innerHTML;
    infosSupplementaires = personnageSelectionne.querySelector('.information-supplementaire').href;
    imagePersonnage = personnageSelectionne.querySelector('.image-personnage').src;
    
    
    
    vignetteDetail.querySelector('.nom-personnage-vignette').innerHTML = nomPersonnage;
    vignetteDetail.querySelector('.details-personnage-vignette').innerHTML = detailsPersonnage;
    vignetteDetail.querySelector('.information-supplementaire-vignette').href = infosSupplementaires;
    vignetteDetail.querySelector('.image-personnage-vignette').src = imagePersonnage.replace("mini/miniature-", "");
    
    //alert(vignetteDetail.style.display);
    
    if(personnageDejaActif)
    {
        vignetteDetail.classList.remove("active");
    }
    else
    {
        vignetteDetail.classList.add("active");
    }
    
    listePersonnages = document.getElementsByClassName("personnages");
    
    //alert(listeLiensPersonnages);
    
    
    for(var i = 0; i < listePersonnages.length; i++)
    {
        listePersonnages[i].classList.remove("active");
        console.log(i + ":"+listePersonnages[i].classList);
    }
    
    if(!personnageDejaActif)
    {
        personnageSelectionne.classList.add("active") ;
        
    }
    
    //alert(nomPersonnage);
    //alert(detailsPersonnage);
    //alert(infosSupplementaires);
    //alert(vignetteDetail);
}
