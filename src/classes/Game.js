import {PlayerBar} from "./PlayerBar.js";
import {BouncingBall} from "./BouncingBall.js";

export class Game {
    #canvas;
    #bouncingBall;
    #playerBar;

    constructor({ canvas }) {
        this.#canvas = canvas;
        this.#playerBar = new PlayerBar({canvas, color: 'crimson'});

        this.#bouncingBall = new BouncingBall({
            x: canvas.width / 2,
            y: canvas.height / 2,
            dx: 5,
            dy: 5,
            size: canvas.blockSize,
            canvas,
            playerBar: this.#playerBar,
        });
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

        this.#playerBar.render();
        this.#bouncingBall.render();

        requestAnimationFrame(() => this.#render());
    }
}
