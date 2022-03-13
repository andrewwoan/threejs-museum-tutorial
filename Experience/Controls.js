import * as THREE from "three";
import EventEmitter from "./Utils/EventEmitter";
import Experience from "./Experience";

export default class Controls extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;

        this.setControls();
    }

    setControls() {
        const curve = new THREE.CubicBezierCurve3(
            new THREE.Vector3(-10, 1, 0),
            new THREE.Vector3(20, 1, 0),
            new THREE.Vector3(20, 1, 0),
            new THREE.Vector3(10, 1, 20)
        );

        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        const material = new THREE.LineBasicMaterial({ color: 0xff0000 });

        // Create the final object to add to the scene
        const curveObject = new THREE.Line(geometry, material);

        this.scene.add(curveObject);
    }
}
