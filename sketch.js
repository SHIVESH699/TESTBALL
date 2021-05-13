var ball;
var posb
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    console.log(database)
    ball = createSprite(250,250,10,10);
    bapeColor = "red";
    posb=database.ref("BALL/POSITION")
    posb.on("value",readpos,showerror)



}

function draw(){
    background("white");
    if(keyDown("A")){
        changePosition(-1,0);
    }
    else if(keyDown("D")){
        changePosition(1,0);
    }
    else if(keyDown("W")){
        changePosition(0,-1);
    }
    else if(keyDown("S")){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
database.ref("BALL/POSITION").set({
    "x":ball.x + x,
     "y":ball.y+y

})


 
}
function readpos(data){
var ppbb=data.val()
ball.x=ppbb.x
ball.y=ppbb.y


}
function showerror(){




}