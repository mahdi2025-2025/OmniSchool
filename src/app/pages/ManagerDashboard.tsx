import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router';

export default function ManagerDashboard() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: BarChart3, title: 'Analyses & Statistiques', description: 'Tableaux de bord avec KPIs en temps réel' },
    { icon: TrendingUp, title: 'Performance Scolaire', description: 'Suivez les résultats académiques par classe' },
    { icon: Users, title: 'Gestion des Rôles', description: 'Créez et gérez les comptes assistants' },
    { icon: DollarSign, title: 'Rapports Financiers', description: 'Vue complète des revenus, dépenses et balance' },
    { icon: Calendar, title: 'Planification', description: 'Gérez les événements et les horaires' },
    { icon: FileText, title: 'Documents', description: 'Accédez et gérez les documents importants' },
  ];

  const screens = ['Statistiques', 'Finance', 'Rapports'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      {/* Section 1 - Hero */}
      <section className="pt-32 pb-24 px-6" style={{ backgroundColor: '#F9F9F7' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div 
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  fontWeight: '600',
                  marginBottom: '16px'
                }}
              >
                DASHBOARD MANAGER
              </div>
              <h1
                style={{ 
                  fontFamily: 'Montserrat, sans-serif', 
                  fontSize: '48px', 
                  fontWeight: '900', 
                  color: '#333333',
                  lineHeight: '1.1',
                  marginBottom: '20px'
                }}
              >
                Pilotez Votre École avec des Données Précises
              </h1>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
                Analyses avancées, approbations financières et supervision complète de votre établissement.
              </p>
              <button
                className="transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: '#2D472C',
                  color: 'white',
                  borderRadius: '4px',
                  padding: '0 32px',
                  height: '48px',
                  fontSize: '15px',
                  fontWeight: '500'
                }}
              >
                Voir les Fonctionnalités
              </button>
            </motion.div>

            {/* Right - Desktop Mockup with Charts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="flex justify-center"
            >
              <div
                style={{
                  width: '500px',
                  height: '320px',
                  borderRadius: '16px',
                  backgroundColor: 'white',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  display: 'flex'
                }}
              >
                {/* Sidebar */}
                <div style={{ width: '60px', backgroundColor: '#2D472C' }}></div>
                {/* Main */}
                <div style={{ flex: 1 }}>
                  {/* Header */}
                  <div style={{ height: '50px', backgroundColor: '#2D472C' }}></div>
                  {/* Content - Charts */}
                  <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {/* Chart placeholders */}
                    <div
                      style={{
                        height: '100px',
                        backgroundColor: '#F3F4F6',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '8px',
                        gap: '4px'
                      }}
                    >
                      {[40, 60, 80, 50, 70].map((height, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${height}%`,
                            backgroundColor: '#C5A059',
                            borderRadius: '2px'
                          }}
                        ></div>
                      ))}
                    </div>
                    <div
                      style={{
                        height: '100px',
                        backgroundColor: '#F3F4F6',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '8px',
                        gap: '4px'
                      }}
                    >
                      {[30, 50, 70, 60, 40].map((height, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: `${height}%`,
                            backgroundColor: '#2D472C',
                            borderRadius: '2px'
                          }}
                        ></div>
                      ))}
                    </div>
                    <div
                      style={{
                        gridColumn: '1 / -1',
                        height: '80px',
                        backgroundColor: '#F3F4F6',
                        borderRadius: '6px'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Features Grid */}
      <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                fontWeight: '600',
                marginBottom: '12px'
              }}
            >
              FONCTIONNALITÉS
            </div>
            <h2
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '32px', 
                fontWeight: '700', 
                color: '#333333'
              }}
            >
              Tout ce dont le Manager a Besoin
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                className="transition-all duration-200"
                style={{
                  padding: '24px',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  backgroundColor: 'white'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
              >
                <feature.icon size={24} style={{ color: '#C5A059', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#333333', marginBottom: '8px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Dashboard Screens Showcase */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F9F9F7' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <div 
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                fontWeight: '600',
                marginBottom: '12px'
              }}
            >
              APERÇU
            </div>
            <h2
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '32px', 
                fontWeight: '700', 
                color: '#333333'
              }}
            >
              Les Écrans du Dashboard
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {screens.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                style={{
                  width: '340px',
                  height: '220px',
                  borderRadius: '12px',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  margin: '0 auto'
                }}
              >
                {/* Sidebar */}
                <div style={{ width: '40px', backgroundColor: '#2D472C' }}></div>
                {/* Main */}
                <div style={{ flex: 1 }}>
                  {/* Header */}
                  <div style={{ height: '40px', backgroundColor: '#2D472C' }}></div>
                  {/* Badge */}
                  <div style={{ padding: '12px' }}>
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '4px 8px',
                        backgroundColor: '#F9F9F7',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#333333'
                      }}
                    >
                      {screen}
                    </div>
                    {/* Content - Charts */}
                    <div style={{ marginTop: '12px' }}>
                      {index === 0 ? (
                        // Chart bars for Statistics
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '80px' }}>
                          {[50, 70, 40, 90, 60].map((height, i) => (
                            <div
                              key={i}
                              style={{
                                flex: 1,
                                height: `${height}%`,
                                backgroundColor: '#C5A059',
                                borderRadius: '2px'
                              }}
                            ></div>
                          ))}
                        </div>
                      ) : (
                        // Regular rows for Finance/Reports
                        [1, 2, 3].map((i) => (
                          <div
                            key={i}
                            style={{
                              height: '30px',
                              backgroundColor: '#E5E7EB',
                              borderRadius: '4px',
                              marginBottom: '8px'
                            }}
                          ></div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - CTA Banner */}
      <section className="py-24 px-6" style={{ backgroundColor: '#2D472C' }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <h2
            style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              fontSize: '36px', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '16px'
            }}
          >
            Prêt à Simplifier votre Travail?
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '32px' }}>
            Découvrez comment Omnischool peut transformer la gestion de votre école
          </p>
          <Link to="/book-demo">
            <button
              className="transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: '#C5A059',
                color: '#2D472C',
                borderRadius: '4px',
                padding: '0 32px',
                height: '48px',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              Réserver une Démo
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}