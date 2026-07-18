import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function SuccessMetrics() {
  const [metrics, setMetrics] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      const { data, error } = await supabase
        .from('metrics')
        .select('*')
        .order('sort_order', { ascending: true })

      if (error) {
        console.error('Error fetching metrics:', error)
      } else {
        setMetrics(data || [])
      }
      setLoading(false)
    }

    fetchMetrics()
  }, [])

  if (loading) {
    return (
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-on-surface-variant">Memuat metrik...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-lg text-center">
        {metrics.map((metric) => (
          <div key={metric.id} className="space-y-xs">
            <p className="text-headline-xl font-headline-xl text-primary">{metric.value}</p>
            <p className="text-label-md font-bold text-secondary uppercase">{metric.label}</p>
            <p className="text-label-sm text-on-surface-variant">{metric.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
