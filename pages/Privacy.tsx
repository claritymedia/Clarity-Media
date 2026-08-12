import React, { useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Section, Heading } from '../components/ui/UI';

const LAST_UPDATED = 'August 12, 2026';

export const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Clarity Media';
  }, []);

  return (
    <Layout>
      <Section background="light">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <Heading level={1}>Privacy Policy</Heading>
          <p className="text-sm text-neutral-500 mb-10">Last updated: {LAST_UPDATED}</p>

          <p>
            Clarity Media LLC ("Clarity Media," "we," "us," or "our") respects your privacy.
            This Privacy Policy explains what information we collect through claritymedia.life
            (the "Site"), how we use it, and the choices you have. By using the Site, you agree
            to the practices described here.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">1. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Information you provide directly.</strong> When you submit our Contact form,
              request a Business DNA Report, or book a consultation, we collect information such as
              your name, email address, business name, website, and the contents of your message.
            </li>
            <li>
              <strong>Phone number and SMS/text opt-in.</strong> If you choose to provide a phone
              number and opt in to text messaging, we collect that number along with your consent
              preferences (marketing vs. non-marketing messages).
            </li>
            <li>
              <strong>Automatically collected information.</strong> Like most websites, we and our
              service providers automatically collect certain technical information when you visit
              the Site, including your IP address, browser type, device type, pages viewed, and
              referring pages, typically through cookies or similar technologies.
            </li>
            <li>
              <strong>Analytics and advertising technologies.</strong> We use analytics tools (such
              as Google Analytics) and/or advertising pixels (such as the Meta Pixel) to understand
              how visitors use the Site and to measure the performance of our marketing. These tools
              may set their own cookies; you can control cookies through your browser settings.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and provide the services you request (Pulse Partners, Podcasting, Photography, or the Business DNA Report);</li>
            <li>Schedule and manage consultations and appointments;</li>
            <li>Send transactional and, where you've opted in, marketing communications by email or text message;</li>
            <li>Improve the Site, our services, and our marketing based on aggregated usage trends;</li>
            <li>Comply with legal obligations and enforce our agreements.</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">3. Text Messaging (SMS) Terms</h2>
          <p>
            If you opt in to receive text messages from Clarity Media, message frequency may vary,
            and message and data rates may apply. You can reply <strong>STOP</strong> at any time to
            opt out of further messages, or <strong>HELP</strong> for assistance. Consent to receive
            text messages is not a condition of purchasing any goods or services.
          </p>
          <p>
            <strong>We do not share your mobile opt-in information or phone number with third
            parties or affiliates for their own marketing or promotional purposes.</strong> Your
            information may be shared with service providers (such as our CRM/communications
            platform) solely to help us deliver the messages you've requested.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">4. How We Share Information</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service providers</strong> who perform functions on our behalf, such as our
              CRM and marketing platform (GoHighLevel), scheduling tools, email/SMS delivery, and
              analytics providers — bound by obligations to protect your information;
            </li>
            <li><strong>Legal and safety purposes</strong>, if required by law, subpoena, or to protect the rights, property, or safety of Clarity Media or others;</li>
            <li><strong>Business transfers</strong>, in the event of a merger, acquisition, or sale of assets, subject to standard confidentiality protections.</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">5. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to provide our services,
            comply with legal obligations, resolve disputes, and enforce our agreements. You may
            request deletion of your information at any time (see Section 7).
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">6. Cookies &amp; Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to operate the Site, remember preferences, and
            understand how visitors interact with our pages. You can disable cookies in your browser
            settings, though some parts of the Site may not function as intended if you do.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">7. Your Rights &amp; Choices</h2>
          <p>Depending on where you live, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to the personal information we hold about you;</li>
            <li>Request correction or deletion of your personal information;</li>
            <li>Opt out of marketing emails (via the unsubscribe link) or text messages (by replying STOP);</li>
            <li>Ask how your information has been used or shared.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the information in Section 10. We will
            respond within a reasonable time.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">8. Children's Privacy</h2>
          <p>
            The Site is not directed to children under 13, and we do not knowingly collect personal
            information from children under 13. If you believe a child has provided us with personal
            information, please contact us so we can delete it.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date at the top
            of this page reflects the most recent revision. Material changes will be reflected on
            this page.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how we handle your information,
            contact us at:
          </p>
          <p>
            Clarity Media LLC<br />
            Texas, United States<br />
            Email: <a href="mailto:connect@claritymedia.life" className="text-primary-600 underline">connect@claritymedia.life</a>
          </p>
        </div>
      </Section>
    </Layout>
  );
};
