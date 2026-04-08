


const Footer = () => {
  return (
    <footer>
      {/* Decorative lime bar - faded edges */}
      <div className="flex h-3 justify-center">
        <div className="bg-lime opacity-10" style={{ width: 142 }} />
        <div className="bg-lime opacity-25" style={{ width: 142 }} />
        <div className="bg-lime opacity-40" style={{ width: 142 }} />
        <div className="bg-lime opacity-60" style={{ width: 142 }} />
        <div className="bg-lime opacity-80" style={{ width: 142 }} />
        <div className="flex-1 bg-lime" />
        <div className="bg-lime opacity-80" style={{ width: 142 }} />
        <div className="bg-lime opacity-60" style={{ width: 142 }} />
        <div className="bg-lime opacity-40" style={{ width: 142 }} />
        <div className="bg-lime opacity-25" style={{ width: 142 }} />
        <div className="bg-lime opacity-10" style={{ width: 142 }} />
      </div>

      <div className="bg-primary text-lime">
        <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Dotted vertical divider between col 1 and col 2 */}
          <div className="hidden md:block absolute top-10 bottom-10 left-[30%] border-l border-dotted border-white/30" />

          {/* Office Location */}
          <div>
            <h4 className="font-handwritten text-lime text-2xl font-bold mb-1">Office Location:</h4>
            <p className="text-xs font-light text-lime/70">Rr. "Themistokli Gërmenji",</p>
            <p className="text-xs font-light text-lime/70">Nr. 1, Unit 9, Tirana, 1010</p>
            <p className="mt-4 flex items-center gap-2">
              <span className="font-handwritten text-lime text-2xl font-bold">Call:</span>
              <span className="text-xs font-light text-lime/70">+355 69 800 2500</span>
            </p>
          </div>

          {/* Email & Socials */}
          <div>
            <h4 className="font-handwritten text-lime text-2xl font-bold mb-1">e-mail:</h4>
            <p className="text-xs font-light text-lime/70">marketing@digitalbee.al</p>
            <h4 className="font-handwritten text-lime text-2xl font-bold mt-4 mb-2">Socials:</h4>
            <div className="flex items-center gap-6 text-lime">
              <a href="#" className="hover:opacity-80 transition"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
              <a href="#" className="hover:opacity-80 transition"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg></a>
              <a href="#" className="hover:opacity-80 transition"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" className="hover:opacity-80 transition"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/></svg></a>
              <a href="#" className="hover:opacity-80 transition"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-end gap-4 relative">
            <div className="hidden md:block h-10 w-px bg-white/40" />
            <a
              href="#"
              className="border border-lime text-lime px-6 py-2 text-base font-bold tracking-wider flex items-center gap-3 hover:bg-lime hover:text-primary transition"
            >
              NEWSLETTER
              <span className="border border-lime w-6 h-6 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="1" y1="13" x2="13" y2="1" />
                  <polyline points="4,1 13,1 13,10" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="h-[1px] bg-lime" />
      {/* Copyright bar */}
      <div className="bg-primary text-center text-xs text-lime/50 py-3">
        © DigitalBee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
