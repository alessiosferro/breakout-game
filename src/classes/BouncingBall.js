import {Position} from "./Position.js";

export class BouncingBall {
    #position;

    constructor({x, y, dx, dy, size, canvas}) {
        this.#position = new Position({
            x,
            y,
            dx,
            dy,
            width: size,
            height: size,
            canvas
        });
    }

    render() {
        this.#position.canvas.ctx.fillStyle = "crimson";
        this.#position.canvas.ctx.arc(this.#position.x, this.#position.y, this.#position.width / 2, 0, 2 * Math.PI)
        this.#position.canvas.ctx.fill();

        this.#position.recalculateXPosition(true);
        this.#position.recalculateYPosition(true);
    }
}
