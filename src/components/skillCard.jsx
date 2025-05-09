import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, percentage }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#8B5CF6",
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">{percentage}%</span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ 
            background: "linear-gradient(90deg, #8B5CF6, #EC4899, #F97316)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        ></motion.div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        <p>Projects completed using {title}: {Math.round(percentage/10)}</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;