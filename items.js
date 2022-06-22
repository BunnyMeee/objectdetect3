function setup(){
    canvas = createCanvas(300,500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    }
    
    img = "";
    status1 ="";
    objects =[];

    function preload(){
        img = loadImage("Items.jpg");
        if(status1 !== ""){
            for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status: objects detected"; 
            fill("#800000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x, objects[i].y);
            noFill();
            stroke("#800000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
    
            }
        }
    }

    function draw(){
        image(img, 0, 0, 300, 500);

    }
    
    
    function modelLoaded(){
        console.log("model loaded");
        status1 = true;
        objectDetector.detect(img, gotResult);
    }
    function gotResult(error,results){
        if(error){
            console.log(error);
        }
        console.log(results);
    }