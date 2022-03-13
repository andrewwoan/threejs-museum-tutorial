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
        this.speed = 0.05;

        this.lerp = {
            current: 0,
            target: 0,
            factor: 0.08,
        };

        this.pathTarget = new THREE.Vector3(0, 0, 0);

        this.setControls();
    }

    lerpFunc(current, target, factor) {
        this.lerp.current = current * (1 - factor) + target * factor;
    }

    setControls() {
        // Set camera Path
        this.curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 1, 10),
            new THREE.Vector3(-5, 1, 5),
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(5, 1, 5),
            new THREE.Vector3(10, 1, 10),
        ]);

        this.curve.closed = true;

        this.points = this.curve.getPoints(50);
        this.geometry = new THREE.BufferGeometry().setFromPoints(this.points);

        // Debugging Lines
        this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
        this.curveObject = new THREE.Line(this.geometry, this.material);
        // this.scene.add(this.curveObject);

        window.addEventListener("wheel", this.onWheel);

        window.addEventListener("pointerdown", this.onPointerDown);
        window.addEventListener("pointercancel", this.onPointerCancel);
    }

    onWheel = (event) => {
        console.log(event);

        if (event.deltaY > 0) {
            this.lerp.target += this.speed;
        } else {
            this.lerp.target -= this.speed;
        }
    };

    // if (event.deltaY > 0) {
    //     this.lerp.target += this.speed;
    // } else if (this.lerp.target - this.speed > 0) {
    //     this.lerp.target -= this.speed;
    // } else {
    //     console.log("u can't scroll back");
    // }
    // };

    onPointerDown = (event) => {
        window.addEventListener("pointermove", this.onPointerMove);
        window.addEventListener("pointerup", this.onPointerUp);
        console.log("Pointer Down");
    };

    onPointerMove = (event) => {
        // console.log("Pointer Move");
        // console.log(event.clientX);
        console.log(event.movementX);
        if (event.movementX < 0) {
            this.lerp.target += this.speed * 0.009;
        } else {
            this.lerp.target -= this.speed * 0.009;
        }
    };

    onPointerUp = (event) => {
        console.log("Pointer Up");
        // removePointer(event);
        window.removeEventListener("pointermove", this.onPointerMove);
        window.removeEventListener("pointerup", this.onPointerUp);
    };

    // onPointerCancel(event) {
    //     removePointer(event);
    // }

    update() {
        // // console.log(this.camera.camera.position);
        // // console.log(this.time.elapsedTime);
        // // console.log(this.pathTarget.x - (this.pathTarget.x - 0.2));
        this.lerpFunc(this.lerp.current, this.lerp.target, this.lerp.factor);
        this.curve.getPoint(this.lerp.current % 1.0, this.pathTarget);
        this.camera.camera.position.copy(this.pathTarget);
    }

    destroy() {}
}
