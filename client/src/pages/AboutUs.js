import React from 'react';

export const AboutUs = () => {
  return (
    <div style={{ background: '#1a1a2e', minHeight: '100vh', paddingTop: '2rem' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '2.5rem' }}>ABOUT US</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Discover the story behind Mallikarjuna Travels</p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '2rem' }}>Our Story</h2>
          <p style={{ color: '#ccc', lineHeight: '2', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Mallikarjuna Travels was founded with a simple mission: to provide premium car rental services at affordable prices. 
            With over a decade of experience in the automotive industry, we've built a reputation for excellence and customer satisfaction.
          </p>
          <p style={{ color: '#ccc', lineHeight: '2', fontSize: '1.05rem' }}>
            Our fleet includes the latest models from leading manufacturers, ensuring you always have access to modern, 
            reliable, and comfortable vehicles for your journeys.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', fontSize: '2.5rem', marginBottom: '1rem' }}>500+</h3>
            <p style={{ color: '#ccc' }}>Premium Vehicles</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', fontSize: '2.5rem', marginBottom: '1rem' }}>50K+</h3>
            <p style={{ color: '#ccc' }}>Happy Customers</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', fontSize: '2.5rem', marginBottom: '1rem' }}>10+</h3>
            <p style={{ color: '#ccc' }}>Years of Experience</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ color: '#00d4ff', fontSize: '2.5rem', marginBottom: '1rem' }}>24/7</h3>
            <p style={{ color: '#ccc' }}>Customer Support</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '2rem' }}>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '0.75rem' }}>💡 Innovation</h4>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>We continually update our fleet and services with the latest technology and best practices.</p>
            </div>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '0.75rem' }}>🤝 Trust</h4>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>Building long-term relationships with our customers through reliability and transparency.</p>
            </div>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '0.75rem' }}>🌟 Excellence</h4>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>Delivering exceptional service and quality in everything we do.</p>
            </div>
            <div>
              <h4 style={{ color: '#00d4ff', marginBottom: '0.75rem' }}>♻️ Sustainability</h4>
              <p style={{ color: '#ccc', lineHeight: '1.6' }}>Committed to reducing our environmental impact through eco-friendly vehicles.</p>
            </div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '3rem' }}>
          <h2 style={{ color: '#00d4ff', marginBottom: '1.5rem', fontSize: '2rem' }}>Our Team</h2>
          <p style={{ color: '#ccc', lineHeight: '2', fontSize: '1.05rem' }}>
            Our dedicated team of professionals is committed to providing you with the best car rental experience. 
            From our fleet managers to our customer service representatives, everyone works together to ensure your complete satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
