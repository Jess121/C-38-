var db, form, game, player, bg ,GS , PC, car1, car2, cars, car1Img, car2Img
var allPlayers, track;


function preload(){
    bg=loadImage("./Images/background.png")
    car1Img = loadImage("./Images/car1.png")
    car2Img = loadImage("./Images/car2.png")
    track = loadImage("./Images/track.jpg")
}



function setup(){
    createCanvas(windowWidth-5,windowHeight-10);

    //Initialize firebase in Javascript
    db = firebase.database();

    //Creating a new object from the Game class
    game= new Game();
    game.start()
    game.getState()
    

}

function draw(){
    background(bg);
    if (PC=== 2){
        game.update(1)
    }
    if (GS===1){
        game.play();
    }
    
}


/*
1. Form:
        - Input for player's name
        - Play button
        - Player's name to be registered in the db
2. Player
        - Contains player's info
        - name, rank, score etc.
        - stores player's info in the db
3. Game
        - Game states
        - Wait state (0) - start state
        - Play state (1)
        - End state (2)
        - Stores game info in the db

JAVASCRIPT
    OOP - Object Oriented Programming
    Objects - Properties & Functions
    Classes are created for every object - design for the object

*/

