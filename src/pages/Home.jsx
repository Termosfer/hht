import Chunk from "../components/Chunk";
import Clients from "./Clients";
import ProcessStep from "../components/ProcessStep";
import WhyBrands from "../components/WhyBrands";
import About from "./About";
import Brands from "./Brands";
import Services from "./Services";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section
        
        className="relative w-full h-screen bg-[url('/main_44ec5a70b2.jpg')]  bg-cover bg-center text-white overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6 md:px-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter flex flex-wrap justify-center gap-2 md:gap-4 drop-shadow-2xl">
            <span className="text-[#00AEEF]">HYDRO</span>
            <span className="text-[#E04B26]">HEAT</span>
            <span className="text-white">TECH</span>
          </h1>

          <div className="h-0.5 md:h-1 w-2/3 md:w-1/4 bg-linear-to-r from-[#00AEEF] via-white to-[#E04B26] my-6 md:my-8 rounded-full"></div>

          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-8 max-w-xs sm:max-w-xl md:max-w-4xl leading-tight drop-shadow-lg">
            Nasos, İstilik və Su sistemləri üzrə{" "}
            <br className="hidden sm:block" />
            <span className="text-[#00AEEF]">mühəndislik</span> həlləri
          </p>

          <button
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 md:px-10 md:py-4 bg-[#c23a1a] hover:bg-[#c0391b] active:scale-95 transition-all rounded-full font-bold text-base md:text-lg shadow-xl uppercase tracking-wider cursor-pointer"
          >
            Xidmətlərimiz
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-1 h-12 bg-linear-to-b from-white/50 to-transparent rounded-full"></div>
        </div>
      </section>
      <About />
      <Services />
      <Brands />
      <WhyBrands />
      <Chunk />
      <ProcessStep />
      <Clients />
    </div>
  );
};

export default Home;
