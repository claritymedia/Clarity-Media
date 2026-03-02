import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button, Section, Heading, FadeIn, Modal } from '../components/ui/UI';
import { ArrowRight, Check, Users, Mic, Camera, TrendingUp, BarChart3, Globe, Mail, Calendar, Workflow, GraduationCap, Phone, Star, Smartphone, MessageSquare, Award } from 'lucide-react';

const softwareReplaces = [
  { name: "CRM & Pipeline Management", icon: <Users size={18} /> },
  { name: "Unlimited Sales Funnels", icon: <TrendingUp size={18} /> },
  { name: "Website Builder", icon: <Globe size={18} /> },
  { name: "Surveys & Forms", icon: <MessageSquare size={18} /> },
  { name: "Email Marketing", icon: <Mail size={18} /> },
  { name: "2-way SMS Marketing", icon: <Smartphone size={18} /> },
  { name: "Booking & Appointments", icon: <Calendar size={18} /> },
  { name: "Workflow Automations", icon: <Workflow size={18} /> },
  { name: "Courses/Products", icon: <GraduationCap size={18} /> },
  { name: "Call Tracking", icon: <Phone size={18} /> },
  { name: "Reputation Management", icon: <Star size={18} /> },
  { name: "Tracking & Analytics", icon: <BarChart3 size={18} /> },
  { name: "Communities", icon: <Users size={18} /> },
  { name: "Mobile App", icon: <Smartphone size={18} /> },
];

const awards = [
  { img: "https://www.gocanvas.com/wp-content/uploads/2023/12/G2-Momentum-Leader-Spring-2024.png", label: "Momentum Leader" },
  { img: "https://www.gocanvas.com/wp-content/uploads/2023/12/Capterra-Shortlist-2024.png", label: "Capterra Shortlist" },
  { img: "https://www.gocanvas.com/wp-content/uploads/2023/12/GetApp-Category-Leaders-2024.png", label: "Category Leader" },
  { img: "https://www.gocanvas.com/wp-content/uploads/2023/12/Software-Advice-FrontRunners-2024.png", label: "Most Recommended" },
  { img: "https://www.gocanvas.com/wp-content/uploads/2023/12/G2-Regional-Leader-Spring-2024.png", label: "Regional Leader" },
  { img: "https://www.gocanvas.com/wp-content/uploads/2023/12/G2-Grid-Leader-Spring-2024.png", label: "Grid Leader" },
];

const heroImage = "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000";
const teamPhoto = "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/6988a6c00a7fd109982b6ae3.png";
const podcastPhoto = "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/699343a867cb8440809b24d0.png";

