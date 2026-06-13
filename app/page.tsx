export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          IoT Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Automated Security Updates<br className="hidden sm:block" /> for IoT Devices
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Discover IoT devices on your network, monitor for vulnerabilities, and orchestrate automated patching — all with enterprise-grade compliance reporting.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Securing Your Devices
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">$99/mo · Cancel anytime · No setup fees</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Auto Device Discovery', 'CVE Monitoring', 'One-Click Patching', 'Compliance Reports', 'Audit Logs', 'API Access'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Enterprise Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$99<span className="text-2xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per organization · Unlimited devices</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Automated network device discovery',
              'Real-time CVE vulnerability monitoring',
              'Automated patch deployment via device APIs',
              'Compliance & audit reporting (SOC2, NIST)',
              'Role-based access control',
              'Priority email & Slack support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $99/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'Which IoT devices are supported?',
              a: 'IoT Security Patcher supports any device reachable on your network with an HTTP/HTTPS management API, SNMP, SSH, or MQTT interface — including cameras, routers, PLCs, smart sensors, and more.'
            },
            {
              q: 'How does automated patching work?',
              a: 'We integrate with device vendor APIs and firmware update endpoints. When a CVE is detected, the system stages the patch, runs a pre-flight check, and deploys during your configured maintenance window — with automatic rollback on failure.'
            },
            {
              q: 'Is my network data kept private?',
              a: 'Yes. Device discovery runs as an on-premise agent inside your network. Only metadata (device type, firmware version, patch status) is sent to our cloud dashboard — never raw traffic or credentials.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} IoT Security Patcher. All rights reserved.
      </footer>
    </main>
  )
}
