import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroSection = () => {
  const [showMagic, setShowMagic] = useState(false);

  const triggerMagic = () => {
    setShowMagic(true);
    
    // Confetti explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F9A8D4', '#93C5FD', '#C4B5FD', '#FDE68A', '#FDA4AF'],
    });

    // Second burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#F9A8D4', '#93C5FD', '#C4B5FD'],
      });
    }, 200);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#F9A8D4', '#93C5FD', '#C4B5FD'],
      });
    }, 400);

    setTimeout(() => setShowMagic(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-romantic opacity-30" />
      
      {/* Sparkle decorations */}
      <div className="absolute top-20 left-10 text-4xl animate-sparkle">✨</div>
      <div className="absolute top-40 right-20 text-3xl animate-sparkle" style={{ animationDelay: '0.5s' }}>💫</div>
      <div className="absolute bottom-40 left-20 text-4xl animate-sparkle" style={{ animationDelay: '1s' }}>🌟</div>
      <div className="absolute bottom-20 right-10 text-3xl animate-sparkle" style={{ animationDelay: '1.5s' }}>⭐</div>

      {/* Main content */}
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-6xl md:text-8xl animate-pulse-heart inline-block">💕</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 animate-bounce-in text-foreground leading-tight">
          Hey <span className="text-gradient">Akku</span> 💕
        </h1>
        
        <p className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground/90 mb-8">
          You're My Sunshine, My Smile,
          <br />
          My Favorite Human!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['🦋', '🌸', '💖', '✨', '🌈'].map((emoji, i) => (
            <span 
              key={i} 
              className="text-4xl animate-float"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <button
          onClick={triggerMagic}
          className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-lg md:text-xl px-8 py-4 rounded-full shadow-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="mr-2 h-5 w-5" />
          Tap for Magic!
          <Heart className="ml-2 h-5 w-5 animate-pulse-heart" />
        </button>

        {showMagic && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl animate-bounce-in">💝</span>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-foreground/60">
          <span className="text-sm font-body mb-2">Scroll for more love</span>
          <span className="text-2xl">💗</span>
        </div>
      </div>
    </section>
  );
};
