import logo01 from "@/assets/clients/01_balfin.png";
import logo02 from "@/assets/clients/02_tirana_bank.png";
import logo03 from "@/assets/clients/03_one.png";
import logo04 from "@/assets/clients/04_heineken.svg";
import logo05 from "@/assets/clients/05_abi.svg";
import logo06 from "@/assets/clients/06_digicom.svg";
import logo07 from "@/assets/clients/07_logo7.svg";
import logo08 from "@/assets/clients/08_logo8.svg";
import logo09 from "@/assets/clients/09_logo9.svg";
import logo10 from "@/assets/clients/10_logo10.svg";
import logo11 from "@/assets/clients/11_logo11.svg";
import logo12 from "@/assets/clients/12_logo12.svg";

const logos = [
  logo01, logo02, logo03, logo04, logo05, logo06,
  logo07, logo08, logo09, logo10, logo11, logo12,
];

const ClientLogos = () => {
  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 relative overflow-hidden">
        {/* Scrolling track — 3 visible on mobile, 6 on desktop */}
        <div className="flex animate-scroll-logos logo-track">
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-[80px] md:h-[100px] logo-item"
            >
              <img
                src={src}
                alt=""
                className="max-h-[58px] md:max-h-[70px] max-w-[115px] md:max-w-[140px] object-contain opacity-100 md:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
