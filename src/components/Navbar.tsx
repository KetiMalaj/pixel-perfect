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
        {/* Top gradient line — block by block */}
        <div className="flex h-[5px] w-full">
          <div className="flex-1 bg-primary" />
          <div className="flex-1 bg-primary opacity-75" />
          <div className="flex-1 bg-primary opacity-50" />
          <div className="flex-1 bg-primary opacity-30" />
          <div className="flex-1 bg-primary opacity-15" />
        </div>
        <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-[1440px] mx-auto w-full">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Digital Bee" className="h-10 md:h-14" />
          </Link>

          {/* Mobile hamburger */}
          <button className="flex md:hidden flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`w-7 h-0.5 bg-primary transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-0.5 bg-primary ml-auto transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-7 h-0.5 bg-primary transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          <div className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide">
            <Link
              to="/"
              className={`hover:text-primary transition relative pb-1 ${isHomeActive ? "text-primary font-semibold" : "text-foreground"}`}
            >
              Home
              {isHomeActive && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-lime" />}
            </Link>
            <Link to="/" className="text-foreground hover:text-primary transition pb-1">Services</Link>

            <div className="relative">
              <button
                ref={byNeedBtnRef}
                onClick={() => setByNeedOpen(!byNeedOpen)}
                className={`hover:text-primary transition relative pb-1 ${isByNeedActive || byNeedOpen ? "text-primary font-semibold" : "text-foreground"}`}
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
                  <polygon points="7,8 0,0 14,0" fill="blue" />
                </svg>
              </div>
            </div>

            <Link to="/" className="text-foreground hover:text-primary transition pb-1">About</Link>
            <Link to="/" className="text-foreground hover:text-primary transition pb-1">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="w-px h-6 bg-lime" />
            <div className="flex items-center gap-6 text-primary">
              {/* Instagram */}
              <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
              {/* Facebook */}
              <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg></a>
              {/* X (Twitter) */}
              <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              {/* LinkedIn */}
              <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/></svg></a>
              {/* YouTube */}
              <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
            <div className="w-px h-6 bg-lime" />
            <button className="flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="w-7 h-0.5 bg-primary" />
              <span className="w-5 h-0.5 bg-primary ml-auto" />
              <span className="w-7 h-0.5 bg-primary" />
            </button>
          </div>
        </div>
        {/* Dotted bottom border — aligned with content */}
        <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8">
          <div className="navbar-separator w-full" style={{ margin: 0 }} />
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 flex flex-col items-center pt-8 gap-4 text-lg font-medium md:hidden overflow-y-auto">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-primary hover:text-primary/70 transition">Home</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition">Services</Link>
          <button
            onClick={() => setByNeedOpen(!byNeedOpen)}
            className="text-foreground hover:text-primary transition"
          >
            By Need
          </button>
          {byNeedOpen && (
            <div className="flex flex-col items-center gap-2 py-2">
              {byNeedItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => { setByNeedOpen(false); setMenuOpen(false); }}
                  className="text-sm text-primary hover:font-bold transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition">About</Link>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-foreground hover:text-primary transition">Contact</Link>
          <div className="flex items-center gap-6 text-primary mt-4">
            <a href="#" className="hover:opacity-70"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
            <a href="#" className="hover:opacity-70"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg></a>
            <a href="#" className="hover:opacity-70"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            <a href="#" className="hover:opacity-70"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/></svg></a>
            <a href="#" className="hover:opacity-70"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
          </div>
        </div>
      )}

      {/* Full-width mega-menu panel */}
      <div
        ref={megaMenuRef}
        className={`fixed left-0 w-screen bg-white/90 z-40 overflow-hidden transition-opacity duration-300 ease-in-out ${
          byNeedOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: navHeight, height: `calc(100vh - ${navHeight}px)` }}
      >
{/* Menu links */}
        <div className="relative z-10 flex flex-col items-center pt-4 gap-1" style={{ marginRight: 75 }}>
          {byNeedItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setByNeedOpen(false)}
                className="group flex items-center justify-center gap-1.5 py-2.5 text-base text-primary hover:font-bold transition"
              >
                <span className="text-lime text-xs leading-none opacity-0 group-hover:opacity-100 transition" style={{ WebkitTextStroke: '0.5px hsl(var(--primary))' }}>▶</span>
                {item.label}
              </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
