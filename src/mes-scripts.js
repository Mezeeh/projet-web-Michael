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
    boutonDevelopper = document.getElementsByClassName('bouton-developper');
    fenetreAEtendre = document.getElementsByClassName('mod');
    spanTexteCache = document.getElementsByClassName('texte-cache');

    if(modSelectioner == fenetreAEtendre[0])
    {
        (boutonDevelopper[0].value == '⮟') ? spanTexteCache[0].style.display = "inline-block" : spanTexteCache[0].style.display = "none";
        boutonDevelopper[0].value=boutonDevelopper[0].value=='⮟'?'⮝':'⮟';
    }
    else if(modSelectioner == fenetreAEtendre[1])
    {
        (boutonDevelopper[1].value == '⮟') ? spanTexteCache[1].style.display = "inline-flex" : spanTexteCache[1].style.display = "none";
        boutonDevelopper[1].value=boutonDevelopper[1].value=='⮟'?'⮝':'⮟';
    }
    else
    {
        (boutonDevelopper[2].value == '⮟') ? spanTexteCache[2].style.display = "inline-block" : spanTexteCache[2].style.display = "none";
        boutonDevelopper[2].value=boutonDevelopper[2].value=='⮟'?'⮝':'⮟';
    }
}