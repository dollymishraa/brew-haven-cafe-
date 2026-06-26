import { Link } from 'react-router-dom';
import { Link2, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/home' },
  { label: 'Menu', to: '/menu' },
  { label: 'Board Games', to: '/board-games' },
  { label: 'Events', to: '/events' },
  { label: 'Memberships', to: '/memberships' },
  { label: 'Reservations', to: '/reservations' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo">Brew<span>Haven</span></div>
            <p className="footer-desc">
              A welcoming destination where handcrafted coffee, board games, and meaningful connections come together. Founded by Dolly &amp; Shine.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                <Link2 size={16} />
              </a>
              <a href="https://wa.me" target="_blank" rel="noreferrer" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <Link2 size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.slice(0, 4).map(l => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>&nbsp;</h4>
            <ul>
              {quickLinks.slice(4).map(l => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="footer-col">
            <h4>Visit Us</h4>
            <ul>
              <li><a href="#">carter road bandra, mumbai OR 400050</a></li>
              <li><a href="tel:+91 9898989898">+91 9898989898</a></li>
              <li><a href="mailto:hello@brewhaven.com">hello@brewhaven.com</a></li>
              <li style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.7 }}>
                Mon–Thu: 10am–10pm<br />
                Fri–Sat: 10am–12am<br />
                Sun: 11am–9pm
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">© 2026 Brew Haven. Built with passion by Dolly &amp; Shine.</p>
          <div className="footer-status">
            
          </div>
        </div>
      </div>
    </footer>
  );
}
