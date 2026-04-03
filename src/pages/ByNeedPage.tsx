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

import brushResults from "@/assets/brush-results.png";
import brushInsights from "@/assets/brush-insights.png";
import brushBrand from "@/assets/brush-brand.png";
import brushExecute from "@/assets/brush-execute.png";
import brushStrategy from "@/assets/brush-strategy.png";
import brushVisibility from "@/assets/brush-visibility.png";
import brushStrong from "@/assets/brush-strong.png";

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
  description: string;
  illustration: string;
  features: string[];
  bottomNote?: string;
}
  illustration: string;
  features: string[];
  bottomNote?: string;
}

const byNeedData: Record<string, ByNeedData> = {
  "drive-growth": {
    title: ["Accelerate ", "results", " through data-driven ", "digital ", "strategies"],
    brushWords: ["results"],
    ovalWords: ["strategies"],
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
    title: ["Create a ", "brand", " that is clear, consistent, and ", "memorable"],
    brushWords: ["brand"],
    ovalWords: ["memorable"],
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
    title: ["Plan, ", "execute,", " and optimize campaigns that deliver ", "impact"],
    brushWords: ["execute,"],
    ovalWords: ["impact"],
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
    title: ["Establish a ", "strong", " and effective online ", "foundation"],
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
      const trimmed = part.trim();
      if (data.brushWords.includes(trimmed)) {
        const brushImg = brushImages[trimmed];
        if (brushImg) {
          return (
            <img
              key={i}
              src={brushImg}
              alt={trimmed}
              className="inline-block h-[1.1em] align-baseline relative -top-[0.05em]"
            />
          );
        }
        return (
          <span key={i} className="highlight-brush font-handwritten text-lime">
            {part}
          </span>
        );
      }
      if (data.ovalWords.includes(trimmed)) {
        return (
          <span key={i} className="highlight-oval font-handwritten text-lime">
            {part}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-primary leading-tight">
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
            <div className="w-12 h-0.5 bg-primary mt-6" />
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={data.illustration} alt="" className="w-full max-w-sm object-contain" />
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-6xl mx-auto px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10">
            {data.features.map((f, i) => (
              <div key={i} className="border-t border-border pt-4">
                <p className="text-sm text-foreground">
                  <strong>{f.title}</strong> {f.description}
                </p>
              </div>
            ))}
          </div>
          {data.bottomNote && (
            <p className="mt-12 text-center text-sm text-foreground max-w-2xl mx-auto">
              {data.bottomNote}
            </p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ByNeedPage;
