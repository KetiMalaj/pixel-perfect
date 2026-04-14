import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroTitle from "@/assets/marketing-research/hero-illustration.png";
import heroChart from "@/assets/marketing-research/hero-chart.png";
import iconQuantitative from "@/assets/marketing-research/icon-quantitative.png";
import iconQualitative from "@/assets/marketing-research/icon-qualitative.png";
import iconObservational from "@/assets/marketing-research/icon-observational.png";
import headingQuantitative from "@/assets/marketing-research/Quantative-research.png";
import headingQualitative from "@/assets/marketing-research/Qualitative-research.png";
import headingObservational from "@/assets/marketing-research/Observational-research.png";
import belowText from "@/assets/marketing-research/below-text.png";

const MarketingResearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero — left block (title+description) and right block (ghost+chart) sit at opposite ends */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-8 md:pt-10 pb-6 md:pb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-4">
            {/* Left block: Title + description — matches PDF: title 625px, description 644px wraps to 4 lines */}
            <div className="flex-shrink-0 md:max-w-[644px] w-full">
              <img
                src={heroTitle}
                alt="Turn Data into Decisions"
                className="w-full max-w-[625px] object-contain"
              />
              <p className="mt-4 text-primary text-[15px] leading-[1.45]">
                We provide comprehensive research services designed to give you a clear,<br />
                actionable understanding of your market, your audience, and your performance.<br />
                From large-scale surveys to in-depth qualitative insights, our approach combines<br />
                methodology, technology, and strategic analysis to support smarter decisions.
              </p>
              <img src={belowText} alt="" className="mt-2 h-auto w-[100px] object-contain" />
            </div>
            {/* Right block: Ghost text + chart pushed to far right */}
            <div className="flex flex-col items-end flex-1 ml-auto">
              <span
                aria-hidden="true"
                className="pointer-events-none font-black leading-[0.95] text-right tracking-tight text-[36px] md:text-[44px] lg:text-[56px]"
                style={{
                  WebkitTextStroke: "1px hsl(var(--primary) / 0.18)",
                  color: "transparent",
                }}
              >
                RESEARCH
                <br />
                COMPONENTS
              </span>
              <img
                src={heroChart}
                alt=""
                className="mt-2 max-w-[340px] md:max-w-[400px] lg:max-w-[440px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Features Grid — 3 equal columns at PDF x=227, 770, 1313 */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-8 md:pt-12 pb-8 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr_2px_1fr] py-4 overflow-visible relative gap-y-10 md:gap-y-0">
            {/* Column 1 */}
            <div className="flex flex-col pr-0 md:pr-10">
              <div className="flex items-start gap-3 mb-5">
                <img src={iconQuantitative} alt="" className="h-[52px] w-[52px] object-contain shrink-0 mt-1" />
                <img src={headingQuantitative} alt="Quantitative Research" className="h-auto max-w-[220px] object-contain" />
              </div>
              <p className="text-[15px] text-foreground leading-[1.25] mb-5">
                We design and execute national, re-<br />
                gional, and local surveys using CAPI,<br />
                CATI, and CAWI methodologies to<br />
                deliver reliable, high-quality data.
              </p>
              <p className="text-[15px] text-foreground leading-[1.25] mb-5">
                Through our proprietary platform<br />
                PollON, we enhance digital data<br />
                collection with real-time analytics,<br />
                enabling you to measure:
              </p>
              <ul className="text-[15px] text-foreground leading-[1.25] space-y-1">
                <li>Market performance</li>
                <li>Brand awareness and KPIs</li>
                <li>Customer attitudes and behaviors</li>
                <li>Competitive positioning</li>
              </ul>
            </div>

            <div className="hidden md:block features-divider self-center" style={{ height: "75%" }} />

            {/* Column 2 */}
            <div className="flex flex-col px-0 md:px-10">
              <div className="flex items-start gap-3 mb-5">
                <img src={iconQualitative} alt="" className="h-[52px] w-[52px] object-contain shrink-0 mt-1" />
                <img src={headingQualitative} alt="Qualitative Research" className="h-auto max-w-[220px] object-contain" />
              </div>
              <p className="text-[15px] text-foreground leading-[1.25] mb-5">
                We go beyond numbers to understand<br />
                the "why" behind your audience.
              </p>
              <p className="text-[15px] text-foreground leading-[1.25] mb-5">
                Our focus groups and qualitative<br />
                studies provide deep insights that<br />
                inform strategy, messaging,<br />
                and campaign development.
              </p>
              <p className="text-[15px] text-foreground leading-[1.25] mb-2">We help you:</p>
              <ul className="text-[15px] text-foreground leading-[1.25] space-y-1">
                <li>Explore customer perceptions<br />and motivations</li>
                <li>Evaluate past and current<br />marketing efforts</li>
                <li>Test concepts, products,<br />and communication before launch</li>
              </ul>
            </div>

            <div className="hidden md:block features-divider self-center" style={{ height: "75%" }} />

            {/* Column 3 */}
            <div className="flex flex-col pl-0 md:pl-10">
              <div className="flex items-start gap-3 mb-5">
                <img src={iconObservational} alt="" className="h-[52px] w-[52px] object-contain shrink-0 mt-1" />
                <img src={headingObservational} alt="Observational Research" className="h-auto max-w-[220px] object-contain" />
              </div>
              <p className="text-[15px] text-foreground leading-[1.25] mb-5">
                We analyze real-world customer<br />
                experiences through mystery<br />
                shopping and field observation.
              </p>
              <p className="text-[15px] text-foreground leading-[1.25] mb-2">This allows us to assess:</p>
              <ul className="text-[15px] text-foreground leading-[1.25] space-y-1">
                <li>Customer service quality</li>
                <li>Point-of-sale (POS) experiences</li>
                <li>Operational standards<br />and consistency</li>
                <li>Competitor performance<br />and market dynamics</li>
              </ul>
            </div>
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
            Insight that Drives Action
          </h2>
          <p className="mt-6 text-[16px] text-primary leading-[1.5] text-left">
            Our research doesn't stop at data collection — we translate insights into clear,<br />
            strategic recommendations that help you act with confidence.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MarketingResearchPage;
