const timeline = [
  {
    year: '2021',
    title: 'The Idea',
    text: "Dolly & Shine, lifelong board game enthusiasts and coffee obsessives, dreamed of a space where both worlds could coexist beautifully.",
  },
  {
    year: '2022',
    title: 'Planning & Design',
    text: 'Months of visiting game cafes across three continents, curating our initial game library, and designing every detail of the space.',
  },
  {
    year: '2023',
    title: 'Opening Day',
    text: 'Brew Haven opened its doors to a sold-out crowd. 200 people played games, drank great coffee, and a community was born.',
  },
  {
    year: '2024–Now',
    title: 'Community Growth',
    text: 'Over 15,000 visitors, 500+ games in our library, weekly tournaments, and a thriving community that keeps us inspired every day.',
  },
];

export default function FounderStory() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -12, borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(135deg, var(--accent-dark), transparent)',
              zIndex: 0,
            }} />
            <img
              src="/images/KLing_a00cb289-24b9-4a66-b866-658129c2be4f.jpg"
              alt="Founders Dolly and Shine at Brew Haven"
              loading="lazy"
              style={{
                width: '100%', borderRadius: 'var(--radius-xl)', objectFit: 'cover',
                aspectRatio: '4/5', position: 'relative', zIndex: 1,
                border: '1px solid var(--border)',
              }}
            />
            <div style={{
              position: 'absolute', bottom: 24, left: 24, right: 24, zIndex: 2,
              background: 'rgba(10,7,5,0.85)', backdropFilter: 'blur(12px)',
              borderRadius: 'var(--radius-md)', padding: '16px 20px',
              border: '1px solid var(--border)',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>
                Dolly &amp; Shine
              </div>
              <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: 2, textTransform: 'uppercase' }}>
                Co-founders of Brew Haven
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="section-title serif">
              The Story Behind<br /><span className="gradient-text">Brew Haven</span>
            </h2>
            <div className="divider" />
            <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
              Founded by Dolly &amp; Shine, Brew Haven was created as a welcoming destination where handcrafted coffee, board games, and meaningful connections come together. What started as a shared dream between two friends became Portland's most beloved community space.
            </p>

            {/* Timeline */}
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
