import { Link } from 'react-router-dom';
import FounderStory from '../components/home/FounderStory';
import { Heart, Users, Award, Coffee } from 'lucide-react';

const values = [
  { icon: <Coffee size={24} color="var(--accent)" />, title: 'Craft & Quality', desc: 'Every cup and every game session is crafted with care and intentionality.' },
  { icon: <Users size={24} color="var(--accent)" />, title: 'Community First', desc: "We're not just a cafe — we're a gathering place for curious, playful people." },
  { icon: <Heart size={24} color="var(--accent)" />, title: 'Inclusive Space', desc: 'Everyone is welcome here — from first-time players to seasoned strategists.' },
  { icon: <Award size={24} color="var(--accent)" />, title: 'Excellence Always', desc: 'From our sourcing to our service, we hold ourselves to the highest standard.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Who We Are</div>
          <h1 className="serif">About <span className="gradient-text">Brew Haven</span></h1>
          <p>Coffee. Games. Conversations. — A community space built with purpose and love.</p>
        </div>
      </div>

      {/* Values */}
      <section className="section-sm">
        <div className="container">
          <div className="text-center mb-32">
            <div className="section-label">Our Values</div>
            <h2 className="section-title serif">What We <span className="gradient-text">Stand For</span></h2>
          </div>
          <div className="grid-4" style={{ gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} className="card" style={{ padding: 24, textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--accent-glow)', border: '1px solid var(--accent-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  {v.icon}
                </div>
                <h4 style={{ marginBottom: 8 }}>{v.title}</h4>
                <p style={{ fontSize: 13 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="section-label">Our Mission</div>
          <h2 className="section-title serif" style={{ marginBottom: 24 }}>
            Creating <span className="gradient-text">Connections</span> One Game at a Time
          </h2>
          <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 700, margin: '0 auto 32px', padding: '24px', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-glass2)' }}>
            "We believe the best conversations happen over a warm cup of coffee and a great game. Brew Haven is our love letter to community, curiosity, and the joy of play."
            <div style={{ fontSize: '0.9rem', marginTop: 16, color: 'var(--accent)', letterSpacing: 2, textTransform: 'uppercase', fontStyle: 'normal' }}>— Dolly &amp; Shine</div>
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/reservations" className="btn-primary">Book a Table</Link>
            <Link to="/board-games" className="btn-secondary">Explore Games</Link>
          </div>
        </div>
      </section>

      <FounderStory />
    </>
  );
}
