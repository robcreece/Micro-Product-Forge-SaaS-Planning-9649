import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiArrowRight, FiTarget, FiUsers, FiFileText } = FiIcons;

const OnboardingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    niche: '',
    painPoint: '',
    format: ''
  });
  const { updateUser } = useUser();
  const navigate = useNavigate();

  const niches = [
    'Health & Fitness', 'Business & Marketing', 'Personal Development',
    'Technology & AI', 'Finance & Investing', 'Relationships & Dating',
    'Parenting & Family', 'Education & Learning', 'Creative Arts',
    'Home & Garden', 'Travel & Lifestyle', 'Spiritual & Mindfulness'
  ];

  const painPoints = [
    'Lack of time', 'Overwhelm & stress', 'Lack of knowledge',
    'Fear of failure', 'Procrastination', 'Lack of motivation',
    'Analysis paralysis', 'Imposter syndrome', 'Perfectionism',
    'Lack of clarity', 'Information overload', 'Lack of confidence'
  ];

  const formats = [
    { name: 'PDF Guide', icon: FiFileText, description: 'Comprehensive written guide' },
    { name: 'Checklist', icon: FiTarget, description: 'Step-by-step action items' },
    { name: 'Mini Audio Course', icon: FiUsers, description: '3-5 short audio lessons' },
    { name: 'Template Pack', icon: FiFileText, description: 'Ready-to-use templates' },
    { name: 'Video Series', icon: FiUsers, description: 'Short video tutorials' },
    { name: 'Workbook', icon: FiFileText, description: 'Interactive exercises' }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      updateUser({
        niche: formData.niche,
        painPoint: formData.painPoint,
        format: formData.format
      });
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1: return formData.niche;
      case 2: return formData.painPoint;
      case 3: return formData.format;
      default: return false;
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-white text-2xl font-bold">Setup Your Micro-Product</h1>
            <div className="text-purple-300">Step {currentStep} of 3</div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
        >
          {/* Step 1: Niche Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-white text-3xl font-bold mb-4">Pick Your Niche</h2>
              <p className="text-purple-300 text-lg mb-8">
                What area do you want to create your micro-product in?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {niches.map((niche, index) => (
                  <motion.button
                    key={index}
                    onClick={() => updateFormData('niche', niche)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      formData.niche === niche
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {niche}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Pain Point */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-white text-3xl font-bold mb-4">Identify the Pain Point</h2>
              <p className="text-purple-300 text-lg mb-8">
                What's your audience's biggest frustration in <span className="text-yellow-400">{formData.niche}</span>?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {painPoints.map((pain, index) => (
                  <motion.button
                    key={index}
                    onClick={() => updateFormData('painPoint', pain)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      formData.painPoint === pain
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pain}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Format Selection */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-white text-3xl font-bold mb-4">Choose Your Format</h2>
              <p className="text-purple-300 text-lg mb-8">
                How do you want to deliver your solution?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formats.map((format, index) => (
                  <motion.button
                    key={index}
                    onClick={() => updateFormData('format', format.name)}
                    className={`p-6 rounded-xl text-left transition-all duration-300 ${
                      formData.format === format.name
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center mb-3">
                      <SafeIcon icon={format.icon} className="text-2xl mr-3" />
                      <h3 className="text-xl font-semibold">{format.name}</h3>
                    </div>
                    <p className="opacity-80">{format.description}</p>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
                currentStep === 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <SafeIcon icon={FiArrowLeft} className="mr-2" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className={`flex items-center px-8 py-3 rounded-full font-semibold transition-all ${
                isStepComplete()
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep === 3 ? 'Create Dashboard' : 'Next'}
              <SafeIcon icon={FiArrowRight} className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingWizard;