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
  const [selectedOption, setSelectedOption] = useState(null);
  
  const question = {
    text: "What is the stage in mitosis where DNA replication takes place?",
    options: [
      { id: 'A', text: 'Interphase' },
      { id: 'B', text: 'Metaphase' },
      { id: 'C', text: 'Anaphase' },
      { id: 'D', text: 'Prophase' }
    ]
  };

  return (
    <div className="min-h-screen bg-white-900 p-6 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-white rounded-3xl">
        <CardHeader className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Life Sciences Mock Tests</h2>
              <p className="text-gray-500">Session 1</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-60 bg-gray-200 rounded-full h-2">
                <div className="w-1/5 bg-purple-600 h-2 rounded-full"></div>
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
          <div className="mb-8">
            <h3 className="text-gray-500 mb-4">Question 1</h3>
            <p className="text-gray-700 text-lg">{question.text}</p>
          </div>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
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

          <div className="flex justify-between mt-12">
            <div className="flex gap-4">
              <Button 
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Previous
              </Button>
              <Button 
                variant="outline"
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight size={16} />
              </Button>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8">
              Finish
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MCTMockTest;