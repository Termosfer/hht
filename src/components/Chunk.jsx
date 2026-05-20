import {
  Factory,
  Building2,
  Thermometer,
  Utensils,
  Hospital,
  Sprout,
  CheckCircle2,
} from "lucide-react";
import logo from "../assets/chunke.webp";
import { cloneElement } from "react";

const Chunk = () => {
  const usageAreas = [
    { name: "Zavod və fabriklər", icon: <Factory className="w-5 h-5" /> },
    {
      name: "Otel və yaşayış kompleksləri",
      icon: <Building2 className="w-5 h-5" />,
    },
    { name: "Qazanxana sistemləri", icon: <Thermometer className="w-5 h-5" /> },
    { name: "Qida və içki sənayesi", icon: <Utensils className="w-5 h-5" /> },
    { name: "Xəstəxanalar", icon: <Hospital className="w-5 h-5" /> },
    { name: "Kənd təsərrüfatı", icon: <Sprout className="w-5 h-5" /> },
  ];

  return (
    <section
      className="py-16 md:py-24 px-6 md:px-20 bg-slate-50 overflow-hidden"
      id="representation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#0f2a6b] px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 animate-pulse">
            <CheckCircle2 className="w-4 h-4" />
            Rəsmi Nümayəndəlik — CHUNKE HB
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1938] leading-tight">
              CHUNKE HB nədir?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Sənaye tipli su təmizləmə və{" "}
              <span className="text-[#00AEEF] font-bold">
                Reverse Osmosis (RO)
              </span>{" "}
              sistemləri istehsal edən Avropa markasının Azərbaycandakı rəsmi
              nümayəndəsiyik.
            </p>

            <div className="pt-6 md:pt-8 border-t border-gray-200 w-full flex justify-center lg:justify-start">
              <div className="h-20 md:h-24 w-48 md:w-52 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-4 md:p-6 hover:shadow-md transition-shadow overflow-hidden">
                <img
                  src={logo}
                  alt="Chunke HB"
                  className="w-full  object-cover overflow-hidden"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-[#00AEEF] rounded-[30px] md:rounded-[40px] transform rotate-2 scale-105 opacity-5"></div>

            <div className="relative bg-white p-6 sm:p-10 rounded-[30px] md:rounded-[40px] shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6 md:mb-8 justify-center sm:justify-start">
                <div className="w-2 h-8 bg-[#00AEEF] rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B1938]">
                  İstifadə Sahələri
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-left">
                {usageAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-all duration-300 group border border-transparent hover:border-blue-100"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center text-[#1e3a8a] shadow-sm group-hover:bg-[#1e3a8a] group-hover:text-white transition-all shrink-0">
                      {cloneElement(area.icon, {
                        className: "w-4 h-4 md:w-5 h-5",
                      })}
                    </div>
                    <span className="font-bold text-gray-700 text-xs md:text-sm tracking-tight leading-tight">
                      {area.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chunk;
