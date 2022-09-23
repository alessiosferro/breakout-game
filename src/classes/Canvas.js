export class Canvas {
    #width;
    #height;
    #blockSize;
    #element = document.createElement('canvas');

    constructor(blockSize = 24, numberOfBlocksOnXAxis = 40, numberOfBlocksOnYAxis = 30, className = "canvas") {
        this.#width = blockSize * numberOfBlocksOnXAxis;
        this.#height = blockSize * numberOfBlocksOnYAxis;
        this.#blockSize = blockSize;

        this.#element.width = this.#width;
        this.#element.height = this.#height;
        this.#element.className = className;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.#width, this.#height);
    }

    get element() {
        return this.#element;
    }

    get ctx() {
        return this.#element.getContext("2d");
    }

    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    get blockSize() {
        return this.#blockSize;
    }
}
