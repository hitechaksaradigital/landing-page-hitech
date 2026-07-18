import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Testimonial() {
  const [testimonial, setTestimonial] = useState(null)

  useEffect(() => {
    const fetchTestimonial = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .limit(1)
        .single()

      if (error) {
        console.error('Error fetching testimonial:', error)
      } else {
        setTestimonial(data)
      }
    }

    fetchTestimonial()
  }, [])

  if (!testimonial) {
    return (
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-primary text-on-primary overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-on-primary-container">Memuat testimoni...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-primary text-on-primary overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex justify-center mb-lg">
          <span className="material-symbols-outlined text-[48px] md:text-[64px] text-secondary-container">format_quote</span>
        </div>
        <h3 className="text-headline-lg font-headline-lg mb-lg italic font-light leading-relaxed">
          &quot;{testimonial.quote}&quot;
        </h3>
        <div className="flex items-center justify-center gap-md">
          {testimonial.avatar_url && (
            <img
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-secondary-container"
              src={testimonial.avatar_url}
              alt={testimonial.name}
            />
          )}
          <div className="text-left">
            <p className="font-bold text-headline-md">{testimonial.name}</p>
            <p className="text-label-sm text-secondary-container uppercase tracking-widest">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
