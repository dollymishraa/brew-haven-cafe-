import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../../data/gallery';

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % galleryImages.length : null);

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-32">
          <div className="section-label">Our Space</div>
          <h2 className="section-title serif">Life at <span className="gradient-text">Brew Haven</span></h2>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={img.id} className="gallery-item" onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}><X size={18} /></button>
          <button className="lightbox-nav prev" onClick={e => { e.stopPropagation(); prev(); }}><ChevronLeft size={22} /></button>
          <img
            src={galleryImages[lightbox].src.replace('w=600', 'w=1200')}
            alt={galleryImages[lightbox].alt}
            onClick={e => e.stopPropagation()}
          />
          <button className="lightbox-nav next" onClick={e => { e.stopPropagation(); next(); }}><ChevronRight size={22} /></button>
        </div>
      )}
    </section>
  );
}
