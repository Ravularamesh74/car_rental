import React, { useState } from 'react';

export const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div style={{ background: '#1a1a2e', minHeight: '100vh', paddingTop: '2rem' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '2.5rem' }}>CONTACT US</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Get in touch with Mallikarjuna Travels</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
          {/* Contact Information */}
          <div>
            <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '1.5rem' }}>📍 Office Location</h3>
              <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                <strong>Mallikarjuna Travels</strong><br />
                Skandagiri Temple<br />
                Secunderabad<br />
                Hyderabad, Telangana 500003<br />
                India
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '1.5rem' }}>📞 Phone Numbers</h3>
              <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                <strong>Main Office:</strong> +91-7989345281  <br />
                <strong>Reservations:</strong> +91 96400 59577<br />
                <strong>Customer Support:</strong> +91 9908763869
              </p>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
              <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '1.5rem' }}>📧 Email Address</h3>
              <p style={{ color: '#ccc', lineHeight: '1.8' }}>
                <strong>General Inquiries:</strong><br />
                <a href="mailto:info@mallikarjunatravels.com" style={{ color: '#00d4ff', textDecoration: 'none' }}>
                  info@mallikarjunatravels.com
                </a><br /><br />
                <strong>Support:</strong><br />
                <a href="mailto:mallikarijunatravels1@gmail.com" style={{ color: '#00d4ff', textDecoration: 'none' }}>
                  mallikarijunatravels1@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
              <h3 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '1.5rem' }}>📝 Send us a Message</h3>
              
              {submitted && (
                <div style={{ 
                  background: 'rgba(0, 255, 136, 0.1)', 
                  border: '2px solid #00ff88', 
                  borderRadius: '10px', 
                  padding: '1rem', 
                  marginBottom: '1rem',
                  color: '#00ff88'
                }}>
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      borderRadius: '5px',
                      color: 'white',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      borderRadius: '5px',
                      color: 'white',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      borderRadius: '5px',
                      color: 'white',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      borderRadius: '5px',
                      color: 'white',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', color: '#ccc', marginBottom: '0.5rem' }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      borderRadius: '5px',
                      color: 'white',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      fontFamily: 'Poppins, sans-serif',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '2rem' }}>Business Hours</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Monday - Friday</h4>
              <p style={{ color: '#ccc' }}>08:00 AM - 06:00 PM</p>
            </div>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Saturday</h4>
              <p style={{ color: '#ccc' }}>08:00 AM - 06:00 PM</p>
            </div>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Sunday</h4>
              <p style={{ color: '#ccc' }}>10:00 AM - 04:00 PM</p>
            </div>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '1rem' }}>Emergencies</h4>
              <p style={{ color: '#ccc' }}>24/7 Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
