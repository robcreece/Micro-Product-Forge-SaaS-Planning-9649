{/* Update the problematic SVG background pattern line */}
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiTarget, FiTrendingUp, FiDollarSign, FiClock, FiCheck } = FiIcons;

const LandingPage = () => {
  const navigate = useNavigate();

  // ... rest of your component code ...

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects - Fixed SVG pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Rest of your component remains the same */}
    </div>
  );
};

export default LandingPage;