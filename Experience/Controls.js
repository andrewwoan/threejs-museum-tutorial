import * as THREE from "three";
import EventEmitter from "./Utils/EventEmitter";
import Experience from "./Experience";

export default class Controls extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.time = this.experience.time;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.position = 0;

        this.lerp = {
            current: 0,
            target: 0,
            factor: 0.01,
        };

        this.pathTarget = new THREE.Vector3(0, 0, 0);

        this.setControls();
    }

    lerpFunc(current, target, factor) {
        this.lerp.current = current * (1 - factor) + target * factor;
    }

    setControls() {
        // Set camera Path
        this.curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-10, 1, 0),
            new THREE.Vector3(-5, 1, 0),
            new THREE.Vector3(5, 1, 0),
            new THREE.Vector3(10, 1, 0)
        );
        this.points = this.curve.getPoints(50);
        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);

        window.addEventListener("wheel", () => {
            console.log("Scrolled");
            this.lerp.target += 0.05;
        });

        // Debugging Lines
        // this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
        // this.curveObject = new THREE.Line(this.geometry, this.material);
        // this.scene.add(this.curveObject);
    }

    update() {
        this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor);

        // console.log(this.camera.camera.position);
        // console.log(this.time.elapsedTime);
        // console.log(this.pathTarget.x - (this.pathTarget.x - 0.2));
        this.curve.getPoint(this.lerp.current % 1.0, this.pathTarget);
        this.camera.camera.position.copy(this.pathTarget);
    }

    destroy() {}
}
