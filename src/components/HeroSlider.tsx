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
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div className="relative">
          {/* Dot navigation */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-8 flex flex-col gap-2 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current
                    ? "w-3 h-3 border-2 border-primary bg-transparent"
                    : "w-1.5 h-1.5 bg-primary/40"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Vertical accent line + title */}
              <div className="flex items-start gap-4">
                <div className="w-1 bg-lime self-stretch min-h-[80px] mt-2" />
                <h1 className="text-5xl md:text-6xl font-black text-primary leading-tight whitespace-pre-line">
                  {slides[current].title}
                </h1>
              </div>

              <p className="mt-6 text-primary/70 text-base max-w-md leading-relaxed">
                {slides[current].description}
              </p>

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
