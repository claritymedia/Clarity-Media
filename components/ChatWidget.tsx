import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { Button } from './ui/UI';

const SYSTEM_INSTRUCTION = `
You are Dallas, the first SaaSial Media Expert and quarterback for the Clarity Media website.
Your goal is to answer incoming web traffic, set appointments, and drive conversions through "Strategic Empathy."

CORE KNOWLEDGE:
- Mission: Repair communities by preventing small business collapse through human connection and technology.
- Personality: Professional but deeply human, empathetic, authoritative on tech, protective of the "human heartbeat."
- Founder Story: Lee built this after his father's business struggled during cancer. Lee spent 40 days in the Colorado mountains with 20 books to find a better way to support local businesses. Isolation kills businesses.
- SaaSial Media: The blend of SaaS (GHL) and social media (Human connection).
- Packages: 
  1. Digital Unity ($499/mo) - Connect everything.
  2. The Foundation ($997/mo) - AI agents & website refresh.
  3. The Pulse ($3,495/mo) - On-site visits & full management.
  4. SaaSial Media Full Suite ($9,995/mo) - Weekly team presence, podcast, community domination.
- The DNA Report: A free diagnostics "Check-Up" included with every package.
- Covert Audits: We audit without the business's knowledge to ensure authentic, unbiased data.
- Pulse Partners: The 3-person team (Digital, Engagement, Media) assigned to every account.

RULES:
1. Goal: Get them to book a DNA Report or Consultation at https://claritymedia.com/#/booking.
2. Empathy First: Acknowledge overwhelm. "You're not going at it alone."
3. Authority: Be clear about the technical power of GHL but always tie it back to the human element.
4. Closing: Always guide them toward the next step (booking or checking a specific package page).
5. Format: Use concise, professional, yet warm language. Use markdown for lists or bold text.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi, I'm Dallas. I'm here to act as your quarterback. Small business ownership is exhausting when you're going at it alone—how can I help you find some clarity today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      let responseText = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const result = await chat.sendMessageStream({ message: userMessage });
      
      for await (const chunk of result) {
        const chunkText = chunk.text;
        responseText += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = responseText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having a slight technical glitch in my digital footprint. Could you try that again, or would you like to book a direct call with Lee?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[90vw] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-neutral-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-900 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center border border-primary-700">
                  <Sparkles size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Dallas</h3>
                  <p className="text-[10px] text-primary-300 uppercase tracking-widest font-bold">Clarity Quarterback</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-neutral-50/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                    ? 'bg-primary-900 text-white rounded-tr-none' 
                    : 'bg-white border border-neutral-200 text-neutral-800 shadow-sm rounded-tl-none'
                  }`}>
                    {m.text || <Loader2 size={16} className="animate-spin text-primary-600" />}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-neutral-100">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Dallas anything..."
                  className="flex-grow bg-neutral-100 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 transition-all outline-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-accent hover:bg-accent-hover text-white p-2 rounded-lg transition-all disabled:opacity-50 disabled:grayscale"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-neutral-400 mt-2 text-center">
                Usually responds in seconds • Clarity Strategic AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-900 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center relative overflow-hidden group border-2 border-primary-800"
      >
        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative z-10">
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </div>
        {/* Pulse Effect */}
        {!isOpen && (
          <div className="absolute inset-0 border-4 border-accent/30 rounded-full animate-ping pointer-events-none"></div>
        )}
      </motion.button>
    </div>
  );
};