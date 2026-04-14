import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroTitle from "@/assets/data-platforms/Screenshot 2026-04-14 135836.png";
import heroIllust from "@/assets/data-platforms/Screenshot 2026-04-14 135854.png";
import pulsOnHeading from "@/assets/data-platforms/Screenshot 2026-04-14 135804.png";
import pollOnHeading from "@/assets/data-platforms/Screenshot 2026-04-14 135757.png";
import belowText from "@/assets/marketing-research/below-text.png";

const DataPlatformsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero — left block (title+description) and right block (ghost+illustration) sit at opposite ends */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-8 md:pt-10 pb-6 md:pb-8">
          {/* Ghost text — top right, own row (single line) */}
          <div className="flex justify-end">
            <span
              aria-hidden="true"
              className="pointer-events-none font-black leading-[1] text-right tracking-[0.02em] text-[24px] md:text-[34px] lg:text-[44px]"
              style={{
                WebkitTextStroke: "1.2px hsl(var(--primary) / 0.3)",
                color: "transparent",
              }}
            >
              SOFTWARE &amp; DATA PLATFORMS
            </span>
          </div>

          {/* Hero row — title (left) + chart (right) parallel & side by side */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-8 mt-6 md:mt-8">
            <div className="flex-1 min-w-0">
              <img
                src={heroTitle}
                alt="Intelligence that Powers Better Decisions"
                className="w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] object-contain"
              />
              <p className="mt-4 text-primary text-[15px] leading-[1.45] max-w-[640px]">
                We provide comprehensive research services designed to give you a clear,<br />
                actionable understanding of your market, your audience, and your performance.<br />
                From large-scale surveys to in-depth qualitative insights, our approach combines<br />
                methodology, technology, and strategic analysis to support smarter decisions.
              </p>
              <img src={belowText} alt="" className="mt-2 h-auto w-[100px] object-contain" />
            </div>

            <div className="flex flex-col items-end flex-shrink-0">
              <img
                src={heroIllust}
                alt=""
                className="max-w-[320px] md:max-w-[380px] lg:max-w-[440px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Feature Block 1 — PulsON (full-width row) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-8 md:pt-12 pb-4 md:pb-8">
          <div className="flex items-center justify-between gap-6 mb-4">
            <img src={pulsOnHeading} alt="PulsOn" className="h-auto max-w-[220px] object-contain" />
            <h4 className="text-[20px] md:text-[22px] font-medium text-primary leading-[1.1] text-right">
              Advanced Social Listening &amp; <span className="lime-underline">Sentiment Intelligence</span>
            </h4>
          </div>
          <div className="features-divider-h w-full mb-6" />
          <div className="text-[15px] text-foreground leading-[1.25]">
            <p className="mb-5">
              PulsON is our social listening platform designed to analyze large-scale digital conversations across social media and online channels.<br />
              PulsON goes further by enabling deeper data extraction, broader coverage, and more flexible analysis tailored to specific markets and use cases.<br />
              With PulsON, you can:
            </p>
            <ul className="leading-[1.25] list-none">
              <li>Monitor real-time sentiment around brands, individuals, or topics</li>
              <li>Track narratives, trends, and emerging conversations</li>
              <li>Analyze audience behavior and perception at scale</li>
              <li>Identify risks, opportunities, and shifts in public opinion</li>
            </ul>
            <p>
              PulsON delivers high-volume, actionable insights that support communication, marketing, and strategic decision-making.
            </p>
          </div>
        </section>

        {/* Feature Block 2 — PollON (full-width row) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-4 md:pt-8 pb-8 md:pb-16">
          <div className="flex items-center justify-between gap-6 mb-4">
            <img src={pollOnHeading} alt="PollON" className="h-auto max-w-[220px] object-contain" />
            <h4 className="text-[20px] md:text-[22px] font-medium text-primary leading-[1.1] text-right">
              Smart Survey &amp; <span className="lime-underline">Opinion Research Platform</span>
            </h4>
          </div>
          <div className="features-divider-h w-full mb-6" />
          <div className="text-[15px] text-foreground leading-[1.25]">
            <p className="mb-5">
              PollON is our online survey and polling platform, designed for fast and scalable CAWI research.<br />
              PollON is specifically built for the Albanian-speaking market, combining technology with access to a structured and segmented user database.<br />
              With PollON, you can:
            </p>
            <ul className="leading-[1.25] list-none">
              <li>Reach targeted audiences across predefined clusters</li>
              <li>Conduct surveys, polls, and opinion tracking efficiently</li>
              <li>Access real-time data and analytics</li>
              <li>Support research projects, campaigns, and decision-making processes</li>
            </ul>
            <p>
              PollON enables precise, localized insights, making it a powerful tool for both market research and public opinion analysis.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pb-16 md:pb-24">
          <h2
            className="font-black leading-[1.05] text-[36px] md:text-[56px] lg:text-[76px] text-left whitespace-nowrap"
            style={{
              WebkitTextStroke: "2px hsl(var(--primary) / 0.5)",
              color: "transparent",
              letterSpacing: "0.01em",
            }}
          >
            Data-Driven by Design
          </h2>
          <p className="mt-6 text-[16px] text-primary leading-[1.5] text-left">
            Our platforms are fully integrated into our services, creating a unified ecosystem<br />
            where research, analytics, and strategy work together seamlessly.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataPlatformsPage;
