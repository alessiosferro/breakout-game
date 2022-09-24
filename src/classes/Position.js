export class Position {
    #y;
    #x;
    #dy;
    #dx;
    #width;
    #height;
    #canvas;

    constructor({y, x, dy, dx, width, height, canvas}) {
        this.#y = y;
        this.#x = x;
        this.#dy = dy;
        this.#dx = dx;
        this.#width = width;
        this.#height = height;
        this.#canvas = canvas;
    }

    get canvas() {
        return this.#canvas;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get dx() {
        return this.#dx;
    }

    get dy() {
        return this.#dy;
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    set dx(dx) {
        this.#dx = dx;
    }

    set dy(dy) {
        this.#dy = dy;
    }

    #isNextYPositionOutsideCanvas() {
        return this.#y + this.#dy <= 0;
    }

    #isNextYPositionOutsideCanvasHeight() {
        return this.#y + this.#height + this.#dy >= this.#canvas.height;
    }

    #isNextXPositionOutsideCanvas() {
        return this.#x + this.#dx <= 0;
    }

    #isNextXPositionOutsideCanvasWidth() {
        return this.#x + this.#width + this.#dx >= this.#canvas.width;
    }

    #invertYSpeed() {
        this.#dy = -this.#dy;
    }

    #invertXSpeed() {
        this.#dx = -this.#dx;
    }

    recalculateYPosition() {
        if (this.#isNextYPositionOutsideCanvasHeight()) {
            this.#y = this.#canvas.height - this.#height;
            this.#invertYSpeed();
            return;
        }

        if (this.#isNextYPositionOutsideCanvas()) {
            this.#y = 0;
            this.#invertYSpeed();
            return;
        }

        this.#y += this.#dy;
    }

    recalculateXPosition(isMovingObject = false) {
        if (this.#isNextXPositionOutsideCanvasWidth()) {
            this.#x = this.#canvas.width - this.#width;

            if (!isMovingObject) return;
            this.#invertXSpeed();
            return;
        }

        if (this.#isNextXPositionOutsideCanvas()) {
            this.#x = 0;

            if (!isMovingObject) return;
            this.#invertXSpeed();
            return;
        }

        this.#x += this.#dx;
    }
}
