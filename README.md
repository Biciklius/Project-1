
# Project 1: JavaScript Game

### Timeframe
7 days

## Technologies used

* JavaScript (ES6)
* HTML5
* CSS
* Photoshop
* git
* Audacity


## Installation

1. Clone or download the repo
1. Open the `index.html` in your browser of choice

## Overview

_Screen shot_

https://imgur.com/FHgghA8

_Link to live site_

### Introduction
_Dark side of the beach is remake of classic snake game, navigate across the field and collect all apples.

### Controls
Goal is to lead Darkside army (Snake) across the beach and collect all shots of tequila (Apple). To control movement of the army use navigation keys (up, right, down and left)
After collection of each apple (tequila shot) you will receive one point and chain will be increased for one more block (Stormtrooper). Game will be finished if you hit any of border walls, snakehead (Darth Vader) get in contact with the rest of the body (Stormtroopers chain) or if there is no more free space on board.
![pic](https://imgur.com/I5CSn2a)
![pic](https://media.git.generalassemb.ly/user/19457/files/70c33e80-5798-11e9-9344-15df0247a85c)


### Game Instructions
1.	_How the game works. Break the process down into steps. Add a screenshot for each step_
Game and all content are on one single page . After loading of the page user will see welcome screen like this:
https://imgur.com/oZhSHh9
On the left side is info/control section with following options:
*High score: after click on high score button user should see screen with top 10 scores from game history
*Sound button: for turning game sound off and on
*Score: will inform user about current game score
*Instructions: Will open window with game instructions
https://imgur.com/MxR3YoP


## Process
_Describe the process of building the game. How did you get started? How did you manage your time? How would you do things next time?_
First step was to define play field and for this task JS function was used. Next step was to create snake and to define control buttons. For snake movement I use array methods adding and subtracting elements simultaneously to achieve moving impression. Movement speed is controlled by time interval. Introducing apple to the play field thru random positioning  brings another task: make snake to eat apple and to grow snake for one block. Now it was time to implement basic rules for snake, hitting the border of playfield and  snakehead getting in touch with any other part of snake chain will results in game over, also backwards moving was prevented. As all rules and snake movement was created, more features was needed. For eating apple event score and speed snake increase was implemented. With this all logic of the game was finish and it was time for styling. Snake was style thru CSS with gif images and sound was added to the game and final layout was created with CSS thru flexbox.



### Challenges
_Describe the biggest challenges. How did you overcome them? Did you decide to pivot because of time constraints? What did you learn from these problems?_
Biggest challenge was to define correct movement for snake and to add/remove snake elements at correct place at correct time regarding movement direction.

### Wins
_Describe the wins. What are you most proud of? What did this project help you to understand the most?_
Biggest win was snake movement and understanding how to work with arrays.

## Future features
For future few features are planed:
*obstacles – randomly added to the playfield will make game more difficult
*special apple - randomly added with short time visibility for extra points
* poison food -  randomly added in case of eating with kind of food snake will switch direction and commands for 10 sec.
