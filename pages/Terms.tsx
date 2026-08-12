import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, Heading } from '../components/ui/UI';

const LAST_UPDATED = 'August 12, 2026';

export const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service | Clarity Media';
  }, []);

  return (
    <Layout>
      <Section background="light">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <Heading level={1}>Terms of Service</Heading>
          <p className="text-sm text-neutral-500 mb-10">Last updated: {LAST_UPDATED}</p>

          <p>
            These Terms of Service ("Terms") govern your use of claritymedia.life (the "Site") and
            any services offered by Clarity Media LLC ("Clarity Media," "we," "us," or "our"). By
            using the Site or engaging our services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">1. Use of the Site</h2>
          <p>
            You may use the Site for lawful purposes only. You agree not to misuse the Site,
            interfere with its normal operation, or attempt to access it using methods other than
            the interface we provide.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">2. Our Services</h2>
          <p>
            Clarity Media offers marketing and media services, including Pulse Partners (done-for-you
            growth partnership), Podcasting production, Photography, and related consulting. Specific
            deliverables, pricing, and timelines for paid engagements will be set out separately in an
            agreement or statement of work between you and Clarity Media.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">3. Forms, Bookings &amp; Communications</h2>
          <p>
            When you submit a form, book a consultation, or opt in to receive emails or text messages
            through the Site, you confirm that the information you provide is accurate and that you
            have the right to provide it. Our use of the information you submit is described in our{' '}
            <Link to="/privacy-policy" className="text-primary-600 underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">4. Intellectual Property</h2>
          <p>
            The Site and its content, including text, graphics, logos, and design, are owned by
            Clarity Media or our licensors and are protected by applicable intellectual property
            laws. You may not copy, reproduce, or distribute content from the Site without our
            prior written permission.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">5. Third-Party Services</h2>
          <p>
            The Site uses third-party tools to operate certain features, including scheduling,
            forms, and live chat (currently provided through GoHighLevel). Your use of those
            embedded features may also be subject to the applicable third party's own terms.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">6. Disclaimers</h2>
          <p>
            The Site and its content are provided "as is" without warranties of any kind, express or
            implied. We do not guarantee specific business results from our services; outcomes vary
            based on many factors outside our control.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Clarity Media will not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of the
            Site or our services.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">8. Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time. Continued use of the Site after changes
            are posted constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Texas, without regard to its
            conflict of law principles.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">10. Contact Us</h2>
          <p>
            Questions about these Terms can be sent to:
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
