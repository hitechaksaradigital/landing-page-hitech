export default function Hero() {
  return (
    <header className="relative overflow-hidden hero-gradient py-xl px-margin-desktop">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-lg items-center">
        <div className="space-y-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary border border-secondary-container/30">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="text-label-sm uppercase tracking-widest">Proven Excellence</span>
          </div>
          <h1 className="text-headline-xl font-headline-xl text-primary leading-tight">
            Engineering Digital Success Stories
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
            Discover how PT. Hitech Aksara Digital transforms complex industrial challenges into seamless digital experiences through precision engineering and institutional-grade stability.
          </p>
          <div className="flex gap-md pt-base">
            <button className="bg-primary text-on-primary px-lg py-3 rounded-lg font-label-md flex items-center gap-2 hover:shadow-lg transition-all">
              Explore Case Studies
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </div>
        </div>
        <div className="relative hidden md:block h-[500px]">
          <div className="absolute -bottom-base -right-base glass-card p-md rounded-xl shadow-xl max-w-[280px]">
            <div className="flex items-center gap-sm mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="text-headline-md font-bold text-primary">98%</span>
            </div>
            <p className="text-label-sm text-on-surface-variant">
              Average increase in operational efficiency across our enterprise portfolio.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
