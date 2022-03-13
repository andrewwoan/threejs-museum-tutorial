import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import EventEmitter from "./Utils/EventEmitter";
import Experience from "./Experience";

export default class Camera extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createCamera();
        // this.setOrbitControls();
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        );
        // this.camera.position.set(0, 50, 10);
        this.scene.add(this.camera);
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true;
    }

    resize() {
        this.camera.aspect = this.sizes.width / this.sizes.height;
        this.camera.updateProjectionMatrix();
    }

    update() {
        // this.controls.update();
    }
}
