import { useEffect, useRef } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = ['Brew', 'Play', 'Connect'];
    let wordIdx = 0;
    let count = 0;

    const wordInterval = setInterval(() => {
      wordIdx = (wordIdx + 1) % words.length;
      if (wordRef.current) wordRef.current.textContent = words[wordIdx];
    }, 600);

    const counterInterval = setInterval(() => {
      count += 2;
      if (count > 100) count = 100;
      if (counterRef.current) counterRef.current.textContent = String(count).padStart(3, '0');
      if (barRef.current) barRef.current.style.width = count + '%';
      if (count >= 100) {
        clearInterval(counterInterval);
        clearInterval(wordInterval);
        setTimeout(onComplete, 400);
      }
    }, 28);

    return () => { clearInterval(wordInterval); clearInterval(counterInterval); };
  }, [onComplete]);

  return (
    <div id="loading-screen">
      <div className="loader-label">BREW HAVEN</div>
      <div className="loader-word" ref={wordRef}>Brew</div>
      <div className="loader-counter" ref={counterRef}>000</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" ref={barRef} />
      </div>
    </div>
  );
}
