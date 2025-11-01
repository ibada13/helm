import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Tower from "../assets/gr1.svg?react";
import { IoMdCheckmarkCircle } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);

export default function Content() { 



  const towerRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = towerRef.current;
    if (!svg) return;

    const elements = [
      svg.querySelector("#rect1"),
      svg.querySelector("#rect2"),
      svg.querySelector("#rect3"),
      svg.querySelector("#rect4"),
    ].filter(Boolean);

    gsap.fromTo(
      elements,
      {
        y: 50,
        scale: 0.8,
        opacity: 0,
        rotation: -10,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotation: 0,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current ,
          start: "top center",
          end: "bottom 60%",
          scrub: true,
        //   markers: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

    return (
        

     
      <div
        ref={containerRef }
        className="relative min-h-screen w-full flex flex-col justify-around items-center gap-y-16 py-6  px-4 ">
        <Tower
          ref={towerRef}
          className="absolute left-1/2 -translate-x-1/2 md:left-full md:-translate-x-1/2  h-full z-20 md:z-40 object-contain"
        />

        <h2 className="text-bg text-6xl sm:text-7xl text-center font-bold relative">
          <span className=""> some</span>
          <span className="z-20 static sm:relative"> words for</span>
          <span className="z-30 relative md:static"> Name Here</span>
        </h2>
 
       <div className="relative w-full max-w-4xl px-6 py-8 bg-black/50 backdrop-blur-md rounded-lg shadow-2xl text-white self-end sm:self-center z-30">
  <h3 className="text-3xl font-semibold mb-4 text-bg">Project Overview</h3>
  <p className="text-lg leading-relaxed mb-6">
    Landmark office tower in London, showcasing modern design, structural innovation, and aesthetic harmony.
  </p>

  
  <div className="mb-6">
    <h4 className="text-2xl font-semibold mb-4 text-bg">Key Features</h4>
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <IoMdCheckmarkCircle className="text-bg w-6 h-6 flex-shrink-0" />
        <span className="text-lg">Sustainable materials</span>
      </div>
      <div className="flex items-center gap-3">
        <IoMdCheckmarkCircle className="text-bg w-6 h-6 flex-shrink-0" />
        <span className="text-lg">Rooftop garden and green terraces</span>
      </div>
    </div>
  </div>

  
  <div>
    <h4 className="text-2xl font-semibold mb-4 text-bg">Highlights</h4>
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <IoMdCheckmarkCircle className="text-bg w-5 h-5 flex-shrink-0" />
        <span className="text-lg">Awarded “Best Office Tower 2025” by UK Architectural Council</span>
      </div>
      <div className="flex items-center gap-3">
        <IoMdCheckmarkCircle className="text-bg w-5 h-5 flex-shrink-0" />
        <span className="text-lg">Featured in Architectural Review UK</span>
      </div>
      <div className="flex items-center gap-3">
        <IoMdCheckmarkCircle className="text-bg w-5 h-5 flex-shrink-0" />
        <span className="text-lg">Fully leased within 4 months of opening</span>
      </div>
    </div>
  </div>
</div>

</div>

      

    );
}