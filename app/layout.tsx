import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Became True — AI Receptionist',
  description: 'AI receptionist for service businesses. $297/mo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: '#0a0e27', color: '#fff', fontFamily: 'system-ui, sans-serif', padding: '40px', maxWidth: '700px', margin: '0 auto', minHeight: '100vh' }}>
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ color: '#b8a8ff', fontSize: '28px', margin: 0 }}>📞 Became True</h1>
          <p style={{ color: '#888', marginTop: '4px', fontSize: '14px' }}>Every Call. Every Time.</p>
        </header>
        <main>{children}</main>
        <footer style={{ marginTop: '60px', borderTop: '1px solid #333', paddingTop: '20px', color: '#666', fontSize: '13px' }}>
          © 2026 Became True · $297/mo · 30-day money-back guarantee
        </footer>
      </body>
    </html>
  );
}
