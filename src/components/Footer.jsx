export default function Footer() {
  return (
    <footer className="w-full px-margin-desktop py-xl flex flex-col md:flex-row justify-between items-center gap-md bg-primary text-on-primary">
      <div className="flex flex-col gap-sm">
        <span className="text-headline-md font-headline-md text-on-primary">PT. Hitech Aksara Digital</span>
        <p className="text-body-md text-on-primary-container max-w-sm">
          Building the digital foundations for tomorrow&apos;s industry leaders with mathematical precision.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-md">
        <div className="flex gap-lg">
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">Privacy Policy</a>
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">Terms of Service</a>
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">FAQ</a>
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">Cookie Settings</a>
        </div>
        <p className="text-label-sm text-on-primary-container">© 2024 PT. Hitech Aksara Digital. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
