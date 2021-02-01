class Quiz{
    constructor(){
        // empty for now 
    }
    display(){
        title = createElement("h1");
        title.html('my Quiz Game');
        title.position(width/2 -100, 0);

        // to create options
        option1 = createElement("h2.1");
        option2 = createElement("h2.1");
        option3 = createElement("h2.1");
        option4 = createElement("h2.1");

        // to give text
        option1.html("1: Everyone");
        option2.html("2: Envelope");
        option3.html("3: Estimate");
        option4.html("4: Example");

        // to position elements
        option1.position(160, 190);
        option2.position(160, 220);
        option3.position(160, 250);
        option4.position(160, 280);

        // to enter contestant name 
        nameButton = createInput('enter your name');
        nameButton.position(180, 380);

        // to enter option
       // optionButton = createInput('enter correct option');
        //optionButton.position(390, 380);

        // to submit answer
        submitButton = createButton('submit your answer');
        submitButton.position(420, 480);

        // to press the submitButton code is given here
        submitButton.mousePressed(() =>{
            submitButton.hide();
            option1.hide();
            option2.hide();
            option3.hide();
            option4.hide();
            nameButton.hide();
           // optionButton.hide();
        })
    }
}