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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setByNeedOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isByNeedActive = location.pathname.startsWith("/by-need");

  return (
    <nav className="relative z-50 flex flex-col bg-background">
      <div className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Digital Bee" className="h-10" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={`hover:text-primary transition relative pb-1 ${isActive("/") ? "text-primary font-bold" : "text-foreground"}`}>
            Home
            {isActive("/") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime" />}
          </Link>
          <Link to="/" className="text-foreground hover:text-primary transition">Services</Link>
          
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setByNeedOpen(!byNeedOpen)}
              className={`flex flex-col items-center hover:text-primary transition ${isByNeedActive ? "text-primary font-bold" : "text-foreground"}`}
            >
              By Need
              {isByNeedActive && (
                <span className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-primary mt-0.5" />
              )}
            </button>
            
            {byNeedOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-background shadow-lg border border-border rounded-sm py-4 px-6 w-80 z-50">
                {byNeedItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setByNeedOpen(false)}
                    className={`block py-2 text-center text-sm hover:text-primary transition ${
                      isActive(item.path) ? "text-primary font-semibold" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link to="/" className="text-foreground hover:text-primary transition">About</Link>
          <Link to="/" className="text-foreground hover:text-primary transition">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <div className="w-px h-6 bg-lime" />
          <div className="flex items-center gap-3 text-primary">
            {/* Instagram */}
            <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            {/* Facebook */}
            <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            {/* X (Twitter) */}
            <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            {/* LinkedIn */}
            <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            {/* YouTube */}
            <a href="#" className="hover:opacity-70"><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
          </div>
          <div className="w-px h-6 bg-lime" />
          <button className="flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="w-6 h-0.5 bg-primary" />
            <span className="w-6 h-0.5 bg-primary" />
            <span className="w-6 h-0.5 bg-primary" />
          </button>
        </div>
      </div>
      {/* Dotted bottom border */}
      <div className="w-full border-b border-dashed border-primary/40" />
    </nav>
  );
};

export default Navbar;
