import tower from './assets/logo.png'
import gsap from 'gsap'; 
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  FaHome,
  FaBuilding,
  FaTasks,
  FaTools,
  FaLeaf,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  useGSAP(() => { 
    gsap.fromTo(".highlight", 
      { backgroundSize: "0% 100%" }, 
      { 
        backgroundSize: "100% 100%",
        ease: "power2.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: "#highlight",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo('#shard', 
      {  y: 0 }, 
      { 
         
        y: -120, 
        scrollTrigger: {
          scrub: true, 
          trigger: '#shard',
          start: "top center",
        }
      }
    );
  });

  const services = [
    { icon: <FaHome />, title: "Residential Construction" },
    { icon: <FaBuilding />, title: "Commercial Construction" },
    { icon: <FaTasks />, title: "Project Management" },
    { icon: <FaTools />, title: "Renovation & Refurbishment" },
    { icon: <FaLeaf />, title: "Sustainable Building" },
  ];

  return (
    <section className="relative bg-secondary min-h-screen w-screen overflow-hidden py-20 flex items-center justify-center">
      <div className="relative z-10 w-full mx-auto px-12 space-y-18 flex flex-col">
        
        <div className="flex justify-around items-center flex-col md:flex-row space-y-12">
          <div className="flex-1 flex flex-col space-y-6">
            <h4 className="text-black text-xl">Our Services</h4>
            <h2 className="text-5xl font-bold text-bg">
              We offer a range of services
            </h2>
            <p className='text-xl leading-relaxed'>
              a full range of{" "}
              <span className="inline text-black highlight highlight-bg px-1">
                construction and building services
              </span> 
              {" "}tailored to your needs
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="px-6 py-3 rounded bg-transparent border border-black hover:border-transparent hover:bg-bg text-black font-medium transition">
              Read More
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-secondary justify-center gap-y-4 text-center shadow-lg  transition-all duration-300 hover:shadow-2xl hover:shadow-bg hover:bg-bg py-3 p-3 rounded-lg w-46 h-46" 
            >
              <div className="text-4xl text-black ">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-black">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Centered logo background */}
      <img
        id="shard"
        src={tower}
        alt="Logo"
  className="absolute top-1/5 sm:top-0 right-0 m-auto  h-1/2 sm:h-full   w-fit  opacity-20 "
      />
    </section>
  );
}
