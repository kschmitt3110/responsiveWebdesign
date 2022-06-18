import * as THREE from './three/src/Three.js'



const scene = new THREE.Scene();
scene.background = new THREE.Color("#FFFFFF");

const canvas = document.getElementById("renderCanvas");
//canvas.offsetHeight = canvas.offsetWidth *.66;

const gridHelper = new THREE.GridHelper(10,10,0xff0000, 0x00ff00);
//scene.add(gridHelper);

const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth/canvas.offsetHeight, 0.1, 1000);

camera.position.set(0,1.9,1.5);


const light = new  THREE.HemisphereLight(0xb1e1ff, 0xb97a20,0.5);
scene.add(light);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(0,10,5);
dirLight.target.position.set(0,0.5,-10);
scene.add(dirLight);
scene.add(dirLight.target);

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

var cube;
const loader = new THREE.TextureLoader();
const textur = loader.load('../lui.png', (textur)=>{
    textur.needsupdate = true;
    cube.scale.set(1.0,textur.image.height/textur.image.width,1.0);
});
const geometry = new THREE.BoxGeometry(1.2,2.0,0.7);
const material = new THREE.MeshPhongMaterial({
    map: textur,
    flatShading: true
});

cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 1, 0);
scene.add(cube);

camera.lookAt(cube.position);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    //canvas.offsetHeight = canvas.offsetWidth*.66;
    camera.aspect = canvas.offsetWidth/canvas.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    render();
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

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

canvas.onmousemove = (e) => {
    var deltaMove = {
        x: e.offsetX-previousMousePosition.x,
        y: e.offsetY-previousMousePosition.y
    };

    if(isDragging) {
        console.log(deltaMove);
        cube.rotation.y +=  deltaMove.x*0.01;
        cube.rotation.x +=  deltaMove.y*0.01;
    }

    previousMousePosition = {
        x: e.offsetX,
        y: e.offsetY
    };
};

canvas.ontouchmove = (e) => {
    var deltaMove = {
        x: e.touches[0].clientX-previousMousePosition.x,
        y: e.touches[0].clientY-previousMousePosition.y
    };

    console.log(deltaMove);
    cube.rotation.y +=  deltaMove.x*0.01;
    cube.rotation.x +=  deltaMove.y*0.01;

    previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
    };
}


function idleRotation(){
    if(!isDragging){
        cube.rotation.y += 0.01;
        cube.rotation.x -= cube.rotation.x*0.01;
    }
        

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