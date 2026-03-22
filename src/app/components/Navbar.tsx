import { motion } from 'motion/react';
import { GraduationCap, Users, LayoutDashboard, BarChart2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import logoImage from '../../assets/omnischool.png';

interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const [applicationsOpen, setApplicationsOpen] = useState(false);
  const { t } = useTranslation();

  const applicationItems = [
    { icon: GraduationCap, label: t('nav.apps.teacher'), path: '/app/teacher' },
    { icon: Users, label: t('nav.apps.parent'), path: '/app/parent' },
    { icon: LayoutDashboard, label: t('nav.apps.assistant'), path: '/app/assistant' },
    { icon: BarChart2, label: t('nav.apps.manager'), path: '/app/manager' },
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
          <img src={logoImage} alt={t('common.brand')} style={{ height: '50px', width: 'auto' }} />
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
            {t('nav.solutions')}
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
              {t('nav.applications')}
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
            {t('nav.contact')}
          </Link>

          <Link
            to="/about"
            className="text-sm font-normal transition-colors duration-200"
            style={{ color: '#6B7280' }}
          >
            {t('nav.about')}
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

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
              {t('nav.bookDemo')}
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}