import ContactSection from '../components/home/ContactSection';

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Get in Touch</div>
          <h1 className="serif">Contact <span className="gradient-text">Us</span></h1>
          <p>We'd love to hear from you. Stop by, call, or send us a message.</p>
        </div>
      </div>
      <ContactSection />
    </>
  );
}
