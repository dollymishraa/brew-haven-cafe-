import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartPanel from './components/CartPanel';

const HomePage           = lazy(() => import('./pages/HomePage'));
const MenuPage           = lazy(() => import('./pages/MenuPage'));
const BoardGamesPage     = lazy(() => import('./pages/BoardGamesPage'));
const EventsPage         = lazy(() => import('./pages/EventsPage'));
const ReservationsPage   = lazy(() => import('./pages/ReservationsPage'));
const MembershipsPage    = lazy(() => import('./pages/MembershipsPage'));
const CommunityPage      = lazy(() => import('./pages/CommunityPage'));
const AboutPage          = lazy(() => import('./pages/AboutPage'));
const ContactPage        = lazy(() => import('./pages/ContactPage'));
const TableManagementPage = lazy(() => import('./pages/TableManagementPage'));

function PageSpinner() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        border: '2px solid var(--border)',
        borderTopColor: 'var(--accent)',
        animation: 'rotate 0.8s linear infinite',
      }} />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 0 }}>
        <Suspense fallback={<PageSpinner />}>
          <Routes>
            <Route path="/"              element={<HomePage />} />
            <Route path="/menu"          element={<MenuPage />} />
            <Route path="/board-games"   element={<BoardGamesPage />} />
            <Route path="/events"        element={<EventsPage />} />
            <Route path="/reservations"  element={<ReservationsPage />} />
            <Route path="/memberships"   element={<MembershipsPage />} />
            <Route path="/community"     element={<CommunityPage />} />
            <Route path="/about"         element={<AboutPage />} />
            <Route path="/contact"       element={<ContactPage />} />
            <Route path="/tables"        element={<TableManagementPage />} />
            <Route path="*"              element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CartPanel />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
          {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
          <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
            <Layout />
          </div>
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
