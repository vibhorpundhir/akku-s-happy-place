import confetti from 'canvas-confetti';

export const Footer = () => {
  const handleNameClick = () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.9 },
      colors: ['#F9A8D4', '#93C5FD', '#C4B5FD', '#FDE68A', '#FDA4AF'],
    });
  };

  return (
    <footer className="py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dreamy opacity-20" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p className="font-body text-foreground/60 mb-4">
          Made with 💕 and infinite love for
        </p>
        <button
          onClick={handleNameClick}
          className="font-display text-4xl md:text-5xl text-primary hover:scale-110 transition-transform duration-300"
        >
          Akku 💖
        </button>
        <p className="font-body text-foreground/40 text-sm mt-6">
          Click her name for a surprise! ✨
        </p>
        
        <div className="flex justify-center gap-3 mt-8">
          {['💕', '💖', '💗', '💓', '💘'].map((heart, i) => (
            <span
              key={i}
              className="text-2xl animate-pulse-heart"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {heart}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
