import {PlayerBar} from "./PlayerBar.js";

export class Game {
    #canvas;
    #playerBar;

    constructor({ canvas }) {
        this.#canvas = canvas;
        this.#playerBar = new PlayerBar({canvas});
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

        requestAnimationFrame(() => this.#render());
    }
}
