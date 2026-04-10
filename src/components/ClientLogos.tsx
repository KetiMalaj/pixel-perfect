import logo01 from "@/assets/clients/01_balfin.png";
import logo02 from "@/assets/clients/02_tirana_bank.png";
import logo03 from "@/assets/clients/03_one.png";
import logo04 from "@/assets/clients/04_heineken.png";
import logo05 from "@/assets/clients/05_abi.png";
import logo06 from "@/assets/clients/06_digicom.png";
import logo07 from "@/assets/clients/07_giz.png";
import logo08 from "@/assets/clients/08_big_market.png";
import logo09 from "@/assets/clients/09_kantar.png";
import logo10 from "@/assets/clients/10_w.png";
import logo11 from "@/assets/clients/11_kondiment.png";
import logo12 from "@/assets/clients/12_logo.png";
import logo13 from "@/assets/clients/13_mccann.png";
import logo14 from "@/assets/clients/14_geco.png";
import logo15 from "@/assets/clients/15_undp.png";
import logo16 from "@/assets/clients/16_sonora.png";

const logos = [
  logo01, logo02, logo03, logo04, logo05, logo06, logo07, logo08,
  logo09, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
];

const ClientLogos = () => {
  return (
    <section className="py-10 overflow-hidden">
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-scroll-logos">
          {/* Duplicate logos 3x for seamless loop */}
          {[...logos, ...logos, ...logos].map((src, i) => (
            <div key={i} className="flex-shrink-0 px-10 flex items-center justify-center w-[180px] md:w-[260px] h-[80px] md:h-[110px]">
              <img
                src={src}
                alt=""
                className="h-[32px] md:h-[45px] w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
