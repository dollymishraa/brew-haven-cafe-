import { useState } from 'react';
import { events } from '../data/events';
import { Calendar, Clock, Users, Ticket, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';

function EventModal({ event, onClose }: { event: typeof events[0]; onClose: () => void }) {
  const [tickets, setTickets] = useState(1);
  const [onWaitlist, setOnWaitlist] = useState(false);
  const toast = useToast();
  const isFull = event.registered >= event.capacity;
  const spotsLeft = event.capacity - event.registered;
  const total = tickets * event.price;

  const handleBook = () => {
    if (isFull) {
      setOnWaitlist(true);
      toast.show('Added to Waitlist', `You're on the waitlist for ${event.title}`, '📋');
    } else {
      toast.show('Registration Confirmed!', `${tickets} ticket(s) for ${event.title} — $${total.toFixed(2)}`, '🎉');
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <span style={{ fontSize: 28 }}></span>
            <h2 style={{ marginTop: 8 }}>{event.title}</h2>
          </div>
          <button className="btn-ghost" onClick={onClose}><X size={18} /></button>
        </div>

        <p>{event.description}</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, margin: '20px 0' }}>
          {[
            { icon: <Calendar size={14} />, label: event.date },
            { icon: <Clock size={14} />, label: event.time },
            { icon: <Users size={14} />, label: `${isFull ? 'Full' : `${spotsLeft} spots left`}` },
            { icon: <Ticket size={14} />, label: `$${event.price} per person` },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'var(--bg-glass2)', borderRadius: 'var(--radius-sm)', fontSize: 13, color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--accent)' }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Capacity bar */}
        <div className="event-capacity" style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
            {event.registered}/{event.capacity}
          </span>
          <div className="event-cap-bar-wrap">
            <div className="event-cap-bar" style={{ width: `${(event.registered / event.capacity) * 100}%` }} />
          </div>
          <span className={`badge ${isFull ? 'badge-red' : 'badge-green'}`}>{isFull ? 'Full' : 'Open'}</span>
        </div>

        {!onWaitlist && !isFull && (
          <div style={{ marginBottom: 20 }}>
            <div className="label">Number of Tickets</div>
            <div className="qty-ctrl" style={{ width: 'fit-content' }}>
              <button className="qty-btn" onClick={() => setTickets(t => Math.max(1, t - 1))}>−</button>
              <span className="qty-num">{tickets}</span>
              <button className="qty-btn" onClick={() => setTickets(t => Math.min(spotsLeft, t + 1))}>+</button>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>Total: ${total.toFixed(2)}</p>
          </div>
        )}

        {onWaitlist ? (
          <div style={{ padding: '14px 16px', background: 'rgba(74,158,107,0.1)', border: '1px solid rgba(74,158,107,0.3)', borderRadius: 'var(--radius-sm)', fontSize: 13, color: 'var(--green)' }}>
            ✓ You're on the waitlist! We'll notify you if a spot opens up.
          </div>
        ) : (
          <button className="btn-primary w-full" style={{ justifyContent: 'center' }} onClick={handleBook}>
            {isFull ? 'Join Waitlist' : `Register — $${total.toFixed(2)}`}
          </button>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [selected, setSelected] = useState<typeof events[0] | null>(null);
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Weekly', 'Tournament', 'RPG'];

  const filtered = events.filter(e => filter === 'All' || e.category === filter);

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">What's On</div>
          <h1 className="serif">Events & <span className="gradient-text">Tournaments</span></h1>
          <p>From weekly game nights to championship tournaments — there's always something happening at Brew Haven.</p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {filters.map(f => (
              <button key={f} className={`filter-chip${filter === f ? ' active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map(event => {
              const isFull = event.registered >= event.capacity;
              const pct = (event.registered / event.capacity) * 100;
              return (
                <div key={event.id} className="event-card">
                  <div style={{ position: 'relative' }}>
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <div className="img-overlay" />
                    <span style={{ position: 'absolute', top: 12, left: 12, fontSize: 28 }}></span>
                    <span className={`badge ${event.category === 'Weekly' ? 'badge-green' : 'badge-accent'}`} style={{ position: 'absolute', top: 14, right: 14 }}>
                      {event.category}
                    </span>
                  </div>
                  <div className="event-card-body">
                    <div className="event-card-title">{event.title}</div>
                    <div className="event-card-date">
                      <Calendar size={12} />{event.date} · {event.time}
                    </div>
                    <div className="event-card-desc">{event.description}</div>
                    <div className="event-capacity">
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{event.registered}/{event.capacity}</span>
                      <div className="event-cap-bar-wrap">
                        <div className="event-cap-bar" style={{ width: `${pct}%` }} />
                      </div>
                      <span className={`badge ${isFull ? 'badge-red' : 'badge-green'}`}>{isFull ? 'Full' : 'Open'}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--accent-light)' }}>
                        ${event.price} / person
                      </span>
                      <button className="btn-primary" style={{ fontSize: 12, padding: '8px 16px' }} onClick={() => setSelected(event)}>
                        {isFull ? 'Join Waitlist' : 'Register'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selected && <EventModal event={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
