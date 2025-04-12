import { useState } from 'react';
import { 
  ChevronRight, 
  Award, 
  Briefcase, 
  Calendar, 
  Check, 
  Clock, 
  Star, 
  MessageCircle, 
  Bell, 
  Settings,
  Search,
  TrendingUp
} from 'lucide-react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample data for the dashboard
  const challenges = [
    { id: 1, title: "Frontend Development Challenge", company: "TechCorp", status: "In Progress", dueDate: "Apr 18", matchScore: 92 },
    { id: 2, title: "Data Analysis Project", company: "AnalyticsPro", status: "Completed", dueDate: "Apr 10", matchScore: 88 },
    { id: 3, title: "UX Problem Solving", company: "DesignHub", status: "Not Started", dueDate: "Apr 25", matchScore: 95 }
  ];
  
  const matches = [
    { id: 1, position: "Jr. Frontend Developer", company: "WebSolutions", matchScore: 94, salary: "$70,000-85,000" },
    { id: 2, position: "UI/UX Designer", company: "CreativeTech", matchScore: 91, salary: "$65,000-80,000" },
    { id: 3, position: "Web Developer Intern", company: "StartupInc", matchScore: 87, salary: "$45,000-55,000" }
  ];
  
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "UI Design", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "Problem Solving", level: 82 }
  ];
  
  const badges = [
    { id: 1, name: "Code Master", description: "Completed 5 coding challenges" },
    { id: 2, name: "Quick Learner", description: "Finished challenge 30% faster than average" },
    { id: 3, name: "Problem Solver", description: "Top 10% in analytical thinking" }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">SkillMatch</h1>
          <p className="text-indigo-200 text-sm mt-1">Student Dashboard</p>
        </div>
        
        <nav className="mt-6">
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'overview' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            onClick={() => setActiveTab('overview')}
          >
            <TrendingUp size={18} />
            <span className="ml-3">Overview</span>
          </div>
          
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'challenges' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            onClick={() => setActiveTab('challenges')}
          >
            <Award size={18} />
            <span className="ml-3">Challenges</span>
          </div>
          
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'matches' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            onClick={() => setActiveTab('matches')}
          >
            <Briefcase size={18} />
            <span className="ml-3">Job Matches</span>
          </div>
          
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'skills' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            onClick={() => setActiveTab('skills')}
          >
            <Star size={18} />
            <span className="ml-3">Skills Profile</span>
          </div>
          
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'messages' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageCircle size={18} />
            <span className="ml-3">Messages</span>
          </div>
          
          <div 
            className={`flex items-center px-6 py-3 cursor-pointer ${activeTab === 'settings' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={18} />
            <span className="ml-3">Settings</span>
          </div>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="flex justify-between items-center px-8 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search challenges, skills..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative text-gray-600 hover:text-indigo-700">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <img 
                  src="/api/placeholder/36/36" 
                  alt="Profile" 
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="ml-2 font-medium">Alex Johnson</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-8">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-500 text-sm uppercase">Skill Match Score</h3>
                  <p className="text-3xl font-bold mt-2">86%</p>
                  <span className="text-green-500 text-sm flex items-center mt-2">
                    <TrendingUp size={16} className="mr-1" /> +4% this month
                  </span>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-500 text-sm uppercase">Challenges Completed</h3>
                  <p className="text-3xl font-bold mt-2">7</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-500 text-sm uppercase">Job Matches</h3>
                  <p className="text-3xl font-bold mt-2">12</p>
                  <span className="text-sm text-gray-500 mt-2 block">3 high matches</span>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-gray-500 text-sm uppercase">Interview Requests</h3>
                  <p className="text-3xl font-bold mt-2">2</p>
                  <span className="text-sm text-gray-500 mt-2 block">Respond by Apr 20</span>
                </div>
              </div>
              
              {/* Active Challenges */}
              <div className="bg-white rounded-lg shadow mb-8">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="font-semibold text-lg">Active Challenges</h3>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 text-sm border-b">
                        <th className="pb-3">Challenge</th>
                        <th className="pb-3">Company</th>
                        <th className="pb-3">Status</th>
                        <th className="pb-3">Due Date</th>
                        <th className="pb-3">Match Score</th>
                        <th className="pb-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {challenges.map(challenge => (
                        <tr key={challenge.id} className="border-b border-gray-100">
                          <td className="py-4">{challenge.title}</td>
                          <td>{challenge.company}</td>
                          <td>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              challenge.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                              challenge.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {challenge.status}
                            </span>
                          </td>
                          <td>{challenge.dueDate}</td>
                          <td>
                            <div className="flex items-center">
                              <span className="font-medium mr-2">{challenge.matchScore}%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                <div 
                                  className="bg-indigo-600 h-1.5 rounded-full" 
                                  style={{width: `${challenge.matchScore}%`}}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <button className="text-indigo-600 hover:text-indigo-800">
                              <ChevronRight size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    View all challenges
                  </button>
                </div>
              </div>
              
              {/* Top Matches and Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Top Matches */}
                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="font-semibold text-lg">Top Job Matches</h3>
                  </div>
                  <div className="p-6">
                    {matches.slice(0, 3).map((match, index) => (
                      <div key={match.id} className={`flex justify-between items-center ${index < 2 ? 'mb-4 pb-4 border-b' : ''}`}>
                        <div>
                          <h4 className="font-medium">{match.position}</h4>
                          <p className="text-gray-500 text-sm">{match.company}</p>
                          <p className="text-gray-500 text-sm">{match.salary}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-green-600 font-bold">{match.matchScore}%</span>
                          <button className="block mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
                            View Match
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Skills */}
                <div className="bg-white rounded-lg shadow">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="font-semibold text-lg">Your Top Skills</h3>
                  </div>
                  <div className="p-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full" 
                            style={{width: `${skill.level}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                    <button className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      View full skills assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'challenges' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Skill Challenges</h2>
              {/* Challenge content would go here */}
              <div className="bg-white rounded-lg shadow mb-6">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Recommended Challenges</h3>
                  <p className="text-gray-600 mb-4">Based on your skills profile, we've matched you with these challenges</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {challenges.map(challenge => (
                      <div key={challenge.id} className="border rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{challenge.title}</h4>
                            <p className="text-gray-500 text-sm">{challenge.company}</p>
                          </div>
                          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                            {challenge.matchScore}% Match
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Calendar size={14} className="mr-1" /> Due: {challenge.dueDate}
                          </span>
                          <button className="bg-indigo-600 text-white px-4 py-1 rounded text-sm hover:bg-indigo-700">
                            Start Challenge
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Your Challenge Progress</h3>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                      <p className="text-sm text-gray-500">Completed</p>
                      <p className="text-2xl font-bold text-green-600">5</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <p className="text-sm text-gray-500">In Progress</p>
                      <p className="text-2xl font-bold text-yellow-600">2</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <p className="text-sm text-gray-500">Available</p>
                      <p className="text-2xl font-bold text-blue-600">12</p>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-3">Recently Completed</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Check size={16} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Data Analysis Project</p>
                          <p className="text-sm text-gray-500">AnalyticsPro</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Score: 92/100</p>
                        <p className="text-xs text-gray-500">Completed Apr 10</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <Check size={16} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">JavaScript Coding Challenge</p>
                          <p className="text-sm text-gray-500">CodeCraft</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Score: 88/100</p>
                        <p className="text-xs text-gray-500">Completed Apr 5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'matches' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Job Matches</h2>
              {/* Matches content would go here */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Your Top Matches</h3>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                      <select className="border rounded p-1 text-sm">
                        <option>Match Score</option>
                        <option>Salary</option>
                        <option>Date Posted</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {matches.map(match => (
                      <div key={match.id} className="border rounded-lg p-6 hover:shadow-md transition">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="text-lg font-medium">{match.position}</h4>
                            <p className="text-gray-600">{match.company}</p>
                            <div className="mt-2 space-x-2">
                              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">Remote</span>
                              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">Full-time</span>
                              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700">Junior Level</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="bg-green-100 text-green-800 text-lg font-bold px-3 py-1 rounded-lg">
                              {match.matchScore}%
                            </div>
                            <p className="text-gray-500 mt-2">{match.salary}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h5 className="text-sm font-medium mb-2">Skills Match</h5>
                          <div className="flex space-x-2">
                            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">JavaScript</span>
                            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">React</span>
                            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">HTML/CSS</span>
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">Node.js</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-6">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock size={14} className="mr-1" /> Posted 3 days ago
                          </span>
                          <div className="space-x-3">
                            <button className="border border-indigo-600 text-indigo-600 px-4 py-1 rounded hover:bg-indigo-50">
                              Save
                            </button>
                            <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'skills' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Skills Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="bg-white rounded-lg shadow mb-6">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="font-semibold text-lg">Your Skills Assessment</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <h4 className="font-medium">{skill.name}</h4>
                              <span className="text-indigo-600 font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div 
                                className="bg-indigo-600 h-2 rounded-full" 
                                style={{width: `${skill.level}%`}}
                              ></div>
                            </div>
                            <div className="text-sm text-gray-500 flex justify-between">
                              <span>Industry Average: 70%</span>
                              <span className="text-green-600">+15%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-medium mb-3">Skill Recommendations</h4>
                        <div className="space-y-3">
                          <div className="p-3 border border-dashed border-gray-300 rounded-lg flex justify-between items-center">
                            <div>
                              <p className="font-medium">TypeScript</p>
                              <p className="text-sm text-gray-500">Complements your JavaScript skills</p>
                            </div>
                            <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700">
                              Take Assessment
                            </button>
                          </div>
                          
                          <div className="p-3 border border-dashed border-gray-300 rounded-lg flex justify-between items-center">
                            <div>
                              <p className="font-medium">Redux</p>
                              <p className="text-sm text-gray-500">Requested in 68% of React jobs</p>
                            </div>
                            <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700">
                              Take Assessment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow mb-6">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <h3 className="font-semibold text-lg">Your Skill Badges</h3>
                    </div>
                    <div className="p-6">
                      {badges.map(badge => (
                        <div key={badge.id} className="flex items-center mb-4 pb-4 border-b border-gray-100 last:border-b-0 last:mb-0 last:pb-0">
                          <div className="bg-indigo-100 p-3 rounded-full mr-4">
                            <Award size={20} className="text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">{badge.name}</h4>
                            <p className="text-sm text-gray-500">{badge.description}</p>
                          </div>
                        </div>
                      ))}
                      
                      <button className="w-full mt-2 text-sm text-indigo-600 font-medium">
                        View all badges
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Blind Matching Status</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Your profile is being matched anonymously to remove bias from the hiring process.
                    </p>
                    <div className="bg-white p-3 rounded-lg mb-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Age</span>
                        <span className="text-sm text-gray-500">Hidden</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg mb-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Gender</span>
                        <span className="text-sm text-gray-500">Hidden</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg mb-3">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Education</span>
                        <span className="text-sm text-gray-500">Hidden</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Location</span>
                        <span className="text-sm text-gray-500">Visible</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 text-indigo-600 text-sm font-medium">
                      Manage privacy settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {(activeTab === 'messages' || activeTab === 'settings') && (
            <div className="flex items-center justify-center h-64">
              <p className="text-gray-500">Content for {activeTab} tab coming soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}