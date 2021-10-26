class Form{
    constructor(){
        this.input = createInput('').attribute('placeholder', 'Enter your name');
        this.button= createButton("Play");
        this.titleimg= createImg("./Images/title.png", "game title")
        this.greeting= createElement("h2")
    }

    setElementsPosition(){
        this.input.position(width/2-110, height/2 - 80);
        this.button.position (width/2-90,height/2-20);
        this.titleimg.position(120,50);
        this.greeting.position(width/2-300,height/2-100);
    }

    //Play button is being pressed
    handleMousePressed(){
        this.button.mousePressed( //form.button.mousePressed
            //Local function
            ()=>{
                this.input.hide(); //button.input.hide()
                this.button.hide();
                var message= "Hello, " + this.input.value()
                this.greeting.html(message);
                //Increasing the playercount by 1
                PC = PC+1
                player.name = this.input.value();
                player.index = PC
                player.addPlayer();
                player.updateCount(PC);
            }

        );
    }

    display(){
        this.setElementsPosition();
        this.handleMousePressed();
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        
    }
}

/*
Arrow Functions
    - Used to bind the property/function to the original object
    name=()=>{}
    ()=>{}  --- local arrow function


HTML - to create any document on a browser
Hybrid of html & JS - Liberary p5 Dom - Document Object Model

1. Head - Info about the page - files/libraries added here
2. Body - Visible content on the page

Elements of an HTML page:
    1. Headings - h1, h2, h3.... h6 - different sizes
    2. Input - to take input from the user
    3. Button - play button
*/