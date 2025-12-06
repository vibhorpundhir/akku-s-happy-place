import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

const loveWheelMessages = [
  "You're the peanut butter to my jelly! 🥜",
  "My heart does a happy dance when I see you! 💃",
  "You're my favorite notification! 📱💕",
  "Life's better because you exist! ✨",
  "You make my heart go brrr! 💗",
  "You're proof that wishes come true! 🌟",
  "My favorite hello and hardest goodbye! 👋",
  "You're the reason I smile like an idiot! 😊",
];

const compliments = [
  "You're absolutely gorgeous! 💕",
  "Your smile could power a city! ⚡",
  "You're sweeter than chocolate! 🍫",
  "You light up my whole world! 🌍",
  "You're a masterpiece! 🎨",
  "You're my happy pill! 💊",
  "You're magic in human form! ✨",
  "You're my forever favorite! 💝",
];

export const FunCorner = () => {
  const [wheelMessage, setWheelMessage] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [currentCompliment, setCurrentCompliment] = useState("");
  const [showQuizAnswer, setShowQuizAnswer] = useState(false);
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

  const spinWheel = () => {
    setIsSpinning(true);
    setWheelMessage("");
    
    setTimeout(() => {
      const randomMessage = loveWheelMessages[Math.floor(Math.random() * loveWheelMessages.length)];
      setWheelMessage(randomMessage);
      setIsSpinning(false);
      
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F9A8D4', '#93C5FD', '#C4B5FD'],
      });
    }, 2000);
  };

  const tapHeart = () => {
    setHeartCount(prev => prev + 1);
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    setCurrentCompliment(randomCompliment);
    
    confetti({
      particleCount: 10,
      spread: 30,
      origin: { y: 0.6 },
      colors: ['#F9A8D4', '#FDA4AF'],
      shapes: ['circle'],
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-lilac/10 to-background" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`font-display text-5xl md:text-6xl text-center mb-4 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Fun Corner 🎪
        </h2>
        <p className={`text-center text-foreground/70 font-body text-lg mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Because love should always be fun! 🎉
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Love Wheel */}
          <div className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="font-display text-2xl mb-4 text-foreground">🎡 Spin the Love Wheel</h3>
            <div className={`text-6xl mb-4 ${isSpinning ? 'animate-spin-slow' : ''}`}>
              🎯
            </div>
            <Button
              onClick={spinWheel}
              disabled={isSpinning}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-full px-6 py-2 mb-4"
            >
              {isSpinning ? "Spinning..." : "Spin!"}
            </Button>
            {wheelMessage && (
              <p className="font-body text-foreground bg-primary/20 p-4 rounded-xl animate-bounce-in">
                {wheelMessage}
              </p>
            )}
          </div>

          {/* Heart Tap Game */}
          <div className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 text-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-display text-2xl mb-4 text-foreground">💗 Tap the Heart</h3>
            <button
              onClick={tapHeart}
              className="text-7xl transform hover:scale-125 transition-transform duration-200 animate-pulse-heart"
            >
              💖
            </button>
            <p className="font-body text-foreground/70 mt-2">
              Tapped: <span className="text-primary font-bold">{heartCount}</span> times!
            </p>
            {currentCompliment && (
              <p className="font-body text-foreground bg-blush/30 p-3 rounded-xl mt-4 animate-fade-in-up">
                {currentCompliment}
              </p>
            )}
          </div>

          {/* Quiz */}
          <div className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="font-display text-2xl mb-4 text-foreground">🤔 Quick Quiz</h3>
            <p className="font-body text-foreground mb-4">
              What do I love most about you?
            </p>
            <div className="space-y-2 mb-4">
              {["Your smile", "Your laugh", "Your heart", "Everything!"].map((option, i) => (
                <button
                  key={i}
                  onClick={() => setShowQuizAnswer(true)}
                  className="w-full p-2 bg-secondary/50 hover:bg-primary/30 rounded-lg font-body transition-colors duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
            {showQuizAnswer && (
              <div className="bg-primary/20 p-4 rounded-xl animate-bounce-in">
                <span className="text-4xl">🎉</span>
                <p className="font-body text-foreground font-bold mt-2">
                  Correct! The answer is EVERYTHING! 💕
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
