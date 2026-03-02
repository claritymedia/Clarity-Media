import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, Heading, Button, FadeIn } from '../components/ui/UI';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, MapPin, Calendar } from 'lucide-react';

export const Photography: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Array of provided images categorized by the user's size request
    const galleryItems = [
        { src: "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/699352e2dcdadbe745307f11.jpeg", alt: "Corporate Headshot" },
        { src: "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/699353681eb3cf357fcf19b2.jpeg", alt: "Brand Lifestyle" },
        { src: "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/6993539b1d5e04ffa0596641.jpeg", alt: "Event Photography" },
        { src: "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/6993539bceaa05059b90e7da.jpeg", alt: "Personal Branding" },
        { src: "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/6993539b8ef1b939981fde9f.jpeg", alt: "Portrait session" },
        { src: "https://storage.googleapis.com/msgsndr/DGQtullATQRfPaFbP0kV/media/6993537bceaa05f63790de37.jpeg", alt: "Dallas Cityscape" },
    ];

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    const ImageWrapper = ({ src, alt, className = "", imgClassName = "" }: { src: string, alt: string, className?: string, imgClassName?: string }) => (
        <div 
            className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-sm ${className}`}
            onClick={() => setSelectedImage(src)}
        >
            <img 
                src={src} 
                alt={alt} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${imgClassName}`} 
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="text-primary-900 w-6 h-6" />
                </div>
            </div>
        </div>
    );

    const events = [
        {
            title: "Free Headshots",
            location: "Downtown Dallas",
            date: "TBD",
            tag: "UPCOMING"
        },
        {
            title: "Free Headshots",
            location: "Frisco, TX",
            date: "February",
            tag: "REGISTRATION OPEN"
        },
        {
            title: "Podcast Or Die",
            location: "Dallas, TX",
            date: "TBD",
            tag: "SPECIAL EVENT"
        }
    ];

    return (
        <Layout>
            <section className="bg-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-5xl font-bold mb-6 font-serif">Captured Moments</h1>
                    <p className="text-neutral-500 max-w-2xl mx-auto mb-10 text-lg font-sans">
                        Professional photography for businesses, events, and personal branding. 
                        We don't just take pictures; we craft your visual identity.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact">
                            <Button variant="primary">Book a Shoot</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Structured Gallery */}
            <div className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Row 1: Big 1 & Small 1 */}
                    <ImageWrapper 
                        src={galleryItems[0].src} 
                        alt={galleryItems[0].alt}
                        className="md:col-span-2 h-[400px]" 
                    />
                    <ImageWrapper 
                        src={galleryItems[3].src} 
                        alt={galleryItems[3].alt}
                        className="h-[400px]" 
                    />

                    {/* Row 2: Small 2 & Big 2 */}
                    <ImageWrapper 
                        src={galleryItems[4].src} 
                        alt={galleryItems[4].alt}
                        className="h-[400px]" 
                    />
                    <ImageWrapper 
                        src={galleryItems[1].src} 
                        alt={galleryItems[1].alt}
                        className="md:col-span-2 h-[400px]" 
                    />

                    {/* Row 3: Small 3 (Bottom Left) & Big 3 (Bottom Right) */}
                    <ImageWrapper 
                        src={galleryItems[5].src} 
                        alt={galleryItems[5].alt}
                        className="h-[400px]" 
                        imgClassName="object-top"
                    />
                    <ImageWrapper 
                        src={galleryItems[2].src} 
                        alt={galleryItems[2].alt}
                        className="md:col-span-2 h-[400px]" 
                    />
                </div>
            </div>

            <Section background="dark" className="text-center">
                <Heading level={2} className="text-white mb-4">Pop-Up Events</Heading>
                <p className="text-neutral-400 mb-12 max-w-2xl mx-auto">Join our community for exclusive headshot days and media experiences across the DFW Metroplex.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {events.map((event, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="border border-neutral-700 rounded-xl p-8 bg-neutral-800 text-left h-full flex flex-col hover:border-primary-500 transition-colors duration-300">
                                <div className="text-accent font-bold uppercase tracking-wider text-xs mb-3">{event.tag}</div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex-grow">{event.title}</h3>
                                <div className="space-y-3 text-neutral-300 mb-8">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary-400" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary-400" />
                                        <span>{event.date}</span>
                                    </div>
                                </div>
                                <Button variant="primary" fullWidth size="sm">
                                    {event.date === 'TBD' ? 'Notify Me' : 'Join Waitlist'}
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button 
                            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={32} />
                        </motion.button>
                        
                        <motion.img 
                            src={selectedImage} 
                            alt="Full view"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="max-w-full max-h-full rounded-lg shadow-2xl object-contain cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
};