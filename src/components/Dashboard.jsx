import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../contexts/UserContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import OfferGenerator from './modules/OfferGenerator';
import OfferStructure from './modules/OfferStructure';
import SalesCopyBuilder from './modules/SalesCopyBuilder';
import MVPChecklist from './modules/MVPChecklist';
import PromoKit from './modules/PromoKit';
import OfferOracle from './modules/OfferOracle';

const { FiZap, FiLayers, FiEdit3, FiCheckSquare, FiMegaphone, FiStar, FiUser, FiTrendingUp } = FiIcons;

const Dashboard = () => {
  const [activeModule, setActiveModule] = useState('generate');
  const { user } = useUser();

  const modules = [
    { id: 'generate', name: 'Generate Offer', icon: FiZap, color: 'from-yellow-400 to-orange-500' },
    { id: 'structure', name: 'Structure Offer', icon: FiLayers, color: 'from-blue-400 to-purple-500' },
    { id: 'copy', name: 'Sales Copy', icon: FiEdit3, color: 'from-green-400 to-teal-500' },
    { id: 'checklist', name: 'MVP Checklist', icon: FiCheckSquare, color: 'from-pink-400 to-red-500' },
    { id: 'promo', name: 'Promo Kit', icon: FiMegaphone, color: 'from-purple-400 to-indigo-500' },
    { id: 'oracle', name: 'Offer Oracle™', icon: FiStar, color: 'from-yellow-500 to-red-500' }
  ];

  const renderModule = () => {
    switch (activeModule) {
      case 'generate': return <OfferGenerator />;
      case 'structure': return <OfferStructure />;
      case 'copy': return <SalesCopyBuilder />;
      case 'checklist': return <MVPChecklist />;
      case 'promo': return <PromoKit />;
      case 'oracle': return <OfferOracle />;
      default: return <OfferGenerator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiZap} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">Micro-Product Forge</h1>
                <p className="text-purple-300 text-sm">
                  {user.niche} • {user.format}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <SafeIcon icon={FiUser} className="text-purple-300" />
                <span className="text-white font-semibold">
                  {user.tier === 'free' ? 'Free Trial' : 
                   user.tier === 'paid' ? '10-Pack' : 'Lifetime'}
                </span>
              </div>
              
              {user.tier !== 'lifetime' && (
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                  <SafeIcon icon={FiTrendingUp} className="text-yellow-400" />
                  <span className="text-white">
                    {user.tier === 'free' ? `${user.buildsRemaining} build left` : 
                     `${user.buildsRemaining} builds left`}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-white text-xl font-bold mb-6">Modules</h2>
              <nav className="space-y-2">
                {modules.map((module) => (
                  <motion.button
                    key={module.id}
                    onClick={() => setActiveModule(module.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                      activeModule === module.id
                        ? `bg-gradient-to-r ${module.color} text-white shadow-lg`
                        : 'text-purple-300 hover:bg-white/10 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <SafeIcon icon={module.icon} className="text-xl" />
                    <span className="font-medium">{module.name}</span>
                  </motion.button>
                ))}
              </nav>

              {/* Upgrade Prompts */}
              {user.tier === 'free' && user.buildsRemaining === 0 && (
                <motion.div
                  className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-black font-bold mb-2">You've seen the power!</h3>
                  <p className="text-black/80 text-sm mb-3">Now own it forever.</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                    🚀 Upgrade to Lifetime - $299
                  </button>
                </motion.div>
              )}

              {user.tier === 'paid' && user.buildsRemaining <= 3 && (
                <motion.div
                  className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-white font-bold mb-2">You're near the end!</h3>
                  <p className="text-white/80 text-sm mb-3">Don't stop now—unlock everything.</p>
                  <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                    🏆 Go Lifetime - $299
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              {renderModule()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;