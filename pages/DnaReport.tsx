import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Layout } from '../components/Layout';
import { Button, Section, Heading, FadeIn, Card } from '../components/ui/UI';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Dna,
  BarChart3,
  Target,
  Rocket,
  ShieldCheck,
  Search,
  Star,
  Globe,
  MapPin,
  Cpu,
  Sparkles,
  TrendingUp,
  Users,
  AlertTriangle,
  FileText,
  Lock,
  Zap,
  PhoneOff,
  EyeOff,
} from 'lucide-react';

/**
 * Get Your Business DNA Report
 * ---------------------------------------------------------------------------
 * Dedicated landing page for the Business DNA Report lead magnet.
 * The form is the GoHighLevel prospecting widget embed.
 *
 * The hero photo is served as WebP with a responsive srcset (640w / 1100w),
 * falls back to the original PNG for older browsers, and falls back again to
 * the brand gradient if the asset is missing, so the page never looks broken.
 */

const HERO_IMAGE = "/images/pulse-partners-dna-hero.webp";
const HERO_IMAGE_SM = "/images/pulse-partners-dna-hero-640.webp";
const HERO_IMAGE_FALLBACK = "/images/pulse-partners-dna-hero.png";

const GHL_WIDGET_SRC =
  'https://services.leadconnectorhq.com/prospecting/client/widget-embed.js';
const GHL_WIDGET_ID = '6a6cfb743f989d8102cff7f2';

const TONE = {
  good: '#22c55e',
  warn: '#f0b429',
  bad: '#ef4444',
  muted: '#9ca3af',
};

const trustBullets = [
  { icon: <Clock size={16} />, label: 'Takes less than 60 seconds' },
  { icon: <FileText size={16} />, label: 'Personalized Report' },
  { icon: <ShieldCheck size={16} />, label: 'No Obligation' },
  { icon: <MapPin size={16} />, label: 'Built for Local Businesses' },
];

const heroPillars = [
  { icon: <Dna size={26} />, label: 'Custom Marketing Audit' },
  { icon: <TrendingUp size={26} />, label: 'AI-Powered Insights' },
  { icon: <Target size={26} />, label: 'Competitor Analysis' },
  { icon: <Rocket size={26} />, label: 'Growth Roadmap' },
];

const included = [
  {
    icon: <BarChart3 size={22} />,
    title: 'Overall Marketing Health Score',
    body: 'One clear number that shows how your entire digital presence is performing right now.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Website Performance',
    body: 'Page speed, Core Web Vitals and mobile experience, plus the friction costing you conversions.',
  },
  {
    icon: <MapPin size={22} />,
    title: 'Google Business Profile',
    body: 'A full audit of the profile most local customers see before they ever reach your website.',
  },
  {
    icon: <FileText size={22} />,
    title: 'Listings',
    body: 'We check your name, address and phone number across dozens of directories and flag every mismatch.',
  },
  {
    icon: <Star size={22} />,
    title: 'Reputation',
    body: 'Review volume, star ratings, reply rate and average response time across Google and Facebook.',
  },
  {
    icon: <Search size={22} />,
    title: 'SEO Analysis',
    body: 'Local ranking heatmaps and a competitor snapshot for the keywords that actually matter.',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Marketing Technology Stack',
    body: 'Which tracking pixels, analytics and automation tools are missing from your setup.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'AI Readiness',
    body: 'How prepared your business is to use AI for content, follow-up and customer service.',
  },
  {
    icon: <Rocket size={22} />,
    title: 'Growth Roadmap',
    body: 'A prioritised action plan built for your business: what to fix first, second and third.',
  },
];

const reportBreakdown = [
  { label: 'Website Performance', value: 96, color: TONE.good },
  { label: 'Google Business Profile', value: 100, color: TONE.good },
  { label: 'Reputation', value: 82, color: TONE.good },
  { label: 'Listings', value: 32, color: TONE.bad },
  { label: 'Marketing Technology Stack', value: 0, color: TONE.muted },
  { label: 'SEO Analysis', value: 0, color: TONE.muted },
];

