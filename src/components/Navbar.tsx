import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Board Games', to: '/board-games' },
  { label: 'Events', to: '/events' },
  { label: 'Reservations', to: '/reservations' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          Brew<span>Haven</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map(l => (
            <li key={l.to}>
              <Link to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <button
            className="btn-ghost"
            onClick={() => setOpen(true)}
            style={{ position: 'relative' }}
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span style={{
                position: 'absolute', top: -4, right: -4,
                width: 16, height: 16, borderRadius: '50%',
                background: 'var(--accent)', color: '#fff',
                fontSize: 10, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{count}</span>
            )}
          </button>
          <Link to="/memberships" className="btn-primary" style={{ fontSize: 12, padding: '8px 18px' }}>
            Membership
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} color="var(--text-primary)" /> : <Menu size={22} color="var(--text-secondary)" />}
        </button>
      </div>

      <div className={`mobile-menu glass${mobileOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <Link key={l.to} to={l.to} className={location.pathname === l.to ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
        <div style={{ display: 'flex', gap: 10, padding: '8px 16px' }}>
          <button className="btn-ghost" onClick={() => { setOpen(true); setMobileOpen(false); }} style={{ position: 'relative' }}>
            <ShoppingBag size={16} />
            {count > 0 && <span style={{ marginLeft: 4, color: 'var(--accent)', fontWeight: 700 }}>{count}</span>}
            Cart
          </button>
          <Link to="/memberships" className="btn-primary" style={{ fontSize: 12, padding: '8px 16px' }}>Membership</Link>
        </div>
      </div>
    </nav>
  );
}
