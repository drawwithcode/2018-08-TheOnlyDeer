let p;
let acc = [0,0]
function setup() {
  // put setup code here
    createCanvas(windowWidth,windowHeight);
    p = [width/2,height/2];
    ellipseMode(CENTER);
    noStroke();
    fill(150)
}

function draw() {
  // put drawing code here
    background('#fff5')
    acc[0] = accelerationX;
    acc[1] = accelerationY;
    p[0] += acc[0];
    p[1] += acc[1];
    p[0] > width ? p[0] = width : null;
    p[0] < 0 ? p[0] = 0 : null;
    p[1] > height ? p[1] = height : null;
    p[1] < 0 ? p[1] = 0 : null;
    ellipse(p[0],p[1],width/10)
}
