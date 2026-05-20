import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  
  const scrollToSection = (id) => {
   
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const menuLinks = [
    { name: "Ana Səhifə", target: "home" },
    { name: "Haqqımızda", target: "about" },
    { name: "Xidmətlərimiz", target: "services" },
    { name: "Brendlər", target: "brands" },
    { name: "Müştərilər", target: "clients" },
    { name: "Əlaqə", target: "contact" },
  ];

  return (
    <footer 
      className="bg-[#050c1c] text-white pt-16 md:pt-24 pb-10 px-6 md:px-20 border-t-4 border-[#E04B26]/20" 
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16 w-full">
          
          
          <div className="space-y-6 w-full lg:max-w-sm">
            <div className="cursor-pointer" onClick={() => scrollToSection("home")}>
              <img src={logo} alt="HHT Logo" className="h-14 md:h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Hydro Heat Tech (HHT) — sənaye və kommersiya obyektləri üçün
              nasos, istilik və su sistemləri üzrə ixtisaslaşmış mühəndislik
              şirkətidir. Keyfiyyət və etibarlılığın tək ünvanı.
            </p>
          </div>

         
          <div className="w-full lg:w-auto">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E04B26] rounded-full"></span>
              Menyu
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-4 text-gray-400 text-sm">
              {menuLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 group outline-none"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="w-full lg:max-w-md">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
              Əlaqə Məlumatları
            </h4>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Azərbaycan Bakı, Nərimanov rayonu <br />
                  Ələsgər Qayıbov küç 1222 <br />
                  Azera Holding mərtəbə 3, otaq 62.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E04B26] group-hover:bg-[#E04B26] group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <div className="text-sm flex flex-col gap-2">
                    <a href="tel:+994519487909" className="block hover:text-[#E04B26] transition-colors font-semibold">+994 51 948 79 09</a>
                    <a href="tel:+994125255251" className="block hover:text-[#E04B26] transition-colors font-semibold">+994 12 525 52 51</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <a href="mailto:info@hht.az" className="text-sm hover:text-[#00AEEF] transition-colors font-semibold">info@hht.az</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-gray-300 font-medium text-center md:text-left">
          <p>© {new Date().getFullYear()} Hydro Heat Tech (HHT). Bütün hüquqlar qorunur.</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;