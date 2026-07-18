import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.bento-grid > div').forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8')
      observer.observe(el)
    })

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="text-on-surface">
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 bg-surface dark:bg-primary shadow-sm border-b border-outline-variant dark:border-primary-container">
        <div className="flex items-center gap-base">
          <span className="text-headline-md font-headline-md font-bold text-primary dark:text-secondary-fixed">
            PT. Hitech Aksara Digital
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-lg">
          <NavLink to="/" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'}`}>
            Beranda
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'}`}>
            Tentang Kami
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'}`}>
            Layanan
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'}`}>
            Portofolio
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'}`}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'}`}>
            Hubungi Kami
          </NavLink>
        </div>
        <div className="flex items-center gap-md">
          <button className="text-label-md font-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs">
            <span className="material-symbols-outlined text-[18px]">language</span>
            EN/ID
          </button>
          <button className="bg-primary text-on-primary px-lg py-2 rounded-lg font-label-md hover:bg-secondary transition-colors">
            Karir
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden bg-primary text-on-primary px-margin-mobile md:px-margin-desktop">
        <div className="relative z-10 max-w-4xl w-full">
          <div className="inline-block px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary-container/30 text-secondary-container mb-md font-label-sm uppercase tracking-widest">
            Ahli Evolusi Digital
          </div>
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mb-md leading-tight">
            Mempercepat Transformasi Digital <br />
            <span className="text-secondary-container">dengan Presisi</span>
          </h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-primary-container max-w-2xl mb-lg">
            Memberdayakan industri Indonesia melalui rekayasa perangkat lunak khusus, solusi cloud bertaraf perusahaan, dan tata kelola data strategis. Kami menerjemahkan kebutuhan bisnis yang kompleks menjadi pengalaman digital yang mulus.
          </p>
          <div className="flex flex-wrap gap-md">
            <Link to="/contact" className="bg-secondary-container text-on-secondary-container font-label-md text-headline-md px-lg py-4 rounded-lg hover:scale-105 transition-transform inline-flex items-center gap-sm">
              Konsultasi Sekarang
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link to="/services" className="border border-outline-variant/30 text-on-primary font-label-md px-lg py-4 rounded-lg hover:bg-white/10 transition-colors inline-block text-center">
              Keahlian Kami
            </Link>
          </div>
        </div>
      </header>

      {/* Summary Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              data-alt="A sophisticated professional business environment showcasing high-tech hardware and clean glass office walls. The lighting is bright and airy with a cool blue corporate tone. A large digital screen displays complex network architecture in the background. The mood is clinical, precise, and highly innovative, reflecting corporate modern stability."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGbdNhJPn5KDYLSPaZhtG1pbPZVTy6guCGzQnPi5y5RvzmsDu6Fd5TcZMPzeZWKRC5VPMXy0czveylh14T6jj8VaO0-FWTexq5yHP_3Yhaue4QNUNJBg8-OaHIHo5UYenb-iU4MpMqzvCgTbYTOVAHoipyXo1eIfxXIGl_MNh0LmRTc1C69ElsEoC4rvHJ8gLTPJUbAqFUCJElAkUCvSbQFigZFhv-8_Zq4SJTXuUjkRR1DJBFzyV_Cg')" }}
            ></div>
            <div className="absolute bottom-md left-md right-md glass-card p-md rounded-lg">
              <div className="flex items-center gap-sm mb-xs">
                <span className="text-primary font-bold text-headline-md">10+</span>
                <span className="text-on-surface-variant font-label-sm">Tahun Keunggulan Industri</span>
              </div>
              <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
                <div className="bg-primary w-3/4 h-full"></div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md">Solusi Berbasis Presisi untuk Perusahaan Modern</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md leading-relaxed">
              Di PT. Hitech Aksara Digital, kami tidak hanya membangun perangkat lunak; kami merancang masa depan bisnis Anda. Metodologi kami menggabungkan standar rekayasa yang ketat dengan pola pikir agile untuk menghasilkan aset digital yang skalabel, aman, dan berkelanjutan.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed">
              Berpusat di Jakarta, kami berperan sebagai mitra teknologi strategis bagi konglomerat dan startup berpertumbuhan tinggi, memastikan setiap baris kode melayani tujuan bisnis yang terukur.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <span className="font-label-md">Sertifikat ISO 27001</span>
              </div>
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">cloud_done</span>
                </div>
                <span className="font-label-md">Arsitektur Cloud-Native</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-background">
        <div className="text-center mb-xl max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">Solusi Teknologi Inti</h2>
          <p className="text-on-surface-variant">Tim multidisiplin kami mengkhususkan diri di bidang teknologi berdampak tinggi yang dirancang untuk memberikan keunggulan kompetitif.</p>
        </div>
        <div className="bento-grid">
          {/* Feature 1: Enterprise App Dev */}
          <div className="col-span-12 md:col-span-8 bg-white p-lg rounded-xl border border-outline-variant hover:shadow-lg transition-all group overflow-hidden relative">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-[48px] text-primary mb-md" style={{ fontVariationSettings: "'FILL' 1" }}>developer_mode_tv</span>
              <h3 className="font-headline-md text-headline-md mb-sm">Pengembangan Perangkat Lunak Perusahaan</h3>
              <p className="text-on-surface-variant max-w-lg mb-md">ERP, CRM, dan alat manajemen internal khusus yang dibangun dengan tumpukan modern (React, Go, Python) untuk performa dan keamanan maksimal.</p>
              <ul className="space-y-2 mb-md text-label-md">
                <li className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Mikro-layanan yang Dapat Di-scale
                </li>
                <li className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Modernisasi Sistem Legasi
                </li>
              </ul>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
            </div>
          </div>

          {/* Feature 2: Data Analytics */}
          <div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-lg rounded-xl flex flex-col justify-between group">
            <div>
              <span className="material-symbols-outlined text-[48px] text-secondary-container mb-md">analytics</span>
              <h3 className="font-headline-md text-headline-md mb-sm">Data &amp; Analitik</h3>
              <p className="text-on-primary-container text-body-md">Mengubah data mentah menjadi intelijen bisnis yang dapat ditindakkan menggunakan AI dan pemodelan ML.</p>
            </div>
            <Link to="/services" className="mt-lg flex items-center gap-xs text-secondary-container font-label-md group-hover:gap-sm transition-all w-fit">
              Pelajari lebih lanjut <span className="material-symbols-outlined">north_east</span>
            </Link>
          </div>

          {/* Feature 3: Cybersecurity */}
          <div className="col-span-12 md:col-span-4 bg-secondary-container/10 border border-secondary-container/30 p-lg rounded-xl flex flex-col group">
            <span className="material-symbols-outlined text-[48px] text-secondary mb-md">shield_lock</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-sm">Keamanan Siber</h3>
            <p className="text-on-surface-variant text-body-md mb-lg">Implementasi arsitektur zero-trust dan pemantauan 24/7 untuk melindungi kedaulatan digital Anda.</p>
            <div
              className="w-full h-32 rounded-lg bg-cover bg-center mt-auto"
              data-alt="A futuristic cybersecurity control center with dark blue tones and glowing neon green digital data flows. Holographic security shields and locking mechanisms are superimposed over blurred high-tech server racks. The lighting is moody and focused, emphasizing protection and advanced surveillance technology. It reflects a top-tier security infrastructure for high-level corporations."
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJd1xouf8IapNMQ32DMtZ4bsUfDoxbs1It_gRzQ2R5yazevMRBiaPYGVRffszBvkSq8fHqsVI36mlfajenTkka5uX-mPmEa7ZPV3Dt3Jpq1aiDHPV32_qEkp-5rA2e3XMZWm36elNXQBZ5Abn3MmEFERt2AjFudzCAJe1HB-vNCw5SZmQEwzlbKk3ZRj8LOlisSUnex8ePcvVyz0kxDJWw1oFG5eMfA_J00osaS8hmE8Lht05ZvR2swg')" }}
            ></div>
          </div>

          {/* Feature 4: Cloud Solutions */}
          <div className="col-span-12 md:col-span-8 bg-white p-lg rounded-xl border border-outline-variant flex flex-col md:flex-row gap-lg items-center group">
            <div className="md:w-1/2 w-full">
              <span className="material-symbols-outlined text-[48px] text-primary mb-md">cloud_sync</span>
              <h3 className="font-headline-md text-headline-md mb-sm">Infrastruktur Cloud</h3>
              <p className="text-on-surface-variant text-body-md mb-md">Migrasi dan manajemen yang mulus untuk lingkungan AWS, Azure, dan Google Cloud dengan fokus optimasi biaya.</p>
              <div className="flex flex-wrap gap-sm">
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-sm">Partner AWS</span>
                <span className="px-3 py-1 bg-surface-container rounded-full text-label-sm">Azure Cloud</span>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-48 rounded-xl overflow-hidden relative">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                data-alt="A clean and modern data center aisle with glowing blue LED server racks extending into perspective. The flooring is polished white with reflection, giving a high-tech minimalist feel. The atmosphere is quiet, powerful, and signifies high-density computing and cloud efficiency. Bright, cool lighting illuminates the path between the servers."
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCoiPlKqkcR-StjSBHcyJgSuEXE6iX45HNlaSXna6kdO-sB1thQ-M8J-DUPJvxCTnHZ0MHoXTTa1vEJ1Yg1_yo5Fy-vNLv11yL8njzJwSrCwg0Fv8iqT9lwa-t9bzr18Fi83xAkjSLV7LeYGOMSxrsQsU57nZwgVVHAopYVMujV5zW1RTB0IGpvsN9FriNCQjRcINzJRiYnJR03jkEvw2zRASLkdsGZLXDSotZ5iaTlw-fGB-0vKUJrKw')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        className="fixed bottom-lg right-lg z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        href="https://wa.me/your-number"
        target="_blank"
        title="Chat with us on WhatsApp"
      >
        <svg fill="white" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.412 0 6.556-5.332 11.892-11.893 11.892-1.997 0-3.951-.5-5.688-1.448l-6.305 1.657zm4.794-4.411l.343.204c1.175.697 2.491 1.064 3.843 1.064 3.996 0 7.253-3.254 7.253-7.253 0-1.936-.754-3.755-2.124-5.125-1.369-1.369-3.188-2.124-5.124-2.124-3.997 0-7.253 3.254-7.253 7.253 0 1.471.451 2.913 1.304 4.143l.225.353-.876 3.201 3.279-.861zm11.367-5.59c-.217-.109-1.285-.634-1.484-.706-.198-.072-.344-.108-.488.109-.145.217-.561.706-.687.851-.127.145-.253.163-.47.054-.218-.109-.918-.338-1.749-1.079-.647-.577-1.084-1.289-1.211-1.506-.126-.217-.014-.334.095-.443.098-.098.217-.254.326-.38.108-.127.145-.217.217-.362.072-.145.036-.272-.018-.38-.054-.109-.488-1.176-.669-1.612-.176-.424-.372-.366-.51-.372-.132-.006-.283-.007-.435-.007-.152 0-.399.057-.607.283-.209.227-.796.779-.796 1.899 0 1.12.814 2.203.928 2.356.113.154 1.602 2.446 3.882 3.429.542.233.965.372 1.294.477.545.173 1.041.148 1.433.09.438-.065 1.285-.526 1.467-1.033.181-.507.181-.941.127-1.033-.054-.091-.2-.146-.417-.255z"></path>
        </svg>
      </a>

      {/* Footer */}
      <footer className="w-full px-margin-mobile md:px-margin-desktop py-xl flex flex-col md:flex-row justify-between items-center gap-md bg-primary dark:bg-on-background">
        <div className="flex flex-col items-center md:items-start gap-sm">
          <span className="text-headline-md font-headline-md text-on-primary">PT. Hitech Aksara Digital</span>
          <p className="text-on-primary-container dark:text-outline-variant text-body-md max-w-sm text-center md:text-left">
            Mitra andal Anda dalam keunggulan rekayasa dan inovasi digital strategis.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-md">
          <div className="flex flex-wrap justify-center gap-md">
            <Link to="/privacy" className="text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors font-label-sm">
              Kebijakan Privasi
            </Link>
            <Link to="/terms" className="text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors font-label-sm">
              Syarat Layanan
            </Link>
            <Link to="/faq" className="text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors font-label-sm">
              FAQ
            </Link>
            <Link to="/cookies" className="text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors font-label-sm">
              Pengaturan Cookie
            </Link>
          </div>
          <div className="text-on-primary-container dark:text-outline-variant text-label-sm">
            © 2024 PT. Hitech Aksara Digital. Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>
    </div>
  )
}
