import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogoCloud from './components/ClientLogoCloud'
import CaseStudyGallery from './components/CaseStudyGallery'
import Testimonial from './components/Testimonial'
import SuccessMetrics from './components/SuccessMetrics'
import Footer from './components/Footer'

export default function App() {
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
