import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const byNeedItems = [
  { label: "Drive Growth & Performance", path: "/by-need/drive-growth" },
  { label: "Understand Your Audience", path: "/by-need/understand-audience" },
  { label: "Build & Position Your Brand", path: "/by-need/build-brand" },
  { label: "Campaigns & Communication", path: "/by-need/campaigns" },
  { label: "Political Communication & Public Affairs", path: "/by-need/political" },
  { label: "Personal Branding & Reputation", path: "/by-need/personal-branding" },
  { label: "Build Your Digital Presence", path: "/by-need/digital-presence" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [byNeedOpen, setByNeedOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const byNeedBtnRef = useRef<HTMLButtonElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        byNeedOpen &&
        megaMenuRef.current && !megaMenuRef.current.contains(target) &&
        byNeedBtnRef.current && !byNeedBtnRef.current.contains(target)
      ) {
        setByNeedOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [byNeedOpen]);

  const isByNeedActive = location.pathname.startsWith("/by-need");
  const isHomeActive = location.pathname === "/" && !isByNeedActive && !byNeedOpen;

  return (
    <>
      <nav ref={navRef} className="relative z-50 flex flex-col bg-white">
        <div className="flex items-center justify-between px-8 py-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Digital Bee" className="h-10" />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              to="/"
              className={`hover:text-primary transition relative pb-1 ${isHomeActive ? "text-primary font-bold" : "text-foreground"}`}
            >
              Home
              {isHomeActive && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-lime" />}
            </Link>
            <Link to="/" className="text-foreground hover:text-primary transition pb-1">Services</Link>

            <div className="relative">
              <button
                ref={byNeedBtnRef}
                onClick={() => setByNeedOpen(!byNeedOpen)}
                className={`hover:text-primary transition relative pb-1 ${isByNeedActive || byNeedOpen ? "text-primary font-bold" : "text-foreground"}`}
              >
                By Need
                {(isByNeedActive || byNeedOpen) && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-lime" />}
              </button>

              {/* Purple triangle indicator */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-[5px] z-[60] transition-opacity duration-300 ease-in-out ${
                  byNeedOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <svg width="14" height="8" viewBox="0 0 14 8">
                  <polygon points="7,8 0,0 14,0" fill="hsl(254, 95%, 50%)" />
                </svg>
              </div>
            </div>

            <Link to="/" className="text-foreground hover:text-primary transition pb-1">About</Link>
            <Link to="/" className="text-foreground hover:text-primary transition pb-1">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="w-px h-6 bg-lime" />
            <div className="flex items-center gap-2.5 text-primary">
              {/* Instagram */}
              <a href="#" className="hover:opacity-70"><svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              {/* Facebook */}
              <a href="#" className="hover:opacity-70"><svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              {/* X (Twitter) */}
              <a href="#" className="hover:opacity-70"><svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              {/* LinkedIn */}
              <a href="#" className="hover:opacity-70"><svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              {/* YouTube */}
              <a href="#" className="hover:opacity-70"><svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
            </div>
            <div className="w-px h-6 bg-lime" />
            <button className="flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="w-7 h-0.5 bg-primary" />
              <span className="w-5 h-0.5 bg-primary ml-auto" />
              <span className="w-7 h-0.5 bg-primary" />
            </button>
          </div>
        </div>
        {/* Dotted bottom border */}
        <div className="w-full border-b border-dashed border-primary/40" />
      </nav>

      {/* Full-width mega-menu panel */}
      <div
        ref={megaMenuRef}
        className={`fixed left-0 w-screen bg-white/90 z-40 overflow-hidden transition-opacity duration-300 ease-in-out ${
          byNeedOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: navHeight, height: `calc(100vh - ${navHeight}px)` }}
      >
        {/* Watermark background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[8vw] font-bold text-gray-100 whitespace-nowrap tracking-wide">
            Marketing &amp; Research
          </span>
        </div>

        {/* Menu links */}
        <div className="relative z-10 flex flex-col items-center pt-6 gap-1">
          {byNeedItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setByNeedOpen(false)}
                className={`flex items-center gap-2 py-2 text-sm transition hover:opacity-70 ${
                  isActive ? "font-bold text-primary" : "font-normal text-primary"
                }`}
              >
                {isActive && (
                  <svg width="8" height="10" viewBox="0 0 8 10">
                    <polygon points="0,0 8,5 0,10" fill="hsl(68, 100%, 45%)" stroke="black" strokeWidth="1" />
                  </svg>
                )}
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
