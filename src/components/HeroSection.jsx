import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroSection = () => {
  const earthRef = useRef(null);

  useEffect(() => {
    // Initialize Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    earthRef.current.appendChild(renderer.domElement);

    // Create Earth geometry, material, and mesh
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Earth_texture_map.jpg"
    );
    const material = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Animation loop for rotating Earth
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.001; // Rotate Earth slowly
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Rotating Earth */}
      <div
        ref={earthRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      ></div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Localize your video library. <br /> <span className="text-blue-400">In minutes.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Instantly translate your videos into 80+ languages, invite others to
          review, and make edits — all in one place.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600">
          Book demo
        </button>

        {/* Video Container */}
        <div className="mt-12 w-4/5 md:w-2/3 lg:w-1/2 aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center">
          <div className="text-blue-500 font-bold text-2xl">AI Video</div>
          <button className="absolute text-2xl">&#9654;</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
