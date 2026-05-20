const About = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24 px-6 md:px-20" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1938] text-center mb-12 md:mb-20">
          Haqqımızda
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#c23a1a]"></div>
              <span className="text-[#c23a1a] font-bold tracking-widest uppercase text-sm">
                Biz Kimik?
              </span>
            </div>

            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <div className="flex flex-col gap-6">
                <p>
                  <span className="font-bold text-[#00AEEF] text-xl">
                    Hydro Heat Tech (HHT)
                  </span>{" "}
                  — Azərbaycan Respublikasında sənaye və kommersiya obyektləri
                  üçün nasos, istilik, su təchizatı və yanğın sistemləri
                  sahəsində kompleks mühəndislik xidmətləri göstərən
                  ixtisaslaşmış şirkətdir.
                </p>
                <p>
                  Şirkətimiz geniş əməkdaşlığa və professional təcrübəyə
                  malikdir. Şirkətimizin əsas devizi maksimum müştəri
                  yönümlülükdür.
                </p>
                <p>
                  Alqı-satqıdan tutmuş layihələndirməyə, montajdan texniki
                  xidmətə qədər bütün prosesləri öz üzərimizə götürüb maksimal
                  müştəri məmnuniyyəti yaratmaq isə ali məqsədimizdir.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <div className="relative p-6 sm:p-10 bg-[#0B1938] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-300">
             
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00AEEF] rounded-full opacity-10"></div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center text-sm shrink-0">
                  ✓
                </span>
                Missiyamız
              </h3>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed italic">
                Müştərilərimizə enerji qənaətcil, etibarlı və müasir mühəndislik sistemləri təqdim edərək yaranan sahə boşluqlarını doldurmaq, müştərilərimizi təkrar xərclərdən xilas etmək, daima əlçatan olub bütün texniki dəstəyi göstərməkdir. Bizim geniş əməkdaşlıq prinsipimizə əsasən hər bir müştəriyə müvafiq avadanlıq, texnika, texniki həll və xidmət göstərməmiz isə fərqimizdir.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-24">
          {[
            { label: "Tamamlanmış layihə", value: "148+" },
            { label: "Premium Brend", value: "12+" },
            { label: "Rəsmi Nümayəndəlik", value: "1" },
            { label: "İl Ərzindən Çox Təcrübə", value: "3+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-white border-b-4 border-[#00AEEF] shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl text-center flex flex-col justify-center items-center"
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#00AEEF] mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-bold uppercase text-[10px] md:text-xs tracking-widest leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
