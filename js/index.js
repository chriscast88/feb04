var blueDots = [];

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
  for (var i=0; i<100; i++){
    blueDots.push(new Bluedot());
  };
};

function draw(){
  background(0);
  ambientLight(120);
  pointLight(255,255,255,-500,500,100);
  pointLight(128,128,128,1000,-800,00);
  pointLight(255,255,255,500,0,-2000);
  rotateY(frameCount * .001);
  specularMaterial(255,0,0);
  sphere(10);
  drawBlueDots();
  drawLines();

};

function drawBlueDots(){
  for (var i=0; i<blueDots.length; i++){
    push();
    // console.log(blueDots[i].location);
    translate(blueDots[i].location.x,blueDots[i].location.y,blueDots[i].location.z);
    specularMaterial(0,0,255);
    sphere(5);
    pop();
  }
};

function drawLines(){
  for (var i = 0; i < blueDots.length; i++) {
    var height = blueDots[i].location.dist(createVector(0,0,0));
    // var midPoint = p5.Vector.lerp(createVector(0,0,0), blueDots[i].location, 0.5);
    // var angle = p5.Vector.angleBetween(createVector(0,0,0), blueDots[i].location);
    // translate(midPoint.x,midPoint.y,midPoint.z);

    var threedyStepper = p5.Vector.lerp(createVector(0,0,0), blueDots[i].location, 0.05);
    push();
    for (var j = 0; j < 20; j++) {
      translate(threedyStepper.x,threedyStepper.y,threedyStepper.z);
      sphere(1);
    }
    pop();
  }
};


function Bluedot() {
  this.location = createVector(random(-200,200),random(-200,200),random(-200,200));
}
