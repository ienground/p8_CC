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
let contentColor = [];

let colorAccent = ['#f8bbd0', '#ce93d8', '#90caf9', '#4db6ac', '#ffab91']
let colorPrimary = ['#f06292', '#8e24aa', '#1976d2', '#00796b', '#e64a19']

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

    noStroke();
    fill(255);//, 255, 0);

    let size = 180;
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
                    if (contentState[i + 1] < 0) {
                        contentState[i + 1] = 0;
                    }
                }

                drawGround(i, tWidth, letterWidth);
                drawRearSkeleton(i, tWidth, letterWidth, textBox);
                drawFrontSkeleton(i, tWidth, letterWidth, textBox);

                drawCrain(i, tWidth, letterWidth);
            } else if (contentState[i] < 180) { // letter skeleton
                drawGround(i, tWidth, letterWidth);
                drawRearSkeleton(i, tWidth, letterWidth, textBox);
                drawLetterSkeleton(i, tWidth, letterWidth);
                drawFrontSkeleton(i, tWidth, letterWidth, textBox);

                drawCrain(i, tWidth, letterWidth);
            } else if (contentState[i] < 240) { // panel
                drawGround(i, tWidth, letterWidth);
                drawRearSkeleton(i, tWidth, letterWidth, textBox);
                drawPanelRear(i, tWidth, letterWidth, textBox);

                drawLetterSkeleton(i, tWidth, letterWidth);
                drawFrontSkeleton(i, tWidth, letterWidth, textBox);

                drawCrain(i, tWidth, letterWidth);
                drawPanelFront(i, tWidth, letterWidth, textBox);
            } else if (contentState[i] < 420) { // letter building
                drawGround(i, tWidth, letterWidth);
                drawRearSkeleton(i, tWidth, letterWidth, textBox);
                drawPanelRear(i, tWidth, letterWidth, textBox);

                drawFontBuildingWithSkeleton(i, tWidth, letterWidth,  colorAccent[contentColor[i]], colorPrimary[contentColor[i]]);

                drawFrontSkeleton(i, tWidth, letterWidth, textBox);

                drawCrain(i, tWidth, letterWidth);
                drawPanelFront(i, tWidth, letterWidth, textBox);
            } else if (contentState[i] < 440) {
                drawGround(i, tWidth, letterWidth);
                drawRearSkeleton(i, tWidth, letterWidth, textBox);
                drawPanelRear(i, tWidth, letterWidth, textBox);

                drawFontBuildingWithSkeleton(i, tWidth, letterWidth,  colorAccent[contentColor[i]], colorPrimary[contentColor[i]]);

                drawFrontSkeleton(i, tWidth, letterWidth, textBox);
                removeCrain(i, tWidth, letterWidth);
                drawPanelFront(i, tWidth, letterWidth, textBox);
            } else if (contentState[i] < 500) {
                drawGround(i, tWidth, letterWidth);
                drawRearSkeleton(i, tWidth, letterWidth, textBox);
                removePanelRear(i, tWidth, letterWidth, textBox);

                drawFontBuildingWithSkeleton(i, tWidth, letterWidth,  colorAccent[contentColor[i]], colorPrimary[contentColor[i]]);

                drawFrontSkeleton(i, tWidth, letterWidth, textBox);
                removePanelFront(i, tWidth, letterWidth, textBox);
            } else if (contentState[i] < 680) {
                removeRearSkeleton(i, tWidth, letterWidth, textBox);

                drawFontBuildingWithSkeleton(i, tWidth, letterWidth,  colorAccent[contentColor[i]], colorPrimary[contentColor[i]]);
                drawFontBuilding(i, tWidth, letterWidth,  colorAccent[contentColor[i]], colorPrimary[contentColor[i]]);
                removeFrontSkeleton(i, tWidth, letterWidth, textBox);
            } else if (contentState[i] < 740) {
                drawFontBuilding(i, tWidth, letterWidth,  colorAccent[contentColor[i]], colorPrimary[contentColor[i]]);
                drawRoof(i, tWidth, letterWidth);
            } else {
            // } else if (contentState[i] < 760) {
                drawFontBuilding(i, tWidth, letterWidth,  colorAccent[contentColor[i]], colorPrimary[contentColor[i]]);
                drawRoof(i, tWidth, letterWidth);
                drawWindowDoor(i, tWidth, letterWidth, textBox);
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
            rect(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2, 20, -j * 180 / 20);
        }

        beginShape();
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - (contentState[i] - 40) * 180 / 20);
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 6, height / 2 - (contentState[i] - 40) * 180 / 20);
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2 - (contentState[i] - 40 + 2) * 180 / 20);
        vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - (contentState[i] - 40) * 180 / 20);
        endShape();

        if (contentState[i] >= 48) {
            line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (contentState[i] - 40 - 8) * 180 / 20
                ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (contentState[i] - 40) * 180 / 20)
        } else {
            line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2
                ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (contentState[i] - 40) * 180 / 20)
        }
    }
}

