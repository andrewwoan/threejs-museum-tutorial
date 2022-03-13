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
        console.log(this.resource);
        this.material = this.resources.items.myRoomBake;
        this.material.flipY = false;
        this.material.encoding = THREE.sRGBEncoding;

        console.log(this.model.children);

        this.resource.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshBasicMaterial({
                    map: this.material,
                });
            }
        });

        // console.log(this.model);

        this.scene.add(this.model);
    }
}
