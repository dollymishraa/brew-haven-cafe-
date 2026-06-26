import { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const TABLE_TYPES = [
  { id: 'standard', name: 'Standard Table', desc: 'Comfortable seating for everyday dining and gaming', icon: '🪑', minGuests: 1 },
  { id: 'game', name: 'Board Game Table', desc: 'Dedicated gaming table with game tray and card holders', icon: '🎲', minGuests: 2 },
  { id: 'private', name: 'Private Room', desc: 'Exclusive room for groups. Perfect for parties and events', icon: '🔒', minGuests: 4 },
  { id: 'tournament', name: 'Tournament Table', desc: 'Large competition-grade setup for serious players', icon: '🏆', minGuests: 6 },
];

const TIME_SLOTS = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
];

export default function ReservationsPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    date: '', time: '', guests: '2',
    tableType: 'game', requests: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const selectedTable = TABLE_TYPES.find(t => t.id === form.tableType);

  const validate = () => {
    if (!form.name || !form.email || !form.date || !form.time) return 'Please fill in all required fields.';
    const d = new Date(form.date);
    if (d < new Date(new Date().toDateString())) return 'Please select a future date.';
    const guests = parseInt(form.guests);
    if (selectedTable && guests < selectedTable.minGuests) return `${selectedTable.name} requires at least ${selectedTable.minGuests} guests.`;
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { toast.show('Validation Error', err, '⚠️'); return; }
    setSubmitted(true);
    toast.show('Reservation Confirmed!', `Table booked for ${form.date} at ${form.time}`, '🎉');
  };

  const today = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
          <CheckCircle size={48} color="var(--green)" style={{ marginBottom: 16 }} />
          <h2 className="serif" style={{ fontSize: '2rem', marginBottom: 12 }}>Reservation Confirmed!</h2>
          <p style={{ marginBottom: 24 }}>
            Your table is booked for <strong style={{ color: 'var(--accent-light)' }}>{form.date}</strong> at{' '}
            <strong style={{ color: 'var(--accent-light)' }}>{form.time}</strong> for {form.guests} guests.
          </p>
          <div className="card" style={{ padding: 20, marginBottom: 24, textAlign: 'left' }}>
            {[
              ['Name', form.name], ['Email', form.email],
              ['Table', selectedTable?.name], ['Guests', form.guests],
              ['Date', form.date], ['Time', form.time],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-light)', fontSize: 13 }}>
                <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                <span style={{ fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => setSubmitted(false)}>Book Another Table</button>
            <button className="btn-secondary" onClick={() => window.location.href = '/'}>Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Reserve Your Spot</div>
          <h1 className="serif">Table <span className="gradient-text">Reservations</span></h1>
          <p>Book your gaming session in advance and we'll have everything ready for you.</p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container-narrow">
          <form onSubmit={handleSubmit}>
            {/* Personal Info */}
            <div className="card" style={{ padding: 28, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Personal Information</h3>
              <div className="res-form">
                <div>
                  <label className="label"><Users size={12} style={{ display: 'inline', marginRight: 4 }} />Full Name *</label>
                  <input className="input-field" value={form.name} onChange={e => set('name', e.target.value)} placeholder="Your name" required />
                </div>
                <div>
                  <label className="label">Email *</label>
                  <input className="input-field" type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="your@email.com" required />
                </div>
                <div className="res-form-full">
                  <label className="label">Phone (optional)</label>
                  <input className="input-field" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            </div>

            {/* Date / Time / Guests */}
            <div className="card" style={{ padding: 28, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>When & How Many</h3>
              <div className="res-form">
                <div>
                  <label className="label"><Calendar size={12} style={{ display: 'inline', marginRight: 4 }} />Date *</label>
                  <input className="input-field" type="date" min={today} value={form.date} onChange={e => set('date', e.target.value)} required />
                </div>
                <div>
                  <label className="label"><Users size={12} style={{ display: 'inline', marginRight: 4 }} />Number of Guests</label>
                  <select className="input-field" value={form.guests} onChange={e => set('guests', e.target.value)}>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(n => (
                      <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className="res-form-full">
                  <label className="label"><Clock size={12} style={{ display: 'inline', marginRight: 4 }} />Preferred Time *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 8 }}>
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot} type="button"
                        className={`finder-option${form.time === slot ? ' selected' : ''}`}
                        style={{ fontSize: 12, padding: '8px 4px' }}
                        onClick={() => set('time', slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Table Type */}
            <div className="card" style={{ padding: 28, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20 }}>Choose Your Table</h3>
              <div className="table-type-grid">
                {TABLE_TYPES.map(t => (
                  <div
                    key={t.id}
                    className={`table-type-card${form.tableType === t.id ? ' selected' : ''}`}
                    onClick={() => set('tableType', t.id)}
                  >
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                    <h4>{t.name}</h4>
                    <p>{t.desc}</p>
                    {t.minGuests > 1 && (
                      <span className="badge badge-muted" style={{ marginTop: 8 }}>Min {t.minGuests} guests</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="card" style={{ padding: 28, marginBottom: 24 }}>
              <label className="label" style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
                <MessageSquare size={14} />Special Requests (optional)
              </label>
              <textarea
                className="input-field"
                rows={3}
                value={form.requests}
                onChange={e => set('requests', e.target.value)}
                placeholder="Any special requirements, celebrations, or notes..."
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn-primary w-full" style={{ justifyContent: 'center', padding: '16px', fontSize: 15 }}>
              Confirm Reservation
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
