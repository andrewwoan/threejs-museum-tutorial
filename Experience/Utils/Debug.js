import GUI from "lil-gui";
import * as THREE from "three";

export default class Debug {
    constructor() {
        this.active = window.location.hash === "#debug";

        if (this.active) {
            this.gui = new GUI();
        }
    }
}
