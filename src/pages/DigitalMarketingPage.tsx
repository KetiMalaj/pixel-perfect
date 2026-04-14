import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroTitle from "@/assets/digital-marketing/Screenshot 2026-04-14 133657.png";
import heroIllust from "@/assets/digital-marketing/Screenshot 2026-04-14 133706.png";
import headingSocial from "@/assets/digital-marketing/Screenshot 2026-04-14 133719.png";
import headingGoogle from "@/assets/digital-marketing/Screenshot 2026-04-14 133727.png";
import headingSeo from "@/assets/digital-marketing/Screenshot 2026-04-14 133732.png";
import headingWeb from "@/assets/digital-marketing/Screenshot 2026-04-14 133738.png";
import belowText from "@/assets/marketing-research/below-text.png";

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero — left block (title+description) and right block (ghost+illustration) sit at opposite ends */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-8 md:pt-10 pb-6 md:pb-8 flex flex-col">
          {/* Ghost text — top-right on desktop, after hero row on mobile */}
          <div className="flex justify-center md:justify-end order-2 md:order-1 mt-4 md:mt-0">
            <span
              aria-hidden="true"
              className="pointer-events-none font-black leading-[1] text-center md:text-right tracking-[0.02em] text-[18px] sm:text-[24px] md:text-[44px] lg:text-[56px]"
              style={{
                WebkitTextStroke: "1.5px hsl(var(--primary) / 0.5)",
                color: "transparent",
              }}
            >
              DIGITAL MARKETING
              <br />
              &amp; DEVELOPMENT
            </span>
          </div>

          {/* Hero row — title (left) + chart (right) parallel & side by side */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-8 mt-0 md:mt-8 order-1 md:order-2">
            <div className="flex-1 min-w-0">
              <img
                src={heroTitle}
                alt="Performance-Driven Digital Growth"
                className="w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] object-contain"
              />
              <p className="desktop-breaks mt-4 text-primary text-[15px] leading-[1.45] max-w-[640px]">
                We deliver integrated digital solutions designed to increase visibility, attract the<br />
                right audience, and drive measurable results. Combining strategy, technology, and<br />
                data, we help your brand grow and perform in a competitive digital landscape.
              </p>
              <img src={belowText} alt="" className="mt-2 h-auto w-[100px] object-contain" />
            </div>

            <div className="flex flex-col items-center md:items-end w-full md:w-auto md:flex-shrink-0">
              <img
                src={heroIllust}
                alt=""
                className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[440px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Top row: 2 columns — Social Media Advertising, Google Ads (PPC) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-8 md:pt-12 pb-4 md:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] max-w-[820px] mx-auto py-4 overflow-visible relative gap-y-10 md:gap-y-0">
            {/* Column 1 — Social Media Advertising */}
            <div className="flex flex-col pr-0 md:pr-10">
              <img src={headingSocial} alt="Social Media Advertising" className="h-auto w-full max-w-[260px] object-contain mb-5" />
              <p className="desktop-breaks text-[15px] text-foreground leading-[1.25]">
                We create and manage targeted<br />
                social media campaigns that<br />
                engage users and grow your brand<br />
                presence.<br />
                Across platforms like Facebook, Ins-<br />
                tagram, and TikTok, we:<br />
                Develop tailored ad strategies<br />
                Optimize audience targeting<br />
                Continuously monitor and improve<br />
                performance<br />
                Maximize reach and return on in-<br />
                vestment (ROI)
              </p>
            </div>

            <div className="hidden md:block features-divider self-center" style={{ height: "85%" }} />

            {/* Column 2 — Google Ads (PPC) */}
            <div className="flex flex-col pl-0 md:pl-10">
              <img src={headingGoogle} alt="Google Ads (PPC)" className="h-auto w-full max-w-[220px] object-contain mb-5" />
              <p className="desktop-breaks text-[15px] text-foreground leading-[1.25]">
                We run data-driven pay-per-click<br />
                campaigns that generate immedi-<br />
                ate traffic and qualified leads.<br />
                Our Google Ads strategies ensure:<br />
                High visibility for relevant searches<br />
                Efficient budget allocation<br />
                Continuous optimization for perfor-<br />
                mance<br />
                Measurable results and conversions
              </p>
            </div>
          </div>
        </section>

        {/* Horizontal dotted divider between rows */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="features-divider-h" />
        </div>

        {/* Bottom row: 2 columns — SEO, Web Development */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-4 md:pt-8 pb-8 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] max-w-[820px] mx-auto py-4 overflow-visible relative gap-y-10 md:gap-y-0">
            {/* Column 1 — SEO */}
            <div className="flex flex-col pr-0 md:pr-10">
              <img src={headingSeo} alt="SEO (Search Engine Optimization)" className="h-auto w-full max-w-[300px] object-contain mb-5" />
              <p className="desktop-breaks text-[15px] text-foreground leading-[1.25]">
                We optimize your digital presence<br />
                to ensure your brand is visible<br />
                where it matters most — on search<br />
                engines.<br />
                Our approach combines on-page<br />
                and off-page strategies to:<br />
                Improve search rankings<br />
                Increase organic traffic<br />
                Target high-intent audiences<br />
                Strengthen long-term online visibility
              </p>
            </div>

            <div className="hidden md:block features-divider self-center" style={{ height: "85%" }} />

            {/* Column 2 — Web Development */}
            <div className="flex flex-col pl-0 md:pl-10">
              <img src={headingWeb} alt="Web Development" className="h-auto w-full max-w-[260px] object-contain mb-5" />
              <p className="desktop-breaks text-[15px] text-foreground leading-[1.25]">
                We design and build user-friendly,<br />
                responsive websites tailored to your<br />
                brand and business goals.<br />
                Our websites are built to:<br />
                Deliver a seamless user experience<br />
                Reflect your brand identity<br />
                Perform across all devices<br />
                Convert visitors into customers
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pb-16 md:pb-24">
          <h2
            className="font-black leading-[1.05] text-[22px] sm:text-[32px] md:text-[56px] lg:text-[76px] text-left"
            style={{
              WebkitTextStroke: "2px hsl(var(--primary) / 0.5)",
              color: "transparent",
              letterSpacing: "0.01em",
            }}
          >
            Digital that Delivers Results
          </h2>
          <p className="desktop-breaks mt-6 text-[16px] text-primary leading-[1.5] text-left max-w-full">
            We don't just run campaigns — we build digital systems that perform, helping you<br />
            reach the right people, at the right time, with the right message.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketingPage;
