import { useState } from 'react'
import { supabase } from '../lib/supabase'

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
      setError('Please agree to the Privacy Policy and data processing terms.')
      return
    }

    const { error: insertError } = await supabase
      .from('contacts')
      .insert([{ full_name: fullName, email, subject, message, consent }])

    if (insertError) {
      setError('Failed to send inquiry. Please try again later.')
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
      {/* TopNavBar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-margin-desktop py-4 bg-surface dark:bg-primary border-b border-outline-variant dark:border-primary-container shadow-sm dark:shadow-none">
        <div className="text-headline-md font-headline-md font-bold text-primary dark:text-secondary-fixed">
          PT. Hitech Aksara Digital
        </div>
        <div className="hidden md:flex items-center gap-lg">
          <a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-label-md" href="#">Home</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-label-md" href="#">About Us</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-label-md" href="#">Services</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-label-md" href="#">Portfolio</a>
          <a className="text-secondary dark:text-secondary-container font-bold border-b-2 border-secondary pb-1 text-label-md font-label-md" href="#">Contact Us</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-label-md" href="#">Blog</a>
        </div>
        <div className="flex items-center gap-md">
          <div className="hidden lg:flex items-center gap-sm">
            <span className="text-on-surface-variant text-label-md font-label-md">EN/ID</span>
          </div>
          <button className="bg-primary-container text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-secondary transition-colors duration-200">
            Careers
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-xl px-margin-desktop text-on-primary">
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-headline-xl font-headline-xl mb-md">Let's Build the Future Together</h1>
            <p className="text-body-lg font-body-lg text-on-primary-container max-w-2xl">
              Whether you have a specific project in mind or just want to explore how our digital solutions can transform your business, our team of experts is ready to assist you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-margin-desktop py-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* Left Column: Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-headline-lg font-headline-lg text-primary mb-lg">Contact Information</h2>
                <div className="space-y-lg">
                  <div className="flex items-start gap-md group">
                    <div className="bg-surface-container-high p-4 rounded-xl text-secondary">
                      <span className="material-symbols-outlined text-[32px]">mail</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline mb-1">Email Us</p>
                      <p className="text-headline-md font-headline-md text-primary">hello@hitechaksara.com</p>
                      <p className="text-body-md font-body-md text-on-surface-variant">Our support team usually responds within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md group">
                    <div className="bg-surface-container-high p-4 rounded-xl text-secondary">
                      <span className="material-symbols-outlined text-[32px]">call</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline mb-1">Call Our Office</p>
                      <p className="text-headline-md font-headline-md text-primary">+62 (21) 5000 8888</p>
                      <p className="text-body-md font-body-md text-on-surface-variant">Mon - Fri, 9:00 AM to 6:00 PM (GMT+7)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-md group">
                    <div className="bg-surface-container-high p-4 rounded-xl text-secondary">
                      <span className="material-symbols-outlined text-[32px]">location_on</span>
                    </div>
                    <div>
                      <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline mb-1">Headquarters</p>
                      <p className="text-headline-md font-headline-md text-primary">Aksara Tech Tower, Fl 42</p>
                      <p className="text-body-md font-body-md text-on-surface-variant">Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan, 12190, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-xl p-lg rounded-xl border border-outline-variant bg-surface-container-low">
                <p className="text-headline-md font-headline-md text-primary mb-md">Global Presence</p>
                <div className="flex gap-lg">
                  <div className="text-center">
                    <p className="text-headline-md font-bold text-secondary">12+</p>
                    <p className="text-label-sm font-label-sm text-outline">COUNTRIES</p>
                  </div>
                  <div className="w-px h-12 bg-outline-variant"></div>
                  <div className="text-center">
                    <p className="text-headline-md font-bold text-secondary">5</p>
                    <p className="text-label-sm font-label-sm text-outline">REGIONAL HUBS</p>
                  </div>
                  <div className="w-px h-12 bg-outline-variant"></div>
                  <div className="text-center">
                    <p className="text-headline-md font-bold text-secondary">24/7</p>
                    <p className="text-label-sm font-label-sm text-outline">SUPPORT</p>
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
                      <label className="text-label-md font-label-md text-primary ml-1">Full Name</label>
                      <input
                        name="fullName"
                        className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>
                    <div className="space-y-xs">
                      <label className="text-label-md font-label-md text-primary ml-1">Work Email</label>
                      <input
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md"
                        placeholder="john@company.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-primary ml-1">Subject</label>
                    <select name="subject" className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md appearance-none" required>
                      <option value="">Select a subject</option>
                      <option>Strategic Partnership</option>
                      <option>Service Inquiry</option>
                      <option>Technical Support</option>
                      <option>Career Opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-xs">
                    <label className="text-label-md font-label-md text-primary ml-1">Message</label>
                    <textarea
                      name="message"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface input-focus-glow text-body-md resize-none"
                      placeholder="Tell us about your project or inquiry..."
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-sm pt-2">
                    <input className="rounded border-outline-variant text-secondary focus:ring-secondary" id="consent" name="consent" type="checkbox" required />
                    <label className="text-label-md font-label-md text-on-surface-variant" htmlFor="consent">
                      I agree to the <a className="text-secondary underline" href="#">Privacy Policy</a> and data processing terms.
                    </label>
                  </div>
                  {error && <p className="text-red-500 text-label-md">{error}</p>}
                  <button
                    className={`w-full py-4 rounded-lg text-headline-md font-headline-md hover:bg-secondary transition-all transform hover:-translate-y-1 shadow-md ${submitted ? 'bg-green-600 text-white' : 'bg-primary text-on-primary'}`}
                    type="submit"
                  >
                    {submitted ? 'Message Sent Successfully!' : 'Send Inquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full px-margin-desktop pb-xl">
          <div className="rounded-xl overflow-hidden shadow-lg border border-outline-variant h-[500px] relative group">
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
                  Aksara Tech Tower
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
      <footer className="w-full px-margin-desktop py-xl flex flex-col md:flex-row justify-between items-center gap-md bg-primary dark:bg-on-background text-on-primary dark:text-primary-fixed">
        <div className="flex flex-col items-center md:items-start gap-xs">
          <div className="text-headline-md font-headline-md text-on-primary">PT. Hitech Aksara Digital</div>
          <p className="text-body-md font-body-md text-on-primary-container dark:text-outline-variant">© 2024 PT. Hitech Aksara Digital. All Rights Reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-lg">
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">Privacy Policy</a>
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">Terms of Service</a>
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">FAQ</a>
          <a className="text-label-sm font-label-sm text-on-primary-container dark:text-outline-variant hover:text-secondary-container transition-colors" href="#">Cookie Settings</a>
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
