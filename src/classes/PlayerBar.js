import {Position} from "./Position.js";

export class PlayerBar {
    #speed;
    #color;
    #position;

    constructor({color = 'black', speed = 5, canvas}) {
        const width = canvas.blockSize * 6;

        this.#position = new Position({
            canvas,
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

    render() {
        this.#position.canvas.ctx.fillStyle = this.#color;
        this.#position.canvas.ctx.fillRect(this.#position.x, this.#position.y, this.#position.width, this.#position.height);

        this.#position.recalculateXPosition();
    }

    #handleBarMove() {
        window.addEventListener('keydown', (event) => this.#moveLeft(event));
        window.addEventListener('keydown', (event) => this.#moveRight(event));
        window.addEventListener('keyup', () => this.#reset());
    }

    #moveRight(event) {
        if (event.key !== 'ArrowRight' || this.#position.dx > 0) return;

        this.#position.dx = this.#speed;
    }

    #moveLeft(event) {
        if (event.key !== 'ArrowLeft' || this.#position.dx < 0) return;

        this.#position.dx = -this.#speed;
    }

    #reset() {
        this.#position.dx = 0;
    }

    set dx(dx) {
        this.#position.dx = dx;
    }
}
