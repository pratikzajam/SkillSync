import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentProfilePage() {
  const [candidateType, setCandidateType] = useState('fresher');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' });
  const [showSkillsDropdown, setShowSkillsDropdown] = useState(false);

  const skillOptions = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Java',
    'HTML/CSS', 'TypeScript', 'Angular', 'Vue.js', 'SQL',
    'MongoDB', 'AWS', 'Docker', 'Git', 'Redux'
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender:"",
    phoneNo: '',
    address: '',
    skills: [],
    candidateType: 'fresher',
    yearsOfExperience: '1',
    githubLink: '',
    linkedinLink: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCandidateTypeChange = (e) => {
    const value = e.target.value;
    setCandidateType(value);
    setFormData({
      ...formData,
      candidateType: value
    });
  };

  const handleSkillChange = (skill) => {
    const updatedSkills = formData.skills.includes(skill)
      ? formData.skills.filter(s => s !== skill)
      : [...formData.skills, skill];

    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  const toggleSkillsDropdown = () => {
    setShowSkillsDropdown(!showSkillsDropdown);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.skills-dropdown-container')) {
      setShowSkillsDropdown(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: '', message: '' });

    const {
      fullName,
      dateOfBirth,
      gender,
      phoneNo,
      address,
      skills,
      candidateType,
      yearsOfExperience,
      githubLink,
      linkedinLink
    } = formData;

    try {
      const response = await axios.post(
        "https://skill-sync-backend-chi.vercel.app/addprofile/67f8be8678e3d8f576f10935",
        {
          fullName,
          dateOfBirth,
          gender,
          phoneNo,
          address,
          skills,
          candidateType,
          yearsOfExperience,
          githubLink,
          linkedinLink
        }
      );


      setSubmitMessage({ type: 'success', message: 'Profile submitted successfully!' });
    } catch (error) {

      setSubmitMessage({ type: 'error', message: 'Failed to submit profile.' });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Use useEffect to handle click outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Developer Profile</h1>
          <p className="text-gray-600 mt-2">Build your professional profile</p>
        </div>

        {/* Alert Message */}
        {submitMessage.message && (
          <div className={`mb-6 rounded-lg px-4 py-3 shadow-sm ${submitMessage.type === 'success'
            ? 'bg-green-100 text-green-800 border-l-4 border-green-500'
            : 'bg-red-100 text-red-800 border-l-4 border-red-500'
            }`}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {submitMessage.type === 'success' ? (
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                  </svg>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm">{submitMessage.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Form */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Form Tabs */}
          <div className="bg-zinc-800 text-gray-300 px-4 flex border-b border-gray-700">
            <div className="py-4 px-4 bg-zinc-700 text-white font-medium rounded-t-lg">
              Personal Informations
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Date of Birth */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>


              {/* Gender */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender || ''}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>


              {/* Phone Number */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  id="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              {/* Candidate Type with Styled Radio Buttons */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Experience Level
                </label>
                <div className="flex space-x-4">
                  <div
                    className={`flex-1 cursor-pointer rounded-lg border ${candidateType === 'fresher'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:bg-gray-50'
                      } p-3 transition-colors`}
                    onClick={() => handleCandidateTypeChange({ target: { value: 'fresher' } })}
                  >
                    <div className="flex justify-between items-center">
                      <label htmlFor="fresher" className="font-medium text-gray-700 cursor-pointer">
                        Fresher
                      </label>
                      <input
                        type="radio"
                        id="fresher"
                        name="candidateType"
                        value="fresher"
                        checked={candidateType === 'fresher'}
                        onChange={handleCandidateTypeChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">New to the industry</p>
                  </div>

                  <div
                    className={`flex-1 cursor-pointer rounded-lg border ${candidateType === 'experienced'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 hover:bg-gray-50'
                      } p-3 transition-colors`}
                    onClick={() => handleCandidateTypeChange({ target: { value: 'experienced' } })}
                  >
                    <div className="flex justify-between items-center">
                      <label htmlFor="experienced" className="font-medium text-gray-700 cursor-pointer">
                        Experienced
                      </label>
                      <input
                        type="radio"
                        id="experienced"
                        name="candidateType"
                        value="experienced"
                        checked={candidateType === 'experienced'}
                        onChange={handleCandidateTypeChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Professional experience</p>
                  </div>
                </div>
              </div>

              {/* Years of Experience - conditional rendering */}
              {candidateType === 'experienced' && (
                <div className="col-span-2 md:col-span-2">
                  <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience
                  </label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      name="yearsOfExperience"
                      id="yearsOfExperience"
                      min="1"
                      max="10"
                      value={formData.yearsOfExperience === '6+' ? '6' : formData.yearsOfExperience === '10+' ? '10' : formData.yearsOfExperience}
                      onChange={(e) => {
                        const value = e.target.value;
                        const displayValue = value >= 10 ? '10+' : value >= 6 ? '6+' : value;
                        setFormData({
                          ...formData,
                          yearsOfExperience: displayValue
                        });
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                    <span className="ml-4 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {formData.yearsOfExperience} {parseInt(formData.yearsOfExperience) === 1 ? 'year' : 'years'}
                    </span>
                  </div>
                </div>
              )}

              {/* Address */}
              <div className="col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full address"
                ></textarea>
              </div>

              {/* Skills - Tag-based selection */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.skills.map(skill => (
                      <div
                        key={skill}
                        className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleSkillChange(skill)}
                          className="ml-2 text-green-600 hover:text-green-800"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </div>
                    ))}
                    {formData.skills.length === 0 && (
                      <div className="text-gray-500 text-sm">Select skills below</div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skillOptions.map(skill => (
                      <div
                        key={skill}
                        onClick={() => handleSkillChange(skill)}
                        className={`
                          px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors
                          ${formData.skills.includes(skill)
                            ? 'bg-green-500 text-white'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}
                        `}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700 mb-1">
                  GitHub Username
                </label>
                <div className="mt-1 flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="githubLink"
                    id="githubLink"
                    value={formData.githubLink}
                    onChange={handleInputChange}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="username"
                  />
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="linkedinLink" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn Username
                </label>
                <div className="mt-1 flex rounded-lg shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="linkedinLink"
                    id="linkedinLink"
                    value={formData.linkedinLink}
                    onChange={handleInputChange}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="username"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button with loading state */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-medium text-base 
                  ${isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Save Profile'}
              </button>
            </div>
          </form>
        </div>

        {/* Profile Stats Card - LeetCode-like */}

      </div>
    </div>
  );
}