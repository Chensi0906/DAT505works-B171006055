var container, stats;
var camera, scene, raycaster, renderer;

init();
render();


function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.y+=100;
  camera.position.z+=1500;
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 2);
  light.position.set( 1, 1, 1 ).normalize();
  scene.add(light);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2);
  container.appendChild( renderer.domElement);
}
/////////////////////////
function colorful(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("colorful cube.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("colorful cube.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////////
function gold(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("gold cube.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("gold cube.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////////
function yellow(){
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("yellow cube.mtl", function(materials){
  materials.preload();

  var objLoader = new THREE.OBJLoader();
	objLoader.setMaterials(materials);
  objLoader.load("yellow cube.obj", function(mesh){
  mesh.scale.set(10, 10, 10);
  scene.add(mesh);
  });
});
}
///////////////////////////
function render() {
  requestAnimationFrame(render);
  renderer.render(scene,camera);
  document.getElementById("showcolorful").addEventListener("click",colorful);
  document.getElementById("showgold").addEventListener("click",gold);
  document.getElementById("showyellow").addEventListener("click",yellow);
}
