# Black Box

## Introduction

La black box est un projet visant à protéger les pompiers. C'est un petit boitier porté sur une poche extérieure de la tenue du pompier. Lorsqu'un boitier détecte un danger, elle va prévenir le pompier à l'aide d'alerte sonore, lumineux ou de vibration en fonction de l'environnement. Elle va aussi diffuser des alertes aux black box à proximité afin de prévenir les pompiers autour.

## Equipe de travail

- Alexis Defranoux
- Rihab Zaafouri
- Anthony Lopes

## Modélisation de l'objet

![](https://i.imgur.com/llIrJiE.png)

## Architecture matérielle

![](https://i.imgur.com/C3J9TXp.png)

## Architecture logicielle

![](https://i.imgur.com/WelBkxK.png)

## Scénarios

Voici des exemples de scénario possible avec des black box :

- Une fuite de gaz est présente dans un bâtiment. Cela menace les habitants et les pompiers lors de l'intervention des secours. En effet, il y a un risque d'explosion. Grâce à la black box porté dans une poche du pompier, l'appareil va détecter le gaz à l'aide de son capteur de gaz, puis va prévenir le pompier à l'aide d'une alerte sonore provenant du buzzer ,lumineuse provenant de la Led, et d'une vibration à l'aide du vibrateur.

- La black box peut aussi être posée sur une victime au sol, afin de la protégeant en avertissant les secours d'un danger comme le gaz explosif.

- La black box, toujours porté autours de la taille de l'utilisateur, peut aussi prévenir d'une température extérieure trop élevé pour le pompier à l'aide d'un capteur de température.

- Lors de la chute d'une personne agé vivant seul, l'objet va détecter  la chute à l'aide de l'accéléromètre et enverra un mail automatiquement à un proche.

- Prévenir les personne travaillant dans le batiment des fuite de gaz, chute, etc.

## Raspberry 

- Raspberry Pi 3 B : https://www.gotronic.fr/art-carte-raspberry-pi-3-b-1-gb-24532.htm
- Grove Pi+ : https://www.lextronic.fr/platine-grove-pi-pour-raspberry-pi-30485.html

## Capteurs et actionneurs

### Capteurs :
- Un capteur de qualité d'air Grove 101020078, type analogique : https://www.gotronic.fr/art-capteur-de-qualite-d-air-grove-101020078-23838.htm
- Un capteur d'humidité et de T° Grove 101020011, type analogique: https://www.gotronic.fr/art-capteur-d-humidite-et-de-t-grove-101020011-18963.htm
- Un module 6 DOF Grove 105020012, type I2C: https://www.gotronic.fr/art-module-6-dof-grove-105020012-25135.htm
- Un capteur sonore Grove 101020063, type analogique : https://www.gotronic.fr/art-capteur-sonore-grove-101020063-20631.htm

### Actionneurs :
- Une Led 8 mm RGB Grove V2.0 104020048, type digital : https://www.gotronic.fr/art-led-8-mm-rgb-grove-v2-0-104020048-27067.htm
- Un Module vibreur Grove 105020003, type digital : https://www.gotronic.fr/art-module-vibreur-grove-105020003-19026.htm
- Un buzzer Grove 107020000, type digital : https://www.gotronic.fr/art-module-buzzer-grove-107020000-19009.htm


# Installation

## Prérequis

* `npm v6`
* `node v12`

## Front-end : Angular

1. A la racine du projet `npm install`
2. Lancer le projet `npm start`
3. L'interface est disponible sur le port `4200`

## Orchestrateur : Node-Red

1. Installer node-red `npm install node-red`
3. Lancer le serveur `node-red`
2. Ajouter la dépendence `node-red-contrib-firebase`
3. Importer les flows du projet
