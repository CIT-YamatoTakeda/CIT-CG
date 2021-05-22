var init = function() {

    var width = 1280,
        height = 720;
  
    // レンダラーを作成
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
  
    // シーンを作成
    var scene = new THREE.Scene();
  
    // カメラを作成
    var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  
    // 箱を作成
    var geometry = new THREE.OctahedronGeometr(1, 1, 1);
    var material = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    var octahedron = new THREE.Mesh(geometry, material);
    octahedron.position.z = -5;
    scene.add(octahedron);
  
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
    var update = function() {
      requestAnimationFrame(update);
  
      // 箱を回転させる
      octahedron.rotation.x += 0.01;
      octahedron.rotation.y += 0.01;
  
      renderer.render(scene, camera);
    };
    update();
  }
  window.addEventListener('DOMContentLoaded', init);