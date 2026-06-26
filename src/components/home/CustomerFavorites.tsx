const favorites = [
  {
    label: 'Best Selling Coffee',
    name: 'Honey Latte',
    description: 'Oat milk latte with wildflower honey. Our most-loved brew.',
    image: '/images/KLing_11379db3-e2d1-482b-b115-1a6b60798f87.jpg',
    rating: 4.9,
    reviews: 342,
    badge: ' #1 Coffee',
  },
  {
    label: 'Most Played Game',
    name: 'Pandemic',
    description: "Stop the outbreak together. Brew Haven's cooperative classic.",
    image: '/images/KLing_819fddbf-b132-48eb-ace0-8772de979a91.jpg',
    rating: 4.9,
    reviews: 218,
    badge: ' #1 Game',
  },
  {
    label: 'Most Loved Dessert',
    name: 'Tiramisu',
    description: 'House-made tiramisu with espresso-soaked ladyfingers.',
    image: '/images/KLing_6f84ecad-b8d7-4a6b-bd5c-fc5e5b2e0ff3.jpg',
    rating: 4.8,
    reviews: 187,
    badge: ' #1 Dessert',
  },
  {
    label: 'Popular Event',
    name: 'Catan Championship',
    description: 'Trade, build, and rule. Our biggest tournament of the year.',
    image: '/images/KLing_369e1e17-bffd-41ee-b569-24d73a5342a9.jpg',
    rating: 5.0,
    reviews: 96,
    badge: ' #1 Event',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars">
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
    </span>
  );
}

export default function CustomerFavorites() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-32">
          <div className="section-label">Community Picks</div>
          <h2 className="section-title serif">Customer <span className="gradient-text">Favorites</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Loved by hundreds  these are the stars of Brew Haven.
          </p>
        </div>

        <div className="grid-4">
          {favorites.map((fav, i) => (
            <div key={i} className="fav-card">
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={fav.image} alt={fav.name} loading="lazy" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                <div className="img-overlay" />
                <span className="badge badge-accent" style={{ position: 'absolute', top: 12, left: 12 }}>
                  {fav.badge}
                </span>
              </div>
              <div className="fav-card-body">
                <div className="fav-card-label">{fav.label}</div>
                <div className="fav-card-name">{fav.name}</div>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>{fav.description}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Stars rating={fav.rating} />
                  <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                    {fav.rating.toFixed(1)} ({fav.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