const dashboardTabs = [
  {
    key: 'Overall Score',
    value: 51,
    color: TONE.warn,
    body: 'A single marketing health score, weighted across every category we analyse.',
  },
  {
    key: 'Website Performance',
    value: 96,
    color: TONE.good,
    body: 'Page speed, Core Web Vitals and mobile experience scored against real benchmarks.',
  },
  {
    key: 'Google Business Profile',
    value: 100,
    color: TONE.good,
    body: 'Verification, hours, photos and website links on the listing local buyers see first.',
  },
  {
    key: 'Listings',
    value: 32,
    color: TONE.bad,
    body: 'Name, address and phone consistency across directories and data aggregators.',
  },
  {
    key: 'Reputation',
    value: 82,
    color: TONE.good,
    body: 'Review volume, star ratings, reply rate and average response time.',
  },
  {
    key: 'Marketing Technology Stack',
    value: 0,
    color: TONE.bad,
    body: 'Tracking, pixels and automation detected on your site. Gaps here create blind spots.',
  },
  {
    key: 'SEO Analysis',
    value: 0,
    color: TONE.bad,
    body: 'Local ranking heatmap and competitor positions for your priority keywords.',
  },
  {
    key: 'AI Readiness',
    value: 45,
    color: TONE.warn,
    body: 'How ready your systems are to put AI to work on follow-up, content and service.',
  },
];

const lossReasons = [
  {
    icon: <EyeOff size={22} />,
    stat: 'Inconsistent',
    title: 'Your details do not match',
    body: 'When your name, address or phone number differs across directories, customers stop trusting you and search engines stop showing you.',
  },
  {
    icon: <PhoneOff size={22} />,
    stat: 'Too slow',
    title: 'Nobody replies fast enough',
    body: 'Most local buyers hire whoever responds first. Every day of delay quietly hands revenue to a competitor down the road.',
  },
  {
    icon: <Search size={22} />,
    stat: 'Invisible',
    title: 'You are not in the local pack',
    body: 'Ranking outside the top three on Google Maps means most nearby customers never even see that your business exists.',
  },
  {
    icon: <AlertTriangle size={22} />,
    stat: 'Untracked',
    title: 'You cannot tell what is working',
    body: 'Without pixels and analytics in place there is no way to know which marketing earns its keep, so budget leaks away unnoticed.',
  },
];

const whyUs = [
  {
    icon: <Users size={22} />,
    title: 'A three-person team inside your business',
    body: 'Strategy, content and execution every single week, not a contractor who disappears once the invoice clears.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Enterprise technology at small business scale',
    body: 'One platform replaces fourteen separate subscriptions, from CRM and funnels to reviews, SMS and automation.',
  },
  {
    icon: <Dna size={22} />,
    title: 'Diagnosis before prescription',
    body: 'The DNA Report shows exactly where the gaps are before anyone suggests spending a single dollar on marketing.',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'AI-powered growth with a human heartbeat',
    body: 'Automation handles the repetitive work so our team can focus on your community and your customers.',
  },
];

const faqs = [
  {
    q: 'What exactly is the Business DNA Report?',
    a: 'It is a personalised marketing audit of your business. We analyse more than 50 digital performance indicators across your website, Google Business Profile, listings, reviews, SEO and marketing technology, then turn the findings into a single health score and a prioritised growth roadmap.',
  },
  {
    q: 'How long does the form take?',
    a: 'Less than sixty seconds. We only need your name, your business, a phone number and an email address so we can send the finished report to you.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. There is no cost and no obligation. You are welcome to read the report, act on it yourself, and never speak to us again if that is what you prefer.',
  },
  {
    q: 'How soon will I get my report?',
    a: 'Most reports are generated shortly after you submit the form. If anything needs a manual check we will let you know by email.',
  },
  {
    q: 'What happens to my information?',
    a: 'We use it to generate and deliver your report and to follow up if you ask us to. We respect your privacy and your information is never sold.',
  },
  {
    q: 'Do I have to become a client?',
    a: 'Not at all. The report is designed to be genuinely useful on its own. If you would like help implementing the roadmap, Pulse Partners is there, but that is entirely your call.',
  },
];

/* --- Animated count-up ------------------------------------------------- */
const useCountUp = (target: number, active: boolean, duration = 1400) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
};

/* --- Heartbeat divider (echoes the Pulse Partners mark) ----------------- */
const Heartbeat: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 240 24" className={'h-5 w-40 ' + className} fill="none" aria-hidden="true">
    <polyline
      points="0,12 60,12 70,4 80,20 90,12 150,12 160,6 170,18 180,12 240,12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* --- Animated score ring ----------------------------------------------- */
interface ScoreRingProps {
  value: number;
  caption?: string;
  color: string;
  size?: number;
}

