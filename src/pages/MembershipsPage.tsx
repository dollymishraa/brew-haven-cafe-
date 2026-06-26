import { useState } from 'react';
import { useToast } from '../context/ToastContext';
import { Check } from 'lucide-react';

const PLANS = [
  {
    tier: 'Explorer',
    price: 9,
    period: '/ month',
    description: 'Perfect for casual visitors who love coffee and games.',
    benefits: [
      '2 free game sessions per month',
      '10% off all menu items',
      'Access to weekly events',
      '5 loyalty points per visit',
      'Digital membership card',
    ],
    featured: false,
    color: 'var(--text-muted)',
  },
  {
    tier: 'Gamer',
    price: 19,
    period: '/ month',
    description: 'Our most popular plan for dedicated game enthusiasts.',
    benefits: [
      'Unlimited free game sessions',
      '20% off all menu items',
      'Priority event registration',
      '1.5× loyalty points',
      'Exclusive Gamer events',
      'Free birthday game night',
    ],
    featured: true,
    color: 'var(--accent)',
  },
  {
    tier: 'Elite',
    price: 39,
    period: '/ month',
    description: 'The ultimate Brew Haven experience with premium perks.',
    benefits: [
      'Unlimited free game sessions',
      '30% off all menu items',
      'Private room access (2×/month)',
      '2× loyalty points',
      'VIP event access',
      'Exclusive member rewards',
      'Dedicated table reservations',
    ],
    featured: false,
    color: 'var(--accent-light)',
  },
];

function Dashboard({ plan, onBack }: { plan: string; onBack: () => void }) {
  const pointsMap: Record<string, number> = { Explorer: 120, Gamer: 340, Elite: 860 };
  const points = pointsMap[plan] ?? 0;

  const visits = [
    { date: 'Jun 20, 2026', activity: 'Game Night — Catan Championship', points: 15 },
    { date: 'Jun 14, 2026', activity: 'Weekly Board Game Night', points: 10 },
    { date: 'Jun 7, 2026', activity: 'Trivia Night', points: 5 },
    { date: 'May 30, 2026', activity: 'D&D Campaign Night', points: 20 },
  ];

  const reservations = [
    { date: 'Jul 5, 2026', time: '7:00 PM', table: 'Board Game Table', guests: 4, status: 'Upcoming' },
    { date: 'Jul 12, 2026', time: '6:30 PM', table: 'Private Room', guests: 8, status: 'Upcoming' },
    { date: 'Jun 20, 2026', time: '8:00 PM', table: 'Tournament Table', guests: 6, status: 'Completed' },
  ];

  return (
    <section className="section-sm">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div className="section-label">My Account</div>
            <h2 className="serif" style={{ fontSize: '2rem' }}>Member <span className="gradient-text">Dashboard</span></h2>
          </div>
          <button className="btn-secondary" onClick={onBack}>Change Plan</button>
        </div>

        {/* Stats */}
        <div className="grid-4" style={{ marginBottom: 32 }}>
          {[
            { label: 'Current Plan', value: plan, sub: 'Active' },
            { label: 'Reward Points', value: points.toLocaleString(), sub: 'Redeemable' },
            { label: 'Total Visits', value: '24', sub: 'All time' },
            { label: 'Games Played', value: '67', sub: 'Unique titles' },
          ].map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <span className="badge badge-green" style={{ marginTop: 8 }}>{stat.sub}</span>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          {/* Visit history */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>Visit History</h3>
            {visits.map((v, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--border-light)', fontSize: 13 }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>{v.activity}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 11 }}>{v.date}</div>
                </div>
                <span className="badge badge-accent">+{v.points} pts</span>
              </div>
            ))}
          </div>

          {/* Reservations */}
          <div className="card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>Reservations</h3>
            {reservations.map((r, i) => (
              <div key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{r.table}</span>
                  <span className={`badge ${r.status === 'Upcoming' ? 'badge-green' : 'badge-muted'}`}>{r.status}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  {r.date} · {r.time} · {r.guests} guests
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MembershipsPage() {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const toast = useToast();

  const handleSelect = (tier: string) => {
    setActivePlan(tier);
    toast.show('Membership Activated!', `Welcome to the ${tier} plan! Your benefits are now active.`, '🎉');
  };

  if (activePlan) return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Member Area</div>
          <h1 className="serif">Your <span className="gradient-text">Dashboard</span></h1>
        </div>
      </div>
      <Dashboard plan={activePlan} onBack={() => setActivePlan(null)} />
    </>
  );

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Join the Community</div>
          <h1 className="serif">Membership <span className="gradient-text">Plans</span></h1>
          <p>Unlock exclusive benefits, priority access, and a deeper Brew Haven experience.</p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div className="membership-grid">
            {PLANS.map(plan => (
              <div key={plan.tier} className={`membership-card${plan.featured ? ' featured' : ''}`}>
                {plan.featured && <div className="membership-featured-badge">Most Popular</div>}
                <div className="membership-tier">{plan.tier}</div>
                <div style={{ marginBottom: 4 }}>
                  <span className="membership-price"><sup>$</sup>{plan.price}</span>
                </div>
                <div className="membership-period">{plan.period} · billed monthly</div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.6 }}>{plan.description}</p>
                <ul className="membership-benefits">
                  {plan.benefits.map((b, i) => (
                    <li key={i}>
                      <span className="benefit-check"><Check size={9} /></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  className={plan.featured ? 'btn-primary' : 'btn-secondary'}
                  style={{ justifyContent: 'center', width: '100%' }}
                  onClick={() => handleSelect(plan.tier)}
                >
                  Get {plan.tier}
                </button>
              </div>
            ))}
          </div>

          {/* Points explainer */}
          <div className="card" style={{ padding: 32, marginTop: 48, textAlign: 'center' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Loyalty Program</div>
            <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: 12 }}>Earn & Redeem <span className="gradient-text">Points</span></h3>
            <p style={{ maxWidth: 480, margin: '0 auto 32px', fontSize: 14 }}>
              Every visit, purchase, and event earns you loyalty points redeemable for free games, coffee, and exclusive rewards.
            </p>
            <div className="grid-3" style={{ gap: 16 }}>
              {[
                { icon: '☕', label: 'Per $1 spent', points: '1 pt' },
                { icon: '🎲', label: 'Per game session', points: '5 pts' },
                { icon: '🏆', label: 'Tournament win', points: '50 pts' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '20px', background: 'var(--bg-glass2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{item.icon}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-light)' }}>{item.points}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
