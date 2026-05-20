import { ShieldCheck, Zap, Headphones, Award } from "lucide-react"; // İkonlar üçün

const WhyBrands = () => {
  const reasons = [
    {
      title: "Beynəlxalq Sertifikatlaşdırma",
      desc: "Bütün məhsullar ISO, CE və NFPA standartlarına tam uyğundur.",
      icon: <ShieldCheck className="w-6 h-6 text-[#00AEEF]" />,
    },
    {
      title: "Enerji Səmərəliliyi",
      desc: "Müasir mühərriklər vasitəsilə minimum enerji istehlakı ilə maksimum məhsuldarlıq.",
      icon: <Zap className="w-6 h-6 text-[#E04B26]" />,
    },
    {
      title: "Uzunömürlülük",
      desc: "Korroziyaya davamlı materiallar və üstün mühəndislik sənəti.",
      icon: <Award className="w-6 h-6 text-[#00AEEF]" />,
    },
    {
      title: "Zəmanət və Servis",
      desc: "Rəsmi tərəfdaş olaraq bütün məhsullara rəsmi zəmanət və texniki dəstək veririk.",
      icon: <Headphones className="w-6 h-6 text-[#E04B26]" />,
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Niyə Bu Brendləri Seçirik?
          </h2>
          <div className="w-16 h-1 bg-[#E04B26] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {/* İkon Konteyneri */}
              <div className="mb-6 p-4 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors">
                {item.icon}
              </div>

              {/* Başlıq */}
              <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                {item.title}
              </h3>

              {/* Açıqlama */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-3xl text-center mt-20 text-base md:text-lg">
          <p className="text-[#0B1938]  leading-relaxed italic">
            Daha ətraflı məlumat və brendlərin rəsmi kataloqları üçün{" "}
            <span className="text-[#1e3a8a] font-bold">
              texniki komandamızla
            </span>{" "}
            əlaqə saxlaya bilərsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBrands;
