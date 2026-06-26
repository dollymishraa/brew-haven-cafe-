import { Link } from 'react-router-dom';

const experiences = [
  {
    title: 'Board Game Library',
    description: '500+ curated titles — strategy, party, RPG, cooperative and more.',
    image: '/images/KLing_4e3587ff-25ff-4c5c-9320-16f4984ad66d.jpg',
    link: '/board-games',
    cta: 'Browse Games',
    span: 'bento-1',
  },
  {
    title: 'Specialty Coffee',
    description: 'Single-origin beans crafted by our expert baristas every day.',
    image: '/images/KLing_80a18e54-bec7-42a1-9883-544221467bed.jpg',
    link: '/menu',
    cta: 'View Menu',
    span: 'bento-2',
  },
  {
    title: 'Weekly Events',
    description: 'Tournaments, trivia nights, D&D campaigns and more.',
    image: '/images/KLing_68acc8d1-9879-4f2d-8f0c-f5666708ebaa.jpg',
    link: '/events',
    cta: 'See Events',
    span: 'bento-3',
  },
  {
    title: 'Private Rooms',
    description: 'Exclusive gaming rooms for groups and special occasions.',
    image: '/images/KLing_1c2796c1-58ea-45e6-a0c3-2d24e500a847.jpg',
    link: '/reservations',
    cta: 'Reserve Now',
    span: 'bento-4',
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-32">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title serif">Curated <span className="gradient-text">Experiences</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From rare board games to specialty brews — every visit is an adventure.
          </p>
        </div>

        <div className="bento-grid">
          {experiences.map((exp, i) => (
            <div key={i} className={`bento-card ${exp.span}`}>
              <img src={exp.image} alt={exp.title} loading="lazy" />
              <div className="img-overlay" />
              <div className="bento-card-content">
                <h3 className="serif">{exp.title}</h3>
                <p>{exp.description}</p>
                <Link to={exp.link} className="btn-secondary" style={{ marginTop: 14, display: 'inline-flex' }}>
                  {exp.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
