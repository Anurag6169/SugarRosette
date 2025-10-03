export default function Contact() {
  return (
    <div style={{ padding: 'var(--sr-space-xl)', minHeight: '100vh' }}>
      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: 'var(--sr-space-lg)', 
          color: 'var(--sr-ganache)',
          fontWeight: '700'
        }}>
          Contact Us
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--sr-cocoa)',
          lineHeight: '1.6',
          marginBottom: 'var(--sr-space-xl)'
        }}>
          Get in touch with us for custom orders, inquiries, or just to say hello!
        </p>
      </main>
    </div>
  );
}
