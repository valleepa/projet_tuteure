#Projet Depta
Vous savez ce que c'est

#Code understanding
Le code du projet se trouve dans le dossier src.
On a alors plusieurs dossiers et fichiers important:
- Le dossier assets contenant toutes les ressources utiles
au projet tel que des images ou encore des pdf.
- Le dossier environments vous en avez rien à foutre
- les fichiers racines, ce sont les fichiers essentiels au projet
, tel que favicon qui est l'icone situé sur la fenetre du navigateur
on a aussi index.html qui est la page root du projet et style.scss le style
global du projet.
- On a ensuite le dossier app qui contient tout le code de notre application.

On y trouve tout d'abord le fichier app-routing.module qui gère le routing de l'application, c'est à dire que c'est ce fichier
qui va faire correspondre l'url à un component, il va simuler le changement de page en changeant le component appelé dans le router-outlet.
Ce router ce trouve dans le component acceuil.
Venons en aux components, l'application est composé en components qui vont chacun être équipé d'un fichier css, ts et html.
Les components sont placés dans le dossier components, et les components racine d'une page sont mit dans le dossier Pages.
Les modèles des objets utilisés dans le projet tel que QCM sont placés dans Modeles et enfin les services chargés de l'intercommunication
de nos components sont placés dans le dossier Service.

Le service question.service permet de connaitre le QCM, la catégorie et la question actuellement consultées par l'utilisateur et va
se charger de la mettre dans le local storage. Pour utiliser le service vous n'avez qu'à l'instancier dans le constructeur
du component (le fichier ts de celui) puis de faire this.question.QCMActuel.subscribe(value => this.monQCM = value) cela vous permettra
de récupérer le QCM actuellement en cours de modification. Pour le modifier vous n'avez qu'à faire next à la place de subscribe
et de mettre dans la parenthère le QCM modifié

