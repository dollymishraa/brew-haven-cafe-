import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const roles = ['Board Game Cafe', 'Community Hub', 'Coffee House', 'Gaming Lounge'];

export default function Hero() {
  const roleRef = useRef<HTMLDivElement>(null);
  const idx = useRef(0);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    el.textContent = roles[0];

    const interval = setInterval(() => {
      el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      setTimeout(() => {
        idx.current = (idx.current + 1) % roles.length;
        el.textContent = roles[idx.current];
        el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 320);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
     
      {/* Dark image fallback overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: "url('/images/KLing_c3dd2899-6947-47cb-9fa5-d3e5effe9b66.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.5,
      }} />

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-tag">
        </div>

        <h1 className="hero-title serif">
          Where Coffee<br />Meets <span className="gradient-text">Play</span>
        </h1>

        <div className="hero-role-wrap">
          <div className="hero-role" ref={roleRef} />
        </div>

        <p className="hero-desc">
          Handcrafted coffee, memorable game nights, and a community built around connection.
        </p>

        <div className="hero-ctas">
          <Link to="/board-games" className="btn-primary">Explore Games</Link>
          <Link to="/reservations" className="btn-secondary">Book a Table</Link>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
        <ArrowDown size={14} style={{ opacity: 0.5 }} />
      </div>
    </section>
  );
}
