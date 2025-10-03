// Sugar Rosette Home Page

export default function Home() {
  return (
    <div style={{ 
      padding: 'var(--sr-space-xl)', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, var(--sr-bg) 0%, #F8F0E8 100%)'
    }}>
      <main style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: 'var(--sr-space-2xl) 0',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, var(--sr-sugar-pink) 0%, transparent 70%)',
            borderRadius: '50%',
            opacity: 0.3,
            filter: 'blur(40px)',
            zIndex: -1
          }} />
          
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: 'var(--sr-space-lg)', 
            color: 'var(--sr-ganache)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, var(--sr-ganache) 0%, var(--sr-cocoa) 50%, var(--sr-berry) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Welcome to Sugar Rosette
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            marginBottom: 'var(--sr-space-2xl)', 
            color: 'var(--sr-cocoa)',
            maxWidth: '600px',
            margin: '0 auto var(--sr-space-2xl)',
            lineHeight: '1.6'
          }}>
            Your premium destination for artisanal sweets and delightful treats. 
            Experience the perfect blend of tradition and innovation in every bite.
          </p>
        </section>
        
        {/* Feature Cards */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: 'var(--sr-space-xl)', 
          marginTop: 'var(--sr-space-2xl)',
          position: 'relative'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, var(--sr-rosette) 0%, transparent 70%)',
            borderRadius: '50%',
            opacity: 0.2,
            filter: 'blur(60px)',
            zIndex: -1
          }} />
          
          <div style={{ 
            padding: 'var(--sr-space-xl)', 
            background: 'var(--sr-glass-bg)',
            backdropFilter: 'var(--sr-blur)',
            WebkitBackdropFilter: 'var(--sr-blur)',
            borderRadius: 'var(--sr-radius-xl)', 
            border: '1px solid var(--sr-glass-border)',
            boxShadow: 'var(--sr-shadow-md)',
            transition: 'all var(--sr-transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--sr-sugar-pink) 0%, var(--sr-rosette) 100%)'
            }} />
            <h2 style={{ 
              color: 'var(--sr-ganache)', 
              marginBottom: 'var(--sr-space-md)',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>Our Menu</h2>
            <p style={{ 
              color: 'var(--sr-cocoa)',
              lineHeight: '1.6',
              marginBottom: 'var(--sr-space-lg)'
            }}>
              Explore our carefully crafted selection of artisanal sweets and confections, 
              each made with love and the finest ingredients.
            </p>
            <div style={{
              display: 'inline-block',
              padding: 'var(--sr-space-sm) var(--sr-space-md)',
              background: 'linear-gradient(135deg, var(--sr-blush) 0%, var(--sr-sugar-pink) 100%)',
              borderRadius: 'var(--sr-radius-full)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--sr-ganache)',
              transition: 'all var(--sr-transition-normal)',
              cursor: 'pointer'
            }}>
              Explore Menu →
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--sr-space-xl)', 
            background: 'var(--sr-glass-bg)',
            backdropFilter: 'var(--sr-blur)',
            WebkitBackdropFilter: 'var(--sr-blur)',
            borderRadius: 'var(--sr-radius-xl)', 
            border: '1px solid var(--sr-glass-border)',
            boxShadow: 'var(--sr-shadow-md)',
            transition: 'all var(--sr-transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--sr-rosette) 0%, var(--sr-berry) 100%)'
            }} />
            <h2 style={{ 
              color: 'var(--sr-ganache)', 
              marginBottom: 'var(--sr-space-md)',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>Special Occasions</h2>
            <p style={{ 
              color: 'var(--sr-cocoa)',
              lineHeight: '1.6',
              marginBottom: 'var(--sr-space-lg)'
            }}>
              Make your celebrations extra sweet with our custom hampers and gift boxes, 
              designed to create unforgettable moments.
            </p>
            <div style={{
              display: 'inline-block',
              padding: 'var(--sr-space-sm) var(--sr-space-md)',
              background: 'linear-gradient(135deg, var(--sr-rosette) 0%, var(--sr-berry) 100%)',
              borderRadius: 'var(--sr-radius-full)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'white',
              transition: 'all var(--sr-transition-normal)',
              cursor: 'pointer'
            }}>
              View Occasions →
            </div>
          </div>
          
          <div style={{ 
            padding: 'var(--sr-space-xl)', 
            background: 'var(--sr-glass-bg)',
            backdropFilter: 'var(--sr-blur)',
            WebkitBackdropFilter: 'var(--sr-blur)',
            borderRadius: 'var(--sr-radius-xl)', 
            border: '1px solid var(--sr-glass-border)',
            boxShadow: 'var(--sr-shadow-md)',
            transition: 'all var(--sr-transition-normal)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, var(--sr-caramel) 0%, var(--sr-milk) 100%)'
            }} />
            <h2 style={{ 
              color: 'var(--sr-ganache)', 
              marginBottom: 'var(--sr-space-md)',
              fontSize: '1.5rem',
              fontWeight: '600'
            }}>Corporate Gifting</h2>
            <p style={{ 
              color: 'var(--sr-cocoa)',
              lineHeight: '1.6',
              marginBottom: 'var(--sr-space-lg)'
            }}>
              Impress your clients and team with our premium corporate gifting solutions, 
              tailored to your brand and occasion.
            </p>
            <div style={{
              display: 'inline-block',
              padding: 'var(--sr-space-sm) var(--sr-space-md)',
              background: 'linear-gradient(135deg, var(--sr-caramel) 0%, var(--sr-milk) 100%)',
              borderRadius: 'var(--sr-radius-full)',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'white',
              transition: 'all var(--sr-transition-normal)',
              cursor: 'pointer'
            }}>
              Learn More →
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section style={{ 
          marginTop: 'var(--sr-space-2xl)', 
          textAlign: 'center',
          padding: 'var(--sr-space-2xl)',
          background: 'var(--sr-glass-bg)',
          backdropFilter: 'var(--sr-blur)',
          WebkitBackdropFilter: 'var(--sr-blur)',
          borderRadius: 'var(--sr-radius-xl)',
          border: '1px solid var(--sr-glass-border)',
          boxShadow: 'var(--sr-shadow-md)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--sr-ganache)',
            marginBottom: 'var(--sr-space-md)',
            fontWeight: '600'
          }}>
            Ready to Experience Sweet Perfection?
          </h3>
          <p style={{ 
            color: 'var(--sr-cocoa)', 
            fontSize: '1rem',
            marginBottom: 'var(--sr-space-lg)',
            maxWidth: '500px',
            margin: '0 auto var(--sr-space-lg)',
            lineHeight: '1.6'
          }}>
            Test our modern navigation by exploring the menu items above or using the hamburger menu on mobile.
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--sr-space-md)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              padding: 'var(--sr-space-md) var(--sr-space-xl)',
              background: 'linear-gradient(135deg, var(--sr-berry) 0%, var(--sr-rosette) 100%)',
              borderRadius: 'var(--sr-radius-full)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all var(--sr-transition-normal)',
              boxShadow: 'var(--sr-shadow-sm)'
            }}>
              Start Shopping
            </div>
            <div style={{
              padding: 'var(--sr-space-md) var(--sr-space-xl)',
              background: 'transparent',
              border: '2px solid var(--sr-berry)',
              borderRadius: 'var(--sr-radius-full)',
              color: 'var(--sr-berry)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all var(--sr-transition-normal)'
            }}>
              Contact Us
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
