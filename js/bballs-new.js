/* 
* Javascript to create bouncing balls version 2.
* Date: 19 November 2024
* Programmer: Mukul Dharwadkar
*/

const canvas = document.querySelector("canvas");
const ballCount = document.querySelector(".ball-counter");
const ctx = canvas.getContext("2d");
const body = document.body;

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = 800);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

class Ball extends Shape {
    color;
    size;
    exists;

    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
        this.exists = true;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if (this.x + this.size >= width) {
            this.velX = -(this.velX);
        }

        if (this.x - this.size <= 0) {
            this.velX = -(this.velX);
        }

        if (this.y + this.size >= height) {
            this.velY = -(this.velY);
        }

        if (this.y - this.size <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;

    }

    collisionDetect() {
        for (const ball of balls) {
            if (!(this === ball) && ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

class EvilCircle extends Shape {
    constructor(x, y) {
        super(x, y, 20, 20);
        // this.velX = 20;
        // this.velY = 20;
        this.color = "white";
        this.size = 10;

        window.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "ArrowLeft":
                    this.x -= this.velX;
                    break;
                case "ArrowRight":
                    this.x += this.velX;
                    break;
                case "ArrowUp":
                    this.y -= this.velY;
                    break;
                case "ArrowDown":
                    this.y += this.velY;
                    break;
            }
        });
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    checkBounds() {
        if (this.x + this.size >= width) {
            this.x -= this.size;
        }

        if (this.x - this.size <= 0) {
            this.x += this.size;
        }

        if (this.y + this.size >= height) {
            this.y -= this.size;
        }

        if (this.y - this.size <= 0) {
            this.y += this.size;
        }

        // this.x += this.velX;
        // this.y += this.velY;

    }

    collisionDetect() {
        for (const ball of balls) {
            if (ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.exists = false;
                    count--;
                    ballCount.textContent = "Balls left: " + count;
                }
            }
        }
        const existingPanel = document.querySelector(".msgBox");
        if (existingPanel) {
            existingPanel.remove();
        }
        if (count === 0) {
            const panel = document.createElement("div");
            panel.setAttribute("class", "msgBox");
            body.appendChild(panel)

            const msg = document.createElement("p");
            msg.textContent = "You won!!!";
            panel.appendChild(msg);

            const closeBtn = document.createElement("button");
            closeBtn.textContent = "x";
            panel.appendChild(closeBtn);
    
            closeBtn.addEventListener("click", () => 
            panel.parentNode.removeChild(panel),);
        }
    }
}

const balls = [];
let count = 25;

while (balls.length < count) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size,
    );

    balls.push(ball);
}
ballCount.textContent = "Balls left: " + count;

const villain = new EvilCircle(
    random(0 + 10, width - 10),
    random(0 + 10, height - 10),
)

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    
    
    for (const ball of balls) {
        if (ball.exists) {    
            ball.draw();
            ball.update();
            ball.collisionDetect();
        }
    }
    
    villain.draw();
    villain.checkBounds();
    villain.collisionDetect();

    requestAnimationFrame(loop);
}

loop();