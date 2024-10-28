import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

const Button = React.forwardRef(({ className, variant, children, ...props }, ref) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border border-gray-200 hover:bg-gray-50 text-gray-700';
      default:
        return 'bg-purple-600 hover:bg-purple-700 text-white';
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ${getVariantClasses()} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

const Card = ({ className, children, ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={`p-4 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const MCTMockTest = () => {  
  const questions = [
    {
      text: "What is the stage in mitosis where DNA replication takes place?",
      options: [
        { id: 'A', text: 'Interphase' },
        { id: 'B', text: 'Metaphase' },
        { id: 'C', text: 'Anaphase' },
        { id: 'D', text: 'Prophase' }
      ]
    },
    {
      text: "How many cells do we have at the end of Telephase II in meiosis?",
      options: [
        { id: 'A', text: '3' },
        { id: 'B', text: '2' },
        { id: 'C', text: '4' },
        { id: 'D', text: '1' }
      ]
    },
    // Add more questions here as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [progressPercentage, setProgressPercentage] = useState(0);

  const handleOptionSelect = (optionId) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = optionId;
    setSelectedOptions(updatedOptions);

    // Update the progress bar if this is a new answer
    const answeredCount = updatedOptions.filter(option => option !== null).length;
    setProgressPercentage(Math.round((answeredCount / questions.length) * 100 / 10) * 10);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNavigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-white-900 p-6 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-white rounded-3xl">
        <CardHeader className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Life Sciences Mock Test</h2>
              <p className="text-gray-500">Session 1</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div>
                <p className="text-gray-500 ml-10 mb-1">{progressPercentage}%</p>
                <div className="w-60 bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-purple-600 transition-width duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="px-4 py-1 bg-gray-200 rounded-full text-sm">
                review
              </button>
              
              <button className="px-4 py-1 border border-gray-300 rounded-full text-sm">
                Mark as review
              </button>
              
              <div className="flex items-center gap-2 text-gray-500">
                <Clock size={16} />
                <span>00:00 Min</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Question Content */}
          <div className="mb-8">
            <h3 className="text-gray-500 mb-4">Question {currentQuestionIndex + 1}</h3>
            <p className="text-gray-700 text-lg">{currentQuestion.text}</p>
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`w-full p-4 rounded-lg border ${
                  selectedOption === option.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:bg-gray-50'
                } flex items-center justify-between transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-1 h-6 bg-purple-600 rounded-full opacity-0 transition-opacity">
                    {selectedOption === option.id && <div className="opacity-100" />}
                  </div>
                  <span>{option.text}</span>
                </div>
                <div className={`w-4 h-4 rounded-full border ${
                  selectedOption === option.id
                    ? 'border-purple-600 bg-purple-600'
                    : 'border-gray-300'
                }`}>
                  {selectedOption === option.id && (
                    <div className="w-2 h-2 bg-white rounded-full m-1" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Question Navigation */}
          <div className="mt-6 grid grid-cols-8 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigateToQuestion(index)}
                className={`p-2 text-sm rounded ${
                  selectedOptions[index]
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                } ${currentQuestionIndex === index ? 'ring-2 ring-purple-600' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-12">
            <div className="flex gap-4">
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <ArrowLeft size={16} />
                Previous
              </Button>
              <Button 
                variant="outline"
                className="flex items-center gap-2"
                onClick={handleNext}
                disabled={isLastQuestion}
              >
                Next
                <ArrowRight size={16} />
              </Button>
            </div>
            <Button 
              className="px-8 'bg-purple-600 text-white' hover:bg-purple-700"
              disabled={!isLastQuestion}
            >
              Finish
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MCTMockTest;