function drawGround(i, tWidth, letterWidth) {
    noStroke();
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
    noFill();
    stroke('#ffa000');
    strokeWeight(3);

    for (let j = 0; j <= 20; j++) {
        rect(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2, 20, -j * 180 / 20);
    }

    beginShape();
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - (60 - 40) * 180 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 6, height / 2 - (60 - 40) * 180 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2 - (60 - 40 + 2) * 180 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - (60 - 40) * 180 / 20);
    endShape();

    line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (60 - 40 - 8) * 180 / 20
        ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (60 - 40) * 180 / 20)
}

function removeCrain(i, tWidth, letterWidth) {
    let state = 20 - (contentState[i] - 420);
    noFill();
    stroke('#ffa000');
    strokeWeight(3);

    for (let j = 0; j < state; j++) {
    // for (let j = contentState[i] - 440; j >= 0; j--) {
        rect(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2, 20, -j * 180 / 20);
    }

    beginShape();
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - state * 180 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 6, height / 2 - state * 180 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10, height / 2 - (state + 2) * 180 / 20);
    vertex(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) + size / 10 * 2, height / 2 - state * 180 / 20);
    endShape();

    if (state >= 8) {
        line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - (state - 8) * 180 / 20
            ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - state * 180 / 20)
    } else {
        line(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2
            ,width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) - size / 10 * 4, height / 2 - state * 180 / 20)
    }
}

function drawRearSkeleton(i, tWidth, letterWidth, textBox) {
    let state = contentState[i];
    if (state >= 120) {
        state = 120;
    }

    strokeWeight(5);
    stroke('#134b8b');
    line(textBox.x, height / 2 - textBox.h, textBox.x, height / 2 - (state - 60) * 180 / 60 - textBox.h);
    line(textBox.x + textBox.w, height / 2 - textBox.h, textBox.x + textBox.w, height / 2 - (state - 60) * 180 / 60 - textBox.h);
}

function drawFrontSkeleton(i, tWidth, letterWidth, textBox) {
    let state = contentState[i];
    if (state >= 120) {
        state = 120;
    }

    strokeWeight(5);
    stroke('#1565c0');
    line(textBox.x, height / 2, textBox.x, height / 2 - (state - 60) * 180 / 60);
    line(textBox.x + textBox.w, height / 2, textBox.x + textBox.w, height / 2 - (state - 60) * 180 / 60);
}

function drawLetterSkeleton(i, tWidth, letterWidth) {
    let state = contentState[i];
    if (state >= 180) {
        state = 180;
    }
    noFill();
    strokeWeight(5);
    stroke('#1565c0');
    for (let j = 0; j <= state - 120 ; j += 3) {
        text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - j * 180 / 60);
    }
}

function drawPanelRear(i, tWidth, letterWidth, textBox) {
    let state = contentState[i];
    if (state >= 240) {
        state = 240;
    }

    noStroke();
    fill('#546e7a');
    rect(textBox.x, textBox.y, textBox.w, -(state - 180) * 180 / 60);
}

function drawPanelFront(i, tWidth, letterWidth, textBox) {
    let state = contentState[i];
    if (state >= 240) {
        state = 240;
    }

    noStroke();
    fill('#78909c');
    rect(textBox.x, textBox.y + textBox.h, textBox.w, -(state - 180) * 180 / 60);
}

function removePanelRear(i, tWidth, letterWidth, textBox) {
    let state = 60 - (contentState[i] - 440);

    noStroke();
    fill('#546e7a');
    rect(textBox.x, textBox.y, textBox.w, -state * 180 / 60);
}

function removePanelFront(i, tWidth, letterWidth, textBox) {
    let state = 60 - (contentState[i] - 440);

    noStroke();
    fill('#78909c');
    rect(textBox.x, textBox.y + textBox.h, textBox.w, -state * 180 / 60);
}

