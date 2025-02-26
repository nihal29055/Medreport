import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Stethoscope, ArrowRight, UserCircle } from 'lucide-react';
import Button from './components/Button';
import Sidebar from './components/Sidebar';
import { SignInForm, SignUpForm } from './components/AuthForms';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Sidebar />
        
        {/* Header */}
        <header className="fixed top-0 right-0 left-72 h-16 bg-white/95 shadow-sm">
          <div className="h-full px-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">MedReport</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="p-1 hover:bg-gray-100 rounded-full">
                <UserCircle className="w-8 h-8 text-blue-600" />
              </Link>
              <Link to="/signin">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="ml-72 pt-16 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<AuthPage type="signin" />} />
            <Route path="/signup" element={<AuthPage type="signup" />} />
            <Route path="/profile" element={<BlankPage title="Profile" />} />
            <Route path="/upload-report" element={<BlankPage title="Upload Report" />} />
            <Route path="/view-reports" element={<BlankPage title="View Reports" />} />
            <Route path="/summarize-report" element={<BlankPage title="Summarize Report" />} />
            <Route path="/reminders" element={<BlankPage title="Reminders" />} />
            <Route path="/medication" element={<BlankPage title="Medication Tracker" />} />
            <Route path="/symptoms" element={<BlankPage title="Symptom Checker" />} />
            <Route path="/trends" element={<BlankPage title="Health Trends" />} />
            <Route path="/chat" element={<BlankPage title="Chat with Experts" />} />
            <Route path="/notes" element={<BlankPage title="Doctor's Notes" />} />
            <Route path="/backup" element={<BlankPage title="Data Backup" />} />
            <Route path="/emergency" element={<BlankPage title="Emergency Contacts" />} />
            <Route path="/language" element={<BlankPage title="Language Settings" />} />
            <Route path="/voice" element={<BlankPage title="Voice Commands" />} />
            <Route path="/settings/account" element={<BlankPage title="Account Settings" />} />
            <Route path="/settings/preferences" element={<BlankPage title="Preferences" />} />
            <Route path="/settings/notifications" element={<BlankPage title="Notifications" />} />
            <Route path="/support" element={<BlankPage title="24/7 Support" />} />
            <Route path="/help-center" element={<BlankPage title="Help Center" />} />
            <Route path="/feedback" element={<BlankPage title="Feedback" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white/95 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to MedReport</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your comprehensive medical report management system powered by artificial intelligence.
            Streamline your healthcare documentation and improve patient care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="AI-Powered Analysis"
              description="Get instant insights from your medical reports with advanced AI analysis"
              image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=500"
            />
            <FeatureCard
              title="Secure Storage"
              description="Keep your medical data safe with enterprise-grade security"
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500"
            />
            <FeatureCard
              title="Easy Collaboration"
              description="Share reports and collaborate with healthcare professionals seamlessly"
              image="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=500"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickAction
            title="Upload Report"
            description="Upload and analyze your medical reports instantly"
            icon={<ArrowRight className="w-5 h-5" />}
            to="/upload-report"
          />
          <QuickAction
            title="View Reports"
            description="Access your medical history and analysis"
            icon={<ArrowRight className="w-5 h-5" />}
            to="/view-reports"
          />
          <QuickAction
            title="Chat with Expert"
            description="Connect with healthcare professionals"
            icon={<ArrowRight className="w-5 h-5" />}
            to="/chat"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function QuickAction({ title, description, icon, to }: { title: string; description: string; icon: React.ReactNode; to: string }) {
  return (
    <Link to={to} className="block">
      <div className="bg-white/95 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center justify-between">
          {title}
          {icon}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

function BlankPage({ title }: { title: string }) {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/95 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">YOUR HEALTH, OUR PRIORITY</h3>
            <p className="text-lg text-gray-600">
              We are committed to providing you with the best healthcare experience.
              This feature will be available soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthPage({ type }: { type: 'signin' | 'signup' }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      {type === 'signin' ? <SignInForm /> : <SignUpForm />}
    </div>
  );
}

export default App;