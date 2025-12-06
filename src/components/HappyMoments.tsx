import { useEffect, useRef, useState } from 'react';

const moments = [
  {
    caption: "Your smile = my favorite view 😊",
    color: "from-blush to-coral",
  },
  {
    caption: "When we laugh together, even WiFi feels stronger 😄",
    color: "from-sky to-lilac",
  },
  {
    caption: "Every picture with you is a memory wrapped in joy 💖",
    color: "from-lilac to-blush",
  },
  {
    caption: "My heart's screensaver is your face 📱💕",
    color: "from-sunshine to-blush",
  },
  {
    caption: "You're the reason I check my phone 100 times 😉",
    color: "from-mint to-sky",
  },
  {
    caption: "Life's best filter? Being with you! ✨",
    color: "from-coral to-sunshine",
  },
];

export const HappyMoments = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`font-display text-5xl md:text-6xl text-center mb-4 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Happy Moments 📸
        </h2>
        <p className={`text-center text-foreground/70 font-body text-lg mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Every moment with you is a treasure ✨
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 transform hover:scale-105 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`aspect-square bg-gradient-to-br ${moment.color} flex items-center justify-center p-6`}>
                <div className="text-6xl group-hover:animate-wiggle">
                  {['📷', '🎉', '💑', '🌅', '🎪', '🎠'][index]}
                </div>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-end">
                <p className="p-4 font-body text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 w-full backdrop-blur-sm">
                  {moment.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/50 font-body text-sm mt-8 italic">
          (Add your favorite photos here to make it even more special! 💕)
        </p>
      </div>
    </section>
  );
};
