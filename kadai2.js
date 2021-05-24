var init = function() {

    var width = 1280, height = 720;
  
    // レンダラーを作成
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
  
    // シーンを作成
    var scene = new THREE.Scene();
  
    // カメラを作成
    var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  
    // 八角形1
    var geometry = new THREE.OctahedronGeometry(1);
    var material = new THREE.MeshBasicMaterial({color: 0xa0d8ef});
    var octahedron1 = new THREE.Mesh(geometry, material);
    octahedron1.position.set(-2, 0, -5);
    scene.add(octahedron1);
    // 八角形2
    material = new THREE.MeshLambertMaterial({color: 0xd70035});
    var octahedron2 = new THREE.Mesh(geometry, material);
    octahedron2.position.set(0, 0, -5);
    scene.add(octahedron2);
    // 八角形3
    material = new THREE.MeshPhongMaterial({color: 0x00a968});
    var octahedron3 = new THREE.Mesh(geometry, material);
    octahedron3.position.set(2, 0, -5);
    scene.add(octahedron3);
  
    // 平行光源1
    var directionalLight1 = new THREE.DirectionalLight(0xffffff);
    directionalLight1.position.set(1, 1, 1);
    // シーンに追加
    //scene.add(directionalLight1);
    // 平行光源2
    var directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(-1, 1, 1);
    // シーンに追加
    //scene.add(directionalLight2);
    // 点光源
    var PointLight = new THREE.PointLight(0xffffff, 5, 50, 1);
    PointLight.position.set(20, 5, 20);
    scene.add(PointLight);
  
    // 初回実行
    var update = function() {
      requestAnimationFrame(update);
  
      // 箱を回転させる
      octahedron1.rotation.x += 0.01;
      octahedron1.rotation.y += 0.01;
      octahedron2.rotation.x -= 0.01;
      octahedron2.rotation.y -= 0.01;
      octahedron3.rotation.x += 0.01;
      octahedron3.rotation.y += 0.01;
  
      renderer.render(scene, camera);
    };
    update();
  }
  window.addEventListener('DOMContentLoaded', init);
  