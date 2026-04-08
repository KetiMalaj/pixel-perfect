import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import growthIllust from "@/assets/byneed-growth-illust.png";
import audienceIllust from "@/assets/byneed-audience-illust.png";
import brandIllust from "@/assets/byneed-brand-illust.png";
import campaignsIllust from "@/assets/byneed-campaigns-illust.png";
import politicalIllust from "@/assets/byneed-political-illust.png";
import personalIllust from "@/assets/byneed-personal-illust.png";
import digitalIllust from "@/assets/byneed-digital-illust.png";
import linePng from "@/assets/line.png";

import brushResults from "@/assets/brush-results.png";
import brushInsights from "@/assets/brush-insights.png";
import brushBrand from "@/assets/brush-brand.png";
import brushExecute from "@/assets/brush-execute.png";
import brushStrategy from "@/assets/brush-strategy.png";
import brushVisibility from "@/assets/brush-visibility.png";
import brushStrong from "@/assets/brush-strong.png";
import ovalStrategies from "@/assets/page 1.png";
import ovalStrategy from "@/assets/page 2.png";
import ovalMemorable from "@/assets/page 3.png";
import ovalImpact from "@/assets/page 4.png";
import ovalEngagement from "@/assets/page 5.png";
import ovalInfluence from "@/assets/page 6.png";
import ovalFoundation from "@/assets/page 7.png";

const ovalImages: Record<string, string> = {
  "strategies": ovalStrategies,
  "strategy": ovalStrategy,
  "memorable": ovalMemorable,
  "impact": ovalImpact,
  "engagement": ovalEngagement,
  "influence": ovalInfluence,
  "foundation": ovalFoundation,
};

const brushImages: Record<string, string> = {
  "results": brushResults,
  "Insights": brushInsights,
  "brand": brushBrand,
  "execute,": brushExecute,
  "strategy": brushStrategy,
  "Visibility,": brushVisibility,
  "strong": brushStrong,
};

interface ByNeedData {
  title: string[];
  brushWords: string[];
  ovalWords: string[];
  lightWords?: string[];
  description: string;
  illustration: string;
  features: string[];
  bottomNote?: string;
}



