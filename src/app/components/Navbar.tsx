import { motion } from 'motion/react';
import { Globe, GraduationCap, Users, LayoutDashboard, BarChart2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import logoImage from '../../assets/omnischool.png';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [applicationsOpen, setApplicationsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('FR');

  const applicationItems = [
    { icon: GraduationCap, label: 'App Enseignant', path: '/app/teacher' },
    { icon: Users, label: 'App Parent', path: '/app/parent' },
    { icon: LayoutDashboard, label: 'Dashboard Assistant', path: '/app/assistant' },
    { icon: BarChart2, label: 'Dashboard Manager', path: '/app/manager' },
  ];

  const languageItems = [
    { code: 'FR', label: 'Français' },
    { code: 'AR', label: 'العربية' },
    { code: 'EN', label: 'English' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? 'border-b border-[#E5E7EB]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoImage} alt="Omnischool Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/solution"
            className="text-sm font-normal transition-colors duration-200"
            style={{ color: '#6B7280' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#2D472C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
          >
            Solutions
          </Link>

          {/* Applications Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setApplicationsOpen(true)}
            onMouseLeave={() => setApplicationsOpen(false)}
          >
            <button
              className="text-sm font-normal transition-colors duration-200"
              style={{ color: applicationsOpen ? '#2D472C' : '#6B7280' }}
            >
              Applications
            </button>

            {applicationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 pt-2"
                style={{ zIndex: 100 }}
              >
                <div
                  style={{
                    width: '200px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    boxShadow:
                      '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)',
                    overflow: 'hidden',
                  }}
                >
                  {applicationItems.map((item, index) => (
                    <div key={item.path}>
                      <Link
                        to={item.path}
                        className="flex items-center gap-3 transition-colors duration-200"
                        style={{
                          padding: '12px 16px',
                          color: '#333',
                          fontSize: '14px',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = '#F9F9F7')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor = 'transparent')
                        }
                      >
                        <item.icon size={16} />
                        <span>{item.label}</span>
                      </Link>

                      {index < applicationItems.length - 1 && (
                        <div style={{ height: '1px', backgroundColor: '#F3F4F6' }} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <Link
            to="/contact"
            className="text-sm font-normal transition-colors duration-200"
            style={{ color: '#6B7280' }}
          >
            Contact
          </Link>

          <Link
            to="/about"
            className="text-sm font-normal transition-colors duration-200"
            style={{ color: '#6B7280' }}
          >
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Language */}
          <div
            className="relative hidden sm:flex"
            onMouseEnter={() => setLanguageOpen(true)}
            onMouseLeave={() => setLanguageOpen(false)}
          >
            <button className="p-2 rounded-md">
              <Globe size={18} />
            </button>

            {languageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 pt-2"
              >
                <div
                  style={{
                    width: '150px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    overflow: 'hidden',
                  }}
                >
                  {languageItems.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className="w-full text-left"
                      style={{
                        padding: '12px 16px',
                        fontSize: '14px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Button */}
          <Link to="/book-demo">
            <button
              className="px-5 py-2 text-sm font-medium"
              style={{
                backgroundColor: '#2D472C',
                color: 'white',
                borderRadius: '4px',
              }}
            >
              Réserver une Démo
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}