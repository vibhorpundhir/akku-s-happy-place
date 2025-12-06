import { useEffect, useRef, useState } from 'react';

export const HappyForever = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [daysSince, setDaysSince] = useState(0);
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
    // Calculate days since a special date (you can customize this)
    const startDate = new Date('2024-01-01'); // Change this to your special date
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysSince(diffDays);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-romantic opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className={`font-display text-5xl md:text-6xl text-center mb-8 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Our Happy Forever 💝
        </h2>

        {/* Countdown Timer */}
        <div className={`bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-glow border border-primary/30 text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="font-body text-foreground/70 text-lg mb-2">Days Since I Fell For Akku 💘</p>
          <div className="flex justify-center items-center gap-2">
            <span className="font-display text-6xl md:text-8xl text-primary">{daysSince}</span>
            <span className="font-body text-2xl text-foreground/70">days</span>
          </div>
          <p className="font-body text-foreground/50 text-sm mt-2">(and counting forever... 💕)</p>
        </div>

        {/* Love Letter */}
        <div className={`bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-glow border border-primary/30 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-6">
            <span className="text-5xl animate-pulse-heart inline-block">💌</span>
          </div>
          
          <div className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed space-y-4 text-center">
            <p>
              <span className="font-display text-2xl text-primary">Dear Akku,</span>
            </p>
            <p>
              From every little giggle to every deep talk, you've painted my world with love and laughter. 
              You're not just my girl, you're my happy place, my comfort zone, and my favorite person in the entire universe.
            </p>
            <p>
              Every moment with you feels like a beautiful dream I never want to wake up from. 
              Your smile is my morning coffee, your laugh is my favorite song, and your love is my greatest treasure.
            </p>
            <p>
              I promise to be your biggest fan, your strongest support, and your forever partner in all the silly, wonderful adventures life throws our way.
            </p>
            <p className="font-display text-2xl text-primary pt-4">
              Forever yours,
              <br />
              Your #1 Fan 💕
            </p>
          </div>
        </div>

        {/* Final hearts animation */}
        <div className="flex justify-center mt-12">
          {['💕', '🦋', '💖', '✨', '💗', '🌸', '💓', '⭐', '💘'].map((emoji, i) => (
            <span
              key={i}
              className="text-3xl mx-2 animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
