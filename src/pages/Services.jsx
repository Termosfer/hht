import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.webp";
import img5 from "../assets/5.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/6.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.webp";
import img10 from "../assets/10.webp";
import img11 from "../assets/11.webp";
import img12 from "../assets/12.webp";
import img13 from "../assets/13.webp";
import img14 from "../assets/14.webp";

const services = [
  {
    id: 1,
    title: "Sənaye Nasos Sistemləri",
    desc: "Ağır sənaye şəraitləri və yüksək təzyiq tələb edən proseslər üçün peşəkar nasos həlləri. Müxtəlif təyinatlı avadanlıqların satışı, montajı və 7/24 operativ texniki servis xidməti ilə istehsalatınızın kəsilməzliyini təmin edirik.",
    img: img1,
  },
  {
    id: 2,
    title: "Booster (Təzyiq Artırma) Sistemləri",
    desc: "Yüksəkmərtəbəli binalarda və sənaye obyektlərində sabit su təzyiqinin intellektual idarəedilməsi. Tam avtomatlaşdırılmış sistemlərin layihələndirilməsi və qurulması ilə su təchizatında maksimum komfort.",
    img: img2,
  },
  {
    id: 3,
    title: "Yanğınla Mübarizə Sistemləri",
    desc: "Beynəlxalq NFPA standartlarına tam uyğun, avtomatik idarəetmə panelləri ilə təchiz olunmuş yanğın nasos stansiyaları. Obyektlərinizin təhlükəsizlik infrastrukturunu yüksək etibarlılıq zəmanəti ilə formalaşdırırıq.",
    img: img3,
  },
  {
    id: 4,
    title: "İnnovativ İstilik Sistemləri",
    desc: "Qazanxana və istilik dövriyyəsi şəbəkələrinin müasir mühəndislik yanaşması ilə qurulması. Yüksək enerji səmərəliliyi sayəsində minimum xərclə maksimum istilik performansı əldə etməyinizə dəstək oluruq.",
    img: img4,
  },
  {
    id: 5,
    title: "Kompleks Su Təchizatı",
    desc: "Yaşayış kompleksləri, otellər, klinikalar və sənaye müəssisələri üçün A-dan Z-yə su təminatı infrastrukturunun qurulması. Hər bir layihənin spesifik tələblərinə uyğun fərdiləşdirilmiş həllər.",
    img: img5,
  },
  {
    id: 6,
    title: "Kanalizasiya və Drenaj Həlləri",
    desc: "Çirkab suların uzaqlaşdırılması üçün submersible (dalğıc) və quru tip nasos sistemlərinin qurulması. Ən çətin landşaftlarda belə effektiv drenaj və tullantı su idarəçiliyi.",
    img: img6,
  },
  {
    id: 7,
    title: "İnvertor və İntellektual Avtomatika",
    desc: "VFD, PLC, HMI və SCADA sistemlərinin inteqrasiyası ilə proseslərin rəqəmsal idarə olunması. Bu texnologiyalar vasitəsilə enerji istehlakında 30–50% qənaət və avadanlıqların ömrünün uzadılmasını təmin edirik.",
    img: img7,
  },
  {
    id: 8,
    title: "Enerji Effektivliyi və Konsultasiya",
    desc: "Mövcud sistemlərin auditi və enerji xərclərinin optimallaşdırılması üzrə peşəkar məsləhət xidməti. Yaşıl texnologiyalar vasitəsilə həm büdcənizi, həm də ətraf mühiti qoruyuruq.",
    img: img8,
  },
  {
    id: 9,
    title: "Peşəkar Qazanxana Həlləri",
    desc: "Sənaye tipli və fərdi qazanxana sistemlərinin, kollektor qovşaqlarının və istilik məntəqələrinin quraşdırılması. Tam avtomatlaşdırılmış iş rejimi ilə insan amilindən asılı olmayan idarəetmə.",
    img: img9,
  },
  {
    id: 10,
    title: "Müasir Suvarma Sistemləri",
    desc: "Kənd təsərrüfatı, geniş park zonaları və landşaft sahələri üçün intellektual nasos suvarma infrastrukturunun yaradılması. Su resurslarından səmərəli istifadə və bol məhsuldarlıq üçün mühəndislik dəstəyi.",
    img: img10,
  },
  {
    id: 11,
    title: "Hidrofor və Su Təzyiq Qurğuları",
    desc: "Kommersiya və yaşayış binaları üçün membranlı və membransız modern hidrofor sistemləri. Uzunömürlü, səssiz və stabil su təzyiqi təmin edən texnoloji avadanlıqlar.",
    img: img11,
  },
  {
    id: 12,
    title: "Aqressiv Mühit və Dəniz Nasosları",
    desc: "Dəniz suyu, kimyəvi mühit və korroziyaya meyilli çirkab suları üçün paslanmaz polad korpuslu, ağır rejimli xüsusi nasos sistemləri. Ən çətin mühitlərdə dayanıqlı performans.",
    img: img12,
  },
  {
    id: 13,
    title: "Orijinal Ehtiyat Hissələri",
    desc: "Dünyanın aparıcı brendlərinin nasos, mühərrik və armatur hissələrinin birbaşa təminatı. Yalnız sertifikatlı və orijinal komponentlərlə avadanlıqlarınızın ilkin keyfiyyətini bərpa edirik",
    img: img13,
  },
  {
    id: 14,
    title: "Strateji Texniki Konsultasiya",
    desc: "Layihə seçimi, texniki spesifikasiyaların hazırlanması, tender dəstəyi və sahə mühəndisliyi xidmətləri. Pulsuz ilkin qiymətləndirmə ilə düzgün investisiya qərarları verməyinizə kömək edirik.",
    img: img14,
  },
];
const Services = () => {
  return (
    <div className="bg-slate-50 py-16 md:py-24 px-6 md:px-20" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1938] text-center mb-12 md:mb-20">
          Xidmətlərimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full min-h-105 md:min-h-112.5"
            >
              <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#1e3a8a] text-white w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-bold shadow-lg z-10 text-sm md:text-base">
                  {String(service.id).padStart(1, "0")}
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 md:p-8 flex flex-col grow bg-white group-hover:bg-[#0B1938] transition-colors duration-500">
                <h3 className="text-lg md:text-xl font-extrabold text-[#0B1938] mb-3 md:mb-4 group-hover:text-white transition-colors duration-500 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-[#E04B26] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
