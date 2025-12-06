import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: "🧁",
    title: "Sweetest Soul Ever",
    description: "Your kindness makes the world a better place",
    color: "bg-blush/30",
  },
  {
    icon: "😂",
    title: "Funny Beyond Measure",
    description: "Your laugh is my favorite sound",
    color: "bg-sunshine/30",
  },
  {
    icon: "💬",
    title: "Talks That Never Get Boring",
    description: "Hours feel like minutes with you",
    color: "bg-sky/30",
  },
  {
    icon: "💫",
    title: "Sparkles Brighter Than Stars",
    description: "Your presence lights up every room",
    color: "bg-lilac/30",
  },
  {
    icon: "🎨",
    title: "Creative & Unique",
    description: "You see magic where others see ordinary",
    color: "bg-mint/30",
  },
  {
    icon: "💝",
    title: "Pure Heart",
    description: "Your love is the most genuine gift",
    color: "bg-coral/30",
  },
];

export const WhyYoureAmazing = () => {
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

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dreamy opacity-20" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`font-display text-5xl md:text-6xl text-center mb-4 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Why You're So Amazing 💖
        </h2>
        <p className={`text-center text-foreground/70 font-body text-lg mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Just a few of the million reasons I adore you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`${reason.color} backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft hover:shadow-glow transform hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {reason.icon}
              </div>
              <h3 className="font-display text-2xl mb-2 text-foreground">
                {reason.title}
              </h3>
              <p className="font-body text-foreground/70">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
