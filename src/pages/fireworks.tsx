import fireworks, { FireworksInput } from 'fireworks';
import React, { useEffect } from 'react'
import 'animate.css';

type CustomFireworksInput = FireworksInput & {
    maxRockets?: number;
    rocketSpawnInterval?: number;
    numParticles?: number;
    explosionMinHeight?: number;
    explosionMaxHeight?: number;
    explosionChance?: number;
    explosionMinDistance?: number;
    explosionMaxDistance?: number;
    rocketColor?: string;
    explosionColors?: string[];
    explosionRadius: number
    fadeOut: boolean
    debug: boolean
  };
  
  const Fireworks = () => {
    useEffect(() => {
      const options: CustomFireworksInput = {
        maxRockets: 3,
        rocketSpawnInterval: 150,
        numParticles: 100,
        explosionMinHeight: 0.2,
        explosionMaxHeight: 0.9,
        explosionChance: 0.08,
        explosionMinDistance: 0.2,
        explosionMaxDistance: 0.8,
        rocketColor: '#fff',
        explosionColors: ['#ff0080', '#ff00ff', '#0080ff', '#00ffff'],
        explosionRadius: 3,
        fadeOut: true,
        debug: false,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      };
  
      fireworks(options);
    }, []);
  
    return (
    //   <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    //     <div className="relative w-full h-full">
    //       <div
    //         className="flex items-center justify-center h-screen absolute animate__animated animate__fadeInUp animate__delay-1s"
    //         style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    //       >
    //         <h1 className="text-2xl font-bold text-center text-black">Happy New Year 2023!</h1>
    //       </div>
    //     </div>
    //   </div>

<div className="flex items-center justify-center h-screen">
<p className="text-4xl font-bold text-center">Your Order Is Placed Successfully</p>
</div>




    );
  };
  
  export default Fireworks;
  
  