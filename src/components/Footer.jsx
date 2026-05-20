import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Phone, Mail, ExternalLink, MapPin } from "lucide-react";
import logo from "../assets/logo1.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const customSlowScroll = (targetId) => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const startPosition = window.pageYOffset;
        const targetPosition =
          element.getBoundingClientRect().top + startPosition - headerOffset;
        const distance = targetPosition - startPosition;

        const duration = 2000;
        let start = null;

        const easeInOutCubic = (t) => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const elapsed = timestamp - start;
          const progress = Math.min(elapsed / duration, 1);

          window.scrollTo(
            0,
            startPosition + distance * easeInOutCubic(progress),
          );

          if (elapsed < duration) {
            window.requestAnimationFrame(step);
          }
        };

        window.requestAnimationFrame(step);
      }
    };

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        customSlowScroll(id);
      }, 300);
    } else {
      customSlowScroll(id);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 items-start">
          <div className="space-y-6">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <img
                loading="lazy"
                src={logo}
                alt="HHT Logo"
                className="h-14 md:h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hydro Heat Tech (HHT) — sənaye və kommersiya obyektləri üçün
              nasos, istilik və su sistemləri üzrə ixtisaslaşmış mühəndislik
              şirkətidir. Keyfiyyət və etibarlılığın tək ünvanı.
            </p>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#E04B26] rounded-full"></span>
              Menyu
            </h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              {menuLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    className="hover:text-[#00AEEF] transition-colors flex items-center gap-2 py-2 min-h-11 group outline-none text-left cursor-pointer"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform text-[#E04B26]"
                    />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00AEEF] rounded-full"></span>
              Əlaqə
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E04B26] shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bakı, Nərimanov r., Ə.Qayıbov küç 1222, <br />
                  <span className="text-white font-semibold">
                    Azera Holding mərtəbə 3, otaq 62.
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E04B26] shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+994519487909"
                    className="hover:text-[#E04B26] transition-colors font-semibold text-sm min-h-8.75 flex items-center"
                  >
                    +994 51 948 79 09
                  </a>
                  <a
                    href="tel:+994125255251"
                    className="hover:text-[#E04B26] transition-colors font-semibold text-sm min-h-8.75 flex items-center"
                  >
                    +994 12 525 52 51
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00AEEF] shrink-0">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:info@hht.az"
                  className="hover:text-[#00AEEF] transition-colors font-semibold text-sm min-h-11 flex items-center"
                >
                  info@hht.az
                </a>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#E04B26] rounded-full"></span>
              Lokasiya
            </h4>
            <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
              <iframe
                title="Azera Holding Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.640955940026!2d49.8773585!3d40.4219678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308934e0c7585d%3A0xdd45fbaa2f585b3d!2sAzera%20Holding!5e0!3m2!1sen!2saz!4v1715800000000!5m2!1sen!2saz"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/Azera+Holding/@40.4219678,49.8773585,17z/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0  group-hover:bg-transparent flex items-center justify-center"
              >
                <span className="bg-black/70 backdrop-blur-md px-3 py-2 rounded-lg text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2">
                  Google Maps-də aç <ExternalLink size={12} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs text-gray-400 font-medium text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Hydro Heat Tech (HHT). Bütün hüquqlar
            qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
