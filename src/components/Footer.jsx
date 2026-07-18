export default function Footer() {
  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-xl flex flex-col md:flex-row justify-between items-center gap-md bg-primary text-on-primary">
      <div className="flex flex-col gap-sm">
        <span className="text-headline-md font-headline-md text-on-primary">PT. Hitech Aksara Digital</span>
        <p className="text-body-md text-on-primary-container max-w-sm">
          Membangun fondasi digital untuk pemimpin industri masa depan dengan presisi matematis.
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-md">
        <div className="flex flex-wrap justify-center gap-md">
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">Kebijakan Privasi</a>
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">Syarat Layanan</a>
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">FAQ</a>
          <a className="text-on-primary-container hover:text-secondary-container transition-colors text-label-md" href="#">Pengaturan Cookie</a>
        </div>
        <p className="text-label-sm text-on-primary-container">© 2024 PT. Hitech Aksara Digital. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  )
}
