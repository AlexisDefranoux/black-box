# Black Fire Box

## Introduction

La black fire box est un projet visant à protéger les pompiers. C'est un petit boitier porté sur une poche extérieure de la tenue du pompier. Lorsqu'un boitier détecte un danger, elle va prévenir le pompier à l'aide d'alerte sonore, lumineux ou de vibration en fonction de l'environnement. Elle va aussi diffuser des alertes aux black fire box à proximité afin de parvenir les pompiers autour.

## Equipe de travail

- Alexis Defranoux
- Rihab Zaafouri
- Anthony Lopes

## Diagramme de GANTT

![](https://i.imgur.com/JGRhCEe.png)


## Modélisation de l'objet

![](https://i.imgur.com/FMSR8RV.jpg)

Work in progress on **Solidworks**...

## Architecture matérielle

![](https://i.imgur.com/cdPEDq3.png)

## Architecture logicielle

[Interface]->[API]->[GUI]

Un système de publish/subscribe pour communiquer entre les black fire box. En REST?

Chaque black fire box a une intelligence par défaut + une configuration.

Work in progress...
 
## Scénarios

Voici des exemples de scénario possible avec des black fire box :

- Une fuite de gaz est présente dans le bâtiment. Cela menace les habitants et les pompiers lors de l'intervention des secours. En effet, il y a un risque d'explosion. Grâce à la black fire box porté dans une poche du pompier, l'appareil va détecter le gaz à l'aide de son capteur, puis va prévenir le pompier à l'aide d'une alerte sonore s'il n'y a pas trop de bruit, visuelle à l'aide d'une lumière, et une vibration.

- La black fire box peut aussi être posée sur une victime au sol, afin de la protégeant en avertissant les secours d'un danger comme le gaz explosif.

- La black fire box, toujours porté dans une poche extérieure, peut aussi prévenir d'une température extérieure trop élevé pour le pompier à l'aide d'un capteur de température, malgré sa combinaison de protection.

- A l'aide d'un capteur de mouvement, la black fire box peut détecter si le pompier reste immobile anormalement longtemps. Une alerte va être envoyée à toutes les black fire box à proximité. Cela va permettre de prévenir qu'il y a un problème qu'un pompier est immobile depuis trop longtemps.

## Capteurs et actionneurs

### Capteurs :
- Gaz
- Thermique
- Accéléromètre
- Sonore

### Actionneurs :
- Lumières 
- Vibreurs
- Haut-parleurs

----

*Polytech Nice Sophia - Objets connectés et services - 2019/2020*
