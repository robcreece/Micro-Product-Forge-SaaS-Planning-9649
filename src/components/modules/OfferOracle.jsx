import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiZap, FiRefreshCw, FiTrendingUp } = FiIcons;

const OfferOracle = () => {
  const [oracleResult, setOracleResult] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const { user } = useUser();

  const offerArchetypes = [
    {
      name: "The Recession Responder",
      theme: "Economic Resilience",
      description: "Help people thrive during tough economic times",
      examples: ["Side Hustle Starter Kit", "Debt Elimination Blueprint", "Emergency Fund Formula"],
      painPoint: "Financial insecurity",
      trending: true
    },
    {
      name: "The Time Savior",
      theme: "Productivity & Efficiency",
      description: "Give people their time back with smart systems",
      examples: ["2-Hour Workday System", "Automation Toolkit", "Quick Win Checklist"],
      painPoint: "Time scarcity",
      trending: true
    },
    {
      name: "The Lead Magnet Slayer",
      theme: "Marketing Optimization",
      description: "Transform boring lead magnets into conversion machines",
      examples: ["Irresistible Opt-in Formula", "List Building Accelerator", "Engagement Booster Pack"],
      painPoint: "Low conversion rates",
      trending: false
    },
    {
      name: "The Confidence Catalyst",
      theme: "Personal Development",
      description: "Eliminate self-doubt and imposter syndrome",
      examples: ["Confidence Code", "Fear Elimination Protocol", "Success Mindset Shift"],
      painPoint: "Self-doubt",
      trending: true
    },
    {
      name: "The Clarity Creator",
      theme: "Decision Making",
      description: "Cut through confusion and create crystal clear direction",
      examples: ["Decision Matrix", "Goal Clarity Framework", "Vision Board 2.0"],
      painPoint: "Analysis paralysis",
      trending: false
    },
    {
      name: "The Burnout Breaker",
      theme: "Work-Life Balance",
      description: "Prevent and recover from burnout with sustainable practices",
      examples: ["Energy Management System", "Boundary Setting Guide", "Recovery Roadmap"],
      painPoint: "Burnout and exhaustion",
      trending: true
    },
    {
      name: "The Skill Stacker",
      theme: "Learning & Development",
      description: "Fast-track skill acquisition for career advancement",
      examples: ["30-Day Skill Sprint", "Learning Acceleration Method", "Expertise Fast Track"],
      painPoint: "Skill gaps",
      trending: false
    },
    {
      name: "The Relationship Rescuer",
      theme: "Communication & Relationships",
      description: "Fix broken connections and build stronger bonds",
      examples: ["Communication Repair Kit", "Conflict Resolution Formula", "Trust Building Blueprint"],
      painPoint: "Relationship struggles",
      trending: false
    },
    {
      name: "The Digital Detox Doctor",
      theme: "Technology & Wellness",
      description: "Reclaim focus and mental clarity in the digital age",
      examples: ["Screen Time Solution", "Focus Recovery Program", "Digital Minimalism Guide"],
      painPoint: "Digital overwhelm",
      trending: true
    },
    {
      name: "The Momentum Multiplier",
      theme: "Motivation & Action",
      description: "Break through procrastination and build unstoppable momentum",
      examples: ["Action Trigger System", "Momentum Starter Pack", "Procrastination Killer"],
      painPoint: "Lack of motivation",
      trending: false
    }
  ];

  const drawOracle = async () => {
    if (user.tier === 'free') {
      alert('Oracle access requires upgrade! Get the $299 Lifetime Deal to unlock this feature.');
      return;
    }

    setIsDrawing(true);
    
    // Simulate mystical drawing process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const randomArchetype = offerArchetypes[Math.floor(Math.random() * offerArchetypes.length)];
    
    const result = {
      archetype: randomArchetype,
      customOffer: generateCustomOffer(randomArchetype),
      trendingScore: Math.floor(Math.random() * 40) + 60, // 60-100
      marketOpportunity: generateMarketOpportunity(randomArchetype),
      timestamp: new Date().toISOString()
    };

    setOracleResult(result);
    setIsDrawing(false);
  };

  const generateCustomOffer = (archetype) => {
    const formats = ['Blueprint', 'Toolkit', 'Masterclass', 'Checklist', 'Framework', 'System'];
    const format = formats[Math.floor(Math.random() * formats.length)];
    
    return {
      name: `The ${archetype.name} ${format}`,
      tagline: `Eliminate ${archetype.painPoint} in 7 days or less`,
      corePromise: `Transform your ${archetype.theme.toLowerCase()} with this proven ${format.toLowerCase()}`,
      pricing: `$${Math.floor(Math.random() * 50) + 27}` // $27-$77
    };
  };

  const generateMarketOpportunity = (archetype) => {
    const opportunities = [
      'High search volume, low competition',
      'Trending topic with growing demand',
      'Underserved market segment',
      'Seasonal opportunity peak',
      'Emerging pain point trend'
    ];
    
    return opportunities[Math.floor(Math.random() * opportunities.length)];
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">🎲 Offer Oracle™</h2>
          <p className="text-purple-300 text-lg">
            Gamified trend-based offer generator for creative sparks
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full px-4 py-2">
          <SafeIcon icon={FiStar} className="text-white" />
          <span className="text-white font-semibold">Oracle</span>
        </div>
      </div>

      {/* Oracle Interface */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-2xl p-8 border border-yellow-500/30 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-full flex items-center justify-center">
              <SafeIcon icon={FiStar} className="text-4xl text-yellow-400" />
            </div>
          </div>
          <h3 className="text-white text-2xl font-bold mb-2">The Oracle Awaits</h3>
          <p className="text-purple-300">
            Draw a mystical offer archetype based on current market trends and timeless pain points
          </p>
        </div>

        {user.tier === 'free' ? (
          <div className="bg-white/10 rounded-xl p-6 mb-6">
            <h4 className="text-white text-xl font-bold mb-2">🔮 Oracle Access Locked</h4>
            <p className="text-purple-300 mb-4">
              Unlock the mystical power of the Oracle with the Lifetime Deal
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all">
              🚀 Upgrade to Lifetime - $299
            </button>
          </div>
        ) : (
          <motion.button
            onClick={drawOracle}
            disabled={isDrawing}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              isDrawing
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-500 to-red-500 text-white hover:from-yellow-600 hover:to-red-600 transform hover:scale-105'
            }`}
            whileHover={!isDrawing ? { scale: 1.05 } : {}}
            whileTap={!isDrawing ? { scale: 0.95 } : {}}
          >
            {isDrawing ? (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Consulting the Oracle...</span>
              </div>
            ) : (
              <>
                <SafeIcon icon={FiZap} className="inline mr-2" />
                Draw Your Mystical Offer
              </>
            )}
          </motion.button>
        )}
      </div>

      {/* Oracle Result */}
      {oracleResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 space-y-6"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-2xl font-bold">🔮 The Oracle Has Spoken</h3>
              {oracleResult.archetype.trending && (
                <div className="flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  <SafeIcon icon={FiTrendingUp} className="text-xs" />
                  <span>TRENDING</span>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-yellow-400 font-bold text-lg mb-2">
                  {oracleResult.archetype.name}
                </h4>
                <p className="text-purple-300 text-sm mb-3">
                  {oracleResult.archetype.description}
                </p>
                <div className="text-white">
                  <strong>Theme:</strong> {oracleResult.archetype.theme}
                </div>
                <div className="text-white">
                  <strong>Pain Point:</strong> {oracleResult.archetype.painPoint}
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="text-yellow-400 font-bold text-lg mb-2">
                  Your Custom Offer
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="text-white">
                    <strong>Name:</strong> {oracleResult.customOffer.name}
                  </div>
                  <div className="text-white">
                    <strong>Tagline:</strong> {oracleResult.customOffer.tagline}
                  </div>
                  <div className="text-white">
                    <strong>Promise:</strong> {oracleResult.customOffer.corePromise}
                  </div>
                  <div className="text-green-400 font-bold">
                    <strong>Suggested Price:</strong> {oracleResult.customOffer.pricing}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Opportunity */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-white text-xl font-bold mb-4">📈 Market Opportunity</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-purple-300 text-sm mb-1">Trending Score</div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full"
                      style={{ width: `${oracleResult.trendingScore}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-bold">{oracleResult.trendingScore}%</span>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-purple-300 text-sm mb-1">Market Status</div>
                <div className="text-white font-semibold">{oracleResult.marketOpportunity}</div>
              </div>
            </div>
          </div>

          {/* Example Offers */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-white text-xl font-bold mb-4">💡 Inspiration Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {oracleResult.archetype.examples.map((example, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-purple-300">{example}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Draw Again */}
          <div className="text-center">
            <button
              onClick={drawOracle}
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-600 hover:to-red-600 transition-all mx-auto"
            >
              <SafeIcon icon={FiRefreshCw} />
              <span>Draw Another Oracle</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OfferOracle;