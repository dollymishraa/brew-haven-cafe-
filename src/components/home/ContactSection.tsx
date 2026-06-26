import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const hours = [
  { day: 'Mon – Thu', time: '10:00 AM – 10:00 PM' },
  { day: 'Fri – Sat', time: '10:00 AM – 12:00 AM' },
  { day: 'Sunday',    time: '11:00 AM – 9:00 PM' },
];

const infos = [
  { icon: <MapPin size={16} color="var(--accent)" />, label: 'Address', value: 'carter road bandra, mumbai, OR 400050' },
  { icon: <Phone size={16} color="var(--accent)" />, label: 'Phone', value: '+91 9898989898', href: 'tel:+9198989898' },
  { icon: <Mail size={16} color="var(--accent)" />, label: 'Email', value: 'hello@brewhaven.com', href: 'mailto:hello@brewhaven.com' },
];

export default function ContactSection() {
  return (
    <section className="section" id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="text-center mb-32">
          <div className="section-label">Find Us</div>
          <h2 className="section-title serif">Reserve Your Next <span className="gradient-text">Game Night</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Come visit us or book your table online. We can't wait to play with you.
          </p>
          <Link to="/reservations" className="btn-primary">Book a Table</Link>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div>
            {infos.map((info, i) => (
              <div key={i} className="contact-info-item">
                <div className="contact-icon">{info.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
                    {info.label}
                  </div>
                  {info.href
                    ? <a href={info.href} style={{ fontSize: 14, color: 'var(--text-primary)', transition: 'color 0.2s' }}>{info.value}</a>
                    : <span style={{ fontSize: 14, color: 'var(--text-primary)' }}>{info.value}</span>
                  }
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="contact-info-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div className="contact-icon"><Clock size={16} color="var(--accent)" /></div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4, paddingTop: 8 }}>
                  Opening Hours
                </div>
              </div>
              <div className="contact-hours-grid">
                {hours.map((h, i) => (
                  <>
                    <div key={`d${i}`} className="hours-day">{h.day}</div>
                    <div key={`t${i}`} className="hours-time">{h.time}</div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', minHeight: 320 }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320, display: 'block' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.100680891792!2d72.81933647428802!3d19.059310482141797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96bda2c82cd%3A0xb264afc7c14ea246!2sCarter%20Rd%2C%20Bandra%20West%2C%20400050!5e0!3m2!1sen!2sin!4v1782420334763!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brew Haven Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
