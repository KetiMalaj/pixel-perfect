import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Decorative lime bar */}
      <div className="flex">
        <div className="flex-1 bg-lime" />
        <div className="w-1/3 h-3 bg-lime" />
        <div className="flex-1 bg-lime" />
      </div>

      <div className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Office Location */}
          <div>
            <h4 className="font-handwritten text-lime text-2xl font-bold mb-1">Office Location:</h4>
            <p className="text-sm opacity-80">Rr. "Themistokli Gërmenji",</p>
            <p className="text-sm opacity-80">Nr. 1, Unit 9, Tirana, 1010</p>
            <p className="mt-4">
              <span className="font-handwritten text-lime text-2xl font-bold">Call: </span>
              <span className="text-sm opacity-80"> +355 69 800 2500</span>
            </p>
          </div>

          {/* Email & Socials */}
          <div>
            <h4 className="font-handwritten text-lime text-2xl font-bold mb-1">e-mail:</h4>
            <p className="text-sm opacity-80">marketing@digitalbee.al</p>
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
              className="border-2 border-lime text-lime px-8 py-3 text-lg font-bold tracking-wider flex items-center gap-3 hover:bg-lime hover:text-primary transition"
            >
              NEWSLETTER
              <span className="border border-lime p-1">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar with separate background */}
      <div className="bg-muted text-center text-xs text-muted-foreground py-3">
        © DigitalBee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
