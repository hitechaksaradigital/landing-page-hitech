const logos = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWEaPneOdYWspxvxh-cm0amMluq4jig6FMsaA525ErukqLp1o7wkz_qdC59BlwZB4rohkanRIeSQTSBljyMTMHp5vd5nZIKAAt5EQjj2SfZUrRebhRJsdEAICIgnBXIpbzTbr_nisoexr9ndzO8xM6uyD-vt2W_7UWOsovbOvKaIic4F4DQfkAYPkivdI63ius5e9dECrCz7u-xK3yC1V38aI245KKOAFJyXI1Kn5gOpm1fmhep0ASQ',
    alt: 'A clean, minimalist monochrome logo for a top-tier global financial institution, presented in a corporate vector style against a soft white background. The aesthetic is professional, sharp, and stable, reflecting institutional reliability and cutting-edge financial technology. High-key lighting with no shadows ensures clarity and precision.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBz2UjLwzAaYLgZMbn2cEMzxk9jMseUO3yHe_JYCmwcRaEJ_B1JyWaF0cFWYYZ-MCEQcl1va0PI7g0lxn6KH8i8eRORYjyvkZN6bd2AVbs-wY_VZk-Rb7QVWHKI6tyUiM2Zak-iuaC-hPb69mOz8ULWcK7AWU1N2dyg8qaPZxuSnA-m1JssB6ccWIuMoxH_Ne9rV9HbLBBq8v1mxbeE-HrwHTHNh5nh8XMROKPB55DD68oLoc-pQnnc4Q',
    alt: 'A sleek corporate logo for a major energy and logistics corporation, featuring clean geometric lines in a professional blue and gray palette. The design conveys industrial power and modern logistical efficiency. The lighting is crisp and even, highlighting the minimalist digital-first branding of PT. Hitech Aksara Digital partners.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsn85Mo9N4FgPNNnXIVEjt8BSzgRsdVf___VsJh_Qcbelu1g8_u5oRRwHJyVzRdgz-LhnR45d6S7-dyLhOEYypMEBMnuAAA1JpjMnUhBnPq2ZMMzwCABIZ5q7hxuypIe5PMWwAyu-_uOaTDqH4P8NUPMnAcGaseT3CebYRrHCBGsghq1-gABDp9LVsikdYTtfmn7Jdf6gFvNWyFsD2-XrZeG5GUbXGPTXIPHYeXK8KOl_pEKonFr0WlQ',
    alt: 'A modern tech company logo with a minimalist abstract mark representing connectivity and data flow. The visual style is high-tech and corporate, utilizing deep navy and bright accent colors. The logo is presented in a clean, professional grid layout suitable for a premium business portfolio page.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADOypbYozWXQK_Im242TcCZNYIZ3il3smmjNRN-RODej-tx7RWWwU8BPoH-Lrqvuc3jLhBHfWq_Feh199ctZA4wGouLIEMU3W29iKo99OMfe_0Tk_3AZf8N1-x1sUH7CclhvGSzJE6AfQcoZ9cl9tka2EkuxtljF3cwhlK315P8dSGwKmDJ-1PJirv_OetenOvXk3pBRFqf1jxLYO64LnIYF0SqobjNU3s1lsdBtINI8AIJcvXRdjz_A',
    alt: 'A sophisticated luxury brand logo that emphasizes elegance and timeless stability through high-quality serif typography and a minimalist emblem. The aesthetic is authoritative yet accessible, fitting the Corporate Modern identity of PT. Hitech Aksara Digital diverse and prestigious client list.'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUY1SEC_0jXndq4CFEAe8xO4NeToUNbG9fXzCQyR9fw2o9pBSf2xxPcgH1DIi1g4Czsx0X8EmDIWx-gXwj--MuOzvRM0Sb-vA4ki5EZxi5GAndfO3tFGwOmefjDd3hsdBAiPxwiqCRb2cJZmIaxWIm0ZcHeJkpbY8fsCBkSZIxoh1Lr7e__gzAHzdHjCrOv_FdzCilGMI-RQqKOLONrrHRP9hhH4KeGRLktptXbz2_3E67zj7aWM72cA',
    alt: 'An innovative healthcare technology logo featuring soft, rounded shapes and a calm professional color scheme. It represents precision and care in the digital health space. The presentation is clean and high-fidelity, maintaining the brand values of clarity and systematic precision throughout the gallery.'
  }
]

export default function ClientLogoCloud() {
  return (
    <section className="py-lg bg-surface border-y border-outline-variant/30">
      <div className="px-margin-desktop overflow-hidden">
        <p className="text-center text-label-md font-semibold text-outline mb-lg uppercase tracking-[0.2em]">
          Trusted by Global Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="h-10 md:h-12 w-auto"
              data-alt={logo.alt}
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
