"use client";
import { useEffect, useRef, type JSX } from "react";
import { FaHandshake, FaBuilding, FaKey } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Step {
  number: number;
  icon: JSX.Element;
  title: string;
  desc: string;
}


const steps: Step[] = [
  {
    number: 1,
    icon: <FaHandshake size={75} className="icon" />,
    title: "Initial Consultation",
    desc: "We discuss your goals, budget, and vision to create a clear project plan.",
  },
  {
    number: 2,
    icon: <MdOutlineDesignServices size={75} className="icon" />,
    title: "Planning & Design",
    desc: "Our team prepares detailed blueprints, visuals, and timelines for approval.",
  },
  {
    number: 3,
    icon: <FaBuilding size={75} className="icon" />,
    title: "Construction & Execution",
    desc: "We bring your design to life with quality materials and expert builders.",
  },
  {
    number: 4,
    icon: <FaKey size={75} className="icon" />,
    title: "Final Inspection & Handover",
    desc: "We review every detail with you and deliver the finished project with care.",
  },
];

const Content = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".step");

    
    sections.forEach((section) => {
      const icon = section.querySelector(".icon");
      const number = section.querySelector(".number-circle");
      const title = section.querySelector(".title-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        number,
        { backgroundColor: "#D1D5DB", scale: 0.9 },
        { backgroundColor: "#fdd017", scale: 1.05, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        title,
        { color: "#D1D5DB", scale: 0.9 },
        { color: "#fdd017", scale: 1.1, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          icon,
          { color: "#D1D5DB", y: 10 },
          { color: "#fdd017", y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    });

   
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { height:0, transformOrigin: "top center" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
              end: "bottom center",
            
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-white flex flex-col items-center py-20 px-6"
    >
      <div className="relative w-full max-w-5xl">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gray-200 origin-top" />
        
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-[#fdd017] origin-top"
        />

        {steps.map((step, i) => (
          <div
            key={i}
            className={`step mb-16 flex flex-col sm:flex-row items-center ${
              i % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            
            <div className="sm:w-1/2 flex justify-center sm:justify-end px-6">
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "" : "items-end"
                } space-y-4`}
              >
                <h3 className="number-circle w-12 h-12 flex justify-center items-center font-bold text-white rounded-full shadow-md transition-all duration-300">
                  {step.number}
                </h3>
                <h3 className="title-text text-xl font-bold mb-2 tracking-wide">
                  {step.title}
                </h3>
                <p className={`text-black text-sm font-semibold leading-relaxed max-w-sm ${i%2===0?'text-left':'text-right'}`}>
                  {step.desc}
                </p>
              </div>
            </div>

            
            <div
              className={`sm:w-1/2 flex justify-center px-6`}>
              <div className={`flex items-center ${i%2===0?'justify-end':'justify-start'} w-full  transition-all duration-500`}>
                {step.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
