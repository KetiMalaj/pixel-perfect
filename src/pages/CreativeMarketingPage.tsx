import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import heroTitle from "@/assets/creative-marketing/hero-illustration-creative2.png";
import heroIllust from "@/assets/creative-marketing/hero-chart-creative-2.png";
import headingPhotography from "@/assets/creative-marketing/Screenshot 2026-04-14 132946.png";
import headingGraphic from "@/assets/creative-marketing/Screenshot 2026-04-14 132956.png";
import headingBranding from "@/assets/creative-marketing/Screenshot 2026-04-14 133002.png";
import headingVideo from "@/assets/creative-marketing/Screenshot 2026-04-14 133010.png";
import headingContent from "@/assets/creative-marketing/Screenshot 2026-04-14 133016.png";
import belowText from "@/assets/marketing-research/below-text.png";

const CreativeMarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero — left block (title+description) and right block (ghost+illustration) sit at opposite ends */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-8 md:pt-10 pb-6 md:pb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-4">
            {/* Left block: Title + description */}
            <div className="flex-shrink-0 md:max-w-[760px] w-full mt-8 md:mt-16 lg:mt-20 pl-4 md:pl-6">
              <img
                src={heroTitle}
                alt="Ideas that Capture Attention. Creativity that Builds Brands"
                className="w-full max-w-[760px] object-contain"
              />
              <p className="mt-4 text-primary text-[15px] leading-[1.45]">
                We create compelling brand experiences that connect with audiences, commu-<br />
                nicate clearly, and leave a lasting impression. Our creative approach combines<br />
                strategy, design, and storytelling to elevate your brand across every touchpoint.
              </p>
              <img src={belowText} alt="" className="mt-2 h-auto w-[100px] object-contain" />
            </div>
            {/* Right block: ghost text + brain illustration */}
            <div className="flex flex-col items-end flex-shrink-0 ml-auto">
              <span
                aria-hidden="true"
                className="pointer-events-none font-black leading-[0.95] text-right tracking-tight text-[36px] md:text-[48px] lg:text-[60px]"
                style={{
                  WebkitTextStroke: "1px hsl(var(--primary) / 0.18)",
                  color: "transparent",
                  letterSpacing: "0.02em",
                }}
              >
                CREATIVE
                <br />
                MARKETING
              </span>
              <img
                src={heroIllust}
                alt=""
                className="mt-2 max-w-[300px] md:max-w-[340px] lg:max-w-[380px] object-contain"
              />
            </div>
          </div>
        </section>

        {/* Top row: 3 columns — Photography, Graphic Design, Branding */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-8 md:pt-12 pb-4 md:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr_2px_1fr] py-4 overflow-visible relative gap-y-10 md:gap-y-0">
            {/* Column 1 — Photography */}
            <div className="flex flex-col pr-0 md:pr-10">
              <img src={headingPhotography} alt="Photography" className="h-auto max-w-[240px] object-contain mb-5" />
              <p className="text-[15px] text-foreground leading-[1.25]">
                We create high-impact video con-<br />
                tent that tells your story and drives<br />
                engagement.<br />
                From concept and scripting to film-<br />
                ing and post-production, our videos<br />
                are crafted to:<br />
                Capture attention<br />
                Communicate your message clearly<br />
                Increase reach and engagement
              </p>
            </div>

            <div className="hidden md:block features-divider self-center" style={{ height: "85%" }} />

            {/* Column 2 — Graphic Design */}
            <div className="flex flex-col px-0 md:px-10">
              <img src={headingGraphic} alt="Graphic Design" className="h-auto max-w-[260px] object-contain mb-5" />
              <p className="text-[15px] text-foreground leading-[1.25]">
                We design visuals that are not only<br />
                eye-catching, but purposeful.<br />
                From logos to full marketing collat-<br />
                eral and digital assets, we ensure<br />
                your brand communicates consis-<br />
                tently and effectively across all<br />
                platforms.
              </p>
            </div>

            <div className="hidden md:block features-divider self-center" style={{ height: "85%" }} />

            {/* Column 3 — Branding */}
            <div className="flex flex-col pl-0 md:pl-10">
              <img src={headingBranding} alt="Branding" className="h-auto max-w-[220px] object-contain mb-5" />
              <p className="text-[15px] text-foreground leading-[1.25]">
                We build and refine brand identities<br />
                that are clear, distinctive, and<br />
                aligned with your vision.<br />
                Our branding process includes:<br />
                Brand strategy and positioning<br />
                Visual identity development<br />
                Messaging and tone of voice<br />
                The result is a brand that stands out<br />
                and resonates with the right audience.
              </p>
            </div>
          </div>
        </section>

        {/* Horizontal dotted divider between rows */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-[170px]">
          <div className="features-divider-h" />
        </div>

        {/* Bottom row: 2 columns — Video Production, Content Creation (centered) */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-[170px] pt-4 md:pt-8 pb-8 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] max-w-[820px] mx-auto py-4 overflow-visible relative gap-y-10 md:gap-y-0">
            {/* Column — Video Production */}
            <div className="flex flex-col px-0 md:px-10">
              <img src={headingVideo} alt="Video Production" className="h-auto max-w-[260px] object-contain mb-5" />
              <p className="text-[15px] text-foreground leading-[1.25] mb-5">
                We produce high-quality, professional<br />
                photography that captures the essence<br />
                of your brand — from products and<br />
                people to environments and experiences.<br />
                Our services also include event pho-<br />
                tography, covering conferences, cor-<br />
                porate events, gatherings, and live ac-<br />
                tivations with a team of experienced<br />
                professional photographers.
              </p>
              <p className="text-[15px] text-foreground leading-[1.25]">
                Our visuals are designed to:<br />
                Strengthen brand perception<br />
                Capture key moments and narratives<br />
                Create emotional connection<br />
                Enhance your presence across digital<br />
                and print
              </p>
            </div>

            <div className="hidden md:block features-divider self-center" style={{ height: "85%" }} />

            {/* Column — Content Creation */}
            <div className="flex flex-col pl-0 md:pl-10">
              <img src={headingContent} alt="Content Creation" className="h-auto max-w-[260px] object-contain mb-5" />
              <p className="text-[15px] text-foreground leading-[1.25] mb-5">
                We develop content that fuels your<br />
                marketing strategy and keeps your<br />
                audience engaged.
              </p>
              <p className="text-[15px] text-foreground leading-[1.25]">
                This includes:<br />
                Social media content<br />
                Blog and editorial content<br />
                Campaign assets and digital materials<br />
                All content is aligned with your<br />
                brand voice and designed to con-<br />
                nect with your audience in a mean-<br />
                ingful way.
              </p>
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
            Creativity with Purpose
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

export default CreativeMarketingPage;
