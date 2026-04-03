import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Decorative lime bar - faded edges */}
      <div className="flex h-3 justify-center gap-1">
        <div className="w-10 bg-lime opacity-15" />
        <div className="w-10 bg-lime opacity-30" />
        <div className="w-12 bg-lime opacity-50" />
        <div className="w-14 bg-lime opacity-70" />
        <div className="w-16 bg-lime opacity-85" />
        <div className="w-[28%] bg-lime" />
        <div className="w-16 bg-lime opacity-85" />
        <div className="w-14 bg-lime opacity-70" />
        <div className="w-12 bg-lime opacity-50" />
        <div className="w-10 bg-lime opacity-30" />
        <div className="w-10 bg-lime opacity-15" />
      </div>

      <div className="bg-primary text-lime">
        <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Location */}
          <div>
            <h4 className="font-handwritten text-lime text-2xl font-bold mb-1">Office Location:</h4>
            <p className="text-sm">Rr. "Themistokli Gërmenji",</p>
            <p className="text-sm">Nr. 1, Unit 9, Tirana, 1010</p>
            <p className="mt-4">
              <span className="font-handwritten text-lime text-2xl font-bold">Call: </span>
              <span className="text-sm"> +355 69 800 2500</span>
            </p>
          </div>

          {/* Email & Socials */}
          <div>
            <h4 className="font-handwritten text-lime text-2xl font-bold mb-1">e-mail:</h4>
            <p className="text-sm">marketing@digitalbee.al</p>
            <h4 className="font-handwritten text-lime text-2xl font-bold mt-4 mb-2">Socials:</h4>
            <div className="flex items-center gap-3 text-lime">
              <a href="#" className="hover:opacity-80 transition"><Instagram size={18} /></a>
              <a href="#" className="hover:opacity-80 transition"><Facebook size={18} /></a>
              <a href="#" className="hover:opacity-80 transition"><Twitter size={18} /></a>
              <a href="#" className="hover:opacity-80 transition"><Linkedin size={18} /></a>
              <a href="#" className="hover:opacity-80 transition"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-end">
            <a
              href="#"
              className="border-2 border-lime text-lime px-8 py-3 text-lg font-bold tracking-wider flex items-center gap-4 hover:bg-lime hover:text-primary transition"
            >
              NEWSLETTER
              <span className="border border-lime w-8 h-8 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="1" y1="13" x2="13" y2="1" />
                  <polyline points="4,1 13,1 13,10" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-muted text-center text-xs text-muted-foreground py-3">
        © DigitalBee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