export const Home: React.FC = () => {
  const [isDNAModalOpen, setIsDNAModalOpen] = useState(false);

  useEffect(() => {
    if (isDNAModalOpen) {
      // Load GHL form embed script dynamically when modal opens
      const script = document.createElement('script');
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isDNAModalOpen]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          {/* Lowered gradient opacity by approximately 20% (95->75, 90->70) */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/75 via-neutral-900/70 to-neutral-900/75 z-10"></div>
          <img 
            src={heroImage} 
            alt="Clarity Media Community" 
            className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-500/30 px-4 py-2 rounded-full text-primary-200 text-sm font-bold mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              NEW: Pulse Partners Dallas Expansion
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              The Last Partnership <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-100 to-accent/80">Your Business Will Ever Need</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              AI-Powered Growth with a Human Heartbeat. A three-person team working inside your business weekly to drive community, content, and revenue.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg" 
                icon={<ArrowRight size={20} />}
                onClick={() => setIsDNAModalOpen(true)}
              >
                Get Your Free Small Business DNA Report
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DNA Report Modal */}
      <Modal 
        isOpen={isDNAModalOpen} 
        onClose={() => setIsDNAModalOpen(false)}
        title="Your Free Small Business DNA Report"
      >
        <div className="w-full flex items-center justify-center bg-neutral-50 overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/gyvtiLQK6aLOOnfU21xn"
            style={{ width: '100%', height: '837px', border: 'none', borderRadius: '3px' }}
            id="inline-gyvtiLQK6aLOOnfU21xn" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="DNA Report"
            data-height="837"
            data-layout-iframe-id="inline-gyvtiLQK6aLOOnfU21xn"
            data-form-id="gyvtiLQK6aLOOnfU21xn"
            title="DNA Report"
          ></iframe>
        </div>
      </Modal>

      {/* GHL Integration & Awards Divider */}
      <div className="bg-white border-y border-neutral-100 py-12 overflow-hidden">
        <div className="mb-10 text-center px-4">
          <span className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2 block">Powered by Enterprise Grade Technology</span>
          <h2 className="text-2xl font-bold text-neutral-900">One Partner. One Tech Stack. Unlimited Growth.</h2>
        </div>

        <div className="relative flex overflow-hidden py-4 select-none group">
          <div className="flex animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
            {[...softwareReplaces, ...softwareReplaces].map((item, i) => (
              <div 
                key={i} 
                className="mx-4 md:mx-8 flex items-center gap-3 px-4 md:px-6 py-3 bg-neutral-50 rounded-xl border border-neutral-100 shadow-sm transition-transform hover:scale-105"
              >
                <div className="text-primary-600 bg-primary-50 p-2 rounded-lg">
                  {item.icon}
                </div>
                <span className="font-bold text-sm md:text-base text-neutral-700">{item.name}</span>
                <span className="text-[10px] font-bold text-neutral-300 ml-2 italic">REPLACED</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center opacity-85 md:opacity-70 hover:opacity-100 transition-opacity duration-500">
            {awards.map((award, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 group w-full">
                <div className="h-16 w-full flex items-center justify-center">
                  <img 
                    src={award.img} 
                    alt={award.label} 
                    className="max-h-16 max-w-[120px] w-auto h-auto grayscale md:grayscale group-hover:grayscale-0 transition-all duration-300 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-icon')) {
                        const icon = document.createElement('div');
                        icon.className = 'fallback-icon text-primary-300 flex flex-col items-center';
                        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>`;
                        parent.appendChild(icon);
                      }
                    }}
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 group-hover:text-primary-600 transition-colors">{award.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Section background="light">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <Heading level={2}>Small Business Owners Are Expected to Do Too Much</Heading>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Reputation management, content creation, digital marketing, CRM optimization, social engagement... the list never ends. 
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                You built your business to serve your community, not to be a full-time media agency. The gap between what you need to do and what you have time for is where growth stalls.
            </p>
            <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-accent">
                <p className="font-semibold text-neutral-800 italic">"You don't have to figure it out alone."</p>
            </div>
          </FadeIn>
          <FadeIn direction="left">
             <div className="relative">
                <div className="absolute -inset-4 bg-primary-100 rounded-full blur-2xl opacity-50"></div>
                <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                    alt="Pulse Partners in Action" 
                    className="relative rounded-2xl shadow-xl z-10 w-full object-cover aspect-square"
                />
             </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
            <Heading level={2} align="center">Comprehensive Media Solutions</Heading>
            <p className="text-neutral-600 text-lg">From full-scale partnership to specialized production, we have the tools to tell your story.</p>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 relative group overflow-hidden rounded-2xl h-[400px] md:h-[500px]">
                <img src={teamPhoto} alt="Pulse Partners" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 text-white">
                    <div className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">FLAGSHIP SERVICE</div>
                    <h3 className="text-3xl font-bold mb-3">Pulse Partners</h3>
                    <p className="text-neutral-200 mb-6 max-w-lg">A dedicated three-person team working inside your business weekly. Strategy, content, and execution all in one.</p>
                    <Link to="/pulse-partners">
                        <Button variant="primary" icon={<ArrowRight size={16} />}>Explore Partnership</Button>
                    </Link>
                </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6 h-[500px]">
                <div className="relative group overflow-hidden rounded-2xl flex-1">
                    <img src={podcastPhoto} alt="Podcasting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-neutral-900/60 transition-colors group-hover:bg-neutral-900/50"></div>
                    <div className="absolute bottom-0 left-0 p-6 z-10 text-white">
                         <div className="flex items-center gap-2 mb-2 text-primary-300">
                            <Mic size={18} />
                            <span className="font-bold text-sm">PODCASTING</span>
                         </div>
                        <h3 className="text-xl font-bold mb-2">Mobile Studio</h3>
                        <Link to="/podcasting" className="text-sm underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">Record Anywhere &rarr;</Link>
                    </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl flex-1">
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=600" alt="Photography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-neutral-900/60 transition-colors group-hover:bg-neutral-900/50"></div>
                    <div className="absolute bottom-0 left-0 p-6 z-10 text-white">
                        <div className="flex items-center gap-2 mb-2 text-primary-300">
                            <Camera size={18} />
                            <span className="font-bold text-sm">PHOTOGRAPHY</span>
                         </div>
                        <h3 className="text-xl font-bold mb-2">Visual Storytelling</h3>
                        <Link to="/photography" className="text-sm underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">View Portfolio &rarr;</Link>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col md:flex-row items-center gap-12 bg-primary-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="md:w-1/2 relative z-10">
                <div className="inline-block bg-accent px-3 py-1 rounded text-xs font-bold tracking-wider mb-6">OUR ORIGIN</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">"This isn't just business—it's personal."</h2>
                <p className="text-primary-100 text-lg mb-8 leading-relaxed">
                    After watching my father's business struggle due to a lack of support, I made it my mission to ensure no small business owner ever feels alone again. Clarity Media was born from a need for connection.
                </p>
                <div className="flex items-center gap-4">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lee" alt="Lee Founder" className="w-16 h-16 rounded-full border-2 border-accent bg-white" />
                     <div>
                        <p className="font-bold">Lee</p>
                        <p className="text-sm text-primary-300">Founder, Clarity Media</p>
                     </div>
                </div>
                <div className="mt-8">
                    <Link to="/about">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-900">Read the Full Story</Button>
                    </Link>
                </div>
            </div>
            <div className="md:w-1/2 relative z-10">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-900 border-b-8 border-b-transparent ml-1"></div>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Founder Video" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </Section>

      <Section background="light" className="text-center">
        <FadeIn direction="up">
            <Heading level={2} align="center">Ready to Stop Going at It Alone?</Heading>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Join a partnership that puts a team in your corner and AI-powered growth in your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" size="lg" onClick={() => setIsDNAModalOpen(true)}>Get Your Free Small Business DNA Report</Button>
            </div>
        </FadeIn>
      </Section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </Layout>
  );
};