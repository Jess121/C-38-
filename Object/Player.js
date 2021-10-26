class Player{
    constructor(){
        this.name = null;
        this.positionX = 0;
        this.positionY= 0;
        this.index = null;
        this.rank= 0
        this.score = 0
    }
    
    //Reading Playercount from db
    getCount(){
        db.ref("Playercount").on("value",function(data){
            PC= data.val();
        })
    }

    //Writing playercount into the db
    updateCount(count){
        db.ref("/").update({
            Playercount: count
        })
    }

    //Adds a player to the game & updates its info to the db
    addPlayer(){

        //Adding player to the game
        if(this.index === 1){
            this.positionX = width/2 - 100;
        }
        else{ 
            this.positionX = width/2 + 100;

        }

        //Adding/updating the player's info to the db
        db.ref("players/player"+this.index).set({
            name: this.name,
            positionX: this.positionX, 
            positionY: this.positionY
        })
    }

    update(){
        db.ref("players/player"+this.index).update({
            positionX: this.positionX,
            positionY: this.positionY,
            rank: this.rank,
            score: this.score,
        });
    }

    static getPlayersInfo(){
        db.ref("players").on("value",function(data){
            allPlayers = data.val();
        })

    }
}

/*
static functions
- common functions
- belong to all the objects together, not to any object individually
- called by the class, and not by any object
*/