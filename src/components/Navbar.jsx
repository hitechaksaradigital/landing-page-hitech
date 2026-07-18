import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
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

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-margin-desktop py-4 bg-surface shadow-sm border-b border-outline-variant">
      <div className="flex items-center gap-2">
        <span className="text-headline-md font-headline-md font-bold text-primary">
          PT. Hitech Aksara Digital
        </span>
      </div>
      <div className="hidden md:flex items-center gap-lg">
        <NavLink to="/" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          About Us
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Services
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Portfolio
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Blog
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `text-label-md font-medium transition-colors duration-200 ${isActive ? 'text-secondary font-bold border-b-2 border-secondary pb-1' : 'text-on-surface-variant hover:text-secondary'}`}>
          Contact Us
        </NavLink>
      </div>
      <div className="flex items-center gap-md">
        <span className="text-label-md font-label-md text-on-surface-variant cursor-pointer">EN/ID</span>
        <button className="bg-primary text-on-primary px-lg py-2 rounded-lg font-label-md hover:bg-secondary transition-all active:opacity-80">
          Careers
        </button>
      </div>
    </nav>
  )
}
