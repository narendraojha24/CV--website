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
      number: { value: 25, density: { enable: true, area: 800 } },
      color: {
         value: ["#c118f9ff", "#06b6d4", "#ea0079ff", "#fbbf24"], // purple, teal, pink, yellow
      },
      shape: { type: "circle" },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.2,
          sync: false,
        },
      },
      size: {
        value: { min: 20, max: 60 }, // large, soft bubbles
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 10,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: "out",
        random: true,
        straight: false,
      },
      links: {
        enable: false,
      },
    },
    detectRetina: true,
  }}
/>
  );
};

export default ParticlesBackground;