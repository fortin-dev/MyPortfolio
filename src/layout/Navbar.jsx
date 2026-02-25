import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} right-0 z-50 `}
    >
      <nav className=" container mx-auto px-6 flex justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-light hover:text-primary"
        >
          Fortin
          <span className="text-primary">.</span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1pxeLxuOI93uWFHPUwnFQ2kUV1VHhum8O/view?usp=sharing"
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
        {/* CTA button  */}

        <div className="hidden md:block">
          <Button size="sm">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Mobil menu button  */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1pxeLxuOI93uWFHPUwnFQ2kUV1VHhum8O/view?usp=sharing"
              className="text-lg text-muted-foreground hover:text-foreground py-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <Button onClick={() => setIsMobileOpen(false)}>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
