import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))

function initializeModel(scene, mixer) {
    const light = new THREE.PointLight(0xffffff, 1000)
    light.position.set(2.5, 7.5, 15)
    scene.add(light)

    // Add a camera
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.set(0.8, 1.4, 1.0)
            var loader = new THREE.FBXLoader();
            loader.load("Walking.fbx", function (object) {
            object.scale.set(0.007, 0.007, 0.007);
            object.position.set(0, 0, 0);
  
      mixer = new THREE.AnimationMixer(object);
      var action = mixer.clipAction(object.animations[0]);
      action.play();
  
      // Add it to the scene
      scene.add(object);
  
      modelReady = true;
    });
  }
  

window.initializeModel = initializeModel;