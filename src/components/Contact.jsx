import { useState } from 'react'
import { supabase } from '../lib/supabase'
import Navbar from './Navbar'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const form = e.target
    const fullName = form.fullName.value.trim()
    const email = form.email.value.trim()
    const subject = form.subject.value
    const message = form.message.value.trim()
    const consent = form.consent.checked

    if (!consent) {
      setError('Silakan setuju dengan Kebijakan Privasi dan syarat pemrosesan data.')
      return
    }

    const { error: insertError } = await supabase
      .from('contacts')
      .insert([{ full_name: fullName, email, subject, message, consent }])

    if (insertError) {
      setError('Gagal mengirim pertanyaan. Silakan coba lagi nanti.')
      return
    }

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setError('')
      form.reset()
    }, 3000)
  }

  return (
    <div className="flex flex-col min-h-screen text-on-surface">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-xl px-margin-mobile md:px-margin-desktop text-on-primary">
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline-xl mb-md">Mari Bangun Masa Depan Bersama</h1>
            <p className="text-body-md md:text-body-lg font-body-lg text-on-primary-container max-w-2xl">
              Baik Anda memiliki proyek spesifik atau hanya ingin mengeksplorasi bagaimana solusi digital kami dapat mengubah bisnis Anda, tim ahli kami siap membantu.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-margin-mobile md:px-margin-desktop py-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-headline-lg font-headline-lg text-primary mb-lg">Informasi Kontak</h2>
                <div className="space-y-lg">
                  <div className="flex items-start gap-md group">
                    <div className="bg-surface-container-high p-4 rounded-xl text-secondary">
                      <span className="material-symbols-outlined text-[32px]">mail</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline mb-1">Email Kami</p>
                      <p className="text-headline-md font-headline-md text-primary">hello@hitechaksara.com</p>
                      <p className="text-body-md font-body-md text-on-surface-variant">Tim dukungan kami biasanya merespons dalam 24 jam.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md group">
                    <div className="bg-surface-container-high p-4 rounded-xl text-secondary">
                      <span className="material-symbols-outlined text-[32px]">call</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline mb-1">Hubungi Kantor Kami</p>
                      <p className="text-headline-md font-headline-md text-primary">+62 (21) 5000 8888</p>
                      <p className="text-body-md font-body-md text-on-surface-variant">Senin - Jumat, 09:00 - 18:00 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md group">
                    <div className="bg-surface-container-high p-4 rounded-xl text-secondary">
                      <span className="material-symbols-outlined text-[32px]">location_on</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline mb-1">Kantor Pusat</p>
                      <p className="text-headline-md font-headline-md text-primary">Menara Aksara, Lt 42</p>
                      <p className="text-body-md font-body-md text-on-surface-variant">Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, 12190, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-xl p-lg rounded-xl border border-outline-variant bg-surface-container-low">
                <p className="text-headline-md font-headline-md text-primary mb-md">Kehadiran Global</p>
                <div className="flex gap-lg">
                  <div className="text-center">
                    <p className="text-headline-md font-bold text-secondary">12+</p>
                    <p className="text-label-sm font-label-sm text-outline">NEGARA</p>
                  </div>
                  <div className="w-px h-12 bg-outline-variant"></div>
                  <div className="text-center">
                    <p className="text-headline-md font-bold text-secondary">5</p>
                    <p className="text-label-sm font-label-sm text-outline">PUSAT WILAYAH</p>
                  </div>
                  <div className="w-px h-12 bg-outline-variant"></div>
                  <div className="text-center">
                    <p className="text-headline-md font-bold text-secondary">24/7</p>
                    <p className="text-label-sm font-label-sm text-outline">DUKUNGAN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-lg rounded-xl shadow-lg border border-outline-variant">
                <form className="space-y-md" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div className="space-y-xs">
                      <label className="text-label-md font-label-md text-primary ml-1">Nama Lengkap</label>
                      <input
                        name="fullName"
                        className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>
                    <div className="space-y-xs">
                      <label className="text-label-md font-label-md text-primary ml-1">Email Kerja</label>
                      <input
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md"
                        placeholder="john@perusahaan.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-primary ml-1">Subjek</label>
                    <select name="subject" className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md appearance-none" required>
                      <option value="">Pilih subjek</option>
                      <option>Kemitraan Strategis</option>
                      <option>Pertanyaan Layanan</option>
                      <option>Dukungan Teknis</option>
                      <option>Peluang Karir</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-primary ml-1">Pesan</label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md resize-none"
                      placeholder="Ceritakan tentang proyek atau pertanyaan Anda..."
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-start gap-sm pt-2">
                    <input className="rounded border-outline-variant text-secondary focus:ring-secondary mt-1" id="consent" name="consent" type="checkbox" required />
                    <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="consent">
                      Saya setuju dengan <a className="text-secondary underline" href="#">Kebijakan Privasi</a> dan syarat pemrosesan data.
                    </label>
                  </div>
                  {error && <p className="text-red-500 text-label-md">{error}</p>}
                  <button
                    className={`w-full py-4 rounded-lg text-headline-md font-headline-md hover:bg-secondary transition-all transform hover:-translate-y-1 shadow-md ${submitted ? 'bg-green-600 text-white' : 'bg-primary text-on-primary'}`}
                    type="submit"
                  >
                    {submitted ? 'Pesan Terkirim Berhasil!' : 'Kirim Pertanyaan'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full px-margin-mobile md:px-margin-desktop pb-xl">
          <div className="rounded-xl overflow-hidden shadow-lg border border-outline-variant h-[300px] md:h-[500px] relative group">
            <div
              className="w-full h-full bg-surface-variant flex items-center justify-center relative overflow-hidden"
              data-location="Jakarta, Indonesia"
            >
              <img
                className="w-full h-full object-cover"
                data-alt="A clean, high-resolution satellite map view of Jakarta's central business district featuring modern glass skyscrapers, lush green urban parks, and systematic city grids. The visual style is professional and corporate with a cool blue and silver color palette to match the PT. Hitech Aksara Digital brand identity. The lighting is bright mid-day sun casting crisp geometric shadows."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC76Y2Gp0k1R8VwstJQxc1aUo6k0XOqaKNKSTcTYPDFz9czdscNP0Ms03_rQ4Dmi2gjIYZgFA374JcsUhO2tnMAd-2tO0SLaX1dmmVQRVxb5932JnCVwfCDWHRP5srDg_zn6N2RYPyPmdXkDsDcPVBcrl5ESQakv0HPehvzwfSgyvl7Bb0FkL4-Gj_ci1KaQWwjh9OseBR1HK6EhgERc-NaCReaR_nSkaIfQGqOiC_Gv3ivh1XuipnFqQ"
                alt="Jakarta Map"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
              {/* Map Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-primary text-on-primary px-4 py-2 rounded-lg text-label-md font-label-md shadow-xl mb-2 whitespace-nowrap animate-bounce">
                  Menara Aksara
                </div>
                <span className="material-symbols-outlined text-primary text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
            </div>
            {/* Floating Map Controls */}
            <div className="absolute bottom-md right-md flex flex-col gap-sm">
              <button className="bg-surface w-12 h-12 rounded-lg shadow-md flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">add</span>
              </button>
              <button className="bg-surface w-12 h-12 rounded-lg shadow-md flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">remove</span>
              </button>
              <button className="bg-surface w-12 h-12 rounded-lg shadow-md flex items-center justify-center hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full px-margin-mobile md:px-margin-desktop py-xl flex flex-col md:flex-row justify-between items-center gap-md bg-primary dark:bg-on-background text-on-primary dark:text-primary-fixed">
        <div className="flex flex-col items-center md:items-start gap-xs">
          <div className="text-headline-md font-headline-md text-on-primary">PT. Hitech Aksara Digital</div>
          <p className="text-body-md font-body-md text-on-primary-container dark:text-outline-variant">© 2024 PT. Hitech Aksara Digital. Hak Cipta Dilindungi.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-lg">
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">Kebijakan Privasi</a>
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">Syarat Layanan</a>
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">FAQ</a>
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">Pengaturan Cookie</a>
        </div>
        <div className="flex gap-md">
          <button className="text-on-primary hover:text-secondary-container transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="text-on-primary hover:text-secondary-container transition-colors">
            <span className="material-symbols-outlined">public</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
