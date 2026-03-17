import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import ens1 from '../../assets/ens1.jpg';
import ens2 from '../../assets/ens2.png';
import ens3 from '../../assets/ens3.jpg';
import ens4 from '../../assets/ens4.jpg';
import ens5 from '../../assets/ens5.jpg';
import ens6 from '../../assets/ens6.jpg';
import ens7 from '../../assets/ens7.jpg';

export default function TeacherApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const el = document.getElementById('teacher-features');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const screens = [
    { title: "Calendrier de l'enseignant", image: ens3 },
    { title: 'Profil enseignant', image: ens4 },
    { title: 'E-fiche de présence', image: ens5 },
    { title: 'Publier un homework en ligne', image: ens6 },
    { title: "Contacter l'administration", image: ens7 },
  ];

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
                APPLICATION ENSEIGNANT
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
                L'Application Mobile pour les Enseignants
              </h1>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
                OmniSchool - Enseignant est une application mobile complète pour enseignants offrant une gestion holistique de la classe. Elle permet de suivre les présences intelligemment avec reconnaissance de motifs et alertes automatiques, de planifier et gérer le syllabus avec progression en temps réel, et de maintenir un répertoire détaillé des étudiants avec historique académique. Les enseignants peuvent publier des devoirs avec pièces jointes et suivre les soumissions, organiser leur emploi du temps via un calendrier intelligent synchronisé, et gérer toutes les requêtes administratives (congés, certificats, recommandations). L'application intègre également la saisie rapide de notes avec validation, un centre de notifications intelligent pour communications urgentes et rappels, ainsi qu'un profil professionnel personnalisable avec historique de carrière et certifications. Le tout est conçu avec le design system Omni pour une expérience utilisateur cohérente et intuitive.
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

            {/* Right - Image (ens1) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Premium blurred glow background */}
              <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px] rounded-[32px]"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(45,71,44,0.15) 0%, rgba(45,71,44,0) 66%),' +
                      'radial-gradient(closest-side, rgba(197,160,89,0.16) 0%, rgba(197,160,89,0) 62%)',
                    filter: 'blur(14px)',
                    transform: 'translateZ(0)',
                  }}
                />
              </div>

              {/* Framed container */}
              <div
                className="relative w-[200px] sm:w-[240px] lg:w-[280px] xl:w-[320px]"
                style={{
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.78)',
                  border: '1px solid rgba(229,231,235,0.92)',
                  boxShadow: '0 14px 36px rgba(17,24,39,0.12)',
                  backdropFilter: 'blur(10px)',
                  padding: '9px',
                }}
              >
                {/* glossy top bar */}
                <div
                  className="flex items-center gap-2 px-3 py-2"
                  style={{
                    borderRadius: '12px',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(249,249,247,0.80) 100%)',
                    border: '1px solid rgba(229,231,235,0.95)',
                    marginBottom: '8px',
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F87171' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#34D399' }} />
                  </div>
                  <div className="ml-auto text-[11px]" style={{ color: '#6B7280' }}>
                    OmniSchool • Enseignants
                  </div>
                </div>

                <img
                  src={ens1}
                  alt="Application Enseignant OmniSchool"
                  className="w-full h-auto"
                  style={{
                    borderRadius: '12px',
                    border: '1px solid rgba(229,231,235,0.9)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.10)',
                    backgroundColor: 'white',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Features Grid */}
      <section id="teacher-features" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
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
              Tout ce dont l'Enseignant a Besoin
            </h2>
          </div>

          {/* Features visual (ens2) */}
          <div className="relative flex justify-center">
            {/* Premium blurred glow background */}
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-[360px] h-[360px] sm:w-[680px] sm:h-[680px] lg:w-[480px] lg:h-[480px] xl:w-[760px] xl:h-[760px] rounded-[44px]"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(45,71,44,0.16) 0%, rgba(45,71,44,0) 66%),' +
                    'radial-gradient(closest-side, rgba(197,160,89,0.18) 0%, rgba(197,160,89,0) 62%)',
                  filter: 'blur(20px)',
                  transform: 'translateZ(0)',
                }}
              />
            </div>

            {/* Framed container */}
            <div
              className="relative w-[340px] sm:w-[680px] lg:w-[480px] xl:w-[760px]"
              style={{
                borderRadius: '22px',
                background: 'rgba(255,255,255,0.76)',
                border: '1px solid rgba(229,231,235,0.92)',
                boxShadow: '0 22px 60px rgba(17,24,39,0.12)',
                backdropFilter: 'blur(10px)',
                padding: '12px',
              }}
            >
              {/* glossy top bar */}
              <div
                className="flex items-center gap-2 px-3 py-2"
                style={{
                  borderRadius: '16px',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(249,249,247,0.80) 100%)',
                  border: '1px solid rgba(229,231,235,0.95)',
                  marginBottom: '12px',
                }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F87171' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FBBF24' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#34D399' }} />
                </div>
                <div className="ml-auto text-[11px]" style={{ color: '#6B7280' }}>
                  OmniSchool • Fonctionnalités Enseignant
                </div>
              </div>

              <img
                src={ens2}
                alt="Fonctionnalités - Application Enseignant"
                className="w-full h-auto transition-transform duration-300 ease-out hover:scale-[1.03]"
                style={{
                  borderRadius: '18px',
                  border: '1px solid rgba(229,231,235,0.9)',
                  boxShadow: '0 14px 34px rgba(0,0,0,0.10)',
                  backgroundColor: 'white',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - App Screens Showcase */}
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
              Les Écrans de l'Application
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.06 }}
                className="mx-auto w-full max-w-[220px]"
              >
                <div
                  style={{
                    borderRadius: '26px',
                    background: 'rgba(255,255,255,0.78)',
                    border: '1px solid rgba(229,231,235,0.92)',
                    boxShadow: '0 18px 44px rgba(17,24,39,0.10)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px',
                  }}
                >
                  {/* Mini phone frame */}
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(229,231,235,0.92)',
                      background: 'white',
                    }}
                  >
                    {/* Top bar */}
                    <div
                      className="flex items-center justify-between px-3"
                      style={{
                        height: '52px',
                        backgroundColor: '#2D472C',
                      }}
                    >
                      <div className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
                        {screen.title}
                      </div>
                      <div
                        style={{
                          width: '58px',
                          height: '18px',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(255,255,255,0.18)',
                        }}
                      />
                    </div>

                    {/* Screenshot */}
                    <div style={{ aspectRatio: '9 / 16', backgroundColor: '#F9F9F7' }}>
                      <img
                        src={screen.image}
                        alt={`Écran ${screen.title}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
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
            Découvrez comment Omnischool peut transformer votre quotidien d'enseignant
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