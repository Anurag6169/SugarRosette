export default function Hampers() {
  return (
    <div style={{ padding: 'var(--sr-space-xl)', minHeight: '100vh' }}>
      <main style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: 'var(--sr-space-lg)', 
          color: 'var(--sr-ganache)',
          fontWeight: '700'
        }}>
          Gift Hampers
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          color: 'var(--sr-cocoa)',
          lineHeight: '1.6',
          marginBottom: 'var(--sr-space-xl)'
        }}>
          Discover our beautifully curated gift hampers, perfect for any occasion.
        </p>
      </main>
    </div>
  );
}
