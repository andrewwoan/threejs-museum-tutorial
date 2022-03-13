// import * as THREE from "three";

// import Experience from "../Experience.js";

// export default class Environment {
//     constructor() {
//         this.experience = new Experience();
//         this.scene = this.experience.scene;
//         this.resources = this.experience.resources;

//         this.setSunlight();
//         this.setEnvironmentMap();
//     }

//     setSunlight() {
//         this.sunLight = new THREE.DirectionalLight("#ffffff", 4);
//         this.sunLight.castShadow = true;
//         this.sunLight.shadow.camera.far = 15;
//         this.sunLight.shadow.mapSize.set(1024, 1024);
//         this.sunLight.shadow.normalBias = 0.05;
//         this.sunLight.position.set(3, 3, -2.25);
//         this.scene.add(this.sunLight);
//     }

//     setEnvironmentMap() {
//         // this.environmentMap = {};
//         // this.environmentMap.intensity = 0.4;
//         // this.environmentMap.texture = this.resources.items.helloWorld;
//         // console.log(this.resources.items.helloWorld);
//         // this.environmentMap.texture.encoding = THREE.sRGBEncoding;

//         // this.scene.environment = this.environmentMap.texture;
//     }
// }