function drawFontBuildingWithSkeleton(i, tWidth, letterWidth, colorStart, colorEnd) {
    let state = contentState[i];
    if (state >= 420) {
        state = 420;
    }
    for (let j = 0; j <= 180; j++) {
    // for (let j = 0; j <= state - 240; j++) {
        let c = lerpColor(color(colorStart), color(colorEnd), j / 180);

        if (j <= state - 240) { // 지어진 곳
            fill(c);
        } else {
            noFill();
        }

        if (j % 9 === 0) { // 빌딩, 스트로크 있음
            strokeWeight(5);
            stroke('#1565c0');
        } else {
            noStroke(); // 빌딩, 스트로크 없음
        }

        if ((j > state - 240 && j % 9 === 0) || j <= state - 240) {
            text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - j);
        }

    }
}

function removeRearSkeleton(i, tWidth, letterWidth, textBox) {
    let state = 680 - contentState[i];

    strokeWeight(5);
    stroke('#134b8b');
    line(textBox.x, height / 2 - textBox.h, textBox.x, height / 2 - state - textBox.h);
    line(textBox.x + textBox.w, height / 2 - textBox.h, textBox.x + textBox.w, height / 2 - state - textBox.h);
}

function removeFrontSkeleton(i, tWidth, letterWidth, textBox) {
    let state = 680 - contentState[i];

    strokeWeight(5);
    stroke('#1565c0');
    line(textBox.x, height / 2, textBox.x, height / 2 - state);
    line(textBox.x + textBox.w, height / 2, textBox.x + textBox.w, height / 2 - state);
}

function drawFontBuilding(i, tWidth, letterWidth, colorStart, colorEnd) {
    let state = 180 - (contentState[i] - 500);
    if (state < 0) {
        state = 0;
    }

    noStroke();
    for (let j = state; j < 180; j++) {
        let c = lerpColor(color(colorStart), color(colorEnd), j / 180);
        fill(c);
        text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - j);
    }
}

function drawRoof(i, tWidth, letterWidth) {
    let state = contentState[i];
    if (state >= 740) {
        state = 740;
    }

    noStroke();
    fill('#A0A0A0');
    text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - 179);

    noFill();
    stroke('#900000');
    strokeWeight(5);
    for (let j = 0; j < state - 680; j++) {
        text(content[i], width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2, height / 2 - 179 - j / 4);
    }
}

function drawWindowDoor(i, tWidth, letterWidth, textBox) {
    noStroke();
    if ('adq4'.includes(content[i])) {
        fill(50);
        rect(textBox.x + textBox.w * 0.7, textBox.y + textBox.h, textBox.w * 0.15, - textBox.w * 0.3);
        fill(255);
        circle(textBox.x + textBox.w * 0.8, textBox.y + textBox.h - textBox.w * 0.15, 5);
    } else if ('bhjkmnpruxyABDEFHKLMNPRX79'.includes(content[i])) {
        fill(50);
        rect(textBox.x + textBox.w * 0.15, textBox.y + textBox.h, textBox.w * 0.15, - textBox.w * 0.3);
        fill(255);
        circle(textBox.x + textBox.w * 0.25, textBox.y + textBox.h - textBox.w * 0.15, 5);
    } else if ('cefgilostvzCGIOSTUVYZ123580'.includes(content[i])) {
        fill(50);
        rect(textBox.x + textBox.w * 0.425, textBox.y + textBox.h, textBox.w * 0.15, - textBox.w * 0.3);
        fill(255);
        circle(textBox.x + textBox.w * 0.525, textBox.y + textBox.h - textBox.w * 0.15, 5);
    } else if ('wJW'.includes(content[i])) {
        fill(50);
        rect(textBox.x + textBox.w * 0.225, textBox.y + textBox.h, textBox.w * 0.15, - textBox.w * 0.3);
        fill(255);
        circle(textBox.x + textBox.w * 0.325, textBox.y + textBox.h - textBox.w * 0.15, 5);
    } else if ('Q'.includes(content[i])) {
        fill(50);
        rect(textBox.x + textBox.w * 0.725, textBox.y + textBox.h, textBox.w * 0.15, - textBox.w * 0.3);
        fill(255);
        circle(textBox.x + textBox.w * 0.825, textBox.y + textBox.h - textBox.w * 0.15, 5);
    }
}

function textButtonOnClickListener() {
    frameCount = 0;
    oldContent = content;
    content = inputBox.value();

    contentState = [0];
    contentColor = [];
    for (let i = 1; i < content.length; i++) {
        contentState.push(-1);
    }

    for (let i = 0; i < content.length; i++) {
        contentColor.push(getRandomInt(0, colorAccent.length - 1));
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