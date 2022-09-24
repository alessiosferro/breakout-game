export class Position {
    #y;
    #x;
    #dy;
    #dx;
    #width;
    #height;
    #canvasWidth;
    #canvasHeight;

    constructor({y, x, dy, dx, width, height, canvasWidth, canvasHeight}) {
        this.#y = y;
        this.#x = x;
        this.#dy = dy;
        this.#dx = dx;
        this.#width = width;
        this.#height = height;
        this.#canvasWidth = canvasWidth;
        this.#canvasHeight = canvasHeight;
    }

    get canvasWidth() {
        return this.#canvasWidth;
    }

    get canvasHeight() {
        return this.#canvasHeight;
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
        return this.#y + this.#height + this.#dy >= this.#canvasHeight;
    }

    #isNextXPositionOutsideCanvas() {
        return this.#x + this.#dx <= 0;
    }

    #isNextXPositionOutsideCanvasWidth() {
        return this.#x + this.#width + this.#dx >= this.#canvasWidth;
    }

    #invertYSpeed() {
        this.#dy = -this.#dy;
    }

    #invertXSpeed() {
        this.#dx = -this.#dx;
    }

    resetXSpeed() {
        this.#dx = 0;
    }

    resetYSpeed() {
        this.#dy = 0;
    }

    recalculateXYPosition(playerBar) {
        if (!playerBar) return;

        const checkIfYPositionIsBetweenPlayerBar = () => {
            return (this.#y + this.#height + this.#dy >= playerBar.position.y && this.#y + this.#height + this.#dy <= playerBar.position.y + playerBar.canvas.blockSize)
                || (this.#y + this.#dy >= playerBar.position.y && this.#y + this.#dy <= playerBar.position.y + playerBar.position.height);
        }

        const checkIfXPositionIsBetweenPlayerBar = () => {
            return (this.#x + this.#width + this.#dx >= playerBar.position.x && this.#x + this.#width + this.#dx <= playerBar.position.x + playerBar.position.width)
                || (this.#x + this.#dx >= playerBar.position.x && this.#x + this.#dx <= playerBar.position.x + playerBar.position.width);
        }

        if (checkIfXPositionIsBetweenPlayerBar() && checkIfYPositionIsBetweenPlayerBar()) {
            this.#invertYSpeed();
        }

        if (this.#x + this.#dx >= playerBar.position.x && this.#x + this.#dx <= playerBar.position.x + playerBar.canvas.blockSize &&
            this.#y > playerBar.position.y && this.#y <= playerBar.position.y + playerBar.position.height) {
            this.#invertXSpeed();
        }
    }

    recalculateYPosition(shouldInvertSpeed) {
        if (this.#isNextYPositionOutsideCanvasHeight()) {
            this.#y = this.#canvasHeight - this.#height;

            if (!shouldInvertSpeed) return;
            this.#invertYSpeed();
            return;
        }

        if (this.#isNextYPositionOutsideCanvas()) {
            this.#y = 0;

            if (!shouldInvertSpeed) return;
            this.#invertYSpeed();
            return;
        }

        this.#y += this.#dy;
    }

    recalculateXPosition(shouldInvertSpeed) {
        if (this.#isNextXPositionOutsideCanvasWidth()) {
            this.#x = this.canvasWidth - this.#width;

            if (!shouldInvertSpeed) return;
            this.#invertXSpeed();
            return;
        }

        if (this.#isNextXPositionOutsideCanvas()) {

            this.#x = 0;

            if (!shouldInvertSpeed) return;
            this.#invertXSpeed();
            return;
        }

        this.#x += this.#dx;
    }
}
