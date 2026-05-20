import { Link } from "react-router-dom";
import { Home, ArrowLeft, Settings2 } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#0B1938] flex items-center justify-center px-6 py-24 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 select-none pointer-events-none">
        <h1 className="text-[20rem] font-black text-white">404</h1>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Settings2 size={80} className="text-[#E04B26] animate-spin-slow" />
            <div className="absolute -bottom-2 -right-2 bg-[#00AEEF] p-2 rounded-lg shadow-lg">
              <span className="text-white font-bold text-xs">HHT</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
          Səhifə <span className="text-[#00AEEF]">Tapılmadı</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
          Axtardığınız səhifə silinib, adı dəyişdirilib və ya müvəqqəti olaraq
          əlçatmazdır. Narahat olmayın, mühəndislik həllərimiz hələ də
          qüvvədədir!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-[#E04B26] hover:bg-[#c23a1a] text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto justify-center cursor-pointer"
          >
            <Home size={20} />
            Ana Səhifəyə Qayıt
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all w-full sm:w-auto justify-center cursor-pointer"
          >
            <ArrowLeft size={20} />
            Geri Dön
          </button>
        </div>

        <div className="mt-16 w-24 h-1 bg-linear-to-r from-[#00AEEF] to-[#E04B26] mx-auto rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default NotFound;
