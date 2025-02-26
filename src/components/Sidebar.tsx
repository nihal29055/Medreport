import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileText,
  Bell,
  Brain,
  MessageSquare,
  Shield,
  Globe,
  Settings,
  Users,
  Upload,
  Search,
  Calendar,
  Activity,
  MessageCircle,
  Lock,
  Languages,
  Headphones,
  Stethoscope,
  HelpCircle,
  LifeBuoy,
  MessageSquareHeart
} from 'lucide-react';

const menuItems = [
  {
    title: 'Report Management',
    icon: FileText,
    submenu: [
      { name: 'Upload Report', icon: Upload, path: '/upload-report' },
      { name: 'View Reports', icon: Search, path: '/view-reports' },
      { name: 'Summarize Report', icon: FileText, path: '/summarize-report' }
    ]
  },
  {
    title: 'Health Monitoring',
    icon: Bell,
    submenu: [
      { name: 'Set Reminders', icon: Calendar, path: '/reminders' },
      { name: 'Medication Tracker', icon: Activity, path: '/medication' }
    ]
  },
  {
    title: 'AI Assistance',
    icon: Brain,
    submenu: [
      { name: 'Symptom Checker', icon: Activity, path: '/symptoms' },
      { name: 'Health Trends', icon: Activity, path: '/trends' }
    ]
  },
  {
    title: 'Doctor Interaction',
    icon: MessageSquare,
    submenu: [
      { name: 'Chat with Experts', icon: MessageCircle, path: '/chat' },
      { name: "Doctor's Notes", icon: FileText, path: '/notes' }
    ]
  },
  {
    title: 'Security',
    icon: Shield,
    submenu: [
      { name: 'Data Backup', icon: Lock, path: '/backup' },
      { name: 'Emergency Contacts', icon: Users, path: '/emergency' }
    ]
  },
  {
    title: 'Language Support',
    icon: Globe,
    submenu: [
      { name: 'Change Language', icon: Languages, path: '/language' },
      { name: 'Voice Commands', icon: Headphones, path: '/voice' }
    ]
  },
  {
    title: 'Settings',
    icon: Settings,
    submenu: [
      { name: 'Account Settings', icon: Users, path: '/settings/account' },
      { name: 'Preferences', icon: Settings, path: '/settings/preferences' },
      { name: 'Notifications', icon: Bell, path: '/settings/notifications' }
    ]
  }
];

function Sidebar() {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  return (
    <motion.div
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-72 bg-white/95 shadow-lg text-gray-900 overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <Stethoscope className="w-8 h-8 text-blue-600" />
          <h1 className="text-xl font-bold text-blue-600">MedReport</h1>
        </div>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-2 text-blue-600" />
                <span className="font-medium">{item.title}</span>
              </button>
              {activeMenu === item.title && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-6 space-y-2 mt-2"
                >
                  {item.submenu.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      className={({ isActive }) =>
                        `flex items-center p-2 rounded-lg transition-colors ${
                          isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                        }`
                      }
                    >
                      <subItem.icon className="w-4 h-4 mr-2" />
                      <span className="text-sm">{subItem.name}</span>
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
        
        {/* Support Section */}
        <div className="mt-8 space-y-3 pt-6 border-t border-gray-200">
          <NavLink
            to="/help-center"
            className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Help Center</span>
          </NavLink>
          <NavLink
            to="/feedback"
            className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <MessageSquareHeart className="w-5 h-5 mr-2" />
            <span className="font-medium">Feedback</span>
          </NavLink>
          <NavLink
            to="/support"
            className="flex items-center p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <LifeBuoy className="w-5 h-5 mr-2" />
            <span className="font-medium">24/7 Support</span>
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}

export default Sidebar;