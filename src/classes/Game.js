export class Game {
    #canvas;

    constructor({ canvas }) {
        this.#canvas = canvas;
    }

    #setup() {
        const root = document.querySelector('#root');
        root.className = "canvas-container";
        root.appendChild(this.#canvas.element);
    }

    run() {
        this.#setup();
        this.#render();
    }

    #render() {
        this.#canvas.clear();

        this.#canvas.ctx.fillStyle = 'black';
        this.#canvas.ctx.fillRect(20, 20, 300, 300);

        requestAnimationFrame(() => this.#render());
    }
}
