import React from "react";
import {
  Waves,
  Droplets,
  Wind,
  Filter,
  ShieldCheck,
  Zap,
  ChevronRight,
} from "lucide-react";

const ProcessStep = () => {
  const steps = [
    {
      id: 1,
      title: "Qum Filteri",
      desc: "Qum, palçıq, iri hissəciklər",
      icon: <Waves />,
    },
    {
      id: 2,
      title: "Karbon Filteri",
      desc: "Xlor, qoxu, rəng",
      icon: <Wind />,
    },
    {
      id: 3,
      title: "Softener",
      desc: "Su sərtliyinin azaldılması",
      icon: <Droplets />,
    },
    {
      id: 4,
      title: "Mikron Kartuş",
      desc: "Xırda hissəciklər",
      icon: <Filter />,
    },
    {
      id: 5,
      title: "RO Membran",
      desc: "Duz, bakteriya, ağır metallar",
      icon: <ShieldCheck />,
    },
    {
      id: 6,
      title: "UV / Ozon",
      desc: "Mikrobların məhv edilməsi",
      icon: <Zap />,
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-white px-6 md:px-10 overflow-hidden"
      id="process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1938]">
              Su Təmizləmə Prosesi
            </h2>
            <p className="text-[#00AEEF] font-bold tracking-widest uppercase text-xs md:text-sm mt-2">
              Mərhələlər
            </p>
          </div>
          <div className="h-px grow bg-gray-100 mx-10 hidden md:block mb-3"></div>
        </div>

        <div className="relative">
          <div className="absolute top-12 left-0 w-full h-1 bg-linear-to-r from-[#00AEEF] via-[#1e3a8a] to-[#E04B26] opacity-10 hidden lg:block rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-12 gap-x-6 md:gap-x-10">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                <div className="flex flex-col items-center">
                  <div className="relative z-10 mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-gray-100 text-[#1e3a8a] rounded-full flex items-center justify-center shadow-lg group-hover:border-[#00AEEF] group-hover:text-[#00AEEF] transition-all duration-500">
                      {React.cloneElement(step.icon, {
                        size: window.innerWidth < 768 ? 28 : 32,
                        strokeWidth: 1.5,
                      })}
                    </div>

                    <div className="absolute -top-1 -right-1 w-7 h-7 md:w-8 md:h-8 bg-[#00AEEF] text-white rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold border-2 border-white shadow-md group-hover:bg-[#E04B26] transition-colors">
                      {step.id}
                    </div>
                  </div>

                  <div className="text-center px-2">
                    <h3 className="text-base md:text-lg font-extrabold text-[#0B1938] mb-2 group-hover:text-[#00AEEF] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed font-medium max-w-35 md:max-w-none">
                      {step.desc}
                    </p>
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="mt-8 text-gray-200 sm:hidden animate-bounce">
                      <ChevronRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute top-12 -right-5 md:-right-8 translate-x-1/2 hidden lg:block text-gray-200">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStep;
