img="";
function preload() {
img=loadImage("https://th.bing.com/th/id/OIP.G12T_MUuIKWw7XklDIqzhwHaE8?pid=ImgDet&rs=1")
}
function setup() {
    canvas= createCanvas(900,600);
    canvas.position(400, 250);
    
}
function draw() {
   image(img,100,110,360,330);
    fill("blue");
    stroke("blue");
    circle(60,60,70);
    circle(500,60,70);
    circle(500,500,70);
    circle(60,500,70);
    fill("purple");
    stroke("purple");
    rect(95,50,370,25);
    rect(485,95,25,370);
    rect(95,490,370,25);
    rect(45,95,25,375);

}

function take_snapshot() {
    save("prooooject.png");
}
