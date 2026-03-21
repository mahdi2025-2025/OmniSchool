import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import pa11 from '../../assets/pa15.png';
import pa1 from '../../assets/pa1.jpg';
import pa2 from '../../assets/pa2.jpg';
import pa3 from '../../assets/pa3.jpg';
import pa4 from '../../assets/pa4.jpg';
import pa5 from '../../assets/pa5.jpg';
import pa6 from '../../assets/pa6.jpg';
import pa7 from '../../assets/pa7.jpg';
import pa8 from '../../assets/pa8.jpg';
import pa9 from '../../assets/pa9.jpg';
import pa10 from '../../assets/pa10.jpg';
import './appHeroMockup.css';

export default function ParentApp() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const el = document.getElementById('parent-features');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  const screens = [
    { title: 'Calendrier intelligent', image: pa1 },
    { title: 'Profil et paramètres', image: pa2 },
    { title: 'Réservation de réunion et de rendez-vous', image: pa3 },
    { title: 'Signaler une absence', image: pa4 },
    { title: 'Galerie', image: pa5 },
    { title: 'Notifications', image: pa6 },
    { title: 'Finances', image: pa7 },
    { title: 'Contacter l’enseignant', image: pa8 },
    { title: 'Menu', image: pa9 },
    { title: 'Les matières', image: pa10 },
  ];

  const parentFeatures = [
    {
      title: 'Présences Intelligentes',
      description: 'Marquéz les présences par classe en quéiques secondes',
    },
    {
      title: 'Gestion du Syllabus',
      description: 'Planifiez et suives voire programme par matérré',
    },
    {
      title: 'Saisie des Notes',
      description: 'Entrez les notes CC1, CC2 et examens finaux',
    },
    {
      title: 'Publication des Devoirs',
      description: 'Partagez les devoirs avec les elères et parents',
    },
    {
      title: 'Emploi du Temps',
      description: 'Consultez voire planning hebdomadaire en temps réel',
    },
    {
      title: 'Demandes & Requétes',
      description: 'Soumettez des demandes à l’administration',
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
                APPLICATION PARENT
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
                Restez Connecté à la Scolarité de Votre Enfant
              </h1>
              <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', marginBottom: '32px' }}>
                Le rôle du parent dans OmniSchool Parent est de suivre et superviser tout ce qui concerne la scolarité de son enfant depuis une seule application. Il peut visualiser les informations essentielles comme les devoirs, l’emploi du temps, les notes, les absences, les événements scolaires et les factures. Grâce à une navigation simple, il accède rapidement aux différents modules et peut également interagir avec l’école en envoyant des messages, en réservant des rendez-vous ou en effectuant des paiements. L’application lui envoie des notifications en temps réel pour rester informé des nouveautés importantes. Ainsi, le parent dispose d’une vue claire et centralisée pour accompagner efficacement la vie scolaire de son enfant.
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

            {/* Right - Image (pa15) */}
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
                    <div className="omni-hero-mockup__title">OmniSchool • Parents</div>
                  </div>

                  <div className="omni-hero-mockup__media">
                    <img
                      src={pa11}
                      alt="Application Parent OmniSchool"
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
      <section id="parent-features" className="py-24 px-6" style={{ backgroundColor: 'white' }}>
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
              Tout ce dont le Parent a Besoin
            </h2>
          </div>

          {/* Features grid (text cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentFeatures.map((feature, index) => (
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
                    border: '1px solid rgba(45, 71, 44, 0.35)',
                    boxShadow: '0 18px 44px rgba(17,24,39,0.10)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(45, 71, 44, 0.28)',
                      background: 'white',
                    }}
                  >
                    <div
                      className="flex items-center justify-between px-3"
                      style={{
                        height: '52px',
                        backgroundColor: '#2D472C',
                      }}
                    >
                      <div className="text-[10px] font-semibold" style={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.2 }}>
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
            Découvrez comment Omnischool peut vous aider à suivre la scolarité de votre enfant
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