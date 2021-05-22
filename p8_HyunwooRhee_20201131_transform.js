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

let font;
let inputBox, inputButton;

let content = "android";
let oldContent = "android";

let contentX, contentY, oldContentX, oldContentY;
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

    navy = color('#070728');
    orange = color('#EA8B16')
    blue = color('#1E78F0')
    sky = color('#7DCDf5')

    // let tWidth = textWidth(content);
    // contentX = [];
    //
    // for (let i = 0; i < content.length; i++) {
    //     let letterWidth = 0;
    //     for (let j = 0; j < i; j++) {
    //         letterWidth += textWidth(content[j]);
    //     }
    //     contentX.push(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2);
    // }
    // fill(0);
    // textFont(font);
    // textSize(size);
    textAlign(CENTER);

    textButtonOnClickListener();

    let letter = 'A';
    let size = 200;
    textSize(size);
    let tWidth = textWidth(letter);
    p = font.textToPoints(letter, width / 2 - tWidth / 2, height / 2, size, {
        sampleFactor: 2,
        simplifyThreshold: 0
    });

    let letter2 = 'B';
    let tWidth2 = textWidth(letter2);
    p2 = font.textToPoints(letter2, width / 2 - tWidth2 / 2, height / 2, size, {
        sampleFactor: 2,
        simplifyThreshold: 0
    });

    print(p.length);
    print(p2.length);

}

function draw() {
    background(255);
    // setBackground(frameCount / 10);

    let waveAmp = 20;
    let waveLength = 2;

    // makeWaveform(100, height / 2 - 25, 45, 2, '#28A9E0');
    // makeWaveform(0, height / 2, waveAmp, waveLength, '#008FD3');

    // text

    noStroke();
    fill(0, 255, 0);



    let duration = 60 * 2;
    beginShape();

    let timer = frameCount;

    if (timer <= duration) {
        let length = p.length;

        if (p.length > p2.length) { // 더 작은 것
            length = p2.length;
        }

        for (let i = 0; i < length; i++) {
            let x = map(timer, 0, duration, p[i].x, p2[i].x);
            let y = map(timer, 0, duration, p[i].y, p2[i].y);
            vertex(x, y);
        }


        if (p.length > p2.length) { // p는 할 게 더 남음
            for (let i = 0; i < p.length - p2.length; i++) {
                let x = map(timer, 0, duration, p[p2.length + i].x, p2[0].x);
                let y = map(timer, 0, duration, p[p2.length + i].y, p2[0].y);
                vertex(x, y);
            }
        } else {
            for (let i = 0; i < p2.length - p.length; i++) {
                let x = map(timer, 0, duration, p[0].x, p2[p.length + i].x);
                let y = map(timer, 0, duration, p[0].y, p2[p.length + i].y);
                vertex(x, y);
            }
        }

        let x = map(timer, 0, duration, p[0].x, p2[0].x);
        let y = map(timer, 0, duration, p[0].y, p2[0].y);
        vertex(x, y);
    } else {
        for (let i = 0; i < p2.length; i++) {
            vertex(p2[i].x, p2[i].y);
        }
        vertex(p2[0].x, p2[0].y);
    }

    endShape();


    // text(content, width / 2, height / 2 + size * 0.6);
    // fill(255);
    //
    //
    //
    // for (let i = 0; i < content.length; i++) {
    //     if (i % 3 !== 0) {
    //         text(content[i], contentX[i], height / 2 + size * 0.6 + waveAmp * sin((frameCount + contentX[i]) / waveLength));
    //     }
    // }
    //
    // makeWaveform(0, height / 2 + 100, waveAmp, waveLength, '#252F6D');
    //
    // fill(255);
    //
    // for (let i = 0; i < content.length; i++) {
    //     if (i % 3 === 0) {
    //         text(content[i], contentX[i], height / 2 + size * 0.85 + waveAmp * sin((frameCount + contentX[i]) / waveLength));
    //     }
    // }
    //
    // makeWaveform(0, height / 2 + 150, waveAmp, waveLength,'#0C1848');


}

