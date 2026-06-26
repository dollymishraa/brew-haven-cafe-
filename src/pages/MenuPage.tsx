import { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '../data/menu';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import CartPanel from '../components/CartPanel';
import { Search, ShoppingBag, X } from 'lucide-react';

export default function MenuPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const { add, count, setOpen } = useCart();
  const toast = useToast();

  const categories = ['All', ...menuCategories];

  const filtered = useMemo(() =>
    menuItems.filter(item => {
      const matchCat = category === 'All' || item.category === category;
      const matchQ = item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    }),
    [category, query]
  );

  const handleAdd = (item: typeof menuItems[0]) => {
    add(item);
    toast.show('Added to cart', `${item.name} — $${item.price.toFixed(2)}`, '🛒');
    setOrderStatus('In preparation');
    setTimeout(() => setOrderStatus('Ready for pickup'), 5000);
    setTimeout(() => setOrderStatus(null), 10000);
  };

  return (
    <>
      <CartPanel />
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Food & Drinks</div>
          <h1 className="serif">Our <span className="gradient-text">Menu</span></h1>
          <p>Handcrafted coffee, specialty drinks, and kitchen favorites.</p>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          {/* Order status banner */}
          {orderStatus && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '14px 20px', background: 'rgba(74,158,107,0.1)',
              border: '1px solid rgba(74,158,107,0.3)', borderRadius: 'var(--radius-md)',
              marginBottom: 24,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="pulse-dot" />
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)' }}>
                  Order Status: {orderStatus}
                </span>
              </div>
              <button className="btn-ghost" onClick={() => setOrderStatus(null)}><X size={14} /></button>
            </div>
          )}

          {/* Search + cart button */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
            <div className="search-bar" style={{ flex: 1, minWidth: 200 }}>
              <Search />
              <input
                className="input-field"
                placeholder="Search menu..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <button className="btn-secondary" onClick={() => setOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <ShoppingBag size={16} />
              Cart {count > 0 && <span className="badge badge-accent">{count}</span>}
            </button>
          </div>

          {/* Category filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-chip${category === cat ? ' active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <p>No items found. Try different search terms.</p>
            </div>
          ) : (
            <div className="grid-3" style={{ gap: 16 }}>
              {filtered.map(item => (
                <div key={item.id} className="menu-item-card">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="menu-item-info">
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                      <div>
                        <div className="menu-item-name">
                          {item.name}
                          {item.popular && (
                            <span className="badge badge-accent" style={{ marginLeft: 6, fontSize: 9 }}>Popular</span>
                          )}
                        </div>
                        <div className="menu-item-desc">{item.description}</div>
                      </div>
                      <div className="menu-item-price">${item.price.toFixed(2)}</div>
                    </div>
                    <button
                      className="btn-primary"
                      style={{ fontSize: 12, padding: '7px 14px', marginTop: 8 }}
                      onClick={() => handleAdd(item)}
                    >
                      + Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
