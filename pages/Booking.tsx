import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Section, Heading, FadeIn } from '../components/ui/UI';

export const Booking: React.FC = () => {
  useEffect(() => {
    // Load the GHL form embed script to handle iframe resizing/behavior
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if necessary (though usually safe to keep)
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      <Section className="pt-12 pb-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <FadeIn>
            <Heading level={1} align="center" className="mb-4">Schedule Your Consultation</Heading>
            <p className="text-xl text-neutral-600">
              Select a time that works best for you to discuss how Pulse Partners or our media services can grow your business.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden min-h-[700px]">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/2L4P5rXoBO41xJkulkrZ" 
              style={{ width: '100%', minHeight: '800px', border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              id="2L4P5rXoBO41xJkulkrZ_1771268513087"
              title="GHL Calendar"
            ></iframe>
          </div>
        </FadeIn>

        <div className="mt-12 text-center text-neutral-500 text-sm">
          <p>Having trouble with the calendar? <a href="mailto:support@claritymedia.com" className="text-primary-600 underline">Email us directly</a>.</p>
        </div>
      </Section>
    </Layout>
  );
};