function makeWaveform(waveXOffset, waveHeight, waveAmp, waveLength, waveColor) {
    noStroke();
    fill(waveColor);

    beginShape();

    vertex(width / 2 - waveXOffset, waveHeight + waveAmp * sin((frameCount + width / 2) / waveLength), 20);

    for (let i = 0; i <= width + waveXOffset; i++) {
        vertex(i - waveXOffset, waveHeight + waveAmp * sin((frameCount + i) / waveLength));
    }
    vertex(width , height);
    vertex(-waveXOffset, height);
    vertex(-waveXOffset, waveHeight + waveAmp * sin(frameCount / waveLength));
    endShape();
}

function textButtonOnClickListener() {
    oldContent = content;
    content = inputBox.value();

    let tWidth = textWidth(content);
    contentX = [];

    for (let i = 0; i < content.length; i++) {
        let letterWidth = 0;
        for (let j = 0; j < i; j++) {
            letterWidth += textWidth(content[j]);
        }
        contentX.push(width / 2 - tWidth / 2 + letterWidth + textWidth(content[i]) / 2);
    }

}

function setBackground(timer) {
    colorMode(RGB, 255);
    let startColor;
    if (timer % 400 > 0 && timer % 400 < 50) {
        startColor = lerpColor(blue, navy, (timer % 400) / 50);
        for (let y = 0; y < height; y++) {
            let color = lerpColor(startColor, orange, y / height);
            stroke(color);
            line(0, y, width, y);
        }
    } else if (timer % 400 >= 50 && timer % 400 < 100) {
        startColor = lerpColor(orange, navy, (timer % 400) / 50 - 1);
        for (let y = 0; y < height; y++) {
            let color = lerpColor(navy, startColor, y / height);
            stroke(color);
            line(0, y, width, y);
        }
    } else if (timer % 400 >= 100 && timer % 400 < 150) {
        for (let y = 0; y < height; y++) {
            stroke(navy);
            line(0, y, width, y);
        }
    } else if (timer % 400 >= 150 && timer % 400 < 200) {
        startColor = lerpColor(navy, blue, (timer % 400) / 50 - 3);
        for (let y = 0; y < height; y++) {
            let color = lerpColor(navy, startColor, y / height);
            stroke(color);
            line(0, y, width, y);
        }
    } else if (timer % 400 >= 200 && timer % 400 < 250) {
        startColor = lerpColor(navy, blue, (timer % 400) / 50 - 4);
        for (let y = 0; y < height; y++) {
            let color = lerpColor(startColor, blue, y / height);
            stroke(color);
            line(0, y, width, y);
        }
    } else if (timer % 400 >= 250 && timer % 400 < 300) {
        startColor = lerpColor(blue, orange, (timer % 400) / 50 - 5);
        for (let y = 0; y < height; y++) {
            let color = lerpColor(blue, startColor, y / height);
            stroke(color);
            line(0, y, width, y);
        }
    } else if (timer % 400 >= 300 && timer % 400 < 350) {
        startColor = lerpColor(orange, sky, (timer % 400) / 50 - 6);
        for (let y = 0; y < height; y++) {
            let color = lerpColor(blue, startColor, y / height);
            stroke(color);
            line(0, y, width, y);
        }
    } else if (timer % 400 >= 350 && timer % 400 < 400) {
        startColor = lerpColor(sky, orange, (timer % 400) / 50 - 7);
        for (let y = 0; y < height; y++) {
            let color = lerpColor(blue, startColor, y / height);
            stroke(color);
            line(0, y, width, y);
        }
    }

    let angle = (timer % 400) * 360 / 400;

    let x1 = width / 2 + cos( 90 - 125 * 360 / 400 + angle) * width / 3;
    let y1 = height / 2 + height / 8 + sin( 90 - 125 * 360 / 400 + angle) * width / 3;
    let x2 = width / 2 + cos( 270 - 125 * 360 / 400 + angle) * width / 3;
    let y2 = height / 2 + height / 8 + sin( 270 - 125 * 360 / 400 + angle) * width / 3;

    noStroke();
    fill(255, 165, 0, 50);
    circle(x1, y1, 100);

    fill(255, 100, 0, 100);
    circle(x1, y1, 70);

    fill(255, 255, 255, 50);
    circle(x2, y2, 100);

    fill(255, 255, 255, 100);
    circle(x2, y2, 70);
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