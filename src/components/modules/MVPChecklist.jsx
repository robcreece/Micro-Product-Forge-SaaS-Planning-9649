import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../../contexts/UserContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheckSquare, FiClock, FiCheck, FiSquare } = FiIcons;

const MVPChecklist = () => {
  const [checklist, setChecklist] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [completedItems, setCompletedItems] = useState(new Set());
  const { user } = useUser();

  const generateChecklist = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const checklistData = {
      title: `48-Hour Launch Plan for Your ${user.format}`,
      phases: [
        {
          name: 'Day 1: Content Creation (8 hours)',
          tasks: [
            'Write your core content outline (1 hour)',
            'Create the main content/guide (4 hours)',
            'Design simple cover/graphics (1 hour)',
            'Write bonus materials (1 hour)',
            'Review and edit everything (1 hour)'
          ]
        },
        {
          name: 'Day 1 Evening: Setup (2 hours)',
          tasks: [
            'Set up payment processor (Stripe/PayPal)',
            'Create simple landing page',
            'Set up email delivery system',
            'Test purchase flow end-to-end',
            'Write launch announcement'
          ]
        },
        {
          name: 'Day 2: Marketing & Launch (6 hours)',
          tasks: [
            'Create social media posts (1 hour)',
            'Record video testimonial/demo (1 hour)',
            'Post on relevant communities (1 hour)',
            'Email your network (1 hour)',
            'Go live on social media (1 hour)',
            'Monitor and respond to comments (1 hour)'
          ]
        },
        {
          name: 'Day 2 Evening: Optimization (2 hours)',
          tasks: [
            'Review analytics and feedback',
            'Make quick improvements',
            'Plan follow-up content',
            'Set up automated email sequence',
            'Schedule social media posts for week 2'
          ]
        }
      ],
      quickWins: [
        'Use Canva for quick graphics',
        'Record on your phone for authenticity',
        'Start with friends/family for initial sales',
        'Use social proof immediately',
        'Price low for quick validation'
      ],
      tools: [
        'Canva (graphics)',
        'Stripe (payments)',
        'ConvertKit (email)',
        'Carrd (landing page)',
        'Zoom (video content)'
      ]
    };

    setChecklist(checklistData);
    setIsGenerating(false);
  };

  const toggleTask = (phaseIndex, taskIndex) => {
    const taskId = `${phaseIndex}-${taskIndex}`;
    const newCompleted = new Set(completedItems);
    
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    
    setCompletedItems(newCompleted);
  };

  const getPhaseProgress = (phaseIndex) => {
    const phaseTasks = checklist.phases[phaseIndex].tasks.length;
    const completedTasks = checklist.phases[phaseIndex].tasks.filter((_, taskIndex) => 
      completedItems.has(`${phaseIndex}-${taskIndex}`)
    ).length;
    
    return Math.round((completedTasks / phaseTasks) * 100);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">48-Hour MVP Checklist</h2>
          <p className="text-purple-300 text-lg">
            Step-by-step launch plan to go from idea to sales
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
          <SafeIcon icon={FiClock} className="text-yellow-400" />
          <span className="text-white font-semibold">48 Hours</span>
        </div>
      </div>

      {!checklist && (
        <div className="text-center">
          <motion.button
            onClick={generateChecklist}
            disabled={isGenerating}
            className={`px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 ${
              isGenerating
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-pink-400 to-red-500 text-white hover:from-pink-500 hover:to-red-600 transform hover:scale-105'
            }`}
            whileHover={!isGenerating ? { scale: 1.05 } : {}}
            whileTap={!isGenerating ? { scale: 0.95 } : {}}
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Creating Your Checklist...</span>
              </div>
            ) : (
              <>
                <SafeIcon icon={FiCheckSquare} className="inline mr-2" />
                Generate Launch Checklist
              </>
            )}
          </motion.button>
        </div>
      )}

      {checklist && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-400/20 to-red-500/20 rounded-xl p-6 border border-pink-400/30">
            <h3 className="text-white text-2xl font-bold mb-2">{checklist.title}</h3>
            <p className="text-purple-300">Follow this step-by-step plan to launch in 48 hours</p>
          </div>

          {/* Phases */}
          {checklist.phases.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="bg-white/5 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white text-xl font-bold">{phase.name}</h4>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-400 to-red-500 transition-all duration-300"
                      style={{ width: `${getPhaseProgress(phaseIndex)}%` }}
                    ></div>
                  </div>
                  <span className="text-purple-300 text-sm">{getPhaseProgress(phaseIndex)}%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {phase.tasks.map((task, taskIndex) => {
                  const taskId = `${phaseIndex}-${taskIndex}`;
                  const isCompleted = completedItems.has(taskId);
                  
                  return (
                    <motion.div
                      key={taskIndex}
                      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-green-500/20 border border-green-500/30' 
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                      onClick={() => toggleTask(phaseIndex, taskIndex)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <SafeIcon 
                        icon={isCompleted ? FiCheck : FiSquare} 
                        className={`text-xl ${isCompleted ? 'text-green-400' : 'text-purple-300'}`}
                      />
                      <span className={`flex-1 ${isCompleted ? 'text-green-300 line-through' : 'text-white'}`}>
                        {task}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Quick Wins */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-white text-xl font-bold mb-4">💡 Quick Wins</h4>
            <ul className="space-y-2">
              {checklist.quickWins.map((win, index) => (
                <li key={index} className="flex items-start space-x-2 text-purple-300">
                  <span className="text-yellow-400">•</span>
                  <span>{win}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended Tools */}
          <div className="bg-white/5 rounded-xl p-6">
            <h4 className="text-white text-xl font-bold mb-4">🛠️ Recommended Tools</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {checklist.tools.map((tool, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                  <span className="text-white font-semibold">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MVPChecklist;