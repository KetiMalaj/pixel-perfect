import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Decorative lime bar - faded edges */}
      <div className="flex h-3 justify-center">
        <div className="w-16 bg-lime opacity-10" />
        <div className="w-16 bg-lime opacity-25" />
        <div className="w-20 bg-lime opacity-40" />
        <div className="w-20 bg-lime opacity-60" />
        <div className="w-24 bg-lime opacity-80" />
        <div className="flex-1 bg-lime" />
        <div className="w-24 bg-lime opacity-80" />
        <div className="w-20 bg-lime opacity-60" />
        <div className="w-20 bg-lime opacity-40" />
        <div className="w-16 bg-lime opacity-25" />
        <div className="w-16 bg-lime opacity-10" />
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
            <div className="flex items-center gap-3 text-lime">
              <a href="#" className="hover:opacity-80 transition"><Instagram size={14} /></a>
              <a href="#" className="hover:opacity-80 transition"><Facebook size={14} /></a>
              <a href="#" className="hover:opacity-80 transition"><Twitter size={14} /></a>
              <a href="#" className="hover:opacity-80 transition"><Linkedin size={14} /></a>
              <a href="#" className="hover:opacity-80 transition"><Youtube size={14} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-end gap-4 relative">
            <div className="hidden md:block h-10 w-px bg-white/40" />
            <a
              href="#"
              className="border border-lime text-lime px-6 py-2 text-sm font-bold tracking-wider flex items-center gap-3 hover:bg-lime hover:text-primary transition"
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
      <div className="h-[1px] mx-auto max-w-6xl" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.6) 25%, rgba(255,255,255,0.6) 75%, transparent)' }} />
      {/* Copyright bar */}
      <div className="bg-primary text-center text-xs text-lime/50 py-3">
        © DigitalBee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
