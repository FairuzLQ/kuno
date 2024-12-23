export default function Footer() {
    return (
      <footer className="bg-white text-black pt-8 pb-20 px-12 ml-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column (Logo and Slogan) */}
          <div className="col-span-1 md:col-span-1 flex flex-col px-4">
            {/* Logo */}
            <div className="mb-4">
              <img src="/logo/logo-kuno-footer.png" alt="Kupas Tekno Logo" className="w-[200px]" />
            </div>
  
            {/* Slogan */}
            <div className="text-[12px] text-black">
              <p>Your go-to source for tech news and tutorials.</p>
            </div>
          </div>
  
          {/* Second Column (Beranda, How To, What Is) */}
          <div className="col-span-1 md:col-span-1 px-4">
            <ul className="space-y-2">
              <li><a href="/" className="text-black">Beranda</a></li>
              <li><a href="/kategori/how-to" className="text-black">How To</a></li>
              <li><a href="/kategori/what-is" className="text-black">What Is</a></li>
            </ul>
          </div>
  
          {/* Third Column (Overview, Tech News, Sitemap) */}
          <div className="col-span-1 md:col-span-1 px-4">
            <ul className="space-y-2">
              <li><a href="/kategori/overview" className="text-black">Overview</a></li>
              <li><a href="/kategori/tech-news" className="text-black">Tech News</a></li>
              <li><a href="/sitemap" className="text-black">Sitemap</a></li>
            </ul>
          </div>
  
          {/* Fourth Column (Syarat dan Ketentuan, Kebijakan Privasi, Kontak) */}
          <div className="col-span-1 md:col-span-1 px-4">
            <ul className="space-y-2">
              <li><a href="/syarat-ketentuan" className="text-black">Syarat dan Ketentuan</a></li>
              <li><a href="/kebijakan-privasi" className="text-black">Kebijakan Privasi</a></li>
              <li><a href="/kontak" className="text-black">Kontak</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  