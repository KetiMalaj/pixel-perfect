import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";

const slides = [
  {
    title: "Marketing\n& Research",
    description: "At Digital Bee, we are a full-service agency specializing in research, creative marketing, and digital solutions.",
  },
  {
    title: "Insight that\nDrives Action",
    description: "Our research doesn't stop at data collection — we translate insights into clear, strategic recommendations that help you act with confidence.",
  },
  {
    title: "Creativity\nwith Purpose",
    description: "Our research doesn't stop at data collection — we translate insights into clear, strategic recommendations that help you act with confidence.",
  },
  {
    title: "Digital that\nDelivers Results",
    description: "We don't just run campaigns — we build digital systems that perform, helping you reach the right people, at the right time, with the right message.",
  },
  {
    title: "Data-Driven\nby Design",
    description: "Our platforms are fully integrated into our services, creating a unified ecosystem where research, analytics, and strategy work together seamlessly.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[350px] md:min-h-[500px] flex items-center overflow-visible">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        {/* Left content */}
        <div className="relative pl-8 md:pl-0">
          {/* Dot navigation — scrollable */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-8 flex flex-col gap-2 items-center cursor-grab active:cursor-grabbing select-none"
            onWheel={(e) => {
              e.preventDefault();
              if (e.deltaY > 0) {
                setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
              } else {
                setCurrent((prev) => Math.max(prev - 1, 0));
              }
            }}
            onTouchStart={(e) => {
              const startY = e.touches[0].clientY;
              const handleTouchEnd = (ev: TouchEvent) => {
                const diff = startY - ev.changedTouches[0].clientY;
                if (diff > 20) setCurrent((prev) => Math.min(prev + 1, slides.length - 1));
                else if (diff < -20) setCurrent((prev) => Math.max(prev - 1, 0));
                document.removeEventListener('touchend', handleTouchEnd);
              };
              document.addEventListener('touchend', handleTouchEnd);
            }}
          >
            {slides.map((_, i) => {
              const distance = Math.abs(i - current);
              const opacity = distance === 0 ? 1 : distance === 1 ? 0.5 : distance === 2 ? 0.25 : 0.1;
              return (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="relative flex items-center justify-center w-6 h-6 md:w-5 md:h-5 transition-all"
                  style={{ opacity }}
                >
                  {i === current ? (
                    <>
                      <span className="absolute w-6 h-6 md:w-5 md:h-5 rounded-full border border-primary" style={{ borderWidth: '1.5px' }} />
                      <span className="w-2 h-2 md:w-1.5 md:h-1.5 rounded-full bg-primary" />
                    </>
                  ) : (
                    <span className="w-1.5 h-1.5 md:w-1 md:h-1 rounded-full bg-primary" />
                  )}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Lime vertical line + title */}
              <div className="flex items-stretch gap-4">
                <div className="w-0.5 bg-lime flex-shrink-0" />
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary leading-tight whitespace-pre-line">
                  {slides[current].title}
                </h1>
              </div>

              {/* Dotted vertical line + description */}
              <div className="flex items-stretch gap-4 mt-6 md:mt-10">
                <div className="flex-shrink-0 w-1 hero-dot-line" />
                <p className="text-primary/70 text-sm md:text-base max-w-md leading-relaxed">
                  {slides[current].description}
                </p>
              </div>

              <button className="mt-6 bg-lime text-primary font-bold italic px-4 py-2 text-lg hover:brightness-95 transition">
                Are you ready?
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right illustration */}
        <div className="hidden md:flex justify-end">
          <img
            src={heroIllustration}
            alt="Marketing blueprint illustration"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
