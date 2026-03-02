import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, Heading, Button, Card, FadeIn } from '../components/ui/UI';
// Added ArrowRight to the imports from lucide-react
import { Check, X as XIcon, Users, Monitor, Calendar, TrendingUp, Brain, Rocket, Mic, Camera, ShieldAlert, Zap, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';

export const PulsePartners: React.FC = () => {
  const teamPhoto = "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/6988a6c00a7fd109982b6ae3.png";
  const communityPhoto = "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/6995eabdfa6b7b75143157bc.png";

  const packages = [
    {
      title: "DIGITAL UNITY",
      price: "$499",
      tagline: "Connect everything. Miss nothing.",
      desc: "Best for: Businesses who don't know what they're missing online",
      features: [
        "DNA Report + AI Strategy Session",
        "All digital platforms connected (Google, social, directories)",
        "Reputation management (Review monitoring & response)",
        "Automated referral system",
        "Active CRM setup and management",
        "GHL platform access",
        "Website audit + rebuild consultation",
        "1 covert audit/month (Digital Director)"
      ],
      variant: "outline" as const
    },
    {
      title: "THE FOUNDATION",
      price: "$997",
      tagline: "Build something that lasts.",
      desc: "Best for: Businesses ready to build a real digital presence",
      features: [
        "Everything in Digital Unity",
        "GHL AI agents and automation build-out",
        "Remote website refresh or rebuild",
        "Social calendar management",
        "Monthly remote strategy check-in",
        "2 covert audits/month (Digital + Engagement)"
      ],
      variant: "outline" as const
    },
    {
      title: "THE PULSE",
      price: "$3,495",
      tagline: "Show up. Stand out. Every month.",
      desc: "Best for: Businesses ready to show up consistently",
      popular: true,
      features: [
        "Everything in The Foundation",
        "Bi-monthly on-site visits (2x per month)",
        "Fresh on-site photography & short-form video",
        "Full social media management (captions, posting)",
        "Remote content production between visits",
        "Ongoing website optimization",
        "Monthly performance report",
        "3 covert audits/month (Full Team)"
      ],
      variant: "primary" as const
    },
    {
      title: "SAASIAL MEDIA FULL SUITE",
      price: "$9,995",
      tagline: "Your community. Dominated.",
      desc: "Best for: Businesses ready to fully dominate",
      features: [
        "Everything in The Pulse",
        "Full team of 3 directors on-site weekly",
        "Done-for-you podcast (setup, record, edit)",
        "50+ fresh photos per week",
        "10+ community interviews per week",
        "Strategic event planning & execution",
        "Full AI agent & website management",
        "4 covert audits/month + Health Report™"
      ],
      variant: "accent" as const
    }
  ];

  const pillars = [
    {
      title: "Digital Unity",
      icon: <Brain size={24} className="text-[#10b981]" />,
      iconBg: "bg-[#ecfdf5]",
      desc: "Consolidating your business into a single source of truth. Predictive analytics and unified communications to ensure no lead is ever left behind."
    },
    {
      title: "AI Implementation",
      icon: <Rocket size={24} className="text-[#3b82f6]" />,
      iconBg: "bg-[#eff6ff]",
      desc: "24/7 engagement agents that qualify leads and book appointments while you sleep. Full GHL automation tailored specifically to your business operations."
    },
    {
      title: "Organic Media",
      icon: <Mic size={24} className="text-[#8b5cf6]" />,
      iconBg: "bg-[#f5f3ff]",
      desc: "From Concept to Consumer. High-end mobile and studio production solutions that help you find your unique angle and establish a dominant brand identity."
    },
    {
      title: "Community Growth",
      icon: <Camera size={24} className="text-[#f97316]" />,
      iconBg: "bg-[#fff7ed]",
      desc: "Strategic reputation management and professional visual storytelling. We turn digital attention into real-world trust and a thriving local community."
    }
  ];

  return (
    <Layout>
        {/* Hero Header */}
        <div className="relative min-h-[60vh] flex items-center bg-neutral-900 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src={teamPhoto} 
                    alt="Pulse Partners Team" 
                    className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-neutral-900/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <FadeIn delay={0.1}>
                    <span className="text-primary-300 font-bold tracking-wider text-sm uppercase mb-4 block">The Flagship Program</span>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">Pulse Partners</h1>
                    <p className="text-xl md:text-2xl text-primary-50 max-w-3xl mx-auto mb-10 drop-shadow-md font-light">
                        A complete digital ecosystem installed in your business, driven by human expertise.
                    </p>
                    <Link to="/booking">
                        <Button variant="accent" size="lg">Apply for Partnership</Button>
                    </Link>
                </FadeIn>
            </div>
        </div>

        {/* The Team / Your New Department */}
        <Section background="light">
            <div className="text-center mb-16">
                <Heading level={2} align="center">Your New Department</Heading>
                <p className="text-neutral-600 max-w-2xl mx-auto">Pulse Partners are the dedicated team members who power every Clarity Media package. Each partner owns their lane—ensuring no overlap and no dropped balls.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Community Digital Director", icon: <Monitor />, desc: "Responsible for GHL platform, CRM, AI agents, automation build-outs, and all digital covert audits." },
                    { title: "Community Engagement Manager", icon: <Users />, desc: "Responsible for social media, community relationships, event strategy, and engagement audits." },
                    { title: "Community Media Manager", icon: <Camera />, desc: "Responsible for photography, videography, podcast production, and on-site content capture." }
                ].map((role, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <Card className="h-full p-8 text-center group hover:bg-primary-900 transition-all duration-300">
                            <div className="w-16 h-16 bg-primary-900 text-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-primary-900 transition-colors">
                                {React.cloneElement(role.icon as React.ReactElement<any>, { size: 32 })}
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{role.title}</h3>
                            <p className="text-neutral-600 group-hover:text-primary-100 transition-colors leading-relaxed">{role.desc}</p>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </Section>

        {/* Package Tiers Section */}
        <Section id="pricing">
            <div className="text-center mb-16">
                <Heading level={2} align="center">Choose Your Level of Dominance</Heading>
                <p className="text-lg text-neutral-600 max-w-2xl mx-auto">Every package begins with a DNA Report and custom AI Strategy Session ($1,500+ value) included at no charge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {packages.map((pkg, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1} className="flex h-full">
                        <Card className={`p-6 flex flex-col h-full relative ${pkg.popular ? 'border-2 border-primary-500 shadow-2xl scale-105 z-10' : ''}`}>
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-b-lg text-xs font-bold whitespace-nowrap">
                                    MOST POPULAR
                                </div>
                            )}
                            
                            <div className="mb-6 pt-4">
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight mb-1">{pkg.title}</h3>
                                <p className="text-primary-600 text-xs font-bold uppercase tracking-wider mb-4">{pkg.tagline}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-neutral-900">{pkg.price}</span>
                                    <span className="text-neutral-500">/mo</span>
                                </div>
                            </div>

                            <p className="text-xs text-neutral-500 font-medium mb-6 min-h-[32px]">{pkg.desc}</p>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {pkg.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                        <Check size={16} className="text-primary-500 shrink-0 mt-0.5" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/booking" className="mt-auto">
                                <Button variant={pkg.variant} fullWidth size="md">
                                    {pkg.title.includes('SUITE') ? 'Apply for Elite' : 'Get Started'}
                                </Button>
                            </Link>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </Section>

        {/* Audit Philosophy */}
        <Section background="dark" className="relative overflow-hidden">
            <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
                <ShieldAlert size={400} />
            </div>
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                    <Zap size={14} /> Unbiased Intelligence
                </div>
                <Heading level={2} className="text-white mb-6">The Audit Philosophy</Heading>
                <p className="text-xl text-neutral-400 mb-10 leading-relaxed italic">
                    "All audits are conducted without the client's knowledge to ensure authentic, unbiased data. You are paying to be held to a standard you cannot prepare for—which is what makes the insights genuinely valuable."
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
                        <h4 className="font-bold text-white mb-2">Independent Ownership</h4>
                        <p className="text-sm text-neutral-400">Each director is solely responsible for auditing their own department's metrics, ensuring accountability at every level.</p>
                    </div>
                    <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
                        <h4 className="font-bold text-white mb-2">The DNA Report</h4>
                        <p className="text-sm text-neutral-400">A full diagnostic of your digital presence conducted before work begins. We identify every gap before we prescribe any solution.</p>
                    </div>
                    <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
                        <h4 className="font-bold text-white mb-2">Clarity Health Report™</h4>
                        <p className="text-sm text-neutral-400">Exclusive to the Full Suite. A compiled intelligence document built from all three directors' independent findings.</p>
                    </div>
                </div>
            </div>
        </Section>

        {/* Pulse Partners Network Info */}
        <Section background="light">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <FadeIn direction="right">
                    <div className="inline-flex items-center gap-2 text-primary-600 font-bold mb-4">
                        <HeartPulse size={20} />
                        PULSE PARTNERS NETWORK
                    </div>
                    <Heading level={2}>More Than Just a Service—A Shared Ecosystem</Heading>
                    <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                        Every client who joins any Clarity Media package automatically becomes a Pulse Partner. It is the connective layer that runs beneath all four tiers.
                    </p>
                    <div className="space-y-6 mb-8">
                        {[
                            { title: "Community Connections", desc: "Actively connect to other local Clarity Media clients, creating a living network of relationships." },
                            { title: "Local Referral Network", desc: "Relationship-driven referrals flow between Partner businesses automatically." },
                            { title: "Shared Resources", desc: "Access to collective insights, community events, and collaborative opportunities organized by Clarity." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1">
                                    <Sparkles size={20} className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-neutral-900">{item.title}</h4>
                                    <p className="text-sm text-neutral-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
                <FadeIn direction="left">
                    <div className="bg-white p-1 rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden">
                        <img 
                            src={communityPhoto} 
                            alt="Community Networking" 
                            className="rounded-[22px] w-full object-cover aspect-video"
                        />
                        <div className="p-8">
                             <p className="text-neutral-800 font-serif italic text-xl mb-4">"Most agencies work in isolation. Pulse Partners means your investment buys you into a community supporting each other."</p>
                             <p className="font-bold text-primary-900">— Lee, Founder</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>

        {/* Availability CTA */}
        <Section background="primary" className="text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
                <Heading level={2} className="text-white mb-4">Limited Availability</Heading>
                <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">We restrict Pulse Partners to only 10 per city to ensure absolute quality and market focus.</p>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-1">Dallas</div>
                        <div className="text-xs uppercase tracking-widest text-primary-200 font-bold mb-4">Main Hub</div>
                        <div className="flex items-center justify-center gap-2 text-accent font-bold">
                            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                            2 Spots Remaining
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-1">Frisco</div>
                        <div className="text-xs uppercase tracking-widest text-primary-200 font-bold mb-4">Expansion Hub</div>
                        <div className="flex items-center justify-center gap-2 text-accent font-bold">
                            <span className="w-3 h-3 bg-accent rounded-full animate-pulse"></span>
                            1 Spot Remaining
                        </div>
                    </div>
                </div>

                <Link to="/booking">
                     <Button variant="accent" size="lg" icon={<ArrowRight size={20} />}>Secure Your Market Position</Button>
                </Link>
            </div>
        </Section>
    </Layout>
  );
};