import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.group, .bento-item').forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 bg-surface shadow-sm border-b border-outline-variant">
      <div className="flex items-center gap-2">
        <span className="text-headline-md font-headline-md font-bold text-primary">
          PT. Hitech Aksara Digital
        </span>
      </div>

      <div className="hidden md:flex items-center gap-lg">
        <NavLink to="/" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Beranda
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Tentang Kami
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Layanan
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Portofolio
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Hubungi Kami
        </NavLink>
      </div>

      <div className="hidden md:flex items-center gap-md">
        <span className="text-label-md font-label-md text-on-surface-variant cursor-pointer">EN/ID</span>
        <button className="bg-primary text-on-primary px-lg py-2 rounded-lg font-label-md hover:bg-secondary transition-all active:opacity-80">
          Karir
        </button>
      </div>

      <div className="flex md:hidden items-center gap-3">
        <span className="text-label-md font-label-md text-on-surface-variant">EN/ID</span>
        <button
          className="p-2 rounded-lg border border-outline-variant text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={closeMenu}>
          <div className="absolute right-0 top-0 h-full w-72 bg-surface shadow-xl border-l border-outline-variant p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="text-headline-md font-headline-md font-bold text-primary">Menu</span>
              <button className="p-2 rounded-lg border border-outline-variant text-primary" onClick={closeMenu} aria-label="Close menu">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
                Beranda
              </NavLink>
              <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
                Tentang Kami
              </NavLink>
              <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
                Layanan
              </NavLink>
              <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
                Portofolio
              </NavLink>
              <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
                Blog
              </NavLink>
              <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
                Hubungi Kami
              </NavLink>
              <button className="bg-primary text-on-primary px-lg py-3 rounded-lg font-label-md hover:bg-secondary transition-all w-full mt-2">
                Karir
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
