import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Ana Səhifə", target: "home" },
    { name: "Haqqımızda", target: "about" },
    { name: "Xidmətlərimiz", target: "services" },
    { name: "Brendlər", target: "brands" },
    { name: "Müştərilər", target: "clients" },
    { name: "Əlaqə", target: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-20 ${
        isScrolled || isMenuOpen
          ? "bg-[#0B1938] py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="h-12 md:h-16 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={logo} alt="Logo" className="h-full object-contain" />
        </div>

        <ul className="hidden lg:flex gap-8 text-white font-bold uppercase text-xs tracking-widest">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => scrollToSection(link.target)}
                className="hover:text-[#00AEEF] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ${
          isMenuOpen
            ? "max-h-screen py-10 opacity-100"
            : "max-h-0 py-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-[#0B1938] font-bold uppercase">
          {navLinks.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => scrollToSection(link.target)}
                className="text-lg"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
