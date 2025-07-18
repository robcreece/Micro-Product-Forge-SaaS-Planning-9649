import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLayers, FiDollarSign, FiTrendingUp, FiGift } = FiIcons;

const OfferStructure = () => {
  const [generatedStructure, setGeneratedStructure] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { user } = useUser();

  const generateStructure = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const structure = {
      coreOffer: {
        name: `The ${user.niche} ${user.format}`,
        price: '$47',
        description: `Complete ${user.format.toLowerCase()} addressing ${user.painPoint.toLowerCase()}`
      },
      bonuses: [
        {
          name: 'Quick Start Action Plan',
          value: '$27',
          description: 'Get results in your first 24 hours'
        },
        {
          name: 'Private Community Access',
          value: '$97',
          description: '30-day access to exclusive community'
        },
        {
          name: 'Email Templates Pack',
          value: '$37',
          description: 'Copy-paste templates for immediate use'
        }
      ],
      pricing: {
        totalValue: '$208',
        yourPrice: '$47',
        savings: '$161'
      },
      upsells: [
        {
          name: 'Advanced Masterclass',
          price: '$97',
          description: 'Deep-dive 2-hour video training'
        },
        {
          name: 'Done-With-You Coaching',
          price: '$297',
          description: '1-on-1 implementation session'
        }
      ],
      offerStack: [
        'Core deliverable that solves the main problem',
        'Quick-win bonus for immediate results',
        'Community access for ongoing support',
        'Templates/tools for easy implementation',
        'Limited-time pricing with urgency'
      ]
    };

    setGeneratedStructure(structure);
    setIsGenerating(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">Offer Structure</h2>
          <p className="text-purple-300 text-lg">
            Optimize your offer with bonuses, pricing, and upsells
          </p>
        </div>
      </div>

      {!generatedStructure && (
        <div className="text-center">
          <motion.button
            onClick={generateStructure}
            disabled={isGenerating}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              isGenerating
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600 transform hover:scale-105'
            }`}
            whileHover={!isGenerating ? { scale: 1.05 } : {}}
            whileTap={!isGenerating ? { scale: 0.95 } : {}}
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Structuring Your Offer...</span>
              </div>
            ) : (
              <>
                <SafeIcon icon={FiLayers} className="inline mr-2" />
                Generate Offer Structure
              </>
            )}
          </motion.button>
        </div>
      )}

      {generatedStructure && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Core Offer */}
          <div className="bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiDollarSign} className="mr-2" />
              Core Offer
            </h3>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="text-white text-xl font-semibold mb-2">{generatedStructure.coreOffer.name}</h4>
              <p className="text-purple-300 mb-2">{generatedStructure.coreOffer.description}</p>
              <div className="text-2xl font-bold text-yellow-400">{generatedStructure.coreOffer.price}</div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiGift} className="mr-2" />
              Bonuses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {generatedStructure.bonuses.map((bonus, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">{bonus.name}</h4>
                  <p className="text-purple-300 text-sm mb-2">{bonus.description}</p>
                  <div className="text-green-400 font-bold">Value: {bonus.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30">
            <h3 className="text-white text-2xl font-bold mb-4">Pricing Breakdown</h3>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-300">Total Value:</span>
                <span className="text-white font-semibold line-through">{generatedStructure.pricing.totalValue}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-purple-300">Your Price:</span>
                <span className="text-yellow-400 text-2xl font-bold">{generatedStructure.pricing.yourPrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-300">You Save:</span>
                <span className="text-green-400 font-bold">{generatedStructure.pricing.savings}</span>
              </div>
            </div>
          </div>

          {/* Upsells */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white text-2xl font-bold mb-4 flex items-center">
              <SafeIcon icon={FiTrendingUp} className="mr-2" />
              Upsell Ideas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generatedStructure.upsells.map((upsell, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">{upsell.name}</h4>
                  <p className="text-purple-300 text-sm mb-2">{upsell.description}</p>
                  <div className="text-yellow-400 font-bold">{upsell.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Offer Stack */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white text-2xl font-bold mb-4">Offer Stack Strategy</h3>
            <ul className="space-y-2">
              {generatedStructure.offerStack.map((item, index) => (
                <li key={index} className="flex items-start space-x-2 text-purple-300">
                  <span className="text-yellow-400 font-bold">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OfferStructure;