/**
 * Developed by IENGROUND of ienlab.
 * @ienground_
 * Ericano Rhee on github.com/ienground
 */

class Cannon {
    constructor(x, y, size, angle) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = angle;
    }

    draw() {
        stroke(0);
        strokeWeight(0.05 * this.size);
        fill('#93570f');
        beginShape();
        vertex(this.x - this.size / 2, this.y);
        vertex(this.x - this.size / 2, this.y + this.size / 4);
        vertex(this.x + this.size / 2, this.y + this.size / 8);
        vertex(this.x + this.size / 2, this.y - this.size * 3 / 8);
        vertex(this.x + this.size / 4, this.y - this.size * 3 / 8);
        vertex(this.x, this.y - this.size / 8);
        vertex(this.x - this.size / 2, this.y);
        endShape();

        fill('#444649')
        circle(this.x + this.size / 2, this.y + this.size / 8, this.size / 2);

        fill('#676a6d')
        push();
        translate(this.x + this.size / 4, this.y - this.size * 3 / 8);
        rotate(this.angle);
        circle(-this.size / 4, 0, this.size / 8);
        arc(0, 0, this.size / 2, this.size / 2, 90, 270, PIE);
        rect(0, -this.size / 4, this.size, this.size / 2);
        rect(-this.size / 10, -this.size / 3.5, this.size / 5, this.size / 1.75);
        rect(this.size - this.size / 10, -this.size / 3.5, this.size / 5, this.size / 1.75);
        pop();
    }

    setAngle(angle) {
        this.angle = angle;
    }

    getEndX() {
        return this.x + this.size / 4 + this.size * cos(this.angle);
    }

    getEndY() {
        return this.y - this.size * 3 / 8 + this.size * sin(this.angle);
    }
}

let points = [], oldPoints = [];
let currentPointsX = [], currentPointsY = [];
let font;
let inputBox, inputButton;
let content = "android";
let oldContent = "android";
let sampleFactor = 12;

let cannon;

let moving_flag = 0;
let progress = 0;
let maxProgress = 5 * 60;

function preload() {
    font = loadFont("assets/ProductSans-Regular.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    inputBox = createInput("android");
    inputBox.position(10, 10);
    inputButton = createButton("Make");
    inputButton.position(inputBox.x + inputBox.width, inputBox.y);
    inputButton.mousePressed(textButtonOnClickListener)

    let size = 50;
    cannon = new Cannon(size, height - size / 2, size, 0);

    textFont(font)
    textSize(100);

    let tWidth = textWidth(content);
    let oldTWidth = textWidth(oldContent);

    points = font.textToPoints(content, width / 2 - tWidth / 2, height / 2, 100, {
        sampleFactor: sampleFactor / 100,
        simplifyThreshold: 0
    });

    oldPoints = points;
}

function draw() {
    background(255);

    // cannon.setAngle(frameCount % 360);
    cannon.draw();

    noStroke();
    fill(255, 0, 0);
    // circle(cannon.getEndX(), cannon.getEndY(), 20);

    noStroke();
    fill(0);
    for (let i = 0; i < points.length; i++) {
        // circle(points[i].x, points[i].y, 5);
    }

    fill(255, 0, 0);
    // for (let i = -150; i < 150; i++) {
    //     circle(width / 2 + i, height / 2 + -25 + 50 * sin(i + frameCount), 5);
    // }

    fill(0, 255, 0);

    let length = points.length;
    if (length > oldPoints.length) {
        length = oldPoints.length;
    }

    if (progress <= maxProgress) {
        for (let i = 0; i < length; i++) {
            currentPointsX[i] = map(progress, 0, maxProgress, oldPoints[i].x, points[i].x);
            currentPointsY[i] = map(progress, 0, maxProgress, oldPoints[i].y, points[i].y);
        }
    }

    for (let i = 0; i < currentPointsX.length; i++) {
        circle(currentPointsX[i], currentPointsY[i], 5);
        // circle(currentPointsX[i], currentPointsY[i] + -5 + 10 * sin(currentPointsX[i] + frameCount), 5);
    }

    // fill(255, 0, 0);
    // for (let i = 0; i < oldPoints.length; i++) {
    //     circle(oldPoints[i].x, oldPoints[i].y, 5);
    // }
    //
    // fill(0, 0, 255);
    // for (let i = 0; i < points.length; i++) {
    //     circle(points[i].x, points[i].y, 5);
    // }

    progress++;


}

function textButtonOnClickListener() {
    content = inputBox.value();

    oldPoints = points;

    let tWidth = textWidth(content);

    points = font.textToPoints(content, width / 2 - tWidth / 2, height / 2, 100, {
        sampleFactor: sampleFactor / 100,
        simplifyThreshold: 0
    });

    // let length = points.length;
    // if (length > oldPoints.length) {
    //     length = oldPoints.length;
    // }

    for (let i = 0; i < points.length - oldPoints.length; i++) {
        oldPoints[oldPoints.length + i]({ x : width, y : height })
    }

    for (let i = 0; i < oldPoints.length - points.length; i++) {
        points[points.length + i]({ x : 0, y : height })
    }
}

function getInverseColor(colorString) {
    let c = color(colorString);
    let r = 255 - red(c);
    let g = 255 - green(c);
    let b = 255 - blue(c);

    return color(r, g, b);
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