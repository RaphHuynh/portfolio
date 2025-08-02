import React, { forwardRef, useEffect, useRef } from 'react';
import * as THREE from 'three';

const Moon = forwardRef((props, ref) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Configuration des URLs de texture
    const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
    const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";

    // Créer la scène
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Créer la caméra avec un champ de vision plus large
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7; // Reculer la caméra

    // Créer le renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Charger les textures avec une meilleure configuration
    const textureLoader = new THREE.TextureLoader();
    
    const moonTexture = textureLoader.load(textureURL, (texture) => {
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
    });
    
    const displacementMap = textureLoader.load(displacementURL, (texture) => {
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
    });

    // Créer la géométrie de la lune avec une taille plus petite
    const moonGeometry = new THREE.SphereGeometry(1.5, 128, 128); // Taille réduite et plus de segments

    // Créer le matériau de la lune avec des paramètres améliorés
    const moonMaterial = new THREE.MeshPhongMaterial({
      map: moonTexture,
      displacementMap: displacementMap,
      displacementScale: 0.05, // Réduire l'intensité du relief
      displacementBias: -0.025,
      bumpMap: displacementMap,
      bumpScale: 0.02, // Réduire l'intensité du bump
      shininess: 5, // Réduire la brillance
      transparent: false,
      opacity: 1
    });

    // Créer le mesh de la lune
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.castShadow = true;
    moon.receiveShadow = true;
    moonRef.current = moon;
    scene.add(moon);

    // Ajouter des lumières avec une meilleure configuration
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);

    // Ajouter une lumière ponctuelle pour l'effet de brillance
    const pointLight = new THREE.PointLight(0xffffff, 0.3, 50);
    pointLight.position.set(-3, 2, 3);
    scene.add(pointLight);

    // Ajouter le renderer au DOM
    mountRef.current.appendChild(renderer.domElement);

    // Fonction d'animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Faire tourner la lune sur elle-même très lentement
      if (moonRef.current) {
        moonRef.current.rotation.y += 0.002; // Vitesse très lente
      }

      renderer.render(scene, camera);
    };

    // Gérer le redimensionnement
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Démarrer l'animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="fixed left-0 w-full h-screen flex justify-center items-center pt-0 pointer-events-none z-5">
      <div 
        ref={mountRef}
        className="w-full h-full"
        style={{
          filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.4))',
          transition: 'filter 0.5s ease'
        }}
      />
    </div>
  );
});

Moon.displayName = 'Moon';

export default Moon;
