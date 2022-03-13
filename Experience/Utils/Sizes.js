import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
    constructor(canvas) {
        super();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        window.addEventListener("resize", () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            // console.log(this);

            this.trigger("resize");
        });
    }
}
