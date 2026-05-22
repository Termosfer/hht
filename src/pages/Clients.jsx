import {
  Users,
  Building2,
  Factory,
  Landmark,
  CheckCircle2,
  Activity,
  HardHat,
} from "lucide-react";
import { cloneElement } from "react";

const Clients = () => {
  const stats = [
    {
      label: "Ümumi müştəri sayı",
      value: "148+",
      icon: <Users className="w-6 h-6" />,
    },
    {
      label: "Dövlət qurumları",
      value: "12+",
      icon: <Landmark className="w-6 h-6" />,
    },
    {
      label: "Kommersiya obyektləri",
      value: "80+",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      label: "Sənaye müəssisələri",
      value: "30+",
      icon: <Factory className="w-6 h-6" />,
    },
  ];

  const clientGroups = [
    {
      title: "Dövlət və Strateji Qurumlar",
      icon: <Landmark className="w-5 h-5 text-[#00AEEF]" />,
      list: [
        "Naxçıvan Beynəlxalq Hava Limanı",
        "Azərbaycan Dəmir Yolları QSC",
        "Azərbaycan Kosmik Agentliyi (Azərkosmos)",
        "Nazirlər Kabinetinin Aparatı",
        "Dövlət Dəniz və Liman Agentliyi",
        "Dövlət Gömrük Komitəsi (ATK)",
        "Bakı, Lənkəran və Xəzər Gənclər Evləri",
      ],
    },
    {
      title: "Sənaye, Holdinq və Kommersiya",
      icon: <Factory className="w-5 h-5 text-[#E04B26]" />,
      list: [
        "Azərsun Holdinq MMC",
        "PAŞA Property Management",
        "Baku Steel Company QSC",
        "Grand Motors Company QSC",
        "Alutech Baku MMC",
        "Nobel Plaza MMC",
        "Args Holdinq MMC",
        "Bakıkhanov Mall",
      ],
    },
    {
      title: "Tikinti və Mühəndislik",
      icon: <HardHat className="w-5 h-5 text-emerald-500" />,
      list: [
        "Tekfen İnşaat (Nümayəndəlik)",
        "DKT İnşaat (Filial)",
        "Hidrotermik MMC",
        "GL Mühəndislik MMC",
        "AzTechno Engineering MMC",
        "Hightechnic Systems MMC",
      ],
    },
    {
      title: "Hotel, Tibb və İdman",
      icon: <Activity className="w-5 h-5 text-purple-500" />,
      list: [
        "Excelsior Hotel MMC",
        "Baku Boulevard Hotel",
        "Baku Winter Park Hotel",
        "Şabran Rayon Mərkəzi Xəstəxanası",
        "Qəbələ İdman Klubu",
        "Azərbaycan Boks Federasiyası",
        "Neftçi PFK MMC",
      ],
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-[#0B1938] text-white overflow-hidden"
      id="clients"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6">
            Müştərilərimiz
          </h2>
          <p className="text-gray-400 max-w-3xl text-base md:text-lg leading-relaxed">
            2023–2026-cı illər ərzində aşağıdakı dövlət qurumları, holdinqlər, hotel, idman, tibb, sənaye müəssisələri və tikinti şirkətləri ilə uğurla əməkdaşlıq etmişik.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-[#00AEEF] mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-widest font-bold leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {clientGroups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-[25px] md:rounded-[35px] p-6 md:p-8 shadow-2xl transition-transform hover:md:-translate-y-1 duration-500"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 pb-4 border-b border-gray-100">
                <div className="p-2 md:p-3 bg-gray-50 rounded-xl md:rounded-2xl shadow-sm text-gray-800 shrink-0">
                  {cloneElement(group.icon, { className: "w-5 h-5" })}
                </div>
                <h3 className="text-base md:text-lg font-black text-[#0B1938] uppercase tracking-tight">
                  {group.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {group.list.map((client, i) => (
                  <div key={i} className="flex items-start gap-2 group/item">
                    <CheckCircle2 className="w-4 h-4 text-[#00AEEF] mt-0.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                    <span className="text-[#0B1938] font-bold text-[11px] md:text-[13px] leading-snug group-hover/item:text-[#E04B26] transition-colors">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
