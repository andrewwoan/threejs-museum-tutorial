import * as THREE from "three";
import MyRoom from "./MyRoom.js";
import Experience from "../Experience.js";
// import Environment from "./Environment.js";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.resources.on("ready", () => {
            this.myroom = new MyRoom();
        });
    }

    update() {}
}
