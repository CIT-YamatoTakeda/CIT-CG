// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {
    // サイズを指定
    const width = 1280;
    const height = 720;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });
    renderer.setSize(width, height);
    // 背景の色を設定
    renderer.setClearColor(0xeeeeff);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    // カメラの初期座標を設定
    camera.position.set(300, 130, 0);
    // カメラコントローラーを作成
    const controls = new THREE.OrbitControls(camera,document.body);

    // 平行光源1
    var directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(150, 150, 150);
    // シーンに追加
    scene.add(directionalLight1);
    // 平行光源2
    var directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(-150, 150, 150);
    // シーンに追加
    scene.add(directionalLight2);
    // 平行光源3
    var directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight3.position.set(-150, 150, -150);
    // シーンに追加
    scene.add(directionalLight3);

    // テクスチャ1読み込み
    var textureLoader = new THREE.TextureLoader();
    var texture1 = textureLoader.load("img/brick1.jpg");
    // テクスチャ2読み込み
    var texture2 = textureLoader.load("img/roof.jpg");
    // テクスチャ3読み込み
    var texture3 = textureLoader.load("img/way.jpg");
    // テクスチャ4読み込み
    var texture4 = textureLoader.load("img/grass.jpg");
    // テクスチャ5読み込み
    var texture5 = textureLoader.load("img/brick2.jpg");
    // テクスチャ6読み込み
    var texture6 = textureLoader.load("img/door.png");

    // 地面を作成
    var geometry1 = new THREE.PlaneGeometry(100, 100);
    var material1 = new THREE.MeshLambertMaterial({
        map: texture4, bumpMap: texture4, bumpScale: 0.3
    });
    for(let i = -100; i <= 100; i+=100){
        for(let j = -100; j <= 100; j+=100){
            var ground = new THREE.Mesh(geometry1, material1);
            ground.rotation.x = Math.PI / -2;
            ground.position.set(i, 0, j);
            scene.add(ground);
        }
    }

    // 塔の作成
    var geometry2 = new THREE.CylinderGeometry(15, 15, 50, 50);
    var material2 = new THREE.MeshPhongMaterial({
        map: texture5, bumpMap: texture5, bumpScale: 0.5
    });
    var cylinder1 = new THREE.Mesh(geometry2, material2);
    cylinder1.position.set(65, 25, 65);
    scene.add(cylinder1);

    var cylinder2 = new THREE.Mesh(geometry2, material2);
    cylinder2.position.set(65, 25, -65);
    scene.add(cylinder2);

    var cylinder3 = new THREE.Mesh(geometry2, material2);
    cylinder3.position.set(-65, 25, 65);
    scene.add(cylinder3);

    var cylinder4 = new THREE.Mesh(geometry2, material2);
    cylinder4.position.set(-65, 25, -65);
    scene.add(cylinder4);

    var geometry7 = new THREE.CylinderGeometry(18, 20, 80, 50);
    var material6 = new THREE.MeshPhongMaterial({
        map: texture1, bumpMap: texture1, bumpScale: 0.5
    });
    var cylinder5 = new THREE.Mesh(geometry7, material6);
    cylinder5.position.set(0, 40, 0);
    scene.add(cylinder5);

    // 屋根の作成
    var geometry3 = new THREE.ConeGeometry(20, 30, 50);
    var material3 = new THREE.MeshPhongMaterial({
        map: texture2, bumpMap: texture2, bumpScale: 0.3
    });
    var cone = new THREE.Mesh(geometry3, material3);
    cone.position.y = 92;
    scene.add(cone);

    // 道の作成
    var geometry4 = new THREE.PlaneGeometry(10, 10);
    var material4 = new THREE.MeshLambertMaterial({
        map: texture3, bumpMap: texture3, bumpScale: 0.2, side: THREE.BackSide
    });
    for(let i = 0; i <= 120; i+=10){
        var way1 = new THREE.Mesh(geometry4, material4);
        way1.rotation.x = Math.PI / 2;
        way1.position.set(20 + i, 0.1, 0);
        scene.add(way1);

        var way2 = new THREE.Mesh(geometry4, material4);
        way2.rotation.x = Math.PI / 2;
        way2.position.set(-20 + -1 * i, 0.1, 0);
        scene.add(way2);

        var way3 = new THREE.Mesh(geometry4, material4);
        way3.rotation.x = Math.PI / 2;
        way3.position.set(0, 0.1, 20 + i);
        scene.add(way3);

        var way4 = new THREE.Mesh(geometry4, material4);
        way4.rotation.x = Math.PI / 2;
        way4.position.set(0, 0.1, -20 + -1 * i);
        scene.add(way4);
    }

    // 城の作成
    var geometry5 = new THREE.BoxGeometry(50, 48, 15);
    var material5 = new THREE.MeshPhongMaterial({
        map: texture5, bumpMap: texture5, bumpScale: 0.5
    });
    var castle1 = new THREE.Mesh(geometry5, material5);
    castle1.position.set(-35, 24, 70);
    scene.add(castle1);

    var castle2 = new THREE.Mesh(geometry5, material5);
    castle2.position.set(35, 24, 70);
    scene.add(castle2);

    var castle3 = new THREE.Mesh(geometry5, material5);
    castle3.rotation.y = Math.PI / 2;
    castle3.position.set(70, 24, 35);
    scene.add(castle3);

    var castle4 = new THREE.Mesh(geometry5, material5);
    castle4.rotation.y = Math.PI / 2;
    castle4.position.set(70, 24, -35);
    scene.add(castle4);

    var castle5 = new THREE.Mesh(geometry5, material5);
    castle5.position.set(35, 24, -70);
    scene.add(castle5);

    var castle6 = new THREE.Mesh(geometry5, material5);
    castle6.position.set(-35, 24, -70);
    scene.add(castle6);

    var castle7 = new THREE.Mesh(geometry5, material5);
    castle7.rotation.y = Math.PI / 2;
    castle7.position.set(-70, 24, -35);
    scene.add(castle7);

    var castle8 = new THREE.Mesh(geometry5, material5);
    castle8.rotation.y = Math.PI / 2;
    castle8.position.set(-70, 24, 35);
    scene.add(castle8);

    var geometry6 = new THREE.BoxGeometry(15, 24, 20);
    var castle9 = new THREE.Mesh(geometry6, material5);
    castle9.position.set(70, 36, 0);
    scene.add(castle9);

    var castle10 = new THREE.Mesh(geometry6, material5);
    castle10.position.set(-70, 36, 0);
    scene.add(castle10);

    var castle11 = new THREE.Mesh(geometry6, material5);
    castle11.rotation.y = Math.PI / 2;
    castle11.position.set(0, 36, 70);
    scene.add(castle11);

    var castle12 = new THREE.Mesh(geometry6, material5);
    castle12.rotation.y = Math.PI / 2;
    castle12.position.set(0, 36, -70);
    scene.add(castle12);

    // ドアの作成
    var geometry7 = new THREE.PlaneGeometry(14, 18);
    var material6 = new THREE.MeshLambertMaterial({
        map: texture6, alphaTest: 0.5
    });
    var door1 = new THREE.Mesh(geometry7, material6);
    door1.rotation.y = Math.PI / 2;
    door1.position.set(20, 7.2, 0);
    scene.add(door1)

    var door2 = new THREE.Mesh(geometry7, material6);
    door2.rotation.y = Math.PI / -2;
    door2.position.set(-20, 7.2, 0);
    scene.add(door2);

    var door3 = new THREE.Mesh(geometry7, material6)
    door3.position.set(0, 7.2, 20);
    scene.add(door3);

    var door4 = new THREE.Mesh(geometry7, material6)
    door4.rotation.y = Math.PI;
    door4.position.set(0, 7.2, -20);
    scene.add(door4);

    tick();
    // 毎フレーム時に実行されるループイベント
    function tick() {
        // レンダリング
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}