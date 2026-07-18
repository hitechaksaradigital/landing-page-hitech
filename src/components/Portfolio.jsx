import Navbar from './Navbar'
import Hero from './Hero'
import ClientLogoCloud from './ClientLogoCloud'
import CaseStudyGallery from './CaseStudyGallery'
import Testimonial from './Testimonial'
import SuccessMetrics from './SuccessMetrics'
import Footer from './Footer'

export default function Portfolio() {
  return (
    <div className="text-on-surface">
      <Navbar />
      <Hero />
      <ClientLogoCloud />
      <CaseStudyGallery />
      <Testimonial />
      <SuccessMetrics />
      <Footer />
    </div>
  )
}
