# Description

Creation d'une API permettant d'acceder à une base de donnée retournant des identités fictives

Creation d'un client Web sur cette API

# Stack utilisée

#### Pour le serveur :
- Utilisation de Docker avec les technologies :   
    node.js   
    express   
    mongodb

#### Pour le client :
- Utilisation de HTML, CSS, JavaScript

# Comment utiliser cette application

## Lancer le serveur

Allez dans le répertoire ./serveur du dépot

Un fichier compose.yml est disponible pour initialiser la stack avec docker en utilisant la commande :

( Si vous utilisez Windows penser à lancer l'application "Docker Desktop" avant d'utiliser cette commande )

    docker compose up -d

Attendre dans la console Logs du container 'node' que le serveur soit actif. Celle-ci doit afficher :


    Le serveur tourne sur le port 8080
    Connecté à mongodb


Prenez votre plus beau navigateur et rendez-vous a l'addresse :

    http://127.0.0.1:8080/api/fakeid

pour acceder au contenu de la base de données.


effectuer un POST sur cette même adresse pour inserer une donnee dans la base de donnée.

par exemple envoyer 

    {
    "prenom": "Paul",
    "nom": "Martin",
    "email": "paul.martin@fake.fake",
    "age": "18",
    "rue": "De la Motte",
    "ville": "Trifouilly les trois galoches",
    "pays": "France",
    "avatar": "paul_martin_00000000.jpg"
    }


## Lancer le client

Si vous utilisez VSCODE, allez dans le repertoire ./client du depot et lancer un live server sur le fichier 'index.html'

à ce jour le client permet la lecture de la base de données et la lecture d'une donnée par son _id.  
Le remplissage de la base de données n'est pas encore implémenté.
