import { useRef, useEffect, useState } from 'react';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Stars({ n }: { n: number }) {
  return <span className="stars">{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>;
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const visible = 3;

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % (testimonials.length - visible + 1)), 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    const cardW = trackRef.current.scrollWidth / testimonials.length;
    trackRef.current.style.transform = `translateX(-${idx * (cardW + 24)}px)`;
  }, [idx]);

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(testimonials.length - visible, i + 1));

  return (
    <section className="section">
      <div className="container">
        <div className="flex-between mb-32" style={{ flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div className="section-label">Reviews</div>
            <h2 className="section-title serif">What Players <span className="gradient-text">Say</span></h2>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn-secondary" onClick={prev} style={{ padding: '10px 14px' }} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button className="btn-secondary" onClick={next} style={{ padding: '10px 14px' }} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <div className="testimonial-track" ref={trackRef}>
            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
                  <div>
                    <div className="testimonial-author">{t.name}</div>
                    <div className="testimonial-game">Favorite: {t.favoriteGame}</div>
                  </div>
                </div>
                <Stars n={t.rating} />
                <p className="testimonial-quote">"{t.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
