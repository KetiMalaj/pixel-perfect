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

interface ByNeedData {
  title: string[];
  highlightWords: string[];
  description: string;
  illustration: string;
  features: { title: string; description: string }[];
  bottomNote?: string;
}

const byNeedData: Record<string, ByNeedData> = {
  "drive-growth": {
    title: ["Accelerate ", "results", " through data-driven ", "digital ", "strategies"],
    highlightWords: ["results", "strategies"],
    description: "We help businesses grow by combining performance marketing, technology, and continuous optimization.",
    illustration: growthIllust,
    features: [
      { title: "Increase visibility", description: "and attract qualified traffic" },
      { title: "Generate leads", description: "and improve conversion rates" },
      { title: "Optimize", description: "digital campaigns across channels" },
      { title: "Build high-performing", description: "websites and landing pages" },
      { title: "Use data and analytics", description: "to continuously improve performance" },
      { title: "We focus on measurable outcomes", description: "— ensuring your digital investment translates into real business growth." },
    ],
  },
  "understand-audience": {
    title: ["Turn data into ", "Insights", " and insight into ", "strategy"],
    highlightWords: ["Insights", "strategy"],
    description: "We provide a deep understanding of your market, customers, and audience behavior through advanced research and data platforms.",
    illustration: audienceIllust,
    features: [
      { title: "Conduct quantitative", description: "and qualitative research" },
      { title: "Access", description: "targeted surveys through PollON" },
      { title: "Monitor", description: "real-time sentiment and conversations with PulsON" },
      { title: "Identify", description: "trends, needs, and behavioral patterns" },
      { title: "Make informed strategic and", description: "communication decisions" },
      { title: "We help you", description: "move from assumptions to evidence — building strategies grounded in real insight." },
    ],
  },
  "build-brand": {
    title: ["Create a ", "brand", " that is clear, consistent, and ", "memorable"],
    highlightWords: ["brand", "memorable"],
    description: "We develop strong brand identities and positioning strategies that differentiate you in the market and connect with the right audience.",
    illustration: brandIllust,
    features: [
      { title: "Define your brand strategy", description: "and positioning" },
      { title: "Develop visual identity", description: "and design systems" },
      { title: "Craft messaging", description: "and tone of voice" },
      { title: "Produce creative assets", description: "across platforms" },
      { title: "Ensure consistency across", description: "all communication channels" },
      { title: "We build brands", description: "that don't just look good — they communicate clearly and stand out." },
    ],
  },
  campaigns: {
    title: ["Plan, ", "execute,", " and optimize campaigns that deliver ", "impact"],
    highlightWords: ["execute,", "impact"],
    description: "We design and manage integrated campaigns that combine strategy, creativity, and data to reach and influence your audience effectively.",
    illustration: campaignsIllust,
    features: [
      { title: "Develop campaign strategy", description: "and messaging" },
      { title: "Execute multi-channel campaigns", description: "(digital, social, media)" },
      { title: "Create compelling", description: "content and visuals" },
      { title: "Monitor performance", description: "and optimize in real time" },
      { title: "Align communication", description: "with business or institutional goals" },
      { title: "We ensure every campaign is", description: "structured, targeted, and results-driven." },
    ],
  },
  political: {
    title: ["Data-driven ", "strategy", " for campaigns, institutions, and public ", "engagement"],
    highlightWords: ["strategy", "engagement"],
    description: "We support political actors, institutions, and organizations with strategic communication grounded in real-time data and public opinion insights.",
    illustration: politicalIllust,
    features: [
      { title: "Develop", description: "campaign strategy and positioning" },
      { title: "Track", description: "voter sentiment and public opinion using PulsON" },
      { title: "Conduct targeted", description: "surveys and opinion research through PollON" },
      { title: "Test messages, narratives, and", description: "campaign concepts before deployment" },
      { title: "Monitor public discourse and", description: "emerging issues in real time" },
      { title: "Build communication strategies", description: "aligned with audience behavior and expectations" },
    ],
    bottomNote: "We turn data into actionable insights — helping you communicate with clarity, precision, and impact.",
  },
  "personal-branding": {
    title: ["Build ", "Visibility,", " credibility, and ", "influence"],
    highlightWords: ["Visibility,", "influence"],
    description: "We help individuals, professionals, and public figures develop a strong personal brand and manage their public presence.",
    illustration: personalIllust,
    features: [
      { title: "Define your", description: "personal brand strategy" },
      { title: "Build a consistent and", description: "authentic online presence" },
      { title: "Create content", description: "aligned with your voice and goals" },
      { title: "Manage reputation and", description: "public perception" },
      { title: "Increase visibility", description: "across digital platforms" },
      { title: "We position you with clarity", description: "and consistency — helping you stand out and be trusted." },
    ],
  },
  "digital-presence": {
    title: ["Establish a ", "strong", " and effective online ", "foundation"],
    highlightWords: ["strong", "foundation"],
    description: "We help you create or upgrade your digital presence to ensure your brand is visible, functional, and ready to perform.",
    illustration: digitalIllust,
    features: [
      { title: "Design and develop", description: "modern, responsive websites" },
      { title: "Optimize", description: "your platform for SEO and discoverability" },
      { title: "Improve user experience", description: "and navigation" },
      { title: "Set up analytics", description: "and performance tracking" },
      { title: "Build a digital ecosystem", description: "aligned with your goals" },
      { title: "We create digital foundations", description: "that support growth, engagement, and long-term success." },
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
      const isHighlight = data.highlightWords.includes(part.trim());
      if (isHighlight) {
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
