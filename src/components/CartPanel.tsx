import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function CartPanel() {
  const { items, remove, update, total, open, setOpen, clear } = useCart();
  const toast = useToast();

  const handleCheckout = () => {
    if (items.length === 0) return;
    clear();
    setOpen(false);
    toast.show('Order Placed!', 'Your order is being prepared. Thank you!', '🎉');
  };

  return (
    <>
      <div className={`cart-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`cart-panel${open ? ' open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px 0' }}>
          <h2>Your Order</h2>
          <button className="btn-ghost" onClick={() => setOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart-panel-inner">
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
              <p>Your cart is empty</p>
              <p style={{ fontSize: 12, marginTop: 6 }}>Add items from the menu to get started</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${(item.price * item.qty).toFixed(2)}</div>
                  <div className="qty-ctrl" style={{ marginTop: 6, width: 'fit-content' }}>
                    <button className="qty-btn" onClick={() => update(item.id, item.qty - 1)}>−</button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => update(item.id, item.qty + 1)}>+</button>
                  </div>
                </div>
                <button className="btn-ghost" onClick={() => remove(item.id)} aria-label="Remove">
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          {items.length > 0 && (
            <div className="cart-total">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-value">${total.toFixed(2)}</span>
            </div>
          )}
          <button className="btn-primary w-full" style={{ justifyContent: 'center' }} onClick={handleCheckout} disabled={items.length === 0}>
            {items.length === 0 ? 'Cart is Empty' : `Place Order — $${total.toFixed(2)}`}
          </button>
        </div>
      </aside>
    </>
  );
}
