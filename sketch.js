var Hypnoticball, database;
var position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
    Hypnoticball = createSprite(250,250,10,10);
    Hypnoticball.shapeColor = "red";
    var HypnoticballPosition=database.ref('ball/position');
    HypnoticballPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if (position!==undefined)
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
position=data.val();
console.log(position.x);
Hypnoticball.x=position.x;
Hypnoticball.y=position.y;

}

function writePosition(x,y){
database.ref('ball/position').set({
'x':position.x+x,
'y':position.y+y
 })
}

