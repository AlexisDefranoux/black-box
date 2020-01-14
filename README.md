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

## Capteurs et actionneurs

### Capteurs :
- Gaz : https://www.lextronic.fr/capteur-de-qualite-d-air-19455.html
- Thermique : https://www.lextronic.fr/module-grove-capteur-de-temperature-28923.html
- Accéléromètre : https://www.lextronic.fr/module-gyro-accelerometre-6-axes-16917.html
- Sonore : https://www.gotronic.fr/art-capteur-sonore-grove-101020063-20631.htm
- GPS : ?  
~~- Flammes: https://www.lextronic.fr/module-grove-capteur-de-flammes-20898.html~~

### Actionneurs :
- Lumières : https://www.gotronic.fr/art-led-8-mm-rgb-variable-grove-101020472-27991.htm
- Vibreurs : https://www.gotronic.fr/art-module-vibreur-grove-105020003-19026.htm
- Haut-parleurs : ?

----

*Polytech Nice Sophia - Objets connectés et services - 2019/2020*
