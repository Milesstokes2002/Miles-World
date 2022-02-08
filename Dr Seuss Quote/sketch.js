let img;
function preload() {
  img = loadImage('images/CatHat.png');
}


function setup() {
  // put setup code here
 createCanvas(windowWidth, windowHeight)
 textAlign(CENTER);
 background('red')
 
}

function draw() {
  // put drawing code here
textSize(32);
fill(0)    
text('Today you are you', 700, 60);
fill(0);
text('that is truer than true.', 700, 60+40);
fill(0);
text('There is no one alive', 700, 100+40);
fill(0)
text('who is Youer than You', 700, 140+40);
fill(0)

text('- Dr Seuss', 800, 180+40);

image(img, 900, 100, 160, 160)
}

