class Security {

    constructor(){

        this.access1 = createInput("")
        this.access1.position(125,160);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(125,220);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("")
        this.access2.position(700,160);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button
        this.access3 = createInput("");
        this.access3.position(125,310);
        this.access3.style("background","white");

        this.button3 = createButton("Check");
        this.button3.position(125,370);
        this.button3.style('background','lightgrey');

        this.access4 = createInput("");
        this.access4.position(700,310);
        this.access4.style("background","white");

        this.button4 = createButton("Check");
        this.button4.position(700,370);
        this.button4.style("background","lightgrey");

        this.button5 = createButton("Submit");
        this.button5.style("background","lightgrey");

        this.title = createElement("h2");
        this.title.html("Answer the questions to play the game");
        this.title.position(displayWidth-925,displayHeight-900);

        this.title2 = createElement("h4");
        this.title3 = createElement("h4");

        this.input1 = createInput("","date");
        this.input2 = createInput("","date");

    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(()=>{
          if(system.authenticate(accessCode4,this.access4.value())){
              this.button4.hide();
              this.access4.hide();
              score++;
          }
        })

        this.button5.mousePressed(()=>{
            covid.getCovidResponse();
            this.hideCal();
        })



    }

    hide(){
     this.title.hide();
     fill("black");
     textSize(30);
     text("STAY HOME, STAY SAFE!!",displayWidth-900,displayHeight-800);
       
    }

    cal(){
      this.title2.html("From :");
      this.title2.position(200,280);

      this.title3.html("To :");
      this.title3.position(220,330);
      
    
      this.input1.position(250,300);
      this.input2.position(250,350);

      this.button5.position(300,400);
    }

    hideCal(){
        this.title2.hide();
        this.title3.hide();
        this.input1.hide();
        this.input2.hide();
        this.button5.hide();
    }
   }
