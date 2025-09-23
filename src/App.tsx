import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Award, 
  Users, 
  Clock, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Globe,
  TrendingUp,
  Shield,
  Star,
  ArrowRight,
  PlayCircle,
  Menu,
  X,
  Brain,
  Zap,
  Bot,
  Sparkles,
  Activity,
  Cpu,
  Database,
  BarChart3,
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import logo1 from './assets/logo4.png';
import logo2 from './assets/logo3.png';
import logo3 from './assets/logo2.png';
import logo4 from './assets/logo1.png';

import emailjs from 'emailjs-com';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    studentType: '',
    location: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiParticles, setAiParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [showAccreditationPopup, setShowAccreditationPopup] = useState(false);

  // Generate floating AI particles
  useEffect(() => {
    const particles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }));
    setAiParticles(particles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // <-- Add this
    emailjs.send(
      'service_mvy1p7w', // your service ID
      'template_61qmhbb', // your template ID
      formData,
      '1591tn42z4Vwn0PEQ' // your user/public key
    )
    .then(() => {
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        studentType: '',
        location: '',
        message: ''
      });
    })
    .catch((error) => {
      alert('Failed to send message. Please try again.');
      console.error(error);
    });
  };


  // Brochure download handler
  const handleDownloadBrochure = () => {
    try {
      // Create a temporary link element to download the PDF
      const link = document.createElement('a');
      link.href = '/GHG-LA-September.pdf';
      link.download = 'GHG-Lead-Accountant-Brochure.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert('Failed to download brochure. Please try again.');
      console.error('Brochure download error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating AI Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {aiParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animation: `float 6s ease-in-out infinite ${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* AI Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(98, 143, 142, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(98, 143, 142, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              {/* Logos Row */}
              <div className="flex items-center space-x-2">
                <a 
                  href="https://www.sftrainings.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity duration-200"
                  aria-label="Visit SF Trainings website"
                >
                  <img src={logo1} alt="SF Trainings Logo" className="h-10 w-10 object-contain" />
                </a>
                <img src={logo2} alt="Logo 2" className="h-10 w-10 object-contain" />
                <img src={logo3} alt="Logo 3" className="h-10 w-10 object-contain" />
                <img src={logo4} alt="Logo 4" className="h-10 w-10 object-contain" />
              </div>
            </div>
            
            {/* Live Indicator - Top Right */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                <span>LIVE</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="flex space-x-6 lg:space-x-8">
                <a href="#course" className="text-gray-700 hover:text-[#628F8E] transition-colors text-sm lg:text-base">Course</a>
                <a href="#features" className="text-gray-700 hover:text-[#628F8E] transition-colors text-sm lg:text-base">Features</a>
                <a href="#certification" className="text-gray-700 hover:text-[#628F8E] transition-colors text-sm lg:text-base">Certification</a>
                <a href="#contact" className="text-gray-700 hover:text-[#628F8E] transition-colors text-sm lg:text-base">Contact</a>
              </nav>
            </div>

            {/* Mobile Live Indicator and Menu */}
            <div className="md:hidden flex items-center space-x-3">
              <div className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                <span>LIVE</span>
              </div>
              <button 
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-3">
                <a href="#course" className="text-gray-700 hover:text-[#628F8E] transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Course</a>
                <a href="#features" className="text-gray-700 hover:text-[#628F8E] transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <a href="#certification" className="text-gray-700 hover:text-[#628F8E] transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Certification</a>
                <a href="#contact" className="text-gray-700 hover:text-[#628F8E] transition-colors px-2 py-1" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Add top padding to main content to prevent overlap with fixed header */}
      <div className="pt-12">
        {/* Hero Section with Bamboo Background */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Bamboo Forest Background */}
          <div
            className="absolute inset-0 bg-cover bg-center sm:bg-center md:bg-top lg:bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            }}
          >
            {/* Stronger overlay on mobile for readability */}
            <div className="absolute inset-0 bg-black/70 sm:bg-black/50"></div>
            <div className="absolute inset-0 bg-[#628F8E]/20"></div>
          </div>

          {/* AI Neural Network Animation */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#628F8E" />
                  <stop offset="100%" stopColor="#4A7B7C" />
                </linearGradient>
              </defs>
              {/* Animated neural network lines */}
              <g className="animate-pulse">
                <line x1="100" y1="200" x2="300" y2="400" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
                <line x1="300" y1="400" x2="500" y2="300" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
                <line x1="500" y1="300" x2="700" y2="500" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
                <line x1="200" y1="600" x2="400" y2="700" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
                <line x1="400" y1="700" x2="600" y2="600" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
                <line x1="600" y1="600" x2="800" y2="800" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.6" />
              </g>
              {/* Neural nodes */}
              <circle cx="100" cy="200" r="8" fill="url(#aiGradient)" className="animate-pulse" />
              <circle cx="300" cy="400" r="8" fill="url(#aiGradient)" className="animate-pulse" />
              <circle cx="500" cy="300" r="8" fill="url(#aiGradient)" className="animate-pulse" />
              <circle cx="700" cy="500" r="8" fill="url(#aiGradient)" className="animate-pulse" />
              <circle cx="200" cy="600" r="8" fill="url(#aiGradient)" className="animate-pulse" />
              <circle cx="400" cy="700" r="8" fill="url(#aiGradient)" className="animate-pulse" />
              <circle cx="600" cy="600" r="8" fill="url(#aiGradient)" className="animate-pulse" />
              <circle cx="800" cy="800" r="8" fill="url(#aiGradient)" className="animate-pulse" />
            </svg>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="relative inline-block">
                    <a 
                      href="https://exemplarglobal.org/online-courses-from-exemplar-global-certified-training-providers/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white border border-white/20 mt-4 sm:mt-6 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setShowAccreditationPopup(true)}
                      onMouseLeave={() => setShowAccreditationPopup(false)}
                    >
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-2 animate-pulse" />
                      Exemplar Global Accredited, USA
                    </a>
                    
                    {/* Accreditation Popup */}
                    {showAccreditationPopup && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 animate-fade-in">
                        <div className="flex items-center space-x-2 mb-3">
                          <Award className="h-5 w-5 text-blue-500" />
                          <h4 className="font-semibold text-gray-900">Exemplar Global Accreditation</h4>
                        </div>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>✓ Certified under ISO/IEC 17024:2012</p>
                          <p>✓ International Accreditation Service (IAS)</p>
                          <p>✓ Global recognition and credibility</p>
                          <p>✓ Sustainable Futures Training's focus on GHG Accountant Lead Verifier course modules</p>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <a 
                            href="https://exemplarglobal.org/online-courses-from-exemplar-global-certified-training-providers/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center"
                          >
                            Verify Accreditation
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                        {/* Arrow pointing up */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
                      </div>
                    )}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      Certified Greenhouse Gases
                    </span>
                    <span className="text-yellow-300 block sm:inline flex items-center justify-center lg:justify-start mt-2">
                      <Brain className="h-8 w-8 sm:h-10 sm:w-10 mr-3 animate-pulse" />
                      Lead Accountant
                    </span> 
                    <span className="bg-gradient-to-r from-yellow-300 to-yellow-300 bg-clip-text text-transparent block">Course</span>
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Master GHG accounting with our comprehensive 3-day online program powered by AI-enhanced learning. 
                    From climate change fundamentals to practical emission calculations.
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                  <div className="flex items-center bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base border border-white/10">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span>3 Days Online</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-green-500/20 to-teal-600/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base border border-white/10">
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-pulse" />
                    <span>Instructor Led</span>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-purple-500/20 to-pink-600/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 text-white text-sm sm:text-base border border-white/10">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span>Accredited Course</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center text-sm sm:text-base shadow-lg"
                  >
                    <PlayCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-pulse" />
                    Register Here - Early Bird 20% Off
                  </a>
                  <button
                    className="border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center text-sm sm:text-base"
                    onClick={handleDownloadBrochure}
                  >
                    Download Brochure
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                  </button>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 animate-pulse" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">GHG Lead Accountant Course Highlights</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-full">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base">Complete history from inception of climate change to current GHG accounting importance</p>
                    </div>
                    <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-1 rounded-full">
                        <Database className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base">Practical approach with real-world case studies and live datasets</p>
                    </div>
                    <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full">
                        <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-white animate-pulse" />
                      </div>
                      <p className="text-white text-sm sm:text-base">No prior experience required - Experts guided learning starts from basics</p>
                    </div>
                    <div className="flex items-start space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-all">
                      <div className="bg-gradient-to-r from-teal-400 to-cyan-500 p-1 rounded-full">
                        <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <p className="text-white text-sm sm:text-base">Smart Pathway to 1-Day Exemplar Global-Accredited, USA Lead Verifier Certification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with AI Elements */}
        <section id="course" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative">
          {/* AI Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #628F8E 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #4A7B7C 2px, transparent 2px)`,
              backgroundSize: '100px 100px'
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="h-4 mr-2 animate-pulse" />
                Seamless Learning Experience
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our 
                <span className="bg-gradient-to-r from-[#628F8E] to-[#4A7B7C] bg-clip-text text-transparent"> Accredited </span>
                GHG Lead Accountant Course?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                The only comprehensive 3-day program that combines theoretical knowledge with Practical application, 
                aligned with India's key regulatory frameworks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-[#628F8E] to-[#4A7B7C] w-12 h-12 rounded-lg flex items-center justify-center mb-6 relative">
                  <Clock className="h-6 w-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="h-2 w-2 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Efficient 3-Day Format</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  While others offer 4-day Lead Verifier courses, we provide focused  Lead Accountant training in just 3 days - perfect for working professionals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-gradient-to-br from-[#628F8E] to-[#4A7B7C] w-12 h-12 rounded-lg flex items-center justify-center mb-6 relative">
                  <Award className="h-6 w-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <Bot className="h-2 w-2 text-white animate-pulse" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Exemplar Global Accredited, USA + AI Enhanced Learning </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Certified under ISO/IEC 17024:2012 by International Accreditation Service (IAS) with AI-powered learning modules, ensuring global recognition.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100 sm:col-span-2 lg:col-span-1">
                <div className="bg-gradient-to-br from-[#628F8E] to-[#4A7B7C] w-12 h-12 rounded-lg flex items-center justify-center mb-6 relative">
                  <Target className="h-6 w-6 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="h-2 w-2 text-white animate-pulse" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Practical Focus</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Not just theory - AI-enhanced hands-on learning with intelligent case studies, live datasets, and smart GHG calculation examples.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Activity className="h-6 w-6 text-[#628F8E] animate-pulse" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Aligned with India's Regulatory Framework</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3 group hover:bg-white/50 p-2 rounded-lg transition-all">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#628F8E] to-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Bureau of Energy Efficiency (Ministry of Power)</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:bg-white/50 p-2 rounded-lg transition-all">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#628F8E] to-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Ministry of Environment, Forest and Climate Change</span>
                    </div>
                    <div className="flex items-center space-x-3 group hover:bg-white/50 p-2 rounded-lg transition-all">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#628F8E] to-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 text-sm sm:text-base">Government of India's Carbon Trading Scheme</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#628F8E] to-[#4A7B7C] rounded-xl p-6 sm:p-8 text-white relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <div className="flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1">
                      <Brain className="h-3 w-3 animate-pulse" />
                      <span className="text-xs">AI</span>
                    </div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-4">Perfect for Working Professionals</h4>
                  <p className="text-gray-100 text-sm sm:text-base">
                    As a working professional, you don't need a Lead Verifier course. Get AI-enhanced competency in GHG Accounting methods - 
                    GHG Lead Accountant is the right choice for your career advancement.
                  </p>
                  <div className="absolute bottom-2 right-2 opacity-20">
                    <BarChart3 className="h-12 w-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section with AI Enhancement */}
        <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Brain className="h-4 w-4 mr-2 animate-pulse" />
                Future-Ready Curriculum
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Comprehensive Future Ready curriculum covering all aspects of greenhouse gas accounting and reporting
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="border-l-4 border-gradient-to-b from-[#628F8E] to-blue-500 pl-4 sm:pl-6 bg-gradient-to-r from-gray-50 to-white p-4 rounded-r-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="h-6 w-6 text-[#628F8E] animate-pulse" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">GHG Lead Accountant Scope 1, 2 & 3 Emissions</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Master the calculation and reporting of all three scopes of GHG emissions with AI assistance. Learn to identify, 
                    quantify, and report direct and indirect emissions across your organization's value chain using smart algorithms.
                  </p>
                </div>

                <div className="border-l-4 border-gradient-to-b from-[#628F8E] to-green-500 pl-4 sm:pl-6 bg-gradient-to-r from-gray-50 to-white p-4 rounded-r-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-6 w-6 text-[#628F8E] animate-pulse" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Smart Boundary Setting</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Define organizational and operational boundaries for accurate inventories with Experts guidance. Understand equity share, 
                    financial control, and operational control approaches to boundary setting with intelligent recommendations.
                  </p>
                </div>

                <div className="border-l-4 border-gradient-to-b from-[#628F8E] to-purple-500 pl-4 sm:pl-6 bg-gradient-to-r from-gray-50 to-white p-4 rounded-r-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="h-6 w-6 text-[#628F8E] animate-pulse" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Live Case Studies</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Practice with industry-driven examples developed from on-field experience and enhanced with AI insights. Work with actual data 
                    from various sectors to build practical competency with intelligent analysis tools.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                    <Bot className="h-6 w-6 text-white animate-pulse" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Smart Learning Experience</h3>
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all">
                    <div className="bg-gradient-to-r from-[#628F8E] to-blue-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                        Build Your Own GHG Inventory
                        <Sparkles className="h-4 w-4 ml-2 text-yellow-500 animate-pulse" />
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Use AI-analyzed live datasets to create comprehensive emission inventories</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all">
                    <div className="bg-gradient-to-r from-[#628F8E] to-green-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                        AI-Enhanced Expert Guidance
                        <Brain className="h-4 w-4 ml-2 text-blue-500 animate-pulse" />
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Live support from subject matter experts with AI-powered insights throughout the course</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all">
                    <div className="bg-gradient-to-r from-[#628F8E] to-purple-500 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                        Smart Interactive Sessions
                        <Zap className="h-4 w-4 ml-2 text-purple-500 animate-pulse" />
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Clarify technical details with tutors in real-time using AI-powered Q&A assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certification" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#628F8E] to-[#4A7B7C] relative overflow-hidden">
          {/* AI Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-spin"></div>
            <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full animate-ping"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30">
                <Shield className="h-4 mr-2" />
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                AI-Enhanced Certification
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Certification & Accreditation</h2>
              <p className="text-lg sm:text-xl text-gray-100">
                Globally recognized certification with Exemplar Global accreditation and learning validation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                    <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Who We Are - Exemplar Global + AI</h3>
                </div>
                <p className="text-gray-100 leading-relaxed mb-4 text-sm sm:text-base">
                  Exemplar Global is accredited under ISO/IEC 17024:2012 Conformity assessment – General Requirements 
                  for Bodies Operating Certification of Persons, from the International Accreditation Service (IAS), now enhanced with AI-powered learning modules.
                </p>
                <div className="flex items-center">
                  <Shield className="h-4 sm:h-5 sm:w-5 text-yellow-300 mr-2" />
                  <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300 mr-2 animate-pulse" />
                  <span className="text-white font-semibold text-sm sm:text-base">International Recognition + AI Enhancement</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 p-2 rounded-lg mr-3">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Smart Examination & Certification</h3>
                </div>
                <div className="space-y-3 sm:space-y-4 text-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base">AI-assisted open book examination at the end of the course</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-full">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base">70% marks required for successful completion certificate</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-1 rounded-full">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base">Attendance certificate for scores below 70% with AI-guided re-exam option</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-2xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Bot className="h-6 w-6 text-[#628F8E] animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Future-Ready Career Progression</h3>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="bg-gradient-to-r from-[#628F8E] to-[#4A7B7C] text-white px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center space-x-2">
                  <Brain className="h-4 animate-pulse" />
                  <span>GHG Lead Accountant (3 Days)</span>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="h-6 w-6 text-gray-400 transform md:transform-none rotate-90 md:rotate-0" />
                  <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse ml-2" />
                </div>
                <div className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Lead Verifier (1 Day) - Optional</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4 text-sm sm:text-base">
                Perfect progression for professionals seeking comprehensive GHG expertise
              </p>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Star className="h-4 mr-2 animate-pulse" />
                Special Pricing
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Investment & Early Bird Offers</h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Competitive pricing with exclusive early bird and group discounts for our AI-powered course
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border-2 border-[#628F8E] hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-[#628F8E] to-[#4A7B7C] text-white px-3 sm:px-4 py-2 rounded-full inline-flex items-center mb-4">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-pulse" />
                    <span>Early Bird Special</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">20% Discount</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Secure your spot with a 30% deposit</p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 text-sm sm:text-base flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#628F8E]" />
                      Deadline:
                    </span>
                    <span className="font-semibold text-[#628F8E] text-sm sm:text-base">Secure your seat before the 10-day deadline.</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 text-sm sm:text-base flex items-center">
                      <Target className="h-4 w-4 mr-2 text-[#628F8E]" />
                      Deposit Required:
                    </span>
                    <span className="font-semibold text-[#628F8E] text-sm sm:text-base">20% of course fee</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center">
                      <Zap className="h-4 w-4 mr-2 text-yellow-500 animate-pulse" />
                      Limited time offer - secure your early bird pricing today!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-3 sm:px-4 py-2 rounded-full inline-flex items-center mb-4">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-pulse" />
                    <span>Group Discount</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Special Group Rates</h3>
                  <p className="text-gray-600 text-sm sm:text-base">For teams and organizations</p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 text-sm sm:text-base flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-700" />
                      Minimum Participants:
                    </span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">3 People</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-gray-700 text-sm sm:text-base flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-gray-700" />
                      Group Benefits:
                    </span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">Special Rates</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center">
                      <Brain className="h-4 w-4 mr-2 text-blue-500 animate-pulse" />
                      Perfect for teams looking to build AI-enhanced GHG accounting capabilities together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Sparkles className="h-6 w-6 text-[#628F8E] animate-pulse" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">What's Included in Course Package</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center group hover:bg-white p-4 rounded-lg transition-all">
                  <div className="bg-gradient-to-r from-[#628F8E] to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">AI-Enhanced Course Materials</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Comprehensive study materials and AI-powered resources</p>
                </div>
                <div className="text-center group hover:bg-white p-4 rounded-lg transition-all">
                  <div className="bg-gradient-to-r from-[#628F8E] to-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Smart and Live  Case Study Datasets</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Real-world data enhanced with AI analysis for hands-on practice</p>
                </div>
                <div className="text-center group hover:bg-white p-4 rounded-lg transition-all sm:col-span-2 lg:col-span-1">
                  <div className="bg-gradient-to-r from-[#628F8E] to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Verified Certification Fee</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Exemplar Global certification with AI learning validation included</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white relative scroll-mt-24 sm:scroll-mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-[#628F8E] to-[#4A7B7C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Bot className="h-4 mr-2 animate-pulse" />
                  AI-Powered Support
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                  Ready to advance your career in greenhouse gas accounting with AI-enhanced learning? Contact us to learn more about enrollment and start your intelligent journey toward certification.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-all">
                    <div className="bg-gradient-to-r from-[#628F8E] to-blue-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                        Email Us
                        <Sparkles className="h-3 w-3 ml-2 text-yellow-500 animate-pulse" />
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">info@sftrainings.org</p>
                      <p className="text-gray-600 text-sm sm:text-base">bdm@sftrainings.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-all">
                    <div className="bg-gradient-to-r from-[#628F8E] to-green-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                        Call Us
                        <Activity className="h-3 w-3 ml-2 text-green-500 animate-pulse" />
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">+91 9056244487</p> 
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-all">
                    <div className="bg-gradient-to-r from-[#628F8E] to-purple-500 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center">
                        Course Schedule
                        <Brain className="h-3 w-3 ml-2 text-purple-500 animate-pulse" />
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">Next Smart Learning batch starts soon - secure your spot!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-white animate-pulse" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Course Enrollment Form</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Full Name *
                      <Sparkles className="h-3 w-3 ml-2 text-yellow-500 animate-pulse" />
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#628F8E] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#628F8E]"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Phone Number *
                      <Activity className="h-3 w-3 ml-2 text-green-500 animate-pulse" />
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#628F8E] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#628F8E]"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Email ID *
                      <Mail className="h-3 w-3 ml-2 text-blue-500 animate-pulse" />
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#628F8E] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#628F8E]"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="studentType" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Choose Your Category *
                      <Target className="h-3 w-3 ml-2 text-purple-500 animate-pulse" />
                    </label>
                    <select
                      id="studentType"
                      name="studentType"
                      required
                      value={formData.studentType}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#628F8E] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#628F8E]"
                    >
                      <option value="">Select your category</option>
                      <option value="undergraduate">Undergraduate Student</option>
                      <option value="postgraduate">Postgraduate Student</option>
                      <option value="consultant">Consultant</option>
                      <option value="working-professional">Working Professional</option>
                      <option value="other">Other</option>  
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Location *
                      <MapPin className="h-3 w-3 ml-2 text-red-500 animate-pulse" />
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#628F8E] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#628F8E]"
                      placeholder="Enter your city/location"
                    />
                  </div>
                  <div>
                    <label htmlFor="Message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      Message *
                      <MessageCircle className="h-3 w-3 ml-2 text-blue-500 animate-pulse" />
                    </label>
                    <input
                      type="text"
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#628F8E] focus:border-transparent transition-all text-sm sm:text-base hover:border-[#628F8E]"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#628F8E] to-[#4A7B7C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#4A7B7C] hover:to-[#628F8E] transition-all flex items-center justify-center text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2 animate-pulse" />
                    Submit
                  </button>

                  <p className="text-xs sm:text-sm text-gray-500 text-center flex items-center justify-center">
                    <Shield className="h-3 w-3 mr-2" />
                    By submitting this form, you agree to receive AI-enhanced course information and updates from GHG Academy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-[#628F8E] to-[#4A7B7C] text-white py-8 sm:py-12 relative overflow-hidden">
          {/* AI Footer Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, #628F8E 2px, transparent 2px),
                radial-gradient(circle at 80% 20%, #4A7B7C 2px, transparent 2px),
                radial-gradient(circle at 40% 40%, #628F8E 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 80px 80px, 60px 60px'
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <h3 className="font-semibold mb-4 text-sm sm:text-base flex items-center text-white">
                  Location Info
                  <Activity className="h-3 w-3 ml-2 animate-pulse" />
                </h3>
                <div className="space-y-2 text-white text-sm">
                  {/* India */}
                  <div>
                    <span className="font-semibold text-white">India</span>
                    <p className="flex items-center mt-1"><MapPin className="h-3 w-3 mr-2" />146, Sector 82, Mohali, Punjab-160062</p>
                    <p className="flex items-center"><Phone className="h-3 w-3 mr-2" />+91 9056742782</p>
                  </div>
                  {/* Canada */}
                  <div className="mt-3">
                    <span className="font-semibold text-white">Canada</span>
                    <p className="flex items-center mt-1"><MapPin className="h-3 w-3 mr-2" />8449, 116 A Street, Delta - V4C7N7, Greater Vancouver</p>
                    <p className="flex items-center"><Phone className="h-3 w-3 mr-2" />+1 (778) 798-9624</p>
                  </div>
                  {/* Dubai */}
                  <div className="mt-3">
                    <span className="font-semibold text-white">Dubai</span>
                    <p className="flex items-center mt-1"><MapPin className="h-3 w-3 mr-2" />Suite No 2902 and 2903, The Prism Tower, Business Bay, Dubai, UAE</p>
                  </div>
                  {/* UK */}
                  <div className="mt-3">
                    <span className="font-semibold text-white">UK</span>
                    <p className="flex items-center mt-1"><MapPin className="h-3 w-3 mr-2" />20-22 Wenlock Road, Hoxton, London N1 7GU</p>
                  </div>
                  {/* USA */}
                  <div className="mt-3">
                    <span className="font-semibold text-white">USA</span>
                    <p className="flex items-center mt-1"><MapPin className="h-3 w-3 mr-2" />616, Corporate Way Suite 2, 6015 Valley Cottage NY 10989</p>
                  </div>
                  {/* Email */}
                  <p className="flex items-center mt-3"><Mail className="h-3 w-3 mr-2" />info@sftrainings.org</p>
                  <p className="flex items-center mt-3"><Mail className="h-3 w-3 mr-2" />bdm@sftrainings.org</p>
                  {/* Support Hours */}
                  <p className="flex items-center"><Clock className="h-3 w-3 mr-2" />Support: Mon-Fri 9AM-6PM</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-sm sm:text-base flex items-center text-white">
                  Contact Us
                  <Activity className="h-3 w-3 ml-2 animate-pulse" />
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2"><PhoneCall className="h-4 w-4" />Mr. Devang Shah</span>
                    <span className="flex items-center gap-2 whitespace-nowrap"><Phone className="h-4 w-4" />+91 97220 01132</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2"><PhoneCall className="h-4 w-4" />Dr. Parth Arora</span>
                    <span className="flex items-center gap-2 whitespace-nowrap"><Phone className="h-4 w-4" />+91 96508 04558</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm flex items-center">
                © 2024 GHG Academy. All rights reserved.
                <Brain className="h-3 w-3 ml-2 animate-pulse" />
                <span className="ml-1">AI-Enhanced</span>
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform">Refund Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating Contact Icons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919056244487?text=Hi%20Piyush%20sir%2C%20I'm%20interested%20in%20the%20GHG%20Lead%20Accountant%20course.%20Can%20you%20provide%20more%20information%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center"
          aria-label="Contact Devang sir on WhatsApp"
        >
          <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.29A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.27 1.36 1.4-4.16-.25-.4A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/>
          </svg>
        </a>
        
        {/* Phone Button */}
        <a
          href="tel:+919056244487"
          className="bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg p-3 sm:p-4 transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center justify-center"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
