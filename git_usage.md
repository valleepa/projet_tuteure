# Utilisation de git

# Installation

[Téléchargement & installation](https://www.notion.so/12c65e1688d94e2682b49e759705bc36)

### Configurer son profil git

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

### Générer sa clé SSH

```bash
# Ouvrir un terminal (Git bash pour windows)

ssh-keygen

# Appuyer trois fois sur entrée pour : générer la clé au chemin suggéré et 
# ne pas mettre de mot de passe (ou il vous le demandera à chaque commit)

cat ~/.ssh/id_rsa.pub # copiez votre clé publique
```

Rendez-vous dans les paramètres GitHub, puis SSH & GPG keys.

Vous pourrez dans cette rubrique ajouter votre clé SSH

# Utilisation

### Cloner le projet

Le repo git du projet est hébergé chez GitHub, donc par défaut, vos logins githubs vous seront demandés. Vous aurez besoin de votre identifiant et d'un token de connexion car GitHub requiere désormais un token pour effectuer une commande git.

Le token de connexion est à generer dans les [paramètres GitHub](https://github.com/settings/tokens). Cochez toutes les cases et stockez le quelque part. Ce n'est pas grave si vous le perdez mais il faudra en regénérer un.

```bash
git clone https://github.com/superpaupaul/projet_tuteure.git
```

Entrez donc votre login puis votre token de connexion et vous voilà avec le projet.

### Branches

La branche par défaut est la 'main', on se situe dessus lorsqu'on clone.

Ensuite, chaque membre possède sa branche nommée par nos prénoms. Vous pouvez le visualiser sur GitHub.

```bash

git checkout # indique la branche sur laquelle on est situé
git checkout damien # permet d'aller sur la branche de Damien
```

Situez vous dans votre branche **à chaque fois que vous voulez faire une modification**.

Je vous conseille de créer plusieurs dossier :

- projet-main dans lequel vous vous situerez sur la branche main
- projet-moi dans lequel vous vous situerez sur votre branche
- d'autres si vous souhaitez voir les avancés de chacun

Vous pouvez vous même créer des branches locales et les supprimer si finalement les modifications qui y sont faites ou les merge dans le cas inverse.

### Push

Pour envoyer ses modifications sur le serveur distant, il faut push :

```bash
git add fichier1 # Ajouter fichier 1 aux fichiers que vous allez push
git add -A # ajouter tous les fichiers pour le push
git commit -m "Message de commit à ne pas laisser nul"
git push
```

Encore une fois, vous pouvez visualiser votre push dans l'historique des commits sur GitHub, donc si vous n'êtes pas sûr de ce que vous avez fait, allez-y.

### Pull

Pour récupérer les modifications faites par une tierce personne dans une certaine branche, il faut pull :

Exemple : Damien  a ajouté un nouveau component au main, j'ai besoin de voir le code, je pull.

```bash
git checkout main
git pull
```

**Pensez à toujours pull avant de push** sur la branche main car c'est la branche où on peut tous écrire et donc vous avez peut-être une ancienne version et serez confronté à un merge.

### Merge

Pour assembler deux branches ensemble, il faut les merge :

Exemple, Damien est content de ce qu'il a fait dans sa branche et il veut ajouter ses modifications au main, il merge.

```bash
git checkout main
git pull # Quelqu'un a peut-être fait une modif, il faut la charger.
git merge damien
```

Git gère les merge tout seul, comme un grand, tant que les fichiers ne sont pas en conflit :

Si deux mêmes fichiers ont été modifiés dans les deux branches, vous devrez modifier le fichier final à la main en regardant les différences.

### En vrai ça va git..

Oui, il ne faut juste pas oublier de :

- Sauvegarder son code dans d'autres répertoires, lorsqu'on est pas sûr de ce qu'on fait pour être sûr de ne pas le perdre bêtement.
- Pull avant de push
- Visualiser les modifications sur GitHub
