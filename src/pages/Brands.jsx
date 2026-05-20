import { useState } from "react";
import logo1 from "../assets/brendlər/ebara.png";
import logo2 from "../assets/brendlər/grundfos.png";
import logo3 from "../assets/brendlər/wilo.png";
import logo4 from "../assets/brendlər/calpeda1.png";
import logo5 from "../assets/brendlər/lowara1.png";
import logo6 from "../assets/brendlər/pedrollo1.png";
import logo7 from "../assets/brendlər/zenit.webp";
import logo8 from "../assets/brendlər/flygt1.png";
import logo9 from "../assets/brendlər/sumak1.png";
import logo10 from "../assets/brendlər/standart.png";
import logo11 from "../assets/brendlər/sealand1.png";
import logo12 from "../assets/brendlər/sep1.png";
const brands = [
  {
    name: "Ebara",
    origin: "Yaponiya",
    spec: "Yaponiya texnologiyası. Paslanmaz polad sənaye nasosları və mühəndislik həlləri üzrə dünya lideri.",
    logo: logo1,
  },
  {
    name: "Grundfos",
    origin: "Danimarka",
    spec: "Danimarka brendi. Dünyanın ən böyük nasos istehsalçısı, sirkulyasiya və ağıllı su həlləri üzrə pioner.",
    logo: logo2,
  },
  {
    name: "Wilo",
    origin: "Almaniya",
    spec: "Almaniya mühəndisliyi. Bina texnologiyaları, su idarəetməsi və sənaye üçün yüksək səmərəli sistemlər.",
    logo: logo3,
  },
  {
    name: "Calpeda",
    origin: "İtaliya",
    spec: "İtaliya istehsalı. Kənd təsərrüfatı, məişət və sənaye tətbiqləri üçün geniş çeşidli nasos avadanlıqları.",
    logo: logo4,
  },
  {
    name: "Lowara (Xylem)",
    origin: "İtaliya/ABŞ",
    spec: "İtaliya/ABŞ texnologiyası. Yaşayış və kommersiya binaları üçün enerji qənaətli su nasosları.",
    logo: logo5,
  },
  {
    name: "Pedrollo",
    origin: "İtaliya",
    spec: "İtaliya brendi. Suvarma və məişət su təchizatı üçün etibarlı, kompakt və dözümlü həllər.",
    logo: logo6,
  },
  {
    name: "Zenit",
    origin: "İtaliya",
    spec: "İtaliya ixtisası. Çirkab suların təmizlənməsi və drenaj sistemləri üçün peşəkar dalğıc nasoslar.",
    logo: logo7,
  },
  {
    name: "Flygt (Xylem)",
    origin: "İsveç",
    spec: "İsveç brendi. Dünyada ilk dalğıc çirkab su nasosunun ixtiraçısı, ağır sənaye və kanalizasiya sistemləri.",
    logo: logo8,
  },
  {
    name: "Sumak",
    origin: "Türkiyə",
    spec: "Türkiyə istehsalı. Suvarma, yanğın və drenaj sistemləri üçün rəqabətqabiliyyətli və keyfiyyətli nasoslar.",
    logo: logo9,
  },
  {
    name: "Standart",
    origin: "Türkiyə",
    spec: "Türkiyənin köklü brendi. Ağır sənaye, enerji və yanğın nasosları sahəsində geniş təcrübə.",
    logo: logo10,
  },
  {
    name: "SeaLand",
    origin: "İtaliya",
    spec: "İtaliya mənşəli. Məişət və kənd təsərrüfatı üçün effektiv su təchizatı nasosları.",
    logo: logo11,
  },
  {
    name: "SEP",
    origin: "Türkiyə",
    spec: "Türkiyə brendi. İstilik dövriyyəsi və mərkəzi su təchizatı sistemləri üçün səmərəli mühəndislik məhsulları.",
    logo: logo12,
  },
];

const Brands = () => {
  const [activeBrand, setActiveBrand] = useState(null);

  return (
    <section
      className="bg-[#0B1938] py-16 md:py-24 px-6 md:px-20 text-white overflow-hidden"
      id="brands"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-end mb-12 md:mb-20">
          <div className="text-left text-wrap">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Brendlər və <br />
              <span className="text-[#00AEEF] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Nümayəndəliklər
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg lg:border-l lg:border-gray-700 lg:pl-10 leading-relaxed">
            Dünyanın aparıcı nasos istehsalçıları ilə əməkdaşlıq edərək,
            layihələriniz üçün ən yüksək keyfiyyətli və orijinal avadanlıqları
            təqdim edirik.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-gray-800">
          {brands.map((brand, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveBrand(index)}
              onMouseLeave={() => setActiveBrand(null)}
              onClick={() =>
                setActiveBrand(activeBrand === index ? null : index)
              }
              className="relative h-40 md:h-48 border-r border-b border-gray-800 flex flex-col items-center justify-center group transition-all duration-500 hover:bg-[#11234a] cursor-pointer"
            >
              <div className="h-16 w-24 md:h-20 md:w-32 flex items-center justify-center transition-all duration-500 group-hover:-translate-y-4">
                <img
                loading="lazy"
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain brightness-0 invert opacity-60 md:opacity-50 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500 px-2"
                />
                {!brand.logo && (
                  <span className="text-lg md:text-xl font-bold opacity-20">
                    {brand.name}
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 md:bottom-6 flex flex-col items-center">
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-300 group-hover:text-[#00AEEF] transition-colors">
                  {brand.origin}
                </span>
              </div>

              <div
                className={`absolute inset-x-0 bottom-0 bg-[#00AEEF] p-3 md:p-4 text-center transition-all duration-300 transform 
            ${activeBrand === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <p className="text-[9px] md:text-[11px] font-bold leading-tight uppercase text-[#0B1938]">
                  {brand.spec.split(".")[1] || brand.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
