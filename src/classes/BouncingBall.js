import {Position} from "./Position.js";

export class BouncingBall {
    #position;

    constructor(canvas) {
        this.#position = new Position({
            x: 0,
            y: 0,
            dx: 0,
            dy: 0,
            size: canvas.blockSize,
            canvas
        });
    }
}
