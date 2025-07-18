import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMegaphone, FiVideo, FiMessageSquare, FiCopy } = FiIcons;

const PromoKit = () => {
  const [promoKit, setPromoKit] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { user } = useUser();

  const generatePromoKit = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const kit = {
      videoScripts: [
        {
          title: "The Problem Hook",
          script: `[On screen: You looking frustrated]

"If you're struggling with ${user.painPoint.toLowerCase()} in ${user.niche.toLowerCase()}, this video is for you.

I used to wake up every day feeling overwhelmed by ${user.painPoint.toLowerCase()}.

I tried everything - courses, books, YouTube videos...

Nothing worked.

Until I discovered this one simple system.

[Show your ${user.format.toLowerCase()}]

This ${user.format.toLowerCase()} changed everything for me.

And now I'm sharing it with you.

Link in bio to get instant access.

Stop letting ${user.painPoint.toLowerCase()} control your ${user.niche.toLowerCase()} journey.

Your breakthrough is waiting."

[Duration: 30-60 seconds]`
        },
        {
          title: "The Transformation Story",
          script: `[On screen: Before/after or transformation visual]

"3 months ago, I was exactly where you are.

Frustrated with ${user.painPoint.toLowerCase()}.
Tired of not seeing results in ${user.niche.toLowerCase()}.
Ready to give up.

But then I created this system.

[Hold up your ${user.format.toLowerCase()}]

And everything changed.

Within 7 days, I saw results I hadn't seen in months.

Now I'm sharing this exact system with you.

${user.format} that eliminates ${user.painPoint.toLowerCase()} once and for all.

No fluff. No theory. Just what works.

Get it now - link in bio.

Your ${user.niche.toLowerCase()} transformation starts today."

[Duration: 45-60 seconds]`
        },
        {
          title: "The Social Proof Angle",
          script: `[On screen: Screenshots of results or testimonials]

"I wasn't going to share this...

But after seeing the results people are getting with my ${user.format.toLowerCase()}, I had to.

Sarah eliminated ${user.painPoint.toLowerCase()} in 5 days.
Mike saw breakthrough results in his first week.
Lisa called it 'life-changing.'

This isn't just another ${user.format.toLowerCase()}.

This is the ${user.niche.toLowerCase()} solution that actually works.

Specifically designed to eliminate ${user.painPoint.toLowerCase()}.

Get instant access - link in bio.

Don't let ${user.painPoint.toLowerCase()} steal another day from your success."

[Duration: 30-45 seconds]`
        }
      ],
      socialPosts: [
        {
          platform: "Instagram/TikTok",
          post: `POV: You finally found the ${user.niche.toLowerCase()} solution that eliminates ${user.painPoint.toLowerCase()} 🎯

✨ No more struggling
✨ No more overwhelm  
✨ Just results

This ${user.format.toLowerCase()} changed everything for me.

Link in bio 👆

#${user.niche.replace(/\s+/g, '')} #${user.painPoint.replace(/\s+/g, '')}Solution #Breakthrough`
        },
        {
          platform: "Twitter/X",
          post: `Hot take: ${user.painPoint} isn't your real problem.

Your real problem is not having a system that works.

I created the ${user.format.toLowerCase()} that finally eliminates ${user.painPoint.toLowerCase()} in ${user.niche.toLowerCase()}.

Results in 7 days or less.

Thread below 👇 or DM me for the link.`
        },
        {
          platform: "LinkedIn",
          post: `After 3 years in ${user.niche.toLowerCase()}, I learned something important:

${user.painPoint} isn't a character flaw.

It's a system problem.

So I created a system that solves it.

My new ${user.format.toLowerCase()} helps ${user.niche.toLowerCase()} professionals eliminate ${user.painPoint.toLowerCase()} in 7 days or less.

No theory. No fluff. Just what works.

Comment "SYSTEM" and I'll send you the link.

#${user.niche.replace(/\s+/g, '')} #Productivity #Success`
        }
      ],
      emailSequence: [
        {
          subject: "Your ${user.niche} breakthrough starts here",
          body: `Hi [Name],

Thanks for getting my ${user.format} on eliminating ${user.painPoint.toLowerCase()}.

You're about to discover the exact system I used to overcome ${user.painPoint.toLowerCase()} in ${user.niche.toLowerCase()}.

Here's what to expect:

📧 Day 1: Quick start guide (this email)
📧 Day 3: Common mistakes to avoid
📧 Day 7: Advanced strategies
📧 Day 14: Success stories and next steps

Start with page 3 - it's the most important part.

To your success,
[Your name]

P.S. Hit reply if you have questions. I read every email.`
        }
      ]
    };

    setPromoKit(kit);
    setIsGenerating(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">Organic Traffic Jumpstart Kit</h2>
          <p className="text-purple-300 text-lg">
            Video scripts + social post angles to drive traffic
          </p>
        </div>
      </div>

      {!promoKit && (
        <div className="text-center">
          <motion.button
            onClick={generatePromoKit}
            disabled={isGenerating}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              isGenerating
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-400 to-indigo-500 text-white hover:from-purple-500 hover:to-indigo-600 transform hover:scale-105'
            }`}
            whileHover={!isGenerating ? { scale: 1.05 } : {}}
            whileTap={!isGenerating ? { scale: 0.95 } : {}}
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Creating Your Promo Kit...</span>
              </div>
            ) : (
              <>
                <SafeIcon icon={FiMegaphone} className="inline mr-2" />
                Generate Promo Kit
              </>
            )}
          </motion.button>
        </div>
      )}

      {promoKit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Video Scripts */}
          <div className="bg-gradient-to-r from-purple-400/20 to-indigo-500/20 rounded-xl p-6 border border-purple-400/30">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiVideo} className="mr-2" />
              Video Scripts
            </h3>
            <div className="space-y-4">
              {promoKit.videoScripts.map((script, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold">{script.title}</h4>
                    <button 
                      onClick={() => copyToClipboard(script.script)}
                      className="text-purple-300 hover:text-white transition-colors"
                    >
                      <SafeIcon icon={FiCopy} />
                    </button>
                  </div>
                  <pre className="text-purple-300 text-sm whitespace-pre-wrap max-h-40 overflow-y-auto">
                    {script.script}
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Social Posts */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiMessageSquare} className="mr-2" />
              Social Media Posts
            </h3>
            <div className="space-y-4">
              {promoKit.socialPosts.map((post, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold">{post.platform}</h4>
                    <button 
                      onClick={() => copyToClipboard(post.post)}
                      className="text-purple-300 hover:text-white transition-colors"
                    >
                      <SafeIcon icon={FiCopy} />
                    </button>
                  </div>
                  <p className="text-purple-300 text-sm whitespace-pre-wrap">
                    {post.post}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Email Sequence */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white text-2xl font-bold mb-4">📧 Email Sequence Starter</h3>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-semibold">Welcome Email</h4>
                <button 
                  onClick={() => copyToClipboard(`Subject: ${promoKit.emailSequence[0].subject}\n\n${promoKit.emailSequence[0].body}`)}
                  className="text-purple-300 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiCopy} />
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-yellow-400 font-semibold">Subject: {promoKit.emailSequence[0].subject}</p>
                <pre className="text-purple-300 text-sm whitespace-pre-wrap">
                  {promoKit.emailSequence[0].body}
                </pre>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30">
            <h3 className="text-white text-xl font-bold mb-4">🎯 Pro Tips</h3>
            <ul className="space-y-2 text-purple-300">
              <li>• <strong className="text-white">Video:</strong> Film multiple angles in one session</li>
              <li>• <strong className="text-white">Consistency:</strong> Post daily for 7 days minimum</li>
              <li>• <strong className="text-white">Engagement:</strong> Reply to every comment in first hour</li>
              <li>• <strong className="text-white">Timing:</strong> Post when your audience is most active</li>
              <li>• <strong className="text-white">Call-to-action:</strong> Always include clear next steps</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PromoKit;