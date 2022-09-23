import {Game} from "./classes/Game.js";
import {Canvas} from "./classes/Canvas.js";

const game = new Game({
    canvas: new Canvas()
});

game.run();