const byNeedData: Record<string, ByNeedData> = {
  "drive-growth": {
    title: ["Accelerate ", "results", " through data-driven ", "\ndigital ", "strategies"],
    brushWords: ["results"],
    ovalWords: ["strategies"],
    lightWords: ["through data-driven"],
    description: "We help businesses grow by combining performance marketing, technology, and continuous optimization.",
    illustration: growthIllust,
    features: [
      "<strong>Increase visibility</strong> and attract qualified traffic",
      "<strong>Generate leads</strong> and improve conversion rates",
      "<strong>Optimize</strong> digital campaigns across channels",
      "<strong>Build high-performing</strong> websites and landing pages",
      "Use <strong>data and analytics</strong> to continuously improve performance",
      "We <strong>focus on measurable outcomes</strong> — ensuring your digital investment translates into real <strong>business growth.</strong>",
    ],
  },
  "understand-audience": {
    title: ["Turn data into ", "Insights", " and insight into ", "strategy"],
    brushWords: ["Insights"],
    ovalWords: ["strategy"],
    description: "We provide a deep understanding of your market, customers, and audience behavior through advanced research and data platforms.",
    illustration: audienceIllust,
    features: [
      "Conduct <strong>quantitative</strong> and <strong>qualitative</strong> research",
      "<strong>Access</strong> targeted surveys through <strong>PollON</strong>",
      "<strong>Monitor</strong> real-time sentiment and conversations with <strong>PulsON</strong>",
      "<strong>Identify</strong> trends, needs, and behavioral patterns",
      "Make informed strategic and <strong>communication decisions</strong>",
      "<strong>We help you</strong> move from assumptions to evidence — <strong>building strategies</strong> grounded in real insight.",
    ],
  },
  "build-brand": {
    title: ["Create a ", "brand", "\nthat is ", "clear,", "\nconsistent,", "\nand ", "memorable"],
    brushWords: ["brand"],
    ovalWords: ["memorable"],
    lightWords: ["that is", "consistent,", "and"],
    description: "We develop strong brand identities and positioning strategies that differentiate you in the market and connect with the right audience.",
    illustration: brandIllust,
    features: [
      "Define your <strong>brand strategy</strong> and positioning",
      "Develop <strong>visual identity</strong> and design systems",
      "<strong>Craft messaging</strong> and tone of voice",
      "Produce <strong>creative assets</strong> across platforms",
      "Ensure consistency across <strong>all communication</strong> channels",
      "<strong>We build brands</strong> that don't just look good — they <strong>communicate clearly</strong> and stand out.",
    ],
  },
  campaigns: {
    title: ["Plan, ", "execute,", "\nand optimize campaigns that deliver ", "impact"],
    brushWords: ["execute,"],
    ovalWords: ["impact"],
    lightWords: ["and optimize campaigns that deliver"],
    description: "We design and manage integrated campaigns that combine strategy, creativity, and data to reach and influence your audience effectively.",
    illustration: campaignsIllust,
    features: [
      "Develop <strong>campaign strategy</strong> and messaging",
      "Execute <strong>multi-channel campaigns</strong> (digital, social, media)",
      "Create compelling <strong>content and visuals</strong>",
      "<strong>Monitor performance</strong> and optimize in real time",
      "Align <strong>communication</strong> with business or <strong>institutional goals</strong>",
      "We ensure every campaign is <strong>structured, targeted,</strong> and <strong>results-driven.</strong>",
    ],
  },
  political: {
    title: ["Data-driven ", "strategy", " for campaigns, institutions, and public ", "engagement"],
    brushWords: ["strategy"],
    ovalWords: ["engagement"],
    description: "We support political actors, institutions, and organizations with strategic communication grounded in real-time data and public opinion insights.",
    illustration: politicalIllust,
    features: [
      "<strong>Develop</strong> campaign strategy and <strong>positioning</strong>",
      "<strong>Track voter</strong> sentiment and public opinion <strong>using PulsON</strong>",
      "<strong>Conduct targeted</strong> surveys and opinion research <strong>through PollON</strong>",
      "Test messages, narratives, and <strong>campaign concepts</strong> before deployment",
      "Monitor public discourse and <strong>emerging issues</strong> in real time",
      "Build <strong>communication strategies</strong> aligned with audience behavior and expectations",
    ],
    bottomNote: "We turn data into <strong>actionable insights</strong> — helping you communicate with clarity, precision, and impact.",
  },
  "personal-branding": {
    title: ["Build ", "Visibility,", " credibility, and ", "influence"],
    brushWords: ["Visibility,"],
    ovalWords: ["influence"],
    description: "We help individuals, professionals, and public figures develop a strong personal brand and manage their public presence.",
    illustration: personalIllust,
    features: [
      "<strong>Define your</strong> personal brand <strong>strategy</strong>",
      "Build a consistent and authentic <strong>online presence</strong>",
      "<strong>Create content</strong> aligned with your voice and goals",
      "Manage reputation and <strong>public perception</strong>",
      "<strong>Increase visibility</strong> across digital platforms",
      "<strong>We position you with clarity</strong> and consistency — helping you stand out and be trusted.",
    ],
  },
  "digital-presence": {
    title: ["Establish a ", "strong", "\nand effective ", "\nonline ", "foundation"],
    brushWords: ["strong"],
    ovalWords: ["foundation"],
    description: "We help you create or upgrade your digital presence to ensure your brand is visible, functional, and ready to perform.",
    illustration: digitalIllust,
    features: [
      "<strong>Design and develop</strong> modern, responsive websites",
      "<strong>Optimize</strong> your platform for SEO and discoverability",
      "Improve <strong>user experience</strong> and navigation",
      "<strong>Set up analytics</strong> and performance tracking",
      "Build a <strong>digital ecosystem</strong> aligned with your goals",
      "<strong>We create digital foundations</strong> that support growth, engagement, and long-term success.",
    ],
  },
};

const ByNeedPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = byNeedData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Page not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  const renderTitle = () => {
    return data.title.map((part, i) => {
      const hasBreak = part.startsWith("\n");
      const display = hasBreak ? part.slice(1) : part;
      const trimmed = display.trim();
      const br = hasBreak ? <br key={`br-${i}`} /> : null;

      if (data.brushWords.includes(trimmed)) {
        const brushImg = brushImages[trimmed];
        if (brushImg) {
          return (
            <span key={i}>{br}<img
              src={brushImg}
              alt={trimmed}
              className="inline-block h-[1.1em] align-baseline relative -top-[0.05em]"
            /></span>
          );
        }
        return (
          <span key={i}>{br}<span className="highlight-brush font-handwritten text-lime">
            {display}
          </span></span>
        );
      }
      if (data.ovalWords.includes(trimmed)) {
        const ovalImg = ovalImages[trimmed];
        if (ovalImg) {
          return (
            <span key={i}>{br}<img
              src={ovalImg}
              alt={trimmed}
              className="inline h-[1.4em] align-baseline relative -top-[0.05em]"
              style={{ display: 'inline', verticalAlign: 'baseline' }}
            /></span>
          );
        }
        return (
          <span key={i}>{br}<span className="highlight-oval">
            {display}
          </span></span>
        );
      }
      if (data.lightWords?.includes(trimmed)) {
        return <span key={i}>{br}<span className="font-normal">{display}</span></span>;
      }
      return <span key={i}>{br}{display}</span>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-primary leading-[1.1]">
              {renderTitle()}
            </h1>
            <p className="mt-6 text-muted-foreground text-sm max-w-md leading-relaxed">
              {data.description}
            </p>
            {slug === "political" && (
              <p className="mt-3 text-muted-foreground text-sm max-w-md leading-relaxed">
                Our approach combines research, technology, and messaging to design and execute effective political and public affairs strategies.
              </p>
            )}
            <img src={linePng} alt="" className="mt-6 h-[3px] w-12 object-cover" />
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={data.illustration} alt="" className="w-full max-w-sm object-contain" />
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5px_1fr_1.5px_1fr] py-10 overflow-visible relative">
            {/* Column 1 */}
            <div className="flex flex-col pr-10">
              {data.features.filter((_, i) => i % 3 === 0).map((f, i, arr) => (
                <div key={i}>
                  <p className="text-sm text-foreground py-8" dangerouslySetInnerHTML={{ __html: f }} />
                  {i < arr.length - 1 && <hr className="features-hr" />}
                </div>
              ))}
            </div>
            {/* Divider */}
            <div className="hidden md:block features-divider self-center" style={{ height: '150%' }} />
            {/* Column 2 */}
            <div className="flex flex-col px-10">
              {data.features.filter((_, i) => i % 3 === 1).map((f, i, arr) => (
                <div key={i}>
                  <p className="text-sm text-foreground py-8" dangerouslySetInnerHTML={{ __html: f }} />
                  {i < arr.length - 1 && <hr className="features-hr" />}
                </div>
              ))}
            </div>
            {/* Divider */}
            <div className="hidden md:block features-divider self-center" style={{ height: '150%' }} />
            {/* Column 3 */}
            <div className="flex flex-col pl-10">
              {data.features.filter((_, i) => i % 3 === 2).map((f, i, arr) => (
                <div key={i}>
                  <p className="text-sm text-foreground py-8" dangerouslySetInnerHTML={{ __html: f }} />
                  {i < arr.length - 1 && <hr className="features-hr" />}
                </div>
              ))}
            </div>
          </div>
          {data.bottomNote && (
            <p className="mt-12 text-center text-sm text-foreground max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: data.bottomNote }} />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ByNeedPage;
