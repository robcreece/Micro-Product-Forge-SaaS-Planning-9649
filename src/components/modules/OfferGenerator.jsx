import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiCopy, FiDownload, FiShare2 } = FiIcons;

const OfferGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOffer, setGeneratedOffer] = useState(null);
  const { user, addProduct } = useUser();

  const generateOffer = async () => {
    if (user.tier === 'free' && user.buildsRemaining === 0) {
      alert('You\'ve used your free build! Upgrade to continue creating.');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const offer = {
      name: `The ${user.niche} ${user.format} That Eliminates ${user.painPoint}`,
      transformationPromise: `Transform your ${user.niche.toLowerCase()} journey by completely eliminating ${user.painPoint.toLowerCase()} in just 7 days`,
      coreDeliverable: `A comprehensive ${user.format.toLowerCase()} that provides step-by-step strategies, proven frameworks, and actionable insights to overcome ${user.painPoint.toLowerCase()} and achieve breakthrough results in ${user.niche.toLowerCase()}`,
      uniqueAngle: `Unlike generic solutions, this focuses specifically on the ${user.painPoint.toLowerCase()} that's holding back ${user.niche.toLowerCase()} enthusiasts`,
      targetAudience: `${user.niche} beginners and intermediates struggling with ${user.painPoint.toLowerCase()}`,
      createdAt: new Date().toISOString()
    };

    setGeneratedOffer(offer);
    addProduct(offer);
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
          <h2 className="text-white text-3xl font-bold mb-2">Offer Generator</h2>
          <p className="text-purple-300 text-lg">
            AI creates your perfect micro-product in minutes
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
          <SafeIcon icon={FiZap} className="text-yellow-400" />
          <span className="text-white font-semibold">
            {user.tier === 'lifetime' ? 'Unlimited' : `${user.buildsRemaining} left`}
          </span>
        </div>
      </div>

      {/* Input Summary */}
      <div className="bg-white/5 rounded-xl p-6 mb-8">
        <h3 className="text-white text-xl font-semibold mb-4">Your Setup</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-purple-300 text-sm mb-1">Niche</div>
            <div className="text-white font-semibold">{user.niche}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-purple-300 text-sm mb-1">Pain Point</div>
            <div className="text-white font-semibold">{user.painPoint}</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-purple-300 text-sm mb-1">Format</div>
            <div className="text-white font-semibold">{user.format}</div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      {!generatedOffer && (
        <div className="text-center">
          <motion.button
            onClick={generateOffer}
            disabled={isGenerating || (user.tier === 'free' && user.buildsRemaining === 0)}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              isGenerating || (user.tier === 'free' && user.buildsRemaining === 0)
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105'
            }`}
            whileHover={!isGenerating ? { scale: 1.05 } : {}}
            whileTap={!isGenerating ? { scale: 0.95 } : {}}
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Forging Your Offer...</span>
              </div>
            ) : (
              <>
                <SafeIcon icon={FiZap} className="inline mr-2" />
                Generate My Micro-Product
              </>
            )}
          </motion.button>
        </div>
      )}

      {/* Generated Offer */}
      {generatedOffer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30">
            <h3 className="text-white text-2xl font-bold mb-4">🎉 Your Micro-Product is Ready!</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-purple-300 text-sm font-semibold mb-2 block">OFFER NAME</label>
                <div className="bg-white/10 rounded-lg p-4 relative">
                  <p className="text-white text-lg font-semibold">{generatedOffer.name}</p>
                  <button 
                    onClick={() => copyToClipboard(generatedOffer.name)}
                    className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors"
                  >
                    <SafeIcon icon={FiCopy} />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-purple-300 text-sm font-semibold mb-2 block">TRANSFORMATION PROMISE</label>
                <div className="bg-white/10 rounded-lg p-4 relative">
                  <p className="text-white">{generatedOffer.transformationPromise}</p>
                  <button 
                    onClick={() => copyToClipboard(generatedOffer.transformationPromise)}
                    className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors"
                  >
                    <SafeIcon icon={FiCopy} />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-purple-300 text-sm font-semibold mb-2 block">CORE DELIVERABLE</label>
                <div className="bg-white/10 rounded-lg p-4 relative">
                  <p className="text-white">{generatedOffer.coreDeliverable}</p>
                  <button 
                    onClick={() => copyToClipboard(generatedOffer.coreDeliverable)}
                    className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors"
                  >
                    <SafeIcon icon={FiCopy} />
                  </button>
                </div>
              </div>

              <div>
                <label className="text-purple-300 text-sm font-semibold mb-2 block">UNIQUE ANGLE</label>
                <div className="bg-white/10 rounded-lg p-4 relative">
                  <p className="text-white">{generatedOffer.uniqueAngle}</p>
                  <button 
                    onClick={() => copyToClipboard(generatedOffer.uniqueAngle)}
                    className="absolute top-2 right-2 text-purple-300 hover:text-white transition-colors"
                  >
                    <SafeIcon icon={FiCopy} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors">
                <SafeIcon icon={FiDownload} />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors">
                <SafeIcon icon={FiShare2} />
                <span>Share Link</span>
              </button>
              <button 
                onClick={generateOffer}
                className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all"
              >
                <SafeIcon icon={FiZap} />
                <span>Generate Another</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OfferGenerator;