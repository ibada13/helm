import { useEffect, useRef } from 'react';
import video from './assets/bg.mp4';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from './ui/Button';

const Main = () => {
  const points: string[] = [
    "Trusted UK Construction Partner",
    "Skilled Builders & Project Managers",
    "Sustainable & Cost-Effective Solutions"
  ];
  
  const vidoeRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vidoeRef.current) { 
      vidoeRef.current.playbackRate = 0.75;
    }
  },[])

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
            playsInline
  preload="auto"
          className="w-full h-full object-cover brightness-70"
          ref={vidoeRef}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div> */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mt-32 z-10 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center gap-10 px-6 md:px-12 py-20 min-h-screen">
        <div className="flex-1 flex items-start justify-center md:justify-start text-center md:text-left">
          <p className="text-white font-bold text-6xl  md:text-7xl lg:text-8xl leading-tight">
            <span className="text-bg">Building </span>
            the Future, <span className="text-bg">Restoring</span> the Past
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center md:items-end text-center md:text-right space-y-16 max-w-xl ">
          {/* <p className="text-white font-semibold text-2xl w-full text-center  sm: md:text- leading-relaxed tracking-wide">
            Why <span className='text-bg'>US </span> ? 

          </p> */}

          <ul className="text-white text-sm sm:text-base space-y-8 w-full">
            {points.map((point, index) => (
              <li 
                key={index} 
                className="flex items-center justify-center md:justify-end gap-2 hover:text-bg transition duration-300"
              >
                <IoIosCheckmarkCircle className="text-bg text-xl sm:text-2xl md:text-3xl"/>
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ul>

          <Button content="Get a Free Consultation Today" className="py-4 px-6 text-sm sm:text-base md:text-lg" />
        </div>
      </div>
    </section>
  );
};

export default Main;
