/**
 * Developed by IENGROUND of ienlab.
 * @ienground_
 * Ericano Rhee on github.com/ienground
 */

let content = "Romance";

let initialX = [];
let initialY = [];
let pr = [];

let letter = [];
let colors = [];
let shadows = [];

let textPoint;

let size = 150;
let duration = 60 * 8;

let flowerColor = [];

let mousePressedTime = 0;

function preload() {
    font = loadFont('assets/PeaceSans.otf')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    colorMode(HSB);

    background(255);

    fill(0);
    noStroke();

    textFont(font);
    textSize(size);

    let tWidth = textWidth(content);
    textPoint = font.textToPoints(content, width / 2 - tWidth / 2, height / 2, size, {
        sampleFactor: 0.1,
        simplifyThreshold: 0
    });

    for (let i = 0; i < textPoint.length * 100; i++) {
        let s = getRandomInt(0, 100);
        letter.push(content[getRandomInt(0, content.length - 1)]);
        colors.push(color(350, s, 100));
        initialX.push(getRandomInt(0, width));
        initialY.push(getRandomInt(0, height - 10));
        pr.push(getRandomInt(0, 359));
    }

    for (let i = 0; i < duration; i++) {
        let s = getRandomInt(0, 100);
        flowerColor.push(color(350, s, 100));
    }

    textAlign(CENTER);
}

function draw() {
    background(255);

    fill(0);
    noStroke();

    textSize(size / 8);

    if (frameCount > duration * 0.5 && frameCount <= duration * 1.5) {
        push();
        translate(width / 2, height / 2 - 200);
        for (let i = frameCount - duration * 0.5 - 1; i >= 0; i--) {
            if (i % 5 === 0) {
                fill(color(350, 100 - i * 100 / duration, 100));
                circle(50 * cos(i), 50 * sin(i), i);
            }
        }
        pop();
    } else if (frameCount > 1.5 * duration) {
        push();
        translate(width / 2, height / 2 - 200);
        for (let i = duration - 1; i >= 0; i--) {
            if (i % 5 === 0) {
                fill(color(350, 100 - i * 100 / duration, 100));
                circle(50 * cos(i), 50 * sin(i), i);
            }
        }
        pop();
    }

    if (frameCount <= duration) {
        for (let i = 0; i < textPoint.length; i++) {
            push();
            let x = map(frameCount, 0, duration, initialX[i], textPoint[i].x);
            let y = map(frameCount, 0, duration, initialY[i], textPoint[i].y);

            let dx = map(mouseX, 0, width, -5, 5);
            let dy = map(mouseY, 0, height, -5, 5);

            translate(x - dx, y - dy);
            rotate(pr[i]);

            let distance = dist(mouseX, mouseY, x, y);
            if (distance <= 40) {
                scale(distance / 40, distance / 40);
            }

            fill(colors[i]);
            text(letter[i], 0, 0);
            pop();

            pr[i] = (pr[i] + 1) % 360;
        }
    } else {
        for (let i = 0; i < textPoint.length; i++) {
            push();

            let dx = map(mouseX, 0, width, -5, 5);
            let dy = map(mouseY, 0, height, -5, 5);

            translate(textPoint[i].x - dx, textPoint[i].y - dy);
            rotate(pr[i]);

            let distance = dist(mouseX, mouseY, textPoint[i].x, textPoint[i].y);
            if (distance <= 40) {
                scale(distance / 40, distance / 40);
            }

            fill(colors[i]);
            text(letter[i], 0, 0);
            pop();

            pr[i] = (pr[i] + 1) % 360;
        }
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

function getRandomInt(min, max) {
    return Math.floor(random(min, max + 1));
}