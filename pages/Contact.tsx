import React, { useEffect, useRef } from 'react';
import { Layout } from '../components/Layout';
import { Section, Heading, Card } from '../components/ui/UI';

const GHL_FORM_SRC = 'https://api.leadconnectorhq.com/widget/form/dhtaGZCSz5uoNRpsLfl8';
const GHL_FORM_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

/* --- GoHighLevel contact form embed -------------------------------------
   Real GHL forms only work through their hosted iframe (auth/bot-check is
   handled on their end); this loads form_embed.js once so the iframe can
   auto-resize to fit its content, same pattern as the DNA Report widget. */
const ContactFormWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (document.querySelector(`script[src="${GHL_FORM_EMBED_SCRIPT}"]`)) return;

    const script = document.createElement('script');
    script.src = GHL_FORM_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <iframe
        src={GHL_FORM_SRC}
        style={{ width: '100%', height: '722px', border: 'none', borderRadius: '8px' }}
        id="inline-dhtaGZCSz5uoNRpsLfl8"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Clarity Site Form"
        data-height="722"
        data-layout-iframe-id="inline-dhtaGZCSz5uoNRpsLfl8"
        data-form-id="dhtaGZCSz5uoNRpsLfl8"
        title="Clarity Site Form"
      />
    </div>
  );
};

export const Contact: React.FC = () => {
  return (
    <Layout>
      <Section background="light">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <Heading level={1}>Let's Connect</Heading>
                <p className="text-neutral-600 text-lg">Tell us about your project or goals and we'll get back to you within 24 hours.</p>
            </div>

            <Card className="p-6 md:p-12 overflow-hidden">
                <ContactFormWidget />
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
