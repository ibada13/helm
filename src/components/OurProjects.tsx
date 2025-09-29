import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import tower from "./assets/tower.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function OurProjects() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".highlight").forEach((el) => {
      gsap.fromTo(
        el,
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  const projects = [
    { img: tower, title: "The Shard - London", wide: true },
    { img: tower, title: "Skyline Concept" },
    { img: tower, title: "Modern Tower" },
    { img: tower, title: "Futuristic Build", wide: true },
  ];

  return (
    <section className="bg-secondary py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-10 flex flex-col space-y-6">
        <div className="flex items-start flex-col w-full md:w-1/2 px-4">
          <h2 className="text-5xl font-bold text-bg mb-12">Our Projects</h2>
          <p className="leading-relaxed tracking-wide text-xl">
            From stylish{" "}
            <span className="highlight highlight-bg text-black px-1">
              residential homes in London
            </span>{" "}
            to large-scale{" "}
            <span className="highlight highlight-bg px-1">
              commercial spaces
            </span>{" "}
            across the UK,{" "}
            <span className="highlight highlight-bg px-1">HelmBuild</span> has
            successfully delivered projects that reflect{" "}
            <span className="highlight highlight-rightg px-1">
              durability, design, and innovation
            </span>
            .
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={false}
          autoPlay={false}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="px-4"
          arrows
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg transition-all duration-500"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-white text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
