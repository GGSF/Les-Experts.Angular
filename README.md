# **Projet Fil Rouge** #


<p>
  <img src=".\src\assets\images\titre-fil-rouge.png"/>
</p>
Conçu et réalisé par l'équipe GGSF (Gérôme Gilles Stéphan Frédéric)

----------

*Partie Front*

Pré-requis :

    NPM : 5.7.1
    NodeJS : 8.9.1
    Angular CLI : 1.6.8

Mode opératoire :

1 - Installer NodeJS  
2 - Installer NPM  
3 - Installer Angular CLI  
4 - Installer les différents packages dans la console de l'IDE choisi (ici Visual Studio Code) et chercher des mises à jour  
5 - Importer le projet sous l'IDE et le mettre à jour (NPM install)

----------

Personnellement, j'ai particulièrement travaillé sur la partie UML, design (mokup, CSS) et "armes" du projet.


**Créer la partie front de l'application** :

    - créer un nouveau projet : ng new <nom du projet>
    
    - créer des composants : ng generate componant <nom du componant>
      (ou ng g c <nom du componant>)
    
    - selon le modèle MVC (Modèle Vue Controleur), ou plutôt MVVM, l'architecture 
      d'Angular se décompose ainsi :
    
    => services : utilisés pour injecter du code (signalé par @Injectable()) 
       dans différents composants, et qui sera utilsable (à condition d'importer
       le service dans chaque composant). On le crée avec ng g s <nom>

		¤ weapon.service.ts : va répartir les différentes méthodes dans les autres
          composants (ex : la méthode createWeapon(), que l'on retrouve dans le onSubmit()
          du form-weapon.component.ts, va permettre de créer une nouvelle arme)
    
    => app-module : c'est le module racine, qui se divise en 2 parties :
    
    	~ les imports : peut importer des librairies externes, d'autres modules, ...
     	  pour les rendre utilisable dans tout le projet
    
		¤ "import { FormWeaponComponent } from './modules/weapon/form-weapon/form-weapon.component';" :
	      importe le fichier, permettant de créer ou modifier une arme

   		~ les décorateurs : intervient dans l'injection du code et la compilation
		  des templates

		¤ FormWeaponComponent : cette création permet aussi l'import automatique du fichier dans la partie "import"
    
    => app-routing : permet de charger et de configurer les routes dans les différents
       modules du projet
    
		¤ path: 'weapons/:id', component: DetailWeaponComponent :
		  la sélection d'une arme précise (id) enverra sur le composant "detail", 
		  permettant d'afficher sa fiche détaillée

    => composants "classique" : typiquement composés de 4 fichiers :
    
  		~ .html : architecture du composant
	     ~ .css : habillage du composant (souvent remplacé par le style.css à la racine)
  	    ~ .ts : contient les méthodes et liens avec les autres composants
 		~ .spec.ts : utilisé pour tester le module

		¤ table-weapons : contient ces 4 types de fichiers, permettant (grâce au .html
		  et .ts) d'afficher le tableau complet des armes
    
Pour démarrer l'application, il suffira de se placer sur le dossier du projet, d'entrer dans la console de l'IDE **ng serve**, puis de se connecter, grâce à un navigateur, à l'adresse **http://localhost:4200**. Cela va permettre de visualiser le fonctionnement du projet de manière complète, mais en version locale.
