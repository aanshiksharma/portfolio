"use client";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Robot() {
  const robotRef = useRef();
  const robotAnimationRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const { camera } = useThree();
  const { scene } = useGLTF("/models/new_astro_bot.glb");
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  // Movements based on mousemove event - [useEffect + useFrame]
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!robotRef.current) return;

    // Convert mouse position to a 3D point
    const vector = new THREE.Vector3(mouse.current.x, mouse.current.y, 0.5);
    vector.unproject(camera);

    const dir = vector.sub(camera.position).normalize();
    const targetPos = camera.position.clone().add(dir);

    robotRef.current.lookAt(targetPos);
  });

  // Yoyo Animation
  useEffect(() => {
    gsap.to(robotAnimationRef.current.position, {
      y: 0.25,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  // ScrollTrigger animations
  useEffect(() => {
    gsap.set(robotRef.current.position, { x: 3, y: 2.75, z: -2 });
    gsap.set(robotRef.current.scale, { x: 1.2, y: 1.2, z: 1.2 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
        },
      })
      .to(robotRef.current.position, {
        x: -2,
        y: -4.25,
        z: -2,
      })
      .to(
        robotRef.current.scale,
        {
          x: 1.3,
          y: 1.3,
          z: 1.3,
        },
        0
      );
  }, []);

  return (
    <group ref={robotRef} name="AboutRobot">
      <group ref={robotAnimationRef}>
        <primitive object={clonedScene} scale={1} />;
      </group>
    </group>
  );
}

export default Robot;
