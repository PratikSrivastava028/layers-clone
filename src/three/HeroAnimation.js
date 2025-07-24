// src/three/HeroAnimation.js
import * as THREE from 'three';

export function initHeroAnimation(container) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Glass Disc (transparent watch dial)
  const geometry = new THREE.RingGeometry(1, 2.8, 64);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.3,
    roughness: 0.1,
    transmission: 0.9, // makes it look like glass
    thickness: 0.1,
    side: THREE.DoubleSide,
  });

  const disc = new THREE.Mesh(geometry, material);
  scene.add(disc);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  const pointLight = new THREE.PointLight(0xffd700, 0.7); // gold accent light
  pointLight.position.set(3, 3, 5);
  scene.add(ambientLight, pointLight);

  camera.position.z = 6;

  function animate() {
    requestAnimationFrame(animate);
    disc.rotation.z += 0.002;
    renderer.render(scene, camera);
  }

  animate();
}
