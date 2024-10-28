import React, { useState } from 'react';

const MockTest = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [progress, setProgress] = useState(20);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  const handlePrevious = () => {
    setProgress((prev) => Math.max(prev - 20, 0));
  };

  return (
    <div className="max-w-3xl mx-auto bg-grey-50 rounded-lg p-6 font-sans shadow-md">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">MCT Mock Tests</h2>
          <p className="text-sm text-gray-600">Session 1</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xs bg-gray-300 text-gray-700 px-3 py-1 rounded">Review</button>
          <button className="text-xs bg-gray-300 text-gray-700 px-3 py-1 rounded">Mark as review</button>
          <div className="text-sm text-gray-600">00:00 Min</div>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="mb-6">
        <p className="font-semibold text-lg">Question 1</p>
        <p className="text-gray-700">The Indian Contract Act 1872 came into force on...</p>
      </div>

      <div className="space-y-4 mb-6">
        {['Option A', 'Option B', 'Option C', 'Option D'].map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={option}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="mr-2 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor={option} className="text-gray-700">{option}</label>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={handlePrevious} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Previous
        </button>
        <button onClick={handleNext} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Next
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Finish
        </button>
      </div>
    </div>
  );
};

export default MockTest;
