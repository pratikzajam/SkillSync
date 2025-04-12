import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const App = () => {
  const [email, setEmail] = useState('');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Testimonial data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      quote: "This platform completely changed my job search. Instead of sending countless resumes, I solved real challenges that showcased my skills. I received 3 job offers within a month!"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "AnalyticsPro",
      quote: "The blind matching system eliminated bias from my job search. Companies evaluated me purely on my abilities, not my background. I found a role that truly values my expertise."
    },
    {
      name: "Emma Rodriguez",
      role: "HR Director",
      company: "InnovateX",
      quote: "As a hiring manager, this platform has revolutionized our recruitment process. We've reduced hiring time by 40% and found exceptional talent we might have overlooked through traditional methods."
    }
  ];

  const howItWorksCandidate = [
    {
      title: "Complete Skill Challenges",
      description: "Showcase your abilities through real-world tasks designed to highlight your expertise.",
      icon: "🏆"
    },
    {
      title: "Get Matched Anonymously",
      description: "Our AI matches your skills with companies looking for your specific talents - no resume required.",
      icon: "🔒"
    },
    {
      title: "Connect When There's Interest",
      description: "Reveal your identity only after mutual interest is established, ensuring fair evaluation.",
      icon: "💬"
    }
  ];

  const howItWorksCompany = [
    {
      title: "Create Real-World Challenges",
      description: "Design tasks that reflect your actual work environment and skill requirements.",
      icon: "🚀"
    },
    {
      title: "Review Anonymous Submissions",
      description: "Evaluate candidates based purely on their performance, not background or demographics.",
      icon: "🔍"
    },
    {
      title: "Connect With Top Performers",
      description: "Engage with candidates who have proven their abilities through your specific challenges.",
      icon: "👥"
    }
  ];

  // Featured challenges data
  const featuredChallenges = [
    {
      title: "E-commerce Product Page",
      tags: ["Frontend", "React", "UI/UX"],
      description: "Build a responsive product detail page with interactive elements and shopping cart functionality.",
      time: "4-6 hours"
    },
    {
      title: "Customer Churn Prediction",
      tags: ["Data Science", "Python", "ML"],
      description: "Analyze customer data to build a predictive model identifying potential churners.",
      time: "6-8 hours"
    },
    {
      title: "Feature Prioritization",
      tags: ["Product", "Strategy", "UX Research"],
      description: "Develop a product roadmap based on user feedback, market analysis, and business goals.",
      time: "5-7 hours"
    }
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Handle subscription logic
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg py-4 px-6 md:px-8 fixed w-full z-50 transition-all duration-300">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-600 mr-2">
              <i className="fas fa-code-branch"></i>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">SkillMatch</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2">Success Stories</a>
            <a href="#insights" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2">Insights</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2">About</a>
          </div>

          <div className="flex space-x-3 md:space-x-4">
            <button className="px-3 md:px-4 py-2 rounded-lg text-gray-800 border border-gray-300 hover:bg-gray-100 font-medium transition-colors duration-200">Log In</button>
            <button className="px-3 md:px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium transition-colors duration-200 shadow-md hover:shadow-lg">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600" style={{ height: '600px' }}>
        <div className="max-w-7xl mx-auto px-8 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Prove Your Skills.<br />Forget the Resume.
              </h1>
              <p className="text-xl text-white mb-8 max-w-lg">
                A skills-first hiring platform that matches talent with opportunities based on proven abilities, not credentials.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center justify-center px-8 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white text-lg">
                  <span className="mr-2">👤</span>
                  Join as a Candidate
                </button>
                <button className="flex items-center justify-center px-8 py-3 rounded-md bg-white text-blue-600 hover:bg-blue-50 border border-blue-600 text-lg">
                  <span className="mr-2">🏢</span>
                  Post Work as a Company
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform connects talent with opportunities based on proven skills, not resumes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For Candidates */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                  <span className="text-3xl text-green-600">👤</span>
                </div>
                <h3 className="text-2xl font-bold">For Candidates</h3>
              </div>

              <div className="space-y-12">
                {howItWorksCandidate.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-6 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-4xl text-green-600 mr-3">{step.icon}</span>
                        <h4 className="text-xl font-semibold">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <button className="px-8 py-3 rounded-md bg-green-600 text-white hover:bg-green-700">
                  Start Your Journey <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* For Companies */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <span className="text-3xl text-blue-600">🏢</span>
                </div>
                <h3 className="text-2xl font-bold">For Companies</h3>
              </div>

              <div className="space-y-12">
                {howItWorksCompany.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-6 mt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-4xl text-blue-600 mr-3">{step.icon}</span>
                        <h4 className="text-xl font-semibold">{step.title}</h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <button className="px-8 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  Post Your First Challenge <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">87%</div>
              <p className="text-xl">Higher Match Quality</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">42%</div>
              <p className="text-xl">Faster Hiring Process</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-xl">Successful Placements</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">94%</div>
              <p className="text-xl">Retention Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from candidates and companies who've transformed their hiring experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-gray-200 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <div className="text-yellow-500 mb-4">
                    ★★★★★
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Challenges */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Challenges</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore some of our most popular skill challenges from top companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredChallenges.map((challenge, index) => (
              <div key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <div className="h-full w-full flex items-center justify-center text-4xl">
                    {index === 0 ? "💻" : index === 1 ? "📊" : "📝"}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {challenge.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`px-3 py-1 rounded-full text-sm ${tagIndex === 0 ? "bg-blue-100 text-blue-800" :
                        tagIndex === 1 ? "bg-green-100 text-green-800" :
                          "bg-purple-100 text-purple-800"
                        }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{challenge.title}</h4>
                  <p className="text-gray-600 mb-4">
                    {challenge.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">
                      <i className="far fa-clock mr-2"></i>
                      {challenge.time}
                    </span>
                    <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                      View Challenge
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-md bg-green-600 text-white hover:bg-green-700">
              Explore All Challenges <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Insights Section */}
      <div id="insights" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Market Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent data on salaries and workplace culture across our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3 text-green-600">💵</span> Salary Transparency
              </h3>
              <p className="text-gray-600 mb-6">
                Our platform offers 26% higher compensation compared to industry averages, with full transparency on salary ranges.
              </p>
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Salary Chart Visualization
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3 text-blue-600">👥</span> Culture Statistics
              </h3>
              <p className="text-gray-600 mb-6">
                Companies on our platform score significantly higher on key workplace culture metrics.
              </p>
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Culture Chart Visualization
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career or Hiring Process?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Join thousands of professionals and companies who've already discovered the power of skills-based matching.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/signup"
              className="flex items-center justify-center px-8 py-3 rounded-md bg-white text-green-600 hover:bg-green-50 border border-white text-lg"
            >
              <span className="mr-2">👤</span>
              Join as a Candidate
            </Link>
            <button className="flex items-center justify-center px-8 py-3 rounded-md bg-transparent text-white hover:bg-white/10 border border-white text-lg">
              <span className="mr-2">🏢</span>
              Post Work as a Company
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="about" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-2xl font-bold text-green-400 mr-2">
                  <i className="fas fa-code-branch"></i>
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">SkillMatch</span>
              </div>
              <p className="text-gray-400 mb-6">
                Revolutionizing hiring through skills-based matching and blind evaluation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-xl">
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xl">
                  <span>Twitter</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">For Candidates</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Challenges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Skill Assessment</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">For Companies</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">Post Challenges</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Talent Matching</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Enterprise Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Success Stories</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 mb-4 md:mb-0">
                © 2025 SkillMatch. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-white">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;