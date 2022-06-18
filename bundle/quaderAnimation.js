import * as THREE from './three/src/Three.js'

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

const scene = new THREE.Scene();

var canvas = document.getElementById("renderCanvas");
//canvas.offsetHeight = canvas.offsetWidth *.66;
canvas.style.backgroundColor = "green";

const gridHelper = new THREE.GridHelper(10,10,0xff0000, 0x00ff00);
scene.add(gridHelper);

const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth/canvas.offsetHeight, 0.1, 1000);

const light = new  THREE.HemisphereLight(0xb1e1ff, 0xb97a20,2);
scene.add(light);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(0,10,5);
dirLight.target.position.set(0,0.5,-10);
scene.add(dirLight);
scene.add(dirLight.target);

const renderer = new THREE.WebGLRenderer(canvas);
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

const loader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({
    map: loader.load('./tex.jpg'),
    flatShading: true
});

const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0.5, -10);
scene.add(cube);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    canvas.offsetHeight = canvas.offsetWidth*.66;
    camera.aspect = canvas.offsetWidth/canvas.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer();
}

var isDragging = false;
var previousMousePosition = {
    x: 0,
    y: 0
};

canvas.onmousedown = (e) => {
    isDragging = true;
};
canvas.onmouseup =  (e) => {
    isDragging = false;
};
canvas.onmousemove = (e) => {
    var deltaMove = {
        x: e.offsetX-previousMousePosition.x,
        y: e.offsetY-previousMousePosition.y
    };

    if(isDragging) {
        var deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
                toRadians(deltaMove.y*1),
                toRadians(deltaMove.x*1),
                0,
                'XYZ'
            )
        );
        cube.quaternion.multiplyQaterions(deltaRotationQuaternion, cube.quaternion);
    }

    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
};

function idleRotation(){
    cube.rotation.x += 0.01;
}

function animate() {
    requestAnimationFrame(animate);
    idleRotation();
    render();
}

function render(){
    renderer.render(scene, camera);
}

animate();