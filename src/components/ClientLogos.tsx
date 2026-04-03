import clientLogos from "@/assets/client-logos.png";

const ClientLogos = () => {
  return (
    <section className="py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <img
          src={clientLogos}
          alt="Our clients: BALFIN, TIRANA BANK, One, Heineken, abi, DIGICOM, giz, BIG market, KANTAR, McCann, OECO, UNDP and more"
          className="w-full object-contain opacity-70"
        />
      </div>
    </section>
  );
};

export default ClientLogos;
