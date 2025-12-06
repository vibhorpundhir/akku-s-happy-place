import { useEffect, useRef, useState } from 'react';

const loveNotes = [
  "Akku, you make my world giggle and glow ✨",
  "You're the playlist my heart never skips 💓",
  "My daily mood booster? One text from you 😉",
  "They say happiness is a choice — I chose you!",
  "You're my favorite notification sound 📱",
  "Even my coffee is jealous of how sweet you are ☕",
  "You're the 'good morning' my day needs 🌅",
  "My heart has only one favorite person: YOU 💕",
  "You're the reason I smile at my phone like crazy 😊",
  "Life's best moments have you in them 🌟",
];

export const LoveNotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loveNotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-sunset opacity-20" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`font-display text-5xl md:text-6xl text-center mb-12 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Love Notes 💌
        </h2>

        <div className={`relative h-48 flex items-center justify-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {loveNotes.map((note, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                index === currentIndex
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-90 rotate-3'
              }`}
            >
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-glow border border-primary/30 max-w-2xl mx-4">
                <p className="font-display text-2xl md:text-3xl text-center text-foreground">
                  "{note}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {loveNotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 mt-8">
          {['💕', '💖', '💗', '💓', '💘'].map((heart, i) => (
            <span
              key={i}
              className="text-2xl animate-float"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {heart}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
