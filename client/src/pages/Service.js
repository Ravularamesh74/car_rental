import React from 'react';

export const Service = () => {
  return (
    <div style={{ background: '#1a1a2e', minHeight: '100vh', paddingTop: '2rem' }}>
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '2.5rem' }}>OUR SERVICES</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Experience premium car rental services with complete peace of mind</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>🚗 Premium Fleet</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Choose from our extensive collection of well-maintained luxury vehicles. From sedans to SUVs, we have the perfect car for your needs.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>🛡️ Comprehensive Insurance</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Complete coverage with zero deductibles. Our insurance plans protect you against all unforeseen circumstances during your rental period.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>📱 24/7 Support</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Our customer support team is available round the clock. Call, chat, or email us anytime for assistance.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>🔧 Regular Maintenance</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>All our vehicles undergo regular maintenance and inspections. You get a clean, safe, and reliable car every time.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>🌍 Airport Delivery</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Convenient airport pickup and drop-off services. Start your vacation right with hassle-free car rental arrangements.</p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '2rem' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '1rem', fontSize: '1.5rem' }}>💰 Competitive Pricing</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6' }}>Best rates in the market with transparent pricing. No hidden charges, just honest and affordable car rental services.</p>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)', border: '2px solid #00d4ff', borderRadius: '15px', padding: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ color: '#00d4ff', marginBottom: '1.5rem' }}>Why Choose Our Services?</h2>
          <ul style={{ color: '#ccc', lineHeight: '2', fontSize: '1.05rem' }}>
            <li>✅ Over 10 years of experience in car rental industry</li>
            <li>✅ Fleet of 500+ premium vehicles</li>
            <li>✅ Trusted by 50,000+ customers</li>
            <li>✅ Award-winning customer service</li>
            <li>✅ Flexible rental terms and conditions</li>
            <li>✅ Professional and courteous staff</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
