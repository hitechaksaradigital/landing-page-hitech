export default function Hero() {
  return (
    <header className="relative overflow-hidden hero-gradient py-xl md:py-xl px-margin-mobile md:px-margin-desktop">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-lg items-center">
        <div className="space-y-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary border border-secondary-container/30">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span className="text-label-sm uppercase tracking-widest">Keunggulan Terbukti</span>
          </div>
          <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline-xl text-primary leading-tight">
            Membangun Cerita Sukses Digital
          </h1>
          <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-lg">
            Temukan bagaimana PT. Hitech Aksara Digital mengubah tantangan industri yang kompleks menjadi pengalaman digital yang mulus melalui rekayasa presisi dan stabilitas bertaraf institusional.
          </p>
          <div className="flex gap-md pt-base">
            <button className="bg-primary text-on-primary px-lg py-3 rounded-lg font-label-md flex items-center gap-2 hover:shadow-lg transition-all">
              Jelajahi Studi Kasus
              <span className="material-symbols-outlined">arrow_downward</span>
            </button>
          </div>
        </div>
        <div className="relative hidden md:block h-[400px] lg:h-[500px]">
          <div className="absolute -bottom-base -right-base glass-card p-md rounded-xl shadow-xl max-w-[280px]">
            <div className="flex items-center gap-sm mb-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <span className="text-headline-md font-bold text-primary">98%</span>
            </div>
            <p className="text-label-sm text-on-surface-variant">
              Rata-rata peningkatan efisiensi operasional di seluruh portofolio perusahaan kami.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
