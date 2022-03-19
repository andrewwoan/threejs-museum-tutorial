import * as THREE from "three";

import Experience from "../Experience.js";

export default class MyRoom {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;

        this.resource = this.resources.items.myRoomModel;

        // this.setMaterials();
        this.setModel();
    }

    // setMaterials() {
    //     console.log(this.resources);
    //     // this.scene.add()
    // }

    setModel() {
        this.model = this.resource.scene;
        this.material = this.resources.items.myRoomBake;
        this.material.flipY = false;
        this.material.encoding = THREE.sRGBEncoding;

        // console.log(this.resources.items);
        // console.log(this.model.children);

        console.log;

        this.model.children.find((child) => {
            child.material = new THREE.MeshBasicMaterial({ 
                map: this.material,
            });
            console.log(child);
        });

        this.test = this.resources.items.test;

        // const imageTest = this.model.children.find(
        //     (child) => child.name === "Plane001"
        // );
        // imageTest.material = new THREE.MeshBasicMaterial({
        //     map: this.test,
        // });

        const size = 100;
        const divisions = 100;

        const gridHelper = new THREE.GridHelper(size, divisions);

        const axesHelper = new THREE.AxesHelper(100);
        this.experience.scene.add(axesHelper);
        console.log(this.model);
        this.experience.scene.add(gridHelper);

        this.model.scale.set(0.3, 0.3, 0.3);

        this.scene.add(this.model);
    }
}
