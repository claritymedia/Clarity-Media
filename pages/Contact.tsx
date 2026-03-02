import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Section, Heading, Button, Card } from '../components/ui/UI';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact: React.FC = () => {
    const [formType, setFormType] = useState('general');

  return (
    <Layout>
      <Section background="light">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <Heading level={1}>Let's Connect</Heading>
                <p className="text-neutral-600 text-lg">Choose how you want to work with us.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                {['general', 'pulse-partners', 'podcasting', 'photography'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFormType(type)}
                        className={`px-5 py-2.5 rounded-full capitalize transition-all text-sm font-medium ${
                            formType === type 
                            ? 'bg-primary-900 text-white shadow-lg scale-105' 
                            : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200 shadow-sm'
                        }`}
                    >
                        {type.replace('-', ' ')}
                    </button>
                ))}
            </div>

            <Card className="p-6 md:p-12 overflow-hidden">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Jane Doe" required />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="jane@company.com" required />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        {formType === 'pulse-partners' && (
                            <motion.div 
                                key="pulse"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Business Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Your Business" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Website (optional)</label>
                                    <input type="url" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="https://..." />
                                </div>
                            </motion.div>
                        )}

                        {formType === 'podcasting' && (
                            <motion.div 
                                key="podcast"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Show Name / Idea</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="The Growth Show" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Episodes Per Month</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white">
                                        <option>2 Episodes</option>
                                        <option>4 Episodes</option>
                                        <option>8 Episodes</option>
                                        <option>Custom / Not sure</option>
                                    </select>
                                </div>
                            </motion.div>
                        )}

                        {formType === 'photography' && (
                            <motion.div 
                                key="photo"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Shoot Type</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white">
                                        <option>Headshots</option>
                                        <option>Personal Branding</option>
                                        <option>Event Coverage</option>
                                        <option>Commercial/Product</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">Preferred Month</label>
                                    <input type="month" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div>
                        <label className="block text-sm font-bold text-neutral-700 mb-2 uppercase tracking-wide">How can we help you?</label>
                        <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Tell us more about your project or goals..."></textarea>
                    </div>

                    <div className="pt-4">
                        <Button variant="primary" size="lg" fullWidth>
                            Send Inquiry
                        </Button>
                    </div>
                    
                    <p className="text-center text-xs text-neutral-400">
                        By clicking send, you agree to our privacy policy. We typically respond within 24 hours.
                    </p>
                </form>
            </Card>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Dallas Studio</h4>
                    <p className="text-neutral-500 text-sm">Downtown Dallas Metroplex<br />Studio available by appointment.</p>
                </div>
                <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Frisco Hub</h4>
                    <p className="text-neutral-500 text-sm">Expansion office serving<br />North DFW businesses.</p>
                </div>
                <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Remote Services</h4>
                    <p className="text-neutral-500 text-sm">Digital Unity & Remote Podcasting<br />available nationwide.</p>
                </div>
            </div>
        </div>
      </Section>
    </Layout>
  );
};