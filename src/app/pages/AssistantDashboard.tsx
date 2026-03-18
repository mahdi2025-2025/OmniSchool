import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Users, ClipboardCheck, Calendar, FileText, Mail, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import a1 from '../../assets/a1.jpg';

export default function AssistantDashboard() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const el = document.getElementById('assistant-features');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const features = [
    { icon: Users, title: 'Gestion des Élèves', description: 'Inscriptions, dossiers, historique et transferts' },
    { icon: ClipboardCheck, title: 'Gestion des Enseignants', description: 'Charges horaires, absences et remplacements' },
    { icon: Calendar, title: 'Emploi du Temps', description: 'Construction et gestion du planning hebdomadaire' },
    { icon: FileText, title: 'Rapports PDF', description: 'Génération de bulletins, reçus et factures' },
    { icon: Mail, title: 'Communication', description: 'Annonces, demandes parents et enseignants' },
    { icon: TrendingUp, title: 'Finance Complète', description: 'Frais scolaires, salaires, fournisseurs et rapports' },
  ];

  const screens = ['Finance', 'Élèves', 'Emploi du Temps'];

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
                DASHBOARD ASSISTANT
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
                Gérez Toute l'École depuis un Tableau de Bord
              </h1>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
                Élèves, enseignants, finances, emploi du temps et campus — tout centralisé pour l'assistant administratif.
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
                onClick={scrollToFeatures}
                type="button"
              >
                Voir les Fonctionnalités
              </button>
            </motion.div>

            {/* Right - Desktop Visual (a1) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Premium blurred glow background */}
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[360px] h-[260px] sm:w-[520px] sm:h-[340px] lg:w-[560px] lg:h-[360px] xl:w-[620px] xl:h-[400px] rounded-[28px]"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(45,71,44,0.14) 0%, rgba(45,71,44,0) 68%),' +
                      'radial-gradient(closest-side, rgba(197,160,89,0.16) 0%, rgba(197,160,89,0) 64%)',
                    filter: 'blur(18px)',
                    transform: 'translateZ(0)',
                  }}
                />
              </div>

              {/* Framed container */}
              <div
                className="relative w-[360px] sm:w-[520px] lg:w-[560px] xl:w-[620px]"
                style={{
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(229,231,235,0.92)',
                  boxShadow: '0 18px 48px rgba(17,24,39,0.12)',
                  backdropFilter: 'blur(10px)',
                  padding: '10px',
                }}
              >
                {/* glossy top bar */}
                <div
                  className="flex items-center gap-2 px-3 py-2"
                  style={{
                    borderRadius: '14px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(249,249,247,0.80) 100%)',
                    border: '1px solid rgba(229,231,235,0.95)',
                    marginBottom: '10px',
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F87171' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#34D399' }} />
                  </div>
                  <div className="ml-auto text-[11px]" style={{ color: '#6B7280' }}>
                    OmniSchool • Dashboard Assistant
                  </div>
                </div>

                <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(229,231,235,0.9)' }}>
                  <img
                    src={a1}
                    alt="Dashboard Assistant OmniSchool"
                    className="w-full h-auto transition-transform duration-300 ease-out hover:scale-[1.02]"
                    style={{
                      display: 'block',
                      objectFit: 'cover',
                      backgroundColor: 'white',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Features Grid */}
      <section id="assistant-features" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
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
              Tout ce dont l'Assistant a Besoin
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
                <feature.icon size={24} style={{ color: '#2D472C', marginBottom: '12px' }} />
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
                    {/* Content rows */}
                    <div style={{ marginTop: '12px' }}>
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          style={{
                            height: '30px',
                            backgroundColor: '#E5E7EB',
                            borderRadius: '4px',
                            marginBottom: '8px'
                          }}
                        ></div>
                      ))}
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
