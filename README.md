# e5-virtualisation-projet

Nous avons 3 projets Spring et un projet Angular :
- Un microservice de simulation de cotation de bien immobiliers
- Un microservice faisant des interactions sur des bien immobiliers
- Une api gateway placee devant ces microservices
- Une application Angular

Le dossier kub-db contient un fichier db.yml permettant de mettre en place la base de donnee dans kubernetes.

Notre fichier app.yml va recuperer des images depuis le docker hub sixtinetvs.

Une fois tous les services crees, vous pouvez y acceder avec ces urls :

- IHM : http://localhost:32000
- Api gateway : http://localhost:32001
- Base de donnees : http://localhost:32002

Le fichier ingress.yml n'est pas utilise.
