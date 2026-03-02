import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, Heading, Button, Card, FadeIn } from '../components/ui/UI';
import { Mic, Upload, Headphones, Radio, Check, MapPin, Info } from 'lucide-react';

export const Podcasting: React.FC = () => {
  const podcastHeroImage = "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/699343a867cb8440809b24d0.png";
  
  const packages = [
    {
      title: "Remote Studio",
      subtitle: "Solopreneurs & Distributed Teams",
      price: "$690",
      period: "/month",
      episodes: "2 Episodes/Month",
      features: [
        "Remote recording via professional platform",
        "Custom podcast cover art design",
        "Professional audio editing and mixing",
        "Noise reduction and audio enhancement",
        "Detailed show notes with timestamps",
        "YouTube clip creation and formatting",
        "Distribution to all major platforms",
        "5-7 day turnaround time"
      ],
      cta: "Select Plan",
      variant: "outline" as const,
      location: "Remote only"
    },
    {
      title: "Downtown Studio",
      subtitle: "Local Teams & Studio Experience",
      price: "$1,399",
      period: "/month",
      episodes: "2 Episodes/Month",
      features: [
        "On-site recording at downtown studio*",
        "Includes up to 2 guests ($80/addt'l)",
        "1 professional headshot session",
        "1 lifestyle photography session",
        "Video color correction",
        "Full episode transcription",
        "Monthly strategy call",
        "Technical support via email"
      ],
      cta: "Select Plan",
      variant: "outline" as const,
      location: "Studio (Dallas*)"
    },
    {
      title: "Essential Onsite",
      subtitle: "Small Businesses & Creators",
      price: "$2,499",
      period: "/month",
      episodes: "4 Episodes/Month",
      popular: true,
      features: [
        "Recording at studio OR your location*",
        "Full production crew (audio + lighting)",
        "Multi-format recording (video + audio)",
        "Professional headshots & lifestyle photos",
        "Social media clips (3-5 per episode)",
        "Guest coordination support",
        "Quarterly content planning sessions",
        "Comprehensive analytics reporting"
      ],
      cta: "Select Plan",
      variant: "primary" as const,
      location: "Studio/Remote*"
    },
    {
      title: "White Glove",
      subtitle: "Enterprise & Serious Creators",
      price: "$4,440",
      period: "/month",
      episodes: "8 Episodes/Month",
      features: [
        "Flexible recording (onsite/remote)*",
        "Dedicated producer assigned to you",
        "Complete post-production suite",
        "Full content repurposing (blogs, clips)",
        "48-hour priority turnaround",
        "Unlimited strategic planning",
        "24/7 priority technical support",
        "Active promotion strategy"
      ],
      cta: "Select Plan",
      variant: "outline" as const,
      location: "Flexible*"
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={podcastHeroImage} 
            alt="Podcast Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Podcasting Never Felt So Easy</h1>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">The professional, all-in-one mobile studio that brings high-end audio, video, and distribution directly to your workspace.</p>
            <Link to="/booking">
                <Button variant="accent" size="lg">Start Your Show</Button>
            </Link>
        </div>
      </section>

      {/* Process */}
      <Section>
        <div className="grid md:grid-cols-4 gap-8">
            {[
                { icon: <Mic />, title: "Concept", desc: "We help define your niche and show format." },
                { icon: <Radio />, title: "Recording", desc: "We bring pro gear to your location." },
                { icon: <Headphones />, title: "Editing", desc: "Full audio/video post-production." },
                { icon: <Upload />, title: "Distribution", desc: "Published to Spotify, Apple, & YouTube." }
            ].map((step, i) => (
                <div key={i} className="text-center p-6">
                    <div className="w-16 h-16 bg-primary-100 text-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-neutral-600 text-sm">{step.desc}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* Packages */}
      <Section background="light" id="packages">
        <Heading level={2} align="center" className="mb-4">Production Packages</Heading>
        <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-16">
            Full-service podcast production from ideation to distribution. Choose the package that fits your needs.
        </p>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-2">
            {packages.map((pkg, idx) => (
                <Card 
                    key={idx} 
                    className={`p-6 flex flex-col h-full relative ${pkg.popular ? 'border-2 border-primary-500 shadow-xl' : ''}`}
                >
                    {pkg.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-b-lg text-xs font-bold whitespace-nowrap z-10">
                            MOST POPULAR
                        </div>
                    )}
                    
                    <div className="mb-4 border-b border-neutral-100 pb-4 mt-2">
                        <h3 className="text-xl font-bold text-primary-900 leading-tight">{pkg.title}</h3>
                        <p className="text-xs text-neutral-500 mt-2 h-8 leading-tight">{pkg.subtitle}</p>
                    </div>

                    <div className="mb-6">
                        <div className="text-3xl font-bold text-primary-900">{pkg.price}<span className="text-sm font-normal text-neutral-500">{pkg.period}</span></div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="bg-primary-50 text-primary-700 text-xs font-bold px-2 py-1 rounded-full">
                                {pkg.episodes}
                            </span>
                            <span className="bg-neutral-100 text-neutral-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                                <MapPin size={10} /> {pkg.location}
                            </span>
                        </div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                        {pkg.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                                <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                            </li>
                        ))}
                    </ul>

                    <Link to="/booking" className="w-full mt-auto">
                        <Button variant={pkg.variant} fullWidth size="sm">
                            {pkg.cta}
                        </Button>
                    </Link>
                </Card>
            ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg flex gap-4 items-start">
                 <Info className="text-yellow-600 shrink-0 mt-1" size={20} />
                 <div>
                    <h4 className="font-bold text-yellow-800 text-sm mb-1">Location Services</h4>
                    <p className="text-sm text-yellow-800/80">
                        * On-site recording and studio services are available within 30 miles of the Dallas metroplex. 
                        Guests for Downtown Studio package include up to 2 people ($80 per additional guest, 4 max).
                    </p>
                 </div>
            </div>
        </div>
      </Section>

      {/* Current Shows - Manual Rebuild */}
      <Section>
        <Heading level={2} className="mb-12">Current Shows</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Slot 1: Beyond The White Coat */}
            <div className="flex flex-col gap-3">
                <video 
                    controls 
                    playsInline 
                    preload="metadata" 
                    poster="https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/698eb34d00849881acf600b9.jpeg"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', backgroundColor: '#000' }}
                >
                    <source src="https://episodes.castos.com/657375e335c640-99390715/2016357/c1e-2pq0dim9gz3unozn8p-kp44xoq3ijdx-bqyuyh.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="text-xl font-bold text-neutral-900">Beyond The White Coat</p>
            </div>

            {/* Slot 2: Mothers on a Mission */}
            <div className="flex flex-col gap-3">
                <video 
                    controls 
                    playsInline 
                    preload="metadata" 
                    poster="https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/698eb367772de9e6be84ce6c.jpeg"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', backgroundColor: '#000' }}
                >
                    <source src="https://episodes.castos.com/657375e335c640-99390715/1756027/c1e-d3n16u6ow85h3g84j0-04r31392brkv-vb8evy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="text-xl font-bold text-neutral-900">Mothers on a Mission</p>
            </div>

            {/* Slot 3: Mode with Miss Ji */}
            <div className="flex flex-col gap-3">
                <video 
                    controls 
                    playsInline 
                    preload="metadata" 
                    poster="https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/698eb3c700849875b7f65063.jpeg"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', backgroundColor: '#000' }}
                >
                    <source src="https://episodes.castos.com/657375e335c640-99390715/1727276/c1e-4pqogi4gqorh8jgd58-04r7mmmjhw64-vep3x0.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="text-xl font-bold text-neutral-900">Mode with Miss Ji</p>
            </div>

            {/* Slot 4: DFW Socials Connect */}
            <div className="flex flex-col gap-3">
                <video 
                    controls 
                    playsInline 
                    preload="metadata" 
                    poster="https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/698eb359008498676af601e1.jpeg"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', backgroundColor: '#000' }}
                >
                    <source src="https://episodes.castos.com/657375e335c640-99390715/2017149/c1e-odnp4c2w868ujoxqn2-kp495q3vixxq-1uyqfk.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="text-xl font-bold text-neutral-900">DFW Socials Connect</p>
            </div>

            {/* Slot 5: Just Music */}
            <div className="flex flex-col gap-3">
                <video 
                    controls 
                    playsInline 
                    preload="metadata" 
                    poster="https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/698eb35f772de9e1e584c061.png"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', backgroundColor: '#000' }}
                >
                    <source src="https://episodes.castos.com/657375e335c640-99390715/1727283/c1e-d3n16u6kpdvb211qgm-ddkxk534f4p4-lzul4l.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="text-xl font-bold text-neutral-900">Just Music</p>
            </div>

            {/* Slot 6: The Elevated Mindset */}
            <div className="flex flex-col gap-3">
                <video 
                    controls 
                    playsInline 
                    preload="metadata" 
                    poster="https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/698eb371008498b48bf613ba.jpeg"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '12px', backgroundColor: '#000' }}
                >
                    <source src="https://episodes.castos.com/657375e335c640-99390715/1760414/c1e-v53w1u95p7gsww80wz-gd48790na77n-fz0qyd.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p className="text-xl font-bold text-neutral-900">The Elevated Mindset</p>
            </div>

        </div>
      </Section>
    </Layout>
  );
};