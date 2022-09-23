export class Canvas {
    #height;
    #width;
    #element = document.createElement('canvas');

    constructor(height = 720, width = 960, className = "canvas") {
        this.#height = height;
        this.#width = width;

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
}