const ScoreRing: React.FC<ScoreRingProps> = ({ value, caption, color, size = 168 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const display = useCountUp(value, inView);
  const stroke = 13;
  const radius = (size - stroke * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (display / 100) * circumference;

  return (
    <div ref={ref} className="flex shrink-0 flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e8ebef" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {caption && <span className="text-xs font-medium text-neutral-500">{caption}</span>}
          <span className="text-3xl font-bold text-neutral-900">{display}%</span>
        </div>
      </div>
    </div>
  );
};

/* --- Animated progress bar (mirrors the report cards) ------------------- */
const ScoreBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const display = useCountUp(value, inView);

  return (
    <div ref={ref} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="mb-3 h-5 w-full overflow-hidden rounded-full bg-neutral-100">
        <div
          className="flex h-full items-center justify-end rounded-full pr-2 text-[11px] font-bold text-white"
          style={{ width: Math.max(display, 14) + '%', backgroundColor: display === 0 ? TONE.muted : color }}
        >
          {display}%
        </div>
      </div>
      <p className="text-sm font-semibold text-neutral-700">{label}</p>
    </div>
  );
};

/* --- GoHighLevel prospecting widget ------------------------------------ */
const DnaFormWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector('script[data-widget-id]')) return;

    const script = document.createElement('script');
    script.src = GHL_WIDGET_SRC;
    script.async = true;
    script.setAttribute('data-widget-id', GHL_WIDGET_ID);
    container.appendChild(script);
  }, []);

  return <div ref={containerRef} className="min-h-[560px] w-full" />;
};

