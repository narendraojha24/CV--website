import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
     <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } }, // fewer, bigger particles
          color: { value: "#868686ff" },
          shape: {
            type: ["circle", "triangle", "square", "pentagon", "hexagon"], // multiple shapes
          },
          opacity: { value: 0.7 },
          size: { value: { min: 4, max: 6 } }, // bigger shapes
          move: { enable: true, speed: 2, direction: "none", outModes: "out" },
          links: {
            enable: true,
            color: "#696969ff",
            distance: 200, // longer lines
            opacity: 0.7,  // more visible
            width: 1,      // thicker lines
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;