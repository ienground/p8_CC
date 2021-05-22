/**
 * Developed by IENGROUND of ienlab.
 * @ienground_
 * Ericano Rhee on github.com/ienground
 */

let font;
let inputBox, inputButton;

let content = "android";
let oldContent = "android";

let contentState = [];

let size = 200;

let navy, orange, blue, sky;

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
    if (frameCount > 230) return;

    background(0);

    noStroke();
    fill(255);//, 255, 0);

    let size = 200;
    textSize(size);
    textFont(font);
    textAlign(CENTER);

    let tWidth = textWidth(content);

    for (let i = 0; i < content.length; i++) {
        let letterWidth = 0;
        for (let j = 0; j < i; j++) {
            letterWidth += textWidth(content[j]);
        }

        if (contentState[i] >= 0) {
            contentState[i]++;

            let textBox = font.textBounds(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2)

            if (contentState[i] < 60) { // 땅 고르기
                drawLevelGroundAndCrain(i, tWidth, letterWidth);
            } else if (contentState[i] < 120) { // 철심 세우기
                if (i + 1 < content.length) {
                    contentState[i + 1]++;
                }

                drawGround(i, tWidth, letterWidth);
                drawSkeleton(i, tWidth, letterWidth, textBox);

                drawCrain(i, tWidth, letterWidth);
            } else if (contentState[i] < 180) {
                drawGround(i, tWidth, letterWidth);
                drawSkeleton(i, tWidth, letterWidth, textBox);
                drawLetterSkeleton(i, tWidth, letterWidth);

                drawCrain(i, tWidth, letterWidth);
            } else if (contentState[i] < 240) {
                drawGround(i, tWidth, letterWidth);
                drawSkeleton(i, tWidth, letterWidth, textBox);
                drawLetterSkeleton(i, tWidth, letterWidth);

                drawCrain(i, tWidth, letterWidth);
            }
        }

        // if (contentState[i] >= 0) { // 땅 고르기

    }

    // for (let i = 0; i < 100; i++) {
    //     fill(i + 50);
    //     text("ABCDEFG", width / 2, height / 2 - i / 2);
    // }



}

function drawLevelGroundAndCrain(i, tWidth, letterWidth) {
    fill('#5d4037');
    text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2);

    if (contentState[i] >= 30 && contentState[i] < 40) {
        noFill();
        strokeWeight(3);
        stroke('#fff176');
        for (let j = 0; j < contentState[i] - 30; j++) {
            text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - j);
        }
    } else if (contentState[i] >= 40) { // 40 ~ 60
        noFill();
        stroke('#fff176');
        strokeWeight(3);
        for (let j = 0; j < 10; j++) {
            text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - j);
        }

        stroke('#ffa000');

        for (let j = 0; j <= contentState[i] - 40; j++) {
            rect(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2, 20, -j * 200 / 20);
        }

        beginShape();
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - (contentState[i] - 40) * 200 / 20);
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 6, height / 2 - (contentState[i] - 40) * 200 / 20);
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2 - (contentState[i] - 40 + 2) * 200 / 20);
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - (contentState[i] - 40) * 200 / 20);
        endShape();

        if (contentState[i] >= 48) {
            line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (contentState[i] - 40 - 8) * 200 / 20
                ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (contentState[i] - 40) * 200 / 20)
        } else {
            line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2
                ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (contentState[i] - 40) * 200 / 20)
        }
    }
}

function drawGround(i, tWidth, letterWidth) {
    fill('#5d4037');
    text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2);

    noFill();
    stroke('#fff176');
    strokeWeight(3);
    for (let j = 0; j < 10; j++) {
        text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - j);
    }
}

function drawCrain(i, tWidth, letterWidth) {
    stroke('#ffa000');
    strokeWeight(3);

    for (let j = 0; j <= 20; j++) {
        rect(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2, 20, -j * 200 / 20);
    }

    beginShape();
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - 20 * 200 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 6, height / 2 - 20 * 200 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2 - (20 + 2) * 200 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - 20 * 200 / 20);
    endShape();

    line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (60 - 40 - 8) * 200 / 20
        ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (60 - 40) * 200 / 20)
}

function drawSkeleton(i, tWidth, letterWidth, textBox) {
    let state = contentState[i];
    if (state >= 120) {
        state = 120;
    }

    strokeWeight(5);
    stroke('#134b8b');
    line(textBox.x, height / 2 - textBox.h, textBox.x, height / 2 - (state - 60) * 200 / 60 - textBox.h);
    line(textBox.x + textBox.w, height / 2 - textBox.h, textBox.x + textBox.w, height / 2 - (state - 60) * 200 / 60 - textBox.h);
    stroke('#1565c0');
    line(textBox.x, height / 2, textBox.x, height / 2 - (state - 60) * 200 / 60);
    line(textBox.x + textBox.w, height / 2, textBox.x + textBox.w, height / 2 - (state - 60) * 200 / 60);
}

function drawLetterSkeleton(i, tWidth, letterWidth) {
    let state = contentState[i];
    if (state >= 180) {
        state = 180;
    }
    stroke('#1565c0');
    for (let j = 0; j <= state - 120 ; j += 3) {
        text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - j * 200 / 60);
    }
}

function textButtonOnClickListener() {
    oldContent = content;
    content = inputBox.value();

    contentState = [0];
    for (let i = 1; i < content.length; i++) {
        contentState.push(-1);
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