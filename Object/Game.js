class Game {
    constructor(){
        
    }

    //Reads gamestate from the db
    getState(){
        db.ref("Gamestate").on("value", function(data){
            GS = data.val();
        });
    }

    //Writes gamestate into the db
    update(state){
        db.ref("/").update({
            Gamestate: state
        });
    }

    //WAIT state - 0 state
    start(){
        form = new Form();
        form.display();
        player=new Player();
        player.getCount()

        car1 = createSprite(width/2 - 50, height-100);
        car1.addImage(car1Img);
        car1.scale = 0.07;

        car2 = createSprite(width/2 + 100, height-100);
        car2.addImage(car2Img);
        car2.scale = 0.07;

        cars = [car1, car2];
    }

    //PLAY state - 1 state
    play(){

        form.hide();   
        Player.getPlayersInfo();

        //GAME STARTS
        if(allPlayers !== undefined){
            image(track,0,-height*5,width,height*6);

            var index = 0;
            for (var plyr in allPlayers){
                index = index + 1;
                
                var x = allPlayers[plyr].positionX;
                cars[index-1].position.x = x;
                var y =  height - allPlayers[plyr].positionY;
                cars[index-1].position.y = y;
            }

            this.handlePlayerControls();
            drawSprites();

        }


    }

    handlePlayerControls(){
        if (keyIsDown(UP_ARROW)){
            player.postitionY= player.positionY+10
            player.update()
        }
    }
}
/*
"/" - referring to the database


for loop
    for (var i = 0; i< allPlayers.length; i++){
        
    }

for-in loop statement
    for(var i in allPlayers){

    }


*/