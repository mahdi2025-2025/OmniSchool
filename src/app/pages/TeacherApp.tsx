import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import ens1 from '../../assets/ens15.png';
import ens3 from '../../assets/ens3.jpg';
import ens4 from '../../assets/ens15.png';
import ens5 from '../../assets/ens5.jpg';
import ens6 from '../../assets/ens6.jpg';
import ens7 from '../../assets/ens7.jpg';
import './appHeroMockup.css';

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

  const teacherFeatures = [
    {
      title: 'Présences Intelligentes',
      description: 'Marquez les présences par classe en quelques secondes',
    },
    {
      title: 'Gestion du Syllabus',
      description: 'Planifiez et suivez votre programme par matière',
    },
    {
      title: 'Saisie des Notes',
      description: 'Entrez les notes CC1, CC2 et examens finaux',
    },
    {
      title: 'Publication des Devoirs',
      description: 'Partagez les devoirs avec les élèves et parents',
    },
    {
      title: 'Emploi du Temps',
      description: 'Consultez votre planning hebdomadaire en temps réel',
    },
    {
      title: 'Demandes & Requêtes',
      description: "Soumettez des demandes à l'administration",
    },
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

            {/* Right - Image (ens15) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="omni-hero-mockup">
                <div className="omni-hero-mockup__frame">
                  <div className="omni-hero-mockup__bar">
                    <div className="omni-hero-mockup__dots" aria-hidden="true">
                      <span className="omni-hero-mockup__dot omni-hero-mockup__dot--red" />
                      <span className="omni-hero-mockup__dot omni-hero-mockup__dot--yellow" />
                      <span className="omni-hero-mockup__dot omni-hero-mockup__dot--green" />
                    </div>
                    <div className="omni-hero-mockup__title">OmniSchool • Enseignants</div>
                  </div>

                  <div className="omni-hero-mockup__media">
                    <img
                      src={ens1}
                      alt="Application Enseignant OmniSchool"
                      className="omni-hero-mockup__img"
                    />
                  </div>
                </div>
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

          {/* Features grid (text cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teacherFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.05 }}
                className="group p-6 border transition-all duration-200 flex flex-col"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#E5E7EB',
                  borderRadius: '12px',
                  boxShadow: '0 18px 44px rgba(17,24,39,0.08)',
                  minHeight: '150px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2D472C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#333333',
                    marginBottom: '8px',
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: '1.55' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
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