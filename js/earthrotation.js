var scene,camera,renderer;
var geometry,material,mesh;

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,30,100000);
  renderer = new THREE.WebGLRenderer({
    antialias:true
  })
  renderer.setClearColor("#000000")
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

//定义光源
function geometry(){
  var light1 = new THREE.AmbientLight(0xffffff,0.5);
  scene.add(light1);
  var light2 = new THREE.PointLight(0xffffff,0.5);
  scene.add(light2);

  //创建地球
  var object = new THREE.SphereGeometry(100,100,100);//地球大小
  //加载贴图
  var ImageLoader = new THREE.ImageLoader();
  ImageLoader.load('earth.jpg',function(img){
    var texture = new THREE.Texture(img);
    texture.needsUpdate = true;
    var material = new THREE.MeshLambertMaterial({
      map:texture,
    })
    //添加到场景
    mesh1= new THREE.Mesh(object,material);//合并
    mesh1.position.z = -1000;
    scene.add(mesh1);//加入场景
  })
  //创建月球
  var object2 = new THREE.SphereGeometry(60,60,60);//月球大小
  //加载贴图
  var ImageLoader2 = new THREE.ImageLoader();
  ImageLoader2.load('moon.JPG',function(img){
    var texture2 = new THREE.Texture(img);
    texture2.needsUpdate = true;
    var material2 = new THREE.MeshLambertMaterial({
      map:texture2,
    })
    //添加到场景
    mesh2= new THREE.Mesh(object2,material2);//合并
    mesh2.position.z = -1000;
    mesh2.position.x = +250;
    scene.add(mesh2);//加入场景
})
}

//旋转方式
let angle = 0;
function render(){
  requestAnimationFrame(render);
  //自转
  mesh1.rotation.y += 0.005;
  //mesh2.rotation.y += 0.005；
  renderer.render(scene,camera);
  //公转
  angle += 0.08;
  var x = 400*Math.sin(angle)
  var z = 400*Math.cos(angle)-1000
  mesh2.position.set(x,0,z);

}

//为了让function可以运行
init();
geometry();
render();
