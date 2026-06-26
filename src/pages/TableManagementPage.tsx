import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

type TableStatus = 'available' | 'occupied' | 'reserved';
interface TableInfo { id: number; num: string; type: string; status: TableStatus; session?: string; }

const initialTables: TableInfo[] = [
  { id: 1,  num: 'T01', type: 'Standard',    status: 'available' },
  { id: 2,  num: 'T02', type: 'Standard',    status: 'occupied',  session: '1h 20m' },
  { id: 3,  num: 'T03', type: 'Game Table',  status: 'reserved' },
  { id: 4,  num: 'T04', type: 'Game Table',  status: 'available' },
  { id: 5,  num: 'T05', type: 'Game Table',  status: 'occupied',  session: '45m' },
  { id: 6,  num: 'T06', type: 'Standard',    status: 'reserved' },
  { id: 7,  num: 'T07', type: 'Standard',    status: 'available' },
  { id: 8,  num: 'T08', type: 'Game Table',  status: 'occupied',  session: '2h 05m' },
  { id: 9,  num: 'PR1', type: 'Private Room', status: 'occupied', session: '3h 10m' },
  { id: 10, num: 'PR2', type: 'Private Room', status: 'available' },
  { id: 11, num: 'TR1', type: 'Tournament',  status: 'reserved' },
  { id: 12, num: 'TR2', type: 'Tournament',  status: 'available' },
];

const statusColors: Record<TableStatus, string> = {
  available: 'var(--green)',
  occupied: '#e07070',
  reserved: 'var(--accent)',
};

export default function TableManagementPage() {
  const [tables, setTables] = useState(initialTables);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const refresh = () => {
    setLastUpdated(new Date());
    setTables(prev => prev.map(t => {
      const rand = Math.random();
      if (rand < 0.1) return { ...t, status: 'available', session: undefined };
      if (rand < 0.15) return { ...t, status: 'occupied', session: '5m' };
      return t;
    }));
  };

  useEffect(() => {
    const id = setInterval(refresh, 30000);
    return () => clearInterval(id);
  }, []);

  const counts = {
    available: tables.filter(t => t.status === 'available').length,
    occupied:  tables.filter(t => t.status === 'occupied').length,
    reserved:  tables.filter(t => t.status === 'reserved').length,
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Live View</div>
          <h1 className="serif">Table <span className="gradient-text">Floor Plan</span></h1>
          <p>Real-time overview of table availability at Brew Haven.</p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          {/* Summary */}
          <div className="grid-3" style={{ marginBottom: 32 }}>
            {[
              { label: 'Available', count: counts.available, color: 'var(--green)', icon: '✓' },
              { label: 'Occupied',  count: counts.occupied,  color: '#e07070',       icon: '●' },
              { label: 'Reserved',  count: counts.reserved,  color: 'var(--accent)', icon: '◆' },
            ].map(s => (
              <div key={s.label} className="stat-card" style={{ textAlign: 'center' }}>
                <div className="stat-value" style={{ color: s.color }}>{s.count}</div>
                <div className="stat-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <span style={{ color: s.color }}>{s.icon}</span>{s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Refresh */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {(['available', 'occupied', 'reserved'] as TableStatus[]).map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: statusColors[s], display: 'inline-block' }} />
                  <span style={{ textTransform: 'capitalize', color: 'var(--text-secondary)' }}>{s}</span>
                </div>
              ))}
            </div>
            <button className="btn-ghost" onClick={refresh}>
              <RefreshCw size={14} />
              Updated {lastUpdated.toLocaleTimeString()}
            </button>
          </div>

          {/* Floor grid */}
          <div className="floor-grid">
            {tables.map(table => (
              <div key={table.id} className={`table-cell ${table.status}`}>
                <div className="table-cell-num">{table.num}</div>
                <div className="table-cell-type">{table.type}</div>
                <div className="table-cell-status">{table.status}</div>
                {table.session && (
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>⏱ {table.session}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
