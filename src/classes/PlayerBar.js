export class PlayerBar {
    #width;
    #height;
    #speed;
    #x;
    #y;
    #color;
    #canvas;
    #dx = 0;

    constructor({color = 'black', speed = 5, canvas}) {
        this.#width = canvas.blockSize * 6;
        this.#height = canvas.blockSize;
        this.#color = color;
        this.#speed = speed;
        this.#canvas = canvas;
        this.#y = canvas.height - canvas.blockSize * 3;
        this.#x = (canvas.width / 2) - (this.#width / 2);
        this.#handleBarMove();
    }

    render() {
        this.#canvas.ctx.fillStyle = this.#color;
        this.#canvas.ctx.fillRect(this.#x, this.#y, this.#width, this.#height);

        if (this.#x + this.#dx < 0 || this.#x + this.#width + this.#dx >= this.#canvas.width) return;

        this.#x += this.#dx;
    }

    #handleBarMove() {
        window.addEventListener('keydown', (event) => this.#moveLeft(event));
        window.addEventListener('keydown', (event) => this.#moveRight(event));
        window.addEventListener('keyup', () => this.#reset());
    }

    #moveRight(event) {
        if (event.key !== 'ArrowRight' || this.#dx > 0) return;

        this.#dx = this.#speed;
    }

    #moveLeft(event) {
        if (event.key !== 'ArrowLeft' || this.#dx < 0) return;

        this.#dx = -this.#speed;
    }

    #reset() {
        this.#dx = 0;
    }

    set dx(dx) {
        this.#dx = dx;
    }
}
