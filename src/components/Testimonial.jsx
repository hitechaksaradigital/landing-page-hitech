export default function Testimonial() {
  return (
    <section className="py-xl px-margin-desktop bg-primary text-on-primary overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex justify-center mb-lg">
          <span className="material-symbols-outlined text-[64px] text-secondary-container">format_quote</span>
        </div>
        <h3 className="text-headline-lg font-headline-lg mb-lg italic font-light leading-relaxed">
          &quot;PT. Hitech Aksara Digital didn&apos;t just deliver a product; they provided a roadmap for our future. Their systematic precision and deep understanding of industrial complexity were the key to our digital success.&quot;
        </h3>
        <div className="flex items-center justify-center gap-md">
          <img
            className="w-16 h-16 rounded-full border-2 border-secondary-container"
            data-alt="A professional headshot of a middle-aged male corporate executive in a modern business suit. He is smiling confidently against a soft-focus office background. The lighting is bright and warm, reflecting a professional yet approachable tone that aligns with the brand authoritative yet accessible personality."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLrFQw0y9Em4yp7E63oUK0BynMJu6W0HpnwkiF9ZsulB6FCA_WD-u1RBsmDPe0aybdiYEG4x_ReE4wjVsmZoI15t3g0oJfye_6XMmRqneugf6aaKa4gnHQvcqS0Lpezxd-oDf79eUvrazLHR6_6sadPT6WzXBCpWBSt90vpXPe6L3AWrm_NQ2bpcvOMbxMzcL1QmQ7eqKCJHFfL4kbRpxMRb9sFE7lhjLgj-WlEubO-b6H6TB8_pE4eA"
            alt="Andreas Wijaya"
          />
          <div className="text-left">
            <p className="font-bold text-headline-md">Andreas Wijaya</p>
            <p className="text-label-sm text-secondary-container uppercase tracking-widest">CTO, Global Logistics Corp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
