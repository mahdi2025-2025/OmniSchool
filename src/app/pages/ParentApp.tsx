import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router';
import pa11 from '../../assets/pa11.jpg';
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
import pa13 from '../../assets/pa13.png';

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

            {/* Right - Image (pa11) */}
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
                      'radial-gradient(closest-side, rgba(45,71,44,0.16) 0%, rgba(45,71,44,0) 66%),' +
                      'radial-gradient(closest-side, rgba(197,160,89,0.18) 0%, rgba(197,160,89,0) 62%)',
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
                    OmniSchool • Parents
                  </div>
                </div>

                <img
                  src={pa11}
                  alt="Application Parent OmniSchool"
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

          {/* Features visual (pa12) replacing the cards */}
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
                  OmniSchool • Parent • Fonctionnalités
                </div>
              </div>

              <img
                src={pa13}
                alt="Fonctionnalités - Application Parent"
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
                  <div
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(229,231,235,0.92)',
                      background: 'white',
                    }}
                  >
                    <div
                      className="flex items-center justify-between px-3"
                      style={{
                        height: '52px',
                        backgroundColor: '#C5A059',
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