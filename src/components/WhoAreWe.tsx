import { useEffect, useRef } from "react";
import bg from "./assets/whoarewebackground.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function WhoAreWe() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

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

    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const cardData = [
    { number: "150+", label: "Projects Completed" },
    { number: "200+", label: "Clients Served" },
    { number: "10+", label: "Years in Business" },
    { number: "50+", label: "Team Members" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
 <div  className="absolute inset-0 overflow-hidden">
  <img
    src={bg}
    alt="Background"
    className="w-full h-full object-cover"
          loading="lazy"
          
  />
</div>
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 py-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <h1
            ref={titleRef}
            className="text-white font-bold text-5xl sm:text-5xl md:text-8xl lg:text-7xl text-center md:text-left"
          >
            Who Are <span className="text-bg">We?</span>
          </h1>

          <p className="text-white max-w-2xl md:self-center text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
            We are a UK-based{" "}
            <span className="highlight highlight highlight-bg text-black">construction companys</span>{" "}
            committed to{" "}
            <span className="highlight highlight highlight-bg text-black">building skylines and communities.</span>{" "}
            With{" "}
            <span className="highlight highlight highlight-rightg text-black">engineering expertise</span>,{" "}
            <span className="highlight highlight highlight-rightg text-black">modern techniques</span>, and{" "}
            <span className="highlight highlight highlight-rightg text-black tracking-wider">
              strict safety standards
            </span>
            , we deliver projects that{" "}
            <span className="highlight bg-bg text-black">meet the highest benchmarks.</span>
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white text-black p-6 rounded-xl shadow-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-bg"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{card.number}</h3>
              <p className="text-sm sm:text-base md:text-lg mt-2">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
