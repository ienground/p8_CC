/**
 * Developed by IENGROUND of ienlab.
 * @ienground_
 * Ericano Rhee on github.com/ienground
 */

let letterInfo;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    letterInfo = new Map();
    letterInfo.set('A', [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('B', [[1, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 1, 1]]);
    letterInfo.set('C', [[1, 1, 1], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('D', [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 0]]);
    letterInfo.set('E', [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('F', [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 0], [1, 0, 0]]);
    letterInfo.set('G', [[1, 1, 1, 1], [1, 0, 0, 0], [1, 0, 1, 1], [1, 0, 0, 1], [1, 1, 1, 1]]);
    letterInfo.set('H', [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('I', [[1], [1], [1], [1], [1]]);
    letterInfo.set('J', [[1, 1, 1], [0, 0, 1], [0, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('K', [[1, 0, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('L', [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('M', [[1, 0, 0, 0, 1], [1, 1, 0, 1, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1]]);
    letterInfo.set('N', [[1, 0, 0, 1], [1, 1, 0, 1], [1, 0, 1, 1], [1, 0, 0, 1], [1, 0, 0, 1]]);
    letterInfo.set('O', [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('P', [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 0], [1, 0, 0]]);
    letterInfo.set('Q', [[1, 1, 1, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 1]]);
    letterInfo.set('R', [[1, 1, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('S', [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]]);
    letterInfo.set('T', [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]]);
    letterInfo.set('U', [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('V', [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 0]]);
    letterInfo.set('W', [[1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 1, 0, 1, 1], [1, 0, 0, 0, 1]]);
    letterInfo.set('X', [[1, 0, 1], [1, 0, 1], [0, 1, 0], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('Y', [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 0], [0, 1, 0]]);
    letterInfo.set('Z', [[1, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]);

    letterInfo.set('a', [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('b', [[1, 1, 1, 0], [1, 0, 1, 0], [1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 1, 1]]);
    letterInfo.set('c', [[1, 1, 1], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('d', [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 0]]);
    letterInfo.set('e', [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('f', [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 0], [1, 0, 0]]);
    letterInfo.set('g', [[1, 1, 1], [1, 0, 0], [1, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('h', [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('i', [[1], [0], [1], [1], [1]]);
    letterInfo.set('j', [[0, 0, 1], [0, 0, 1], [0, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('k', [[1, 0, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('l', [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('m', [[1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1]]);
    letterInfo.set('n', [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('o', [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('p', [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 0], [1, 0, 0]]);
    letterInfo.set('q', [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]]);
    letterInfo.set('r', [[1, 1, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('s', [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]]);
    letterInfo.set('T', [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]]);
    letterInfo.set('u', [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('v', [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 0]]);
    letterInfo.set('w', [[1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 1, 1, 1, 1]]);
    letterInfo.set('x', [[1, 0, 1], [1, 0, 1], [0, 1, 0], [1, 0, 1], [1, 0, 1]]);
    letterInfo.set('y', [[1, 0, 1], [1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]]);
    letterInfo.set('z', [[1, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('0', [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('1', [[1, 1], [0, 1], [0, 1], [0, 1], [0, 1]]);
    letterInfo.set('2', [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]]);
    letterInfo.set('3', [[1, 1, 1], [0, 0, 1], [0, 1, 1], [0, 1, 1], [1, 1, 1]]);
    letterInfo.set('4', [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]]);
    letterInfo.set('5', [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]]);
    letterInfo.set('6', [[1, 0, 0], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('7', [[1, 1, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1], [0, 0, 1]]);
    letterInfo.set('8', [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]]);
    letterInfo.set('9', [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]]);


}

function draw() {
    background(255);



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