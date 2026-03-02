import React from 'react';
import { Layout } from '../components/Layout';
import { Section, Heading, FadeIn } from '../components/ui/UI';

export const About: React.FC = () => {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
                <Heading level={1} className="mb-12 text-center font-serif text-5xl md:text-6xl">The Human Element</Heading>
                
                <div className="mx-auto max-w-3xl">
                    <p className="text-2xl font-light text-neutral-800 mb-16 text-center leading-relaxed italic border-y border-neutral-100 py-8">
                        "We believe that technology should amplify human connection, not replace it."
                    </p>

                    <div className="space-y-8 text-neutral-700 text-lg leading-relaxed">
                        <h2 className="text-3xl font-bold text-neutral-900 font-serif leading-tight">
                            It Started With a Question I Never Got to Ask
                        </h2>

                        <p>Clarity Media didn’t begin in a boardroom.</p>
                        <p>It began in a hospital room… and later, in the mountains.</p>
                        
                        <p>
                            I moved in with my father during his battle with stage 4 lung cancer. I thought I was coming to help him fight for his health. What I found was something else fighting for its life — his business.
                        </p>
                        
                        <p className="font-medium text-neutral-900">It was in turmoil.</p>
                        
                        <p>
                            Not because he wasn’t talented. Not because he didn’t care. But because the world had changed faster than he could adapt to it.
                        </p>
                        
                        <p>I wanted to sit down with him and have the hard conversation.</p>
                        
                        <div className="pl-6 border-l-4 border-primary-500 italic text-xl text-neutral-800 space-y-2">
                            <p>“What do you feel you’re missing?”</p>
                            <p>“Where does it hurt?”</p>
                            <p>“What do you need?”</p>
                        </div>
                        
                        <p>
                            But when someone is fighting for breath, you don’t hand them business strategy. You hand them presence.
                        </p>
                        
                        <p>
                            My father passed away before we ever had that conversation. And that silence stayed with me.
                        </p>
                        
                        <p>
                            So I gave away everything I owned and disappeared into the mountains of Colorado for 40 days. I brought 20 books. Strategy. Psychology. Systems. Faith. Economics. Human behavior. I wasn’t just searching for business answers. I was searching for mine.
                        </p>
                        
                        <p>Somewhere between the quiet mornings and the long hikes, the pattern became clear:</p>
                        
                        <p className="text-2xl font-bold text-primary-900 tracking-tight">Isolation kills businesses.</p>
                        
                        <p>
                            Small business owners are expected to be everything — CEO, CFO, Marketing department, Tech support, Content creator. And somehow still human at the end of the day.
                        </p>
                        
                        <p>No one checks on the pulse of the business. No one checks on the pulse of the owner.</p>
                        
                        <p>So we built what my father never had.</p>
                        
                        <p>
                            We created <strong>Pulse Partners</strong> — a team that steps inside your business, diagnoses what’s really happening, and helps repair it from the inside out. Not just software. Not just marketing. A living, breathing partnership.
                        </p>
                        
                        <p>
                            Because businesses don’t collapse from lack of passion. They collapse from lack of support.
                        </p>
                        
                        <p className="font-semibold text-neutral-900">This company was born from grief. But it runs on purpose.</p>
                        
                        <div className="bg-primary-50 p-10 rounded-2xl border border-primary-100 mt-16 text-center">
                            <p className="text-xl font-medium text-neutral-800 mb-2">
                                Let me ask you something —
                            </p>
                            <p className="text-2xl font-bold text-primary-900">
                                When was the last time your business had a check-up?
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
      </section>

      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <Heading level={2}>Our Mission</Heading>
                <p className="text-lg text-neutral-600 mb-6">
                    To repair communities by preventing small business collapse through human connection and accessible technology.
                </p>
                <Heading level={2} className="mt-12">Our Vision</Heading>
                <p className="text-lg text-neutral-600">
                    Teams in every city across America, rebuilding the local economy one partnership at a time.
                </p>
            </div>
            <div className="bg-white shadow-sm border border-neutral-200 rounded-2xl p-8">
                <Heading level={3} className="text-primary-900 mb-6">Core Values</Heading>
                <ul className="space-y-6">
                    {[
                        "Human Presence Connects Technology",
                        "AI, Fully Optimized—Humanly Applied",
                        "You're Not Alone",
                        "Community Over Competition"
                    ].map((val, i) => (
                        <li key={i} className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 flex items-center justify-center font-bold text-sm">{i+1}</span>
                            <span className="text-xl font-medium text-primary-900">{val}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </Section>
    </Layout>
  );
};