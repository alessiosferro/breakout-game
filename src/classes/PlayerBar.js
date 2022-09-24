import {Position} from "./Position.js";

export class PlayerBar {
    #speed;
    #color;
    #position;
    #canvas;

    constructor({color = 'black', speed = 5, canvas}) {
        const width = canvas.blockSize * 6;
        this.#canvas = canvas;

        this.#position = new Position({
            canvasWidth: canvas.width,
            canvasHeight: canvas.height,
            width,
            height: canvas.blockSize,
            y: canvas.height - canvas.blockSize * 3,
            x: (canvas.width / 2) - (width / 2),
            dx: 0,
            dy: 0
        });

        this.#speed = speed;
        this.#color = color;

        this.#handleBarMove();
    }

    get position() {
        return this.#position;
    }

    get canvas() {
        return this.#canvas;
    }

    render() {
        this.#canvas.ctx.fillStyle = this.#color;
        this.#canvas.ctx.fillRect(this.#position.x, this.#position.y, this.#position.width, this.#position.height);
        this.#position.recalculateXPosition();
    }

    #handleBarMove() {
        window.addEventListener('keydown', (event) => this.#moveLeft(event));
        window.addEventListener('keydown', (event) => this.#moveRight(event));
        window.addEventListener('keyup', event => this.#resetMoveLeft(event));
        window.addEventListener('keyup', event => this.#resetMoveRight(event));
    }

    #resetMoveRight(event) {
        if (event.key !== 'ArrowRight' || this.#position.dx < 0) return;
        this.#position.dx = 0;
    }

    #resetMoveLeft(event) {
        if (event.key !== 'ArrowLeft' || this.#position.dx > 0) return;
        this.#position.dx = 0;
    }

    #moveRight(event) {
        if (event.key !== 'ArrowRight' || this.#position.dx > 0) return;
        this.#position.dx = this.#speed;
    }

    #moveLeft(event) {
        if (event.key !== 'ArrowLeft' || this.#position.dx < 0) return;
        this.#position.dx = -this.#speed;
    }
}