/* --- FAQ accordion item ------------------------------------------------- */
const FaqItem: React.FC<{ q: string; a: string; isOpen: boolean; onToggle: () => void }> = ({
  q,
  a,
  isOpen,
  onToggle,
}) => (
  <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-neutral-50"
    >
      <span className="font-semibold text-neutral-900">{q}</span>
      <ChevronDown
        size={20}
        className={'shrink-0 text-primary-700 transition-transform duration-300 ' + (isOpen ? 'rotate-180' : '')}
      />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <p className="px-5 pb-5 leading-relaxed text-neutral-600">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const DnaReport: React.FC = () => {
  const [heroImageOk, setHeroImageOk] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    document.title = 'Get Your Business DNA Report | Clarity Media';
  }, []);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 720);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('dna-form');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const active = dashboardTabs[activeTab];

  return (
    <Layout>
      {/* ================= HERO + FORM ================= */}
      <section className="relative overflow-hidden bg-primary-950">
        {/* Ambient brand background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950" />
          <div className="absolute -top-40 -right-24 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-primary-700/25 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          {/* ---- Headline ---- */}
          <div className="mb-10 max-w-4xl md:mb-12">
            <FadeIn delay={0.05}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-900/50 px-4 py-2 text-sm font-bold text-primary-200 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary-300" />
                Free Business DNA Report
              </div>

              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Discover What&apos;s Really <br className="hidden sm:block" />
                <span className="text-primary-300">Holding Your Business Back</span>
              </h1>

              <Heartbeat className="mb-6 text-primary-400/70" />
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mb-3 text-xl font-semibold text-white md:text-2xl">
                Get Your Free Business DNA Report
              </p>
              <p className="text-lg leading-relaxed font-light text-neutral-300">
                Our AI-powered platform analyzes 50+ digital performance indicators to reveal
                hidden growth opportunities and create a personalized roadmap.
              </p>
            </FadeIn>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* ---- Left: the Pulse Partners team ---- */}
            <FadeIn delay={0.3} direction="left">
              <div>
                {heroImageOk ? (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={HERO_IMAGE_SM + " 640w, " + HERO_IMAGE + " 1100w"}
                      sizes="(min-width: 1024px) 560px, 100vw"
                    />
                    <img
                      src={HERO_IMAGE_FALLBACK}
                      alt="The Pulse Partners team"
                      width={1254}
                      height={1254}
                      decoding="async"
                      onError={() => setHeroImageOk(false)}
                      className="w-full rounded-3xl border border-white/15 shadow-2xl"
                    />
                  </picture>
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-primary-800 to-primary-950 shadow-2xl">
                    <Dna size={72} className="text-primary-400/60" />
                  </div>
                )}

                <div className="mt-8">
                  <Button variant="accent" size="lg" icon={<ArrowRight size={20} />} fullWidth onClick={scrollToForm}>
                    Get My Free DNA Report
                  </Button>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {trustBullets.map((item) => (
                    <li key={item.label} className="flex items-center gap-2 text-sm text-neutral-200">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/20 text-primary-300">
                        {item.icon}
                      </span>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="none">
              <div
                id="dna-form"
                className="scroll-mt-28 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:p-7"
              >
                <div className="mb-5 text-center">
                  <h2 className="text-2xl font-bold text-white">Generate Your Free Business DNA Report</h2>
                  <Heartbeat className="mx-auto mt-3 text-primary-400/70" />
                </div>

                <div className="overflow-hidden rounded-2xl bg-white/95 p-2 shadow-inner">
                  <DnaFormWidget />
                </div>

                <p className="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-relaxed text-neutral-300">
                  <Lock size={14} className="mt-0.5 shrink-0 text-primary-300" />
                  We respect your privacy. Your information is used only to prepare and send your
                  report, and it is never sold or shared.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ---- Hero pillars ---- */}
          <FadeIn delay={0.5}>
            <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
              {heroPillars.map((pillar) => (
                <div key={pillar.label} className="flex flex-col items-center text-center">
                  <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-primary-400/50 text-primary-300">
                    {pillar.icon}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-neutral-200 sm:text-sm">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= YOUR BUSINESS HAS DNA ================= */}
      <Section background="light">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-900">
              <Dna size={14} /> The Diagnosis
            </span>
            <Heading level={2} align="center" className="mb-5 text-neutral-900">
              Your Business Has DNA
            </Heading>
            <p className="text-lg leading-relaxed text-neutral-600">
              Every business carries a unique signature made up of how people find you, what they
              see when they do, and how quickly you respond. Most owners never get to look at it.
              The Business DNA Report reads that signature across more than fifty indicators and
              shows you, in plain language, which strands are strong and which ones are quietly
              costing you customers.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: <Search size={24} />, step: '01', title: 'We analyse', body: 'Website, listings, reviews, search visibility and your marketing technology.' },
            { icon: <BarChart3 size={24} />, step: '02', title: 'We score', body: 'Every category is scored so you can see strengths and weak points at a glance.' },
            { icon: <Rocket size={24} />, step: '03', title: 'We map the next move', body: 'You get a prioritised roadmap built around your business, not a generic checklist.' },
          ].map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.12}>
              <Card className="h-full rounded-2xl border border-neutral-200 bg-white p-7">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-white">
                    {item.icon}
                  </span>
                  <span className="text-3xl font-bold text-neutral-200">{item.step}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">{item.title}</h3>
                <p className="leading-relaxed text-neutral-600">{item.body}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= WHAT IS INCLUDED ================= */}
      <Section background="white">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <FadeIn>
            <Heading level={2} align="center" className="mb-4 text-neutral-900">
              What&apos;s Included in Your Report
            </Heading>
            <p className="text-lg text-neutral-600">
              Nine sections, one score, and a clear roadmap. Here is exactly what lands in your inbox.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {included.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 3) * 0.1}>
              <Card className="group h-full rounded-2xl border border-neutral-200 bg-white p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-800 transition-colors duration-300 group-hover:bg-primary-900 group-hover:text-white">
                  {item.icon}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{item.body}</p>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" icon={<ArrowRight size={20} />} onClick={scrollToForm}>
              Get My Free DNA Report
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* ================= SAMPLE REPORT PREVIEW ================= */}
      <Section background="light">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <FadeIn>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-900">
              <FileText size={14} /> Sample Report
            </span>
            <Heading level={2} align="center" className="mb-4 text-neutral-900">
              A Look Inside a Real Report
            </Heading>
            <p className="text-lg text-neutral-600">
              This is the marketing health snapshot every business owner receives. Scores below are
              from a sample audit.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">
            {/* Mock report chrome */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 bg-neutral-50 px-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-neutral-900">Business DNA Report</h3>
                <p className="text-sm text-neutral-500">Overall Marketing Health Score</p>
              </div>
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-900">
                Sample
              </span>
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-[auto_1fr] md:p-8">
              <ScoreRing value={51} caption="Overall score" color={TONE.warn} />

              <div className="grid gap-4 sm:grid-cols-2">
                {reportBreakdown.map((row) => (
                  <ScoreBar key={row.label} label={row.label} value={row.value} color={row.color} />
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-100 bg-neutral-50 px-6 py-5 md:px-8">
              <p className="flex items-start gap-2 text-sm leading-relaxed text-neutral-600">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-primary-700" />
                Each section expands into detailed findings, plus a Growth Roadmap that tells you
                what to fix first.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ================= INTERACTIVE DASHBOARD PREVIEW ================= */}
      <Section background="dark">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <FadeIn>
            <Heading level={2} align="center" className="mb-4 text-white">
              Explore the Dashboard
            </Heading>
            <p className="text-lg text-neutral-400">
              Click any category to see what we measure and what a score actually means.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:grid-cols-[280px_1fr] md:p-7">
            {/* Category list */}
            <div className="flex flex-col gap-2">
              {dashboardTabs.map((tab, i) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={
                    'flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 ' +
                    (i === activeTab
                      ? 'bg-white text-neutral-900 shadow-lg'
                      : 'text-neutral-300 hover:bg-white/10')
                  }
                >
                  <span className="font-semibold">{tab.key}</span>
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-bold"
                    style={{ backgroundColor: tab.color + '22', color: tab.color }}
                  >
                    {tab.value}%
                  </span>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="rounded-2xl bg-white p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center gap-6 sm:flex-row sm:items-center"
                >
                  <ScoreRing key={active.key} value={active.value} color={active.color} size={150} />
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-neutral-900">{active.key}</h3>
                    <p className="leading-relaxed text-neutral-600">{active.body}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ================= WHY BUSINESSES LOSE CUSTOMERS ================= */}
      <Section background="white">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <FadeIn>
            <Heading level={2} align="center" className="mb-4 text-neutral-900">
              Why Businesses Lose Customers
            </Heading>
            <p className="text-lg text-neutral-600">
              It is rarely the product. Usually it is one of these four gaps, and all four show up in
              your report.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {lossReasons.map((item, i) => (
            <FadeIn key={item.title} delay={(i % 2) * 0.1}>
              <Card className="h-full rounded-2xl border border-neutral-200 bg-white p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ef4444]/10 text-[#ef4444]">
                    {item.icon}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-600">
                    {item.stat}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="leading-relaxed text-neutral-600">{item.body}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ================= WHY PULSE PARTNERS ================= */}
      <Section background="primary">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-950/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-200">
              Why Pulse Partners
            </span>
            <Heading level={2} className="mb-5 text-white">
              The Report Is Free. The Partnership Is Optional.
            </Heading>
            <Heartbeat className="mb-6 text-primary-400/70" />
            <p className="mb-8 text-lg leading-relaxed font-light text-primary-50">
              We built the Business DNA Report because too many owners are sold marketing before
              anyone has looked at the data. Read your report, keep it, act on it yourself. And if
              you would rather have a team handle it, that is what Pulse Partners is for.
            </p>
            <Link to="/pulse-partners">
              <Button variant="secondary" size="lg" icon={<ArrowRight size={20} />}>
                Explore Pulse Partners
              </Button>
            </Link>
          </FadeIn>

          <div className="grid gap-5">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-400/20 text-primary-200">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-primary-100/80">{item.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= FAQ ================= */}
      <Section background="light">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <FadeIn>
              <Heading level={2} align="center" className="mb-4 text-neutral-900">
                Frequently Asked Questions
              </Heading>
              <p className="text-lg text-neutral-600">
                Everything owners usually ask before requesting a report.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.06}>
                <FaqItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-primary-950 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900/60 to-primary-950" />
        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center md:px-6">
          <FadeIn>
            <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-400/20 text-primary-300">
              <Dna size={30} />
            </span>
            <Heading level={2} align="center" className="mb-5 text-white">
              Find Out What Your Business DNA Says
            </Heading>
            <Heartbeat className="mx-auto mb-6 text-primary-400/70" />
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-neutral-300">
              It takes less than sixty seconds, it costs nothing, and there is no obligation. You
              will know exactly where you stand and what to do next.
            </p>
            <Button variant="accent" size="lg" icon={<ArrowRight size={20} />} onClick={scrollToForm}>
              Get My Free DNA Report
            </Button>

            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustBullets.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm text-neutral-300">
                  <Check size={15} className="text-primary-400" />
                  {item.label}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ================= STICKY CTA ================= */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-primary-950/95 px-4 py-3 backdrop-blur-md"
          >
            <div className="container mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="hidden h-10 w-10 items-center justify-center rounded-xl bg-primary-400/20 text-primary-300 sm:flex">
                  <Dna size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Free Business DNA Report</p>
                  <p className="hidden text-xs text-neutral-400 sm:block">
                    Takes less than 60 seconds. No obligation.
                  </p>
                </div>
              </div>
              <Button variant="accent" size="md" icon={<ArrowRight size={18} />} onClick={scrollToForm}>
                Get My Report
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default DnaReport;
