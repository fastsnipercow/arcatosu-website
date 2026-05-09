import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [carouselImages] = useState(() => {
    const images = [
      '/Carousel/4327751232432850316.jpg',
      '/Carousel/4498729786374191800.jpg',
      '/Carousel/5018653141537839275.jpg',
      '/Carousel/IMG_1133.jpg',
      '/Carousel/IMG_1181.jpg',
      '/Carousel/IMG_1414.jpg',
      '/Carousel/IMG_1493.jpg',
      '/Carousel/IMG_1540.jpg',
      '/Carousel/IMG_1688.jpg',
      '/Carousel/IMG_2115.jpg',
      '/Carousel/IMG_2142.jpg',
      '/Carousel/IMG_2596.jpg',
      '/Carousel/IMG_2868.jpg',
      '/Carousel/IMG_5462.jpg',
      '/Carousel/IMG_6793.jpg',
      '/Carousel/IMG_7155.jpg',
      '/Carousel/IMG_7576.jpg',
      '/Carousel/IMG_7995.jpg',
      '/Carousel/IMG_8005.jpg',
      '/Carousel/IMG_8317.jpg',
      '/Carousel/IMG_8320.jpg',
      '/Carousel/IMG_8777.jpg',
      '/Carousel/IMG_8821.jpg',
      '/Carousel/IMG_8863.jpg',
      '/Carousel/IMG_8866.jpg',
      '/Carousel/IMG_8887.jpg',
      '/Carousel/IMG_8947.jpg',
      '/Carousel/IMG_9234.jpg',
      '/Carousel/IMG_9335.jpg',
      '/Carousel/IMG_9358.jpg',
      '/Carousel/IMG_9377.jpg',
      '/Carousel/IMG_9527.jpg',
      '/Carousel/IMG_9827.jpg',
      '/Carousel/IMG_9854.jpg'
    ];
    // Fisher-Yates shuffle
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  });

  useEffect(() => {
    if (carouselRef.current) {
      const children = carouselRef.current.children;
      if (children.length > currentSlide) {
        const child = children[currentSlide] as HTMLElement;
        const containerLeft = carouselRef.current.getBoundingClientRect().left;
        const childLeft = child.getBoundingClientRect().left;
        
        carouselRef.current.scrollBy({
          left: childLeft - containerLeft - 16, // offset slightly for padding
          behavior: 'smooth'
        });
      }
    }
  }, [currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <>
      {/* Carousel Section */}
      <section className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] bg-black/5 border-b border-outline-variant/10 group">
        <div 
          ref={carouselRef}
          className="flex w-full h-full gap-2 md:gap-4 px-2 md:px-4 py-4 md:py-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselImages.map((src, idx) => (
            <div key={idx} className="h-full shrink-0 snap-start bg-black/10 rounded-sm shadow-md overflow-hidden relative">
              <img
                src={src}
                className="h-full w-auto object-contain max-w-[90vw]"
                alt={`Slide ${idx + 1}`}
              />
            </div>
          ))}
        </div>
        
        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-2 md:px-6 z-10 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="p-2 md:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors pointer-events-auto shadow-lg backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 md:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors pointer-events-auto shadow-lg backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center max-w-[90vw] gap-2 z-10 pointer-events-none">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all pointer-events-auto ${
                idx === currentSlide ? 'bg-primary w-6' : 'bg-on-background/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Simple Hero with Banner Image */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0 mb-8"
            >
              <p className="mb-4">Welcome to Alpine Race Club (ARC) at OSU!</p>
              <p className="mb-4">ARC is a student-driven organization dedicated to fostering a competitive and supportive environment for ski racers at OSU. The club is open to all OSU students who wish to engage with the sport, at any skill level.</p>
              <p>ARC at OSU is a member of USCSA/NWCSC and competes at the collegiate level in both Slalom (SL) and Giant Slalom (GS) events.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScjP9MnYoT1H56Lw79dpmKJy2uqST2W3_gHcfyiFdme11by-g/viewform?usp=publish-editor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-3 bg-primary text-on-primary text-lg font-bold rounded-full shadow-lg hover:bg-primary/90 hover:-translate-y-1 transition-all"
              >
                2026/2027 Interest Form
              </a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center md:justify-end order-1 md:order-2"
          >
            <img 
              src="ArcEmblem.png"
              alt="ARC Logo"
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm border border-outline-variant/30 shadow-2xl aspect-[4/3] sm:aspect-video md:aspect-[16/7]"
          >
            <img 
              src="/teamphoto.jpg" 
              alt="Alpine Race Club Team"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
