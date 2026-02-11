export const metadata = {
  title: 'Strtly - AI Tools for Builders',
  description: 'Deploy your own AI assistant in 2 hours. No coding required.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  )
}
