var init = function() {

  var width = 800,
      height = 600;
  
  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  
  // シーンを作成
  var scene = new THREE.Scene();
  
  // カメラを作成
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

  // カメラコントローラーを作成
  const controls = new THREE.OrbitControls(camera, document.body);

  // テクスチャー読み込み
  var textureLoader = new THREE.TextureLoader();  
  var texture = textureLoader.load("img/Bricks.jpg");
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  
  // バンプマップ読み込み
  var bump = texture;
  mat.bumpMap = bump;
  mat.bumpscale = 0.1;

  // 箱を作成
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  //var material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  //var box = new THREE.Mesh(geometry, material);
  var box = new THREE.Mesh(geometry, mat);
  box.position.z = -5;
  scene.add(box);

 // 平行光源1
  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight1);
  // 平行光源2
  var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-1, 1, 1);
  // シーンに追加
  scene.add(directionalLight2);

  // 初回実行
  /*var update = function() {
    requestAnimationFrame(update);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    renderer.render(scene, camera);

  };
  update();*/
  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}
//window.addEventListener('DOMContentLoaded', init);