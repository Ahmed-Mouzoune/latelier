# CatMash

CatMash est une application web interactive qui vous permet de voter pour vos chats préférés. Ce projet utilise **Next.js** pour gérer à la fois le front-end et le back-end, avec **Prisma** comme ORM pour interagir avec une base de données **PostgreSQL**. L'application synchronise également les données avec une API externe via un endpoint API implémenté comme une fonction serverless.

## Table des matières

- [CatMash](#catmash)
  - [Table des matières](#table-des-matières)
  - [Fonctionnalités](#fonctionnalités)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Configuration de la base de données](#configuration-de-la-base-de-données)
  - [Utilisation](#utilisation)
    - [Synchronisation des données](#synchronisation-des-données)
  - [Contributions](#contributions)
  - [License](#license)

## Fonctionnalités

- Votez pour vos chats préférés en temps réel.
- Affichez des paires de chats pour comparaison.
- Synchronisation automatique des données avec une API externe.
- Interface utilisateur réactive et conviviale.

## Technologies

- [Next.js](https://nextjs.org) - Framework React pour le développement d'applications web.
- [Prisma](https://www.prisma.io) - ORM pour interagir avec la base de données PostgreSQL.
- [PostgreSQL](https://www.postgresql.org) - Système de gestion de base de données relationnelle.
- API REST pour la communication entre le client et le serveur.

## Installation

1. Clonez le dépôt :

   [git clone https://github.com/votre-utilisateur/catmash.git]

2. Accédez au répertoire du projet :

   [cd catmash]

3. Installez les dépendances :

   [npm install]

## Configuration de la base de données

1. Créez une base de données PostgreSQL et notez vos informations de connexion.

2. Configurez votre connexion à la base de données dans le fichier `.env` :

   [DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/nom_de_votre_base_de_données"]

3. Exécutez les migrations Prisma :

   [npx prisma migrate dev --name init]

4. (Optionnel) Pour peupler la base de données avec des données initiales, utilisez :

   [npx prisma db seed]

## Utilisation

Pour démarrer l'application en mode développement, exécutez :

[npm run dev]

Cela lancera le serveur de développement sur [http://localhost:3000](http://localhost:3000).

### Synchronisation des données

Au lieu d'utiliser une tâche cron, vous pouvez appeler l'endpoint API conçu pour synchroniser les données avec l'API externe. Cela se fait via une fonction serverless intégrée dans Next.js, accessible à l'URL `/api/sync`.

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes suivantes :

1. Forkez le projet.
2. Créez votre branche (`git checkout -b feature/nouvelle-fonctionnalité`).
3. Effectuez vos modifications et committez-les (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. Poussez vers votre branche (`git push origin feature/nouvelle-fonctionnalité`).
5. Ouvrez une Pull Request.

## License

Ce projet est sous la licence MIT. Pour plus d'informations, veuillez consulter le fichier LICENSE.
