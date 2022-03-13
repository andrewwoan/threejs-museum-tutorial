import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
    constructor(canvas) {
        super();

        this.start = Date.now();
        this.current = this.start;
        this.elapsedTime = 0;
        this.delta = 16;

        window.requestAnimationFrame(() => {
            this.render();
        });
    }
    render() {
        this.delta = Date.now() - this.current;
        this.current = Date.now();
        this.elapsedTime = this.current - this.start;
        this.trigger("tick");

        window.requestAnimationFrame(() => {
            this.render();
        });
    }
}
