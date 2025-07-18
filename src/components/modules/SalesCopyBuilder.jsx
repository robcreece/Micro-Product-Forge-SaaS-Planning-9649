import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit3, FiCopy, FiInstagram, FiLink, FiFileText } = FiIcons;

const SalesCopyBuilder = () => {
  const [generatedCopy, setGeneratedCopy] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { user } = useUser();

  const generateCopy = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const copy = {
      socialPost: `🚨 STRUGGLING WITH ${user.painPoint.toUpperCase()}? 

I just created the EXACT ${user.format.toLowerCase()} that helped me overcome this in ${user.niche.toLowerCase()}...

✅ No more ${user.painPoint.toLowerCase()}
✅ Clear, actionable steps
✅ Results in 7 days or less

This isn't another generic guide. This is specifically designed for ${user.niche.toLowerCase()} enthusiasts who are TIRED of ${user.painPoint.toLowerCase()}.

Link in bio 👆

#${user.niche.replace(/\s+/g, '')} #${user.painPoint.replace(/\s+/g, '')}Solution`,

      ctaOneLiner: `Stop letting ${user.painPoint.toLowerCase()} hold you back in ${user.niche.toLowerCase()} - get the solution that actually works 👆`,

      miniSalesPage: `# The ${user.niche} ${user.format} That Finally Eliminates ${user.painPoint}

## Are You Tired of ${user.painPoint} Sabotaging Your ${user.niche} Success?

You're not alone. 

Every day, thousands of ${user.niche.toLowerCase()} enthusiasts struggle with the same frustrating problem: **${user.painPoint.toLowerCase()}**.

### Here's What's Really Happening:

- You know what you want to achieve in ${user.niche.toLowerCase()}
- You've tried multiple approaches and "solutions"
- But ${user.painPoint.toLowerCase()} keeps holding you back
- You're starting to wonder if you're just not cut out for this

**What if I told you the problem isn't YOU?**

## The Truth About ${user.painPoint}

Most ${user.niche.toLowerCase()} advice treats ${user.painPoint.toLowerCase()} like a minor inconvenience.

But you and I both know it's NOT minor.

It's the #1 thing standing between you and your ${user.niche.toLowerCase()} breakthrough.

## Introducing: The ${user.niche} ${user.format}

This isn't another generic ${user.format.toLowerCase()}.

This is a laser-focused solution that tackles ${user.painPoint.toLowerCase()} head-on with:

✅ **Proven Framework**: Step-by-step system that works even if you've failed before
✅ **Quick Wins**: See results in the first 24 hours
✅ **Real Solutions**: No fluff, just what actually works
✅ **${user.niche} Specific**: Designed specifically for your situation

### What You'll Get:

- Complete ${user.format.toLowerCase()} (47 pages of actionable content)
- Quick Start Action Plan (get results in 24 hours)
- Private Community Access (30 days)
- Email Templates Pack (copy-paste ready)

**Total Value: $208**
**Your Price Today: $47**
**You Save: $161**

## Limited Time Offer

This pricing is only available for the next 72 hours.

After that, it goes to the full $97 price.

**Don't let ${user.painPoint.toLowerCase()} steal another day from your ${user.niche.toLowerCase()} success.**

[GET INSTANT ACCESS - $47]

### 30-Day Money-Back Guarantee

If this doesn't help you overcome ${user.painPoint.toLowerCase()} in 30 days, I'll refund every penny.

No questions asked.

**Your success in ${user.niche.toLowerCase()} is just one click away.**

[CLAIM YOUR COPY NOW - $47]`
    };

    setGeneratedCopy(copy);
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
          <h2 className="text-white text-3xl font-bold mb-2">Sales Copy Builder</h2>
          <p className="text-purple-300 text-lg">
            High-converting copy for social posts & mini sales pages
          </p>
        </div>
      </div>

      {!generatedCopy && (
        <div className="text-center">
          <motion.button
            onClick={generateCopy}
            disabled={isGenerating}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              isGenerating
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-400 to-teal-500 text-white hover:from-green-500 hover:to-teal-600 transform hover:scale-105'
            }`}
            whileHover={!isGenerating ? { scale: 1.05 } : {}}
            whileTap={!isGenerating ? { scale: 0.95 } : {}}
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Crafting Your Copy...</span>
              </div>
            ) : (
              <>
                <SafeIcon icon={FiEdit3} className="inline mr-2" />
                Generate Sales Copy
              </>
            )}
          </motion.button>
        </div>
      )}

      {generatedCopy && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Social Post */}
          <div className="bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiInstagram} className="mr-2" />
              Social Media Post
            </h3>
            <div className="bg-white/10 rounded-lg p-4 relative">
              <pre className="text-white whitespace-pre-wrap text-sm">{generatedCopy.socialPost}</pre>
              <button 
                onClick={() => copyToClipboard(generatedCopy.socialPost)}
                className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiCopy} />
              </button>
            </div>
          </div>

          {/* CTA One-Liner */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiLink} className="mr-2" />
              Link-in-Bio CTA
            </h3>
            <div className="bg-white/10 rounded-lg p-4 relative">
              <p className="text-white">{generatedCopy.ctaOneLiner}</p>
              <button 
                onClick={() => copyToClipboard(generatedCopy.ctaOneLiner)}
                className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiCopy} />
              </button>
            </div>
          </div>

          {/* Mini Sales Page */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiFileText} className="mr-2" />
              Mini Sales Page
            </h3>
            <div className="bg-white/10 rounded-lg p-4 relative max-h-96 overflow-y-auto">
              <pre className="text-white whitespace-pre-wrap text-sm">{generatedCopy.miniSalesPage}</pre>
              <button 
                onClick={() => copyToClipboard(generatedCopy.miniSalesPage)}
                className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors sticky"
              >
                <SafeIcon icon={FiCopy} />
              </button>
            </div>
          </div>

          {/* Copy Tips */}
          <div className="bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
            <h3 className="text-white text-xl font-bold mb-4">💡 Copy Tips</h3>
            <ul className="space-y-2 text-purple-300">
              <li>• <strong className="text-white">Personalize it:</strong> Replace generic terms with your specific audience language</li>
              <li>• <strong className="text-white">Test variations:</strong> Try different headlines and CTAs</li>
              <li>• <strong className="text-white">Add urgency:</strong> Limited time offers create action</li>
              <li>• <strong className="text-white">Include social proof:</strong> Add testimonials when you have them</li>
              <li>• <strong className="text-white">Keep it simple:</strong> One clear message, one clear action</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SalesCopyBuilder;