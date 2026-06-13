import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IoT Security Patcher — Automated Security Updates for IoT Devices',
  description: 'Monitor and automatically apply security patches to IoT devices on your network. Compliance reporting, device management, and patch deployment tracking for enterprise IT.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3b4fd170-c4ab-4b51-8fbd-a2e289ba914e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
