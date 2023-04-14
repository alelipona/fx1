const startPoint = {}


function setup() {
  startPoint.x = windowWidth*fxrand()
  startPoint.y = windowHeight*fxrand()
  createCanvas(windowWidth, windowHeight);
  
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  const test = $fx.getParams().number_id
  console.log('test::: ', test);
  console.log('x::: ', startPoint.x);
  console.log('y::: ', startPoint.y);
  randomSeed(seed); 
  

  col=int(random(255));
  sizee=int(random(width/2));
  

// FX Features
  window.$fxhashFeatures = {
 "Size" : sizee,
 "Color" : col,
  };

}

function draw() {
  background(255);

stroke(0);
fill(col);

rectMode(CENTER);
rect(width/2,height/2,sizee,sizee);
   
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newPoint(oldPoint){
  const np = {
    x:oldPoint.x+fxrand()*
  }
}
function getRandomDelta(){
  // let d
if(fxrand()>0.5){

}
}

