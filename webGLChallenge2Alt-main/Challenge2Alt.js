import * as THREE from "https://unpkg.com/three@0.167.1/build/three.module.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x4651ca);

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 4, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document.body.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(
    0xffffff,
    1.5
);

scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    2
);

directionalLight.position.set(5, 10, 7);

scene.add(directionalLight);

function createAnimal(xPosition, bodyColor) {

    const animal = new THREE.Group();

    const material = new THREE.MeshStandardMaterial({
        color: bodyColor
    });

    // BODY
    const body = new THREE.Mesh(
        new THREE.CapsuleGeometry(1, 2, 10, 23, 1),
        material
    );

    // Translation
    body.position.set(0, 5, 0);
    
    //Rotation
    body.rotation.z = Math.PI / 2;

    animal.add(body);

    // HEAD
    const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 32, 32),
        material
    );

    // Translation
    head.position.set(1, 5, 0);

    // Scaling
    head.scale.set(1.2, 1.2, 1.2);

    animal.add(head);

    // TAIL
   const tail = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 0),
        material
    );
     // Translation
    tail.position.set(-1.8, 5, 0);

     // Scaling
    tail.scale.set(2.5, 2.5, 1.2);
    
    animal.add(tail);

    // Back Fin
   const backFin = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 0),
        material
    );
     // Translation
    backFin.position.set(-0.5, 4, 0);

     // Scaling
    backFin.scale.set(1, 1, 1.2);

    //Rotation
    backFin.rotation.z = Math.PI / 10;
    
    animal.add(backFin);

     // Back Fin
   const dorsalFin = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 0),
        material
    );
     // Translation
    dorsalFin.position.set(-0.5, 5.75, 0);

     // Scaling
    dorsalFin.scale.set(1.75, 2.25, 1.2);

    //Rotation
    dorsalFin.rotation.z = Math.PI / 12;
    
    animal.add(dorsalFin);

    // EYE
    const eyeMaterial =
        new THREE.MeshStandardMaterial({
            color: 0x2a2e58
        });
        
    const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        eyeMaterial
    );
    //Translate
    eye.position.set(1.5, 5.30, 1 );
    //Scaling
    eye.scale.set(2, 2, 2);

    animal.add(eye);

    animal.position.x = xPosition;

    scene.add(animal);
}

// Main Animal
createAnimal(0, 0xf09f0d);

// Bonus: Bubbles
const bubble1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 32),
    new THREE.MeshStandardMaterial({
        color: 0x13e4e5
    })
);

bubble1.position.set(3, 5, 0);

bubble1.scale.set(0.5, 0.5, 0.5);

scene.add(bubble1);

// Bonus: Bubbles
const bubble2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 32),
    new THREE.MeshStandardMaterial({
        color: 0x13e4e5
    })
);

bubble2.position.set(3.5, 5.5, 0);

bubble2.scale.set(0.25, 0.25, 0.25);

scene.add(bubble2);

// Bonus: Bubbles
const bubble3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 32),
    new THREE.MeshStandardMaterial({
        color: 0x13e4e5
    })
);

bubble3.position.set(3.25, 6, 0);

bubble3.scale.set(0.15, 0.15, 0.15);

scene.add(bubble3);







// Animation Loop
function animate() {

    requestAnimationFrame(
        animate
    );

    bubble1.rotation.y += 0.03;

    renderer.render(
        scene,
        camera
    );
}

animate();

// Responsive
window.addEventListener(
    "resize",
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
);