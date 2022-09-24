import {Position} from "./Position.js";

export class BouncingBall {
    #position;
    #playerBar;
    #canvas;

    constructor({x, y, dx, dy, size, playerBar, canvas}) {
        this.#position = new Position({
            x,
            y,
            dx,
            dy,
            width: size,
            height: size,
            canvasWidth: canvas.width,
            canvasHeight: canvas.height,
        });

        this.#playerBar = playerBar;

        this.#canvas = canvas;
    }

    render() {
        this.#canvas.ctx.fillStyle = "crimson";
        this.#canvas.ctx.beginPath();
        this.#canvas.ctx.arc(this.#position.x + this.#position.width / 2, this.#position.y + this.#position.height / 2, this.#position.width / 2, 0, Math.PI * 2)
        this.#canvas.ctx.fill();

        this.#position.recalculateXPosition(true);
        this.#position.recalculateYPosition(true);
        this.#position.recalculateXYPosition(this.#playerBar);
    }
}
