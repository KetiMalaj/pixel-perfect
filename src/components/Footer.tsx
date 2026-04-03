const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Decorative bar */}
      <div className="flex">
        <div className="flex-1 bg-primary" />
        <div className="w-1/3 h-2 bg-lime" />
        <div className="flex-1 bg-primary" />
      </div>

      <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Office Location */}
        <div>
          <h4 className="font-handwritten text-lime text-xl font-bold mb-1">Office Location:</h4>
          <p className="text-sm opacity-80">Rr. "Themistokli Germenji",</p>
          <p className="text-sm opacity-80">Nr. 1, Unit 9, Tirana, 1010</p>
          <p className="mt-3">
            <span className="font-handwritten text-lime text-lg font-bold">Call: </span>
            <span className="text-sm opacity-80">+355 69 800 2500</span>
          </p>
        </div>

        {/* Email & Socials */}
        <div>
          <h4 className="font-handwritten text-lime text-xl font-bold mb-1">e-mail:</h4>
          <p className="text-sm opacity-80">marketing@digitalbee.al</p>
          <h4 className="font-handwritten text-lime text-xl font-bold mt-3 mb-1">Socials:</h4>
          <div className="flex items-center gap-3 text-primary-foreground">
            {["instagram", "facebook", "x", "linkedin", "youtube"].map((s) => (
              <a key={s} href="#" className="hover:text-lime transition">
                <span className="w-4 h-4 inline-block text-xs">
                  {s === "instagram" && "📷"}
                  {s === "facebook" && "f"}
                  {s === "x" && "𝕏"}
                  {s === "linkedin" && "in"}
                  {s === "youtube" && "▶"}
                </span>
              </a>
            ))}
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

      <div className="text-center text-xs opacity-60 pb-4">
        © DigitalBee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
