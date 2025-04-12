import React from 'react';

const SkillCard = ({ title, percentage }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{percentage}%</span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;