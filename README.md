# Black Box

## Introduction

La black box est un projet visant à protéger les pompiers. C'est un petit boitier porté sur une poche extérieure de la tenue du pompier. Lorsqu'un boitier détecte un danger, elle va prévenir le pompier à l'aide d'alerte sonore, lumineux ou de vibration en fonction de l'environnement. Elle va aussi diffuser des alertes aux black box à proximité afin de prévenir les pompiers autour.

## Equipe de travail

- Alexis Defranoux
- Rihab Zaafouri
- Anthony Lopes

## Diagramme de GANTT

![](https://i.imgur.com/JGRhCEe.png)

## Modélisation de l'objet

![](https://i.imgur.com/ZTfQTC5.png)

## Architecture matérielle

![](https://i.imgur.com/C3J9TXp.png)

## Architecture logicielle

![](https://i.imgur.com/voxIt2F.png)

## Scénarios

Voici des exemples de scénario possible avec des black box :

- Une fuite de gaz est présente dans le bâtiment. Cela menace les habitants et les pompiers lors de l'intervention des secours. En effet, il y a un risque d'explosion. Grâce à la black box porté dans une poche du pompier, l'appareil va détecter le gaz à l'aide de son capteur, puis va prévenir le pompier à l'aide d'une alerte sonore s'il n'y a pas trop de bruit, visuelle à l'aide d'une lumière, et une vibration.

- La black box peut aussi être posée sur une victime au sol, afin de la protégeant en avertissant les secours d'un danger comme le gaz explosif.

- La black box, toujours porté dans une poche extérieure, peut aussi prévenir d'une température extérieure trop élevé pour le pompier à l'aide d'un capteur de température, malgré sa combinaison de protection.

- A l'aide d'un capteur de mouvement, la black box peut détecter si le pompier reste immobile anormalement longtemps. Une alerte va être envoyée à toutes les black box à proximité. Cela va permettre de prévenir qu'il y a un problème qu'un pompier est immobile depuis trop longtemps.

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
