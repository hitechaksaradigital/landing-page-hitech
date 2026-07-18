import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function CaseStudyGallery() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) {
        console.error('Error fetching projects:', error)
      } else {
        setProjects(data || [])
      }
      setLoading(false)
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className="py-xl px-margin-desktop bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-headline-lg font-headline-lg text-primary mb-2">Featured Case Studies</h2>
          <p className="text-body-md text-on-surface-variant">Loading projects...</p>
        </div>
      </section>
    )
  }

  const [mainProject, ...restProjects] = projects
  const secondaryProjects = restProjects.slice(0, 2)
  const bottomProjects = restProjects.slice(2)

  return (
    <section className="py-xl px-margin-desktop bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
          <div>
            <h2 className="text-headline-lg font-headline-lg text-primary mb-2">Featured Case Studies</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl">
              A curated selection of our most impactful digital transformations across finance, logistics, and manufacturing sectors.
            </p>
          </div>
          <div className="flex gap-base">
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Main Featured Project */}
          {mainProject && (
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-white border border-outline-variant flex flex-col transition-all hover:shadow-2xl">
              <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                {mainProject.image_url && (
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${mainProject.image_url}')` }}
                  ></div>
                )}
                <div className="absolute bottom-md left-md right-md z-20 text-on-primary">
                  <span className="inline-block px-3 py-1 rounded bg-secondary mb-base text-label-sm uppercase">
                    {mainProject.category}
                  </span>
                  <h3 className="text-headline-lg font-headline-lg mb-sm">{mainProject.title}</h3>
                  <p className="text-body-md opacity-90 max-w-lg mb-md">{mainProject.description}</p>
                  <button className="bg-on-primary text-primary px-lg py-3 rounded-lg font-label-md flex items-center gap-2 hover:bg-secondary-fixed transition-all">
                    View Case Study
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Projects */}
          {secondaryProjects.length > 0 && (
            <div className="md:col-span-4 grid grid-rows-2 gap-md">
              {secondaryProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`${
                    idx === 1
                      ? 'bg-primary text-on-primary rounded-xl p-md flex flex-col justify-between group hover:shadow-xl transition-all relative overflow-hidden'
                      : 'bg-white border border-outline-variant rounded-xl p-md flex flex-col justify-between group hover:shadow-xl transition-all'
                  }`}
                >
                  <div className={idx === 1 ? 'relative z-10' : ''}>
                    <span
                      className={`text-label-sm font-semibold uppercase tracking-wider mb-base block ${
                        idx === 1 ? 'text-secondary-container' : 'text-secondary'
                      }`}
                    >
                      {project.category}
                    </span>
                    <h4 className="text-headline-md font-headline-md mb-2">{project.title}</h4>
                    <p
                      className={`text-body-md line-clamp-2 ${
                        idx === 1 ? 'opacity-80' : 'text-on-surface-variant'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-md flex justify-between items-center">
                    {project.stat && (
                      <span
                        className={`text-label-sm font-bold ${
                          idx === 1 ? 'text-secondary-container' : 'text-primary'
                        }`}
                      >
                        {project.stat}
                      </span>
                    )}
                    {idx === 0 && (
                      <button className="text-primary font-bold flex items-center gap-1 hover:text-secondary transition-colors">
                        Details
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </button>
                    )}
                    {idx === 1 && (
                      <button className="bg-secondary-container text-on-secondary-container px-md py-2 rounded font-label-md text-label-sm hover:bg-white transition-all">
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Row Projects */}
          {bottomProjects.map((project, idx) => (
            <div
              key={project.id}
              className="md:col-span-4 bg-white border border-outline-variant rounded-xl overflow-hidden group hover:shadow-xl transition-all"
            >
              {project.image_url && (
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image_url}')` }}
                  ></div>
                </div>
              )}
              <div className="p-md">
                <span className="text-label-sm font-semibold text-secondary uppercase tracking-wider mb-base block">
                  {project.category}
                </span>
                <h4 className="text-headline-md font-headline-md text-primary mb-2">{project.title}</h4>
                <p className="text-body-md text-on-surface-variant mb-md">{project.description}</p>
                <button className="w-full py-3 rounded border border-primary text-primary font-label-md hover:bg-primary hover:text-on-primary transition-all">
                  View Case Study
                </button>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="md:col-span-4 bg-surface-container-high rounded-xl p-lg flex flex-col justify-center items-center text-center border border-outline-variant/30">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-md">
              <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
            </div>
            <h4 className="text-headline-md font-headline-md text-primary mb-sm">Have a vision?</h4>
            <p className="text-body-md text-on-surface-variant mb-lg">
              We turn complex requirements into high-performance digital reality.
            </p>
            <button className="bg-primary text-on-primary px-lg py-3 rounded-lg font-label-md w-full hover:bg-secondary transition-all">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
