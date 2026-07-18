const projects = [
  {
    type: 'main',
    tag: 'Logistics & Supply Chain',
    title: 'AI-Driven Fleet Management System',
    description: 'How we helped a national logistics firm reduce operational costs by 22% through real-time predictive routing and autonomous monitoring.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACEshfJpiufqmiooLBAQTco3176cLHgAUVL73rSEbqxmcDQfyM5_mHOyNHubS20hAvuvjwM-b8SNP6w226aPn6a20bdDRrMjU6DOjFMEQhBavTQQHXUyjxvNZPlEK8_zCG-KfrbV1ZKUvs5UrW8qR4qeGmxWPaHsWaqnqU-VV2P-RnDUdmd2m8tIZKMVg4glzNFw1wAfrmReEoZ-l398H9gIFuyPW6IZLRgV4ajYaiT6pfUmqDegJIow',
    alt: 'A wide-angle high-tech control center for a global logistics network, featuring expansive digital displays and real-time data visualizations in a sleek dark-mode setting. Soft blue neon accents illuminate a clean, professional space filled with ergonomic workstations. The mood is highly focused and technologically advanced, suggesting industrial-scale digital solutions.'
  },
  {
    type: 'secondary',
    tag: 'Banking & Finance',
    title: 'Omnichannel Secure Banking Portal',
    description: 'Enterprise-grade security meets user-centric design for millions of daily active users.',
    stat: '+150% User Growth'
  },
  {
    type: 'secondary-dark',
    tag: 'Manufacturing',
    title: 'Smart Factory IoT Integration',
    description: 'Connecting legacy machinery to a modern cloud ecosystem for 100% data visibility.',
    stat: 'Zero Downtime Migration'
  },
  {
    type: 'card',
    tag: 'Government Tech',
    title: 'E-Governance Portal 2.0',
    description: 'Modernizing public service delivery for over 10 million registered citizens.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3E2OgOV8pR2OcUgKtLQJLS6qDxwqzoHRUl22lxgYp0Vg00Jb4gkFLz7ka_cUXgZTDhSCZlju43Lcq8llHno18GkAD9hsF5ByxjTSttSyb-bPatRfgL-CcyCjgMCblQ32ksWz_dVyJk_yxr1Bu5gSISAr5FwCd6HMzyHvuIAfCBit-A24nlcKv0wi5WXl4mMlPIdV5K8S9203LGeNsp9GGAnUubjNiOkVAR9_iNtvX9DupNfnVgBo36Q',
    alt: 'A modern minimalist office space with floating digital UI panels representing enterprise resource planning software. The scene is bright and airy with high-key lighting, emphasizing a clean corporate aesthetic. The visual style is crisp and professional, using a primary palette of navy and white with soft gray accents.'
  },
  {
    type: 'card',
    tag: 'Pharma & Health',
    title: 'Clinical Trial Data Engine',
    description: 'Accelerating drug development through advanced data modeling and compliance automation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx-KXx3GKWb-woLCYDJ8pJ93msyBQnriD04TE7XQogMu6UT4eTmwFvu3qBPFhzthE340BG1_1GsbTeKlPPw9sWFQT79CD9jV77UcZJeyEsT54VM-gOBwtZzlRGC8C9ydsFrkmeYZObBTXo5TGVejAs6HYseLtxPimtEKfZupFwOXDo7pEcB6whgG6brAKtuvaAqTzo3tNWk0PtAYnYXBCBKrGfk-Iob-BTv1MWNWWy3sjsufUIEOZgUQ',
    alt: 'A futuristic medical laboratory where a robotic arm is precisely handling pharmaceutical samples. The lighting is clean, clinical white with subtle blue hints, creating a tech-forward yet trustworthy atmosphere. High-resolution textures and a minimalist layout convey the brand focus on technological precision and real-world impact.'
  },
  {
    type: 'cta'
  }
]

export default function CaseStudyGallery() {
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
          {projects[0].type === 'main' && (
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-white border border-outline-variant flex flex-col transition-all hover:shadow-2xl">
              <div className="relative h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  data-alt={projects[0].alt}
                  style={{ backgroundImage: `url('${projects[0].image}')` }}
                ></div>
                <div className="absolute bottom-md left-md right-md z-20 text-on-primary">
                  <span className="inline-block px-3 py-1 rounded bg-secondary mb-base text-label-sm uppercase">
                    {projects[0].tag}
                  </span>
                  <h3 className="text-headline-lg font-headline-lg mb-sm">{projects[0].title}</h3>
                  <p className="text-body-md opacity-90 max-w-lg mb-md">{projects[0].description}</p>
                  <button className="bg-on-primary text-primary px-lg py-3 rounded-lg font-label-md flex items-center gap-2 hover:bg-secondary-fixed transition-all">
                    View Case Study
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Projects */}
          <div className="md:col-span-4 grid grid-rows-2 gap-md">
            {projects.slice(1, 3).map((project, idx) => (
              <div
                key={idx}
                className={`${
                  project.type === 'secondary-dark'
                    ? 'bg-primary text-on-primary rounded-xl p-md flex flex-col justify-between group hover:shadow-xl transition-all relative overflow-hidden'
                    : 'bg-white border border-outline-variant rounded-xl p-md flex flex-col justify-between group hover:shadow-xl transition-all'
                }`}
              >
                <div className={project.type === 'secondary-dark' ? 'relative z-10' : ''}>
                  <span
                    className={`text-label-sm font-semibold uppercase tracking-wider mb-base block ${
                      project.type === 'secondary-dark' ? 'text-secondary-container' : 'text-secondary'
                    }`}
                  >
                    {project.tag}
                  </span>
                  <h4 className="text-headline-md font-headline-md mb-2">{project.title}</h4>
                  <p
                    className={`text-body-md line-clamp-2 ${
                      project.type === 'secondary-dark' ? 'opacity-80' : 'text-on-surface-variant'
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="mt-md flex justify-between items-center">
                  <span
                    className={`text-label-sm font-bold ${
                      project.type === 'secondary-dark' ? 'text-secondary-container' : 'text-primary'
                    }`}
                  >
                    {project.stat}
                  </span>
                  {project.type === 'secondary' && (
                    <button className="text-primary font-bold flex items-center gap-1 hover:text-secondary transition-colors">
                      Details
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  )}
                  {project.type === 'secondary-dark' && (
                    <button className="bg-secondary-container text-on-secondary-container px-md py-2 rounded font-label-md text-label-sm hover:bg-white transition-all">
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row Projects */}
          {projects.slice(3).map((project, idx) => {
            if (project.type === 'cta') {
              return (
                <div
                  key={idx}
                  className="md:col-span-4 bg-surface-container-high rounded-xl p-lg flex flex-col justify-center items-center text-center border border-outline-variant/30"
                >
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
              )
            }

            return (
              <div
                key={idx}
                className="md:col-span-4 bg-white border border-outline-variant rounded-xl overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    data-alt={project.alt}
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                </div>
                <div className="p-md">
                  <span className="text-label-sm font-semibold text-secondary uppercase tracking-wider mb-base block">
                    {project.tag}
                  </span>
                  <h4 className="text-headline-md font-headline-md text-primary mb-2">{project.title}</h4>
                  <p className="text-body-md text-on-surface-variant mb-md">{project.description}</p>
                  <button className="w-full py-3 rounded border border-primary text-primary font-label-md hover:bg-primary hover:text-on-primary transition-all">
                    View Case Study
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
