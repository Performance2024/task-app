# Application de Tâches

Ce projet est une application de gestion de tâches développée avec Angular. Elle inclut un serveur proxy Express configuré pour contourner les restrictions CORS lors des appels API.

## Démarrage Rapide

Suivez ces instructions pour configurer l'environnement de développement et démarrer le projet.

### Prérequis

Vous devez avoir installé Git, Node.js, npm, et Angular CLI (installé globalement) sur votre machine.

### Cloner le Repository

Pour obtenir le projet, ouvrez un terminal et exécutez :

git clone <git@github.com>:Performance2024/task-app.git
cd task-app

shell
Copy code

### Installation des Dépendances

#### Application Angular

Exécutez les commandes suivantes pour installer les dépendances nécessaires à l'application Angular :

npm install

javascript
Copy code

#### Serveur Proxy

Pour installer les dépendances nécessaires au serveur proxy situé dans le sous-dossier `server-proxy`, exécutez :

cd server-proxy
npm install

markdown
Copy code

### Démarrage du Serveur Proxy

**Important :** Le serveur proxy doit être démarré **avant** le serveur de développement Angular pour s'assurer que toutes les requêtes passent correctement.

Exécutez cette commande dans le dossier `server-proxy` pour démarrer le serveur :

node server.js

bash
Copy code

Un message s'affichera indiquant que le serveur proxy a démarré sur le port 3000.

### Lancement de l'Application Angular

Dans un nouveau terminal, revenez à la racine du projet (`cd ..` si vous êtes dans `server-proxy`) et lancez le serveur de développement Angular avec :

ng serve

bash
Copy code

Accédez à `http://localhost:4200/` dans votre navigateur pour voir l'application. L'application se rechargera automatiquement si vous modifiez l'un des fichiers sources.

## Utilisation

Avec le serveur proxy en cours d'exécution, l'application est configurée pour que toutes les requêtes API passent par ce serveur, ce qui permet d'éviter les erreurs CORS en développement.

## Contribution

Les contributions à ce projet sont les bienvenues. Veuillez consulter le fichier CONTRIBUTING.md pour les directives sur la manière de contribuer.

## Licence

Ce projet est sous licence MIT. Pour plus d'informations, voir le fichier `LICENSE`.
