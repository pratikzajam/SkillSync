import React, { useState } from 'react';
import '../index.css'; 

const Landing = () => {
  const [activeTab, setActiveTab] = useState('candidates');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-indigo-600">SkillMatch</div>
              <div className="hidden md:ml-12 md:flex md:space-x-10">
                <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  How it Works
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Success Stories
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer mr-4">
                Log in
              </button>
              <button className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with enhanced visual appeal */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/api/placeholder/1440/600"
            alt="Hero background" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="py-24 md:py-32">
            <div className="max-w-xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Prove Your Skills.</span>
                <span className="block text-indigo-600">Forget the Resume.</span>
              </h1>
              <p className="mt-5 text-base text-gray-500 sm:mt-6 sm:text-lg md:mt-6 md:text-xl">
                SkillMatch connects talent with opportunities based on proven abilities, not just credentials. Our blind-matching system removes bias and focuses on what really matters: your skills.
              </p>
              <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer shadow-md">
                  Join as a Candidate
                </button>
                <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer shadow-sm">
                  Post Work as a Company
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section - improved spacing */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our platform connects skilled professionals with companies through a bias-free matching process.
            </p>
          </div>

          <div className="mt-16">
            <div className="flex justify-center mb-12">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-10">
                  <button
                    className={`${
                      activeTab === 'candidates'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-2 border-b-2 font-medium text-lg cursor-pointer`}
                    onClick={() => setActiveTab('candidates')}
                  >
                    For Candidates
                  </button>
                  <button
                    className={`${
                      activeTab === 'companies'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-2 border-b-2 font-medium text-lg cursor-pointer`}
                    onClick={() => setActiveTab('companies')}
                  >
                    For Companies
                  </button>
                </nav>
              </div>
            </div>

            {activeTab === 'candidates' ? (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 mb-6">
                    <i className="fas fa-tasks text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">1. Complete Skill Challenges</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Showcase your abilities through real-world tasks and challenges designed to highlight your strengths.
                  </p>
                </div>

                <div className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 mb-6">
                    <i className="fas fa-user-shield text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">2. Get Anonymously Matched</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Our AI matches your skills with companies looking for your exact abilities, without revealing personal details.
                  </p>
                </div>

                <div className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 mb-6">
                    <i className="fas fa-handshake text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">3. Connect When There's Mutual Interest</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Reveal your identity only after both parties express interest, ensuring fair evaluation based on skills.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 mb-6">
                    <i className="fas fa-briefcase text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">1. Post Real-Work Challenges</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Create skill-based challenges that reflect the actual work candidates would do in the role.
                  </p>
                </div>

                <div className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 mb-6">
                    <i className="fas fa-chart-bar text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">2. Review Anonymous Results</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Evaluate candidates based solely on their performance, without being influenced by background or demographics.
                  </p>
                </div>

                <div className="relative p-8 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 mb-6">
                    <i className="fas fa-comments text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">3. Connect With Top Performers</h3>
                  <p className="mt-3 text-base text-gray-500">
                    Engage with candidates who have proven their abilities and match your company's needs and culture.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Success Stories - enhanced visuals */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Hear from candidates and companies who found their perfect match.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Sarah J." 
                  className="h-16 w-16 rounded-full object-cover object-top"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Sarah J.</h3>
                  <p className="text-sm text-gray-500">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg">
                "After months of sending resumes with no response, I completed three challenges on SkillMatch. Within a week, I had interviews with companies that were actually excited about my skills."
              </p>
              <div className="mt-6 text-sm font-medium text-indigo-600">
                Hired within 2 weeks • 40% salary increase
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Michael T." 
                  className="h-16 w-16 rounded-full object-cover object-top"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Michael T.</h3>
                  <p className="text-sm text-gray-500">CTO, TechInnovate</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg">
                "The blind matching process helped us find incredible talent we would have missed through traditional hiring. Our last three hires came through SkillMatch and they're outperforming expectations."
              </p>
              <div className="mt-6 text-sm font-medium text-indigo-600">
                Reduced hiring time by 65% • Improved retention
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src="/api/placeholder/60/60" 
                  alt="Jamal K." 
                  className="h-16 w-16 rounded-full object-cover object-top"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">Jamal K.</h3>
                  <p className="text-sm text-gray-500">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600 italic text-lg">
                "As a career-changer without a traditional CS degree, I struggled to get interviews. SkillMatch let me prove my abilities through actual projects. Now I'm working at my dream company."
              </p>
              <div className="mt-6 text-sm font-medium text-indigo-600">
                Career transition success • Matched with 5 companies
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Banner - enhanced visuals */}
      <div className="bg-gradient-to-r from-indigo-800 to-indigo-600">
        <div className="max-w-7xl mx-auto py-16 px-6 sm:py-24 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">94%</p>
              <p className="mt-3 text-lg font-medium text-indigo-100">Candidate satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">$15k+</p>
              <p className="mt-3 text-lg font-medium text-indigo-100">Average salary increase</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">78%</p>
              <p className="mt-3 text-lg font-medium text-indigo-100">Faster hiring process</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-extrabold text-white">10,000+</p>
              <p className="mt-3 text-lg font-medium text-indigo-100">Successful matches</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - improved spacing */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:py-24 lg:px-12 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to find your perfect match?</span>
            <span className="block text-indigo-600">Join SkillMatch today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 gap-6">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer shadow-md">
              Join as a Candidate
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 whitespace-nowrap cursor-pointer shadow-sm">
              Post Work as a Company
            </button>
          </div>
        </div>
      </div>

      {/* Footer - improved spacing */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-12">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Salary Data
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Culture Stats
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white cursor-pointer">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Stay Connected</h3>
              <div className="mt-6 flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Subscribe to our newsletter</h3>
                <form className="flex">
                  <input
                    type="email"
                    className="min-w-0 flex-1 appearance-none border border-transparent bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-l-md"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-r-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 text-center">
              © {new Date().getFullYear()} SkillMatch, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;