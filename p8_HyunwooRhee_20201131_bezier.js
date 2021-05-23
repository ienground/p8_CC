/**
 * Developed by IENGROUND of ienlab.
 * @ienground_
 * Ericano Rhee on github.com/ienground
 */

let font;
let inputBox, inputButton;

let content = "android";
let oldContent = "android";

let size = 180;

let p, p2;

function preload() {
    font = loadFont("assets/PeaceSans.otf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    inputBox = createInput("android");
    inputBox.position(10, 10);
    inputButton = createButton("Make");
    inputButton.position(inputBox.x + inputBox.width, inputBox.y);
    inputButton.mousePressed(textButtonOnClickListener)


    textButtonOnClickListener();



}

function draw() {
    // if (frameCount > 730) return;

    background(0);

    // noStroke();
    // fill(255);//, 255, 0);

    let size = 180;
    textSize(size);
    textFont(font);
    textAlign(CENTER);

    fill(255);
    noStroke();
    stroke(255, 0, 0);
    strokeWeight(5);
    // bezier

    beginShape();
    // vertex(491.04, 333.97);
    // vertex(491.04, 178.03);
    // bezierVertex(491.04, 178.03, 491.04, 142.3, 441.04, 91.43, 471.98, 109.29);
    // vertex(441.04, 91.43);
    // vertex(306, 13.47);
    // bezierVertex(306, 13.47, 275.06, -4.39, 206, 13.47, 236.94, -4.39);
    // vertex(206, 13.47);
    // vertex(70.94, 91.43);
    // bezierVertex(70.94, 91.43, 40, 109.29, 20.94, 178.03, 20.94, 142.31);
    // vertex(20.94, 178.03);
    // vertex(20.94, 333.96)
    // bezierVertex(20.94, 333.96, 20.94, 369.69, 70.94, 420.56, 40, 402.7);
    // vertex(70.94, 420.56);
    // vertex(206, 498.53);
    // bezierVertex(206, 498.53, 236.94, 516.39, 306, 498.53, 275.06, 516.39);
    // vertex(306, 498.53);
    // vertex(441.04, 420.56);
    // bezierVertex(441.04, 420.56, 471.98, 402.7, 491.04, 333.97, 491.04, 369.69);
    // vertex(491.04, 333.97);

    // vertex(20.45, 177.81);
    // vertex(20.45, 334.31);
    // bezierVertex(20.45, 334.31, 20.45, 339.78, 21.79, 350.49, 20.91, 345.19);
    // bezier(21.79, 350.49);
    // bezier(21.8, 350.49);

    vertex()

    endShape();
    //
    // fill(255, 0, 255);
    // noStroke();
    // circle(441, 91.4, 10);
    // circle(306, 13.5, 10);



}



function getInverseColor(colorString) {
    let c = color(colorString);
    let r = 255 - red(c);
    let g = 255 - green(c);
    let b = 255 - blue(c);

    return color(r, g, b);
}

function textButtonOnClickListener() {
}

function keyPressed(key) {
    switch (key.key) {
    }
}

function mouseClicked() {
}

function mousePressed() {
}

function mouseReleased() {

}

function getRandomInt(min, max) {
    return Math.floor(random(min, max + 1));
}

function mouseWheel(event) {
    // if (event.delta >= 0 && brushSize < 150) {
    //     brushSize++;
    // } else if (event.delta < 0 && brushSize > 0) {
    //     brushSize--;
    // }
}