import { useEffect } from 'react'

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
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 text-label-md" href="#">Home</a>
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 text-label-md" href="#">About Us</a>
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 text-label-md" href="#">Services</a>
        <a className="text-secondary font-bold border-b-2 border-secondary pb-1 text-label-md" href="#">Portfolio</a>
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 text-label-md" href="#">Contact Us</a>
        <a className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200 text-label-md" href="#">Blog</a>
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
