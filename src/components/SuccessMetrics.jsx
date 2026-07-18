const metrics = [
  { value: '250+', label: 'Projects Delivered', sub: 'Across 12 industries' },
  { value: '15+', label: 'Global Awards', sub: 'For UI/UX and Innovation' },
  { value: '99.9%', label: 'Uptime Reliability', sub: 'Institutional grade builds' },
  { value: '24/7', label: 'Strategic Support', sub: 'Always-on partnership' },
]

export default function SuccessMetrics() {
  return (
    <section className="py-xl px-margin-desktop bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-xs">
            <p className="text-headline-xl font-headline-xl text-primary">{metric.value}</p>
            <p className="text-label-md font-bold text-secondary uppercase">{metric.label}</p>
            <p className="text-label-sm text-on-surface-variant">{metric.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
