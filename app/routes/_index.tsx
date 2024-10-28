import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Search,
  Settings,
  MessageSquare,
  Library,
  HelpCircle,
  User,
  FileText,
  Users,
  ClipboardList,
} from "lucide-react";

const Dashboard = () => {
  const mockTests = [
    { id: 1, title: "Civil Litigation", completed: 0 },
    { id: 2, title: "Criminal Litigation", completed: 0 },
    { id: 3, title: "Business Law", completed: 0 },
    { id: 4, title: "Property Law", completed: 0 },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 space-y-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Search className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold">
            <span className="text-purple-600">QLTS</span>
            <span className="text-teal-400">Geek</span>
          </span>
        </div>

        {/* Main Menu */}
        <nav className="space-y-4">
          <div className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
            >
              <FileText className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-purple-600">
              <span>Study for MCT</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
            >
              <ClipboardList className="w-5 h-5" />
              <span>Study for OSCE</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
            >
              <FileText className="w-5 h-5" />
              <span>Cheat Sheet</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
            >
              <Users className="w-5 h-5" />
              <span>QLTS Social</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
            >
              <User className="w-5 h-5" />
              <span>Tutor Support</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
            >
              <FileText className="w-5 h-5" />
              <span>Eligibility Criteria for QLTS</span>
            </a>
          </div>

          {/* Help Section */}
          <div className="pt-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Help</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
              >
                <Settings className="w-5 h-5" />
                <span>Setting</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
              >
                <HelpCircle className="w-5 h-5" />
                <span>Support</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
              >
                <Library className="w-5 h-5" />
                <span>Library</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-purple-600"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Message</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Search Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for track, artist or album..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-purple-600">
              <MessageSquare className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="/api/placeholder/40/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="text-sm font-medium">Sanket Pal</span>
                <span className="text-xs text-gray-500 block">Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Tests Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Mock Tests
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {mockTests.map((test) => (
              <div key={test.id} className="bg-white rounded-lg p-6 relative">
                <div className="absolute right-4 top-4">
                  <Heart className="w-5 h-5 text-gray-300" />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {test.completed}% Completed
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${test.completed}%` }}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <FileText className="w-10 h-10 text-purple-600 mb-2" />
                  <h3 className="text-lg font-medium text-gray-900">
                    {test.title}
                  </h3>
                </div>
                <button className="w-full py-2 text-center text-gray-500 hover:text-purple-600 bg-gray-50 rounded-md">
                  Take Test
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center mt-4">
            <span className="text-sm text-gray-500 mr-4">View More</span>
            <button className="p-1 text-gray-400 hover:text-purple-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 text-gray-400 hover:text-purple-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Practice Questions Section - Similar structure to Mock Tests */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Practice Questions
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {mockTests.map((test) => (
              <div key={test.id} className="bg-white rounded-lg p-6 relative">
                <div className="absolute right-4 top-4">
                  <Heart className="w-5 h-5 text-gray-300" />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">
                    {test.completed}% Completed
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${test.completed}%` }}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <FileText className="w-10 h-10 text-purple-600 mb-2" />
                  <h3 className="text-lg font-medium text-gray-900">
                    {test.title}
                  </h3>
                </div>
                <button className="w-full py-2 text-center text-gray-500 hover:text-purple-600 bg-gray-50 rounded-md">
                  Take Test
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center mt-4">
            <span className="text-sm text-gray-500 mr-4">View More</span>
            <button className="p-1 text-gray-400 hover:text-purple-600">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-1 text-gray-400 hover:text-purple-600">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
