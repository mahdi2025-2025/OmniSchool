import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Target, Heart, Shield, Users, Play, Coffee, GraduationCap, MapPin, TrendingUp, Zap, Lock } from 'lucide-react';
import { Link } from 'react-router';

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Simplicité',
      description: 'La gestion scolaire ne devrait pas être compliquée. OmniSchool est conçu pour être intuitif et facile à utiliser, afin que les enseignants et les administrateurs puissent se concentrer sur l\'éducation plutôt que sur la technologie.'
    },
    {
      icon: Heart,
      title: 'Transparence',
      description: 'Une école moderne repose sur une communication claire. OmniSchool crée un lien direct entre l\'école, les enseignants, les parents et les élèves.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'L\'éducation doit évoluer avec la société. OmniSchool utilise des technologies modernes et l\'intelligence artificielle pour automatiser des tâches comme la création des emplois du temps et la communication.'
    },
    {
      icon: Lock,
      title: 'Confiance',
      description: 'Les données scolaires sont sensibles. OmniSchool est construit avec un fort accent sur la sécurité, la stabilité et la fiabilité.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Écoles Partenaires' },
    { number: '10,000+', label: 'Élèves Gérés' },
    { number: '500+', label: 'Enseignants' },
    { number: '98%', label: 'Satisfaction Client' }
  ];

  const team = [
    {
      initials: 'MK',
      name: 'Mohamed Karim',
      role: 'Co-Fondateur & CEO',
      bio: 'Vision produit et stratégie'
    },
    {
      initials: 'AB',
      name: 'Amine Ben Ali',
      role: 'Co-Fondateur & CTO',
      bio: 'Architecture technique et IA'
    },
    {
      initials: 'SJ',
      name: 'Sarra Jebali',
      role: 'Responsable Produit',
      bio: 'UX, design et expérience client'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9F9F7', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      {/* Section 1 - Who We Are */}
      <section className="pt-32 pb-24 px-6" style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Circles */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-200px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-175px',
            right: '-175px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none'
          }}
        />

        <div className="max-w-[1280px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
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
                QUI SOMMES-NOUS
              </div>
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#333333',
                  lineHeight: '1.1',
                  marginBottom: '20px',
                  maxWidth: '460px'
                }}
              >
                Le Partenaire Digital des Écoles Tunisiennes
              </h1>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', maxWidth: '420px' }}>
                Depuis notre création, nous travaillons avec les directeurs et enseignants des écoles privées tunisiennes pour développer la solution de gestion scolaire la plus complète et intuitive du marché.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <div
                style={{
                  width: '580px',
                  height: '380px',
                  borderRadius: '16px',
                  backgroundColor: '#DEDED8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  maxWidth: '100%'
                }}
              >
                <Users size={48} style={{ color: '#9CA3AF' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - About Us */}
      <section className="py-20 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
            {/* Left - Video Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                style={{
                  width: '520px',
                  height: '340px',
                  borderRadius: '16px',
                  backgroundColor: '#1E1E1E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  maxWidth: '100%'
                }}
              >
                {/* Play Button */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Play size={28} style={{ color: '#2D472C', marginLeft: '4px' }} fill="#2D472C" />
                </div>
                {/* Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    fontSize: '12px',
                    color: '#F9F9F7',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Découvrez Omnischool en vidéo
                </div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '20px'
                }}
              >
                À propos d'Omnischool
              </h2>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', marginBottom: '16px' }}>
                Omnischool est une solution leader dans l'administration scolaire et la communication pour les écoles privées tunisiennes. Notre plateforme permet une gestion fluide et efficace de tous les processus administratifs.
              </p>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7' }}>
                Nous sommes profondément engagés dans notre mission et cherchons constamment à améliorer et développer nos services pour permettre aux écoles de se concentrer sur leur tâche la plus importante — l'éducation de nos enfants.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Our Values */}
      <section className="py-20 px-6" style={{ backgroundColor: '#F9F9F7' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
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
              NOS VALEURS
            </div>
            <h2
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '36px',
                fontWeight: '700',
                color: '#333333'
              }}
            >
              Ce qui nous Guide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginTop: '48px' }}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                className="transition-all duration-200"
                style={{
                  padding: '32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
              >
                <value.icon size={32} style={{ color: '#C5A059', marginBottom: '16px' }} />
                <h3
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#333333',
                    marginBottom: '12px'
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section - Our Culture */}
      <section className="py-20 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#333333',
                  marginBottom: '20px'
                }}
              >
                Notre Culture
              </h2>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', maxWidth: '460px', marginBottom: '16px' }}>
                Nous croyons qu'Omnischool est un endroit unique et spécial où travailler. Cela vient de la culture que nous chérissons, de nos valeurs et de notre objectif de contribuer à une meilleure éducation en Tunisie.
              </p>
              <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.7', maxWidth: '460px' }}>
                Nous valorisons la responsabilité, l'engagement et l'humilité. Pour nous, il est important d'avoir une culture d'entreprise chaleureuse et inclusive où chaque membre de l'équipe peut s'épanouir.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                style={{
                  width: '520px',
                  height: '340px',
                  borderRadius: '16px',
                  backgroundColor: '#DEDED8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                  maxWidth: '100%'
                }}
              >
                <Coffee size={48} style={{ color: '#9CA3AF' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Section - Stats Cards */}
      <section className="py-24 px-6" style={{ backgroundColor: '#F9F9F7' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
              style={{
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                textAlign: 'center'
              }}
            >
              <GraduationCap size={40} style={{ color: '#2D472C', margin: '0 auto 24px' }} />
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#333333',
                  marginBottom: '8px'
                }}
              >
                50+
              </div>
              <div style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
                écoles partenaires
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              style={{
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                textAlign: 'center'
              }}
            >
              <MapPin size={40} style={{ color: '#2D472C', margin: '0 auto 24px' }} />
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#333333',
                  marginBottom: '8px'
                }}
              >
                12+
              </div>
              <div style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
                gouvernorats couverts
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
              style={{
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                textAlign: 'center'
              }}
            >
              <Users size={40} style={{ color: '#2D472C', margin: '0 auto 24px' }} />
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#333333',
                  marginBottom: '8px'
                }}
              >
                10+
              </div>
              <div style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
                membres dans l'équipe
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
              style={{
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                textAlign: 'center'
              }}
            >
              <TrendingUp size={40} style={{ color: '#2D472C', margin: '0 auto 24px' }} />
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '48px',
                  fontWeight: '900',
                  color: '#333333',
                  marginBottom: '8px'
                }}
              >
                5,000+
              </div>
              <div style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'Inter, sans-serif' }}>
                élèves gérés
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - CTA Banner */}
      <section className="py-20 px-6" style={{ backgroundColor: '#2D472C' }}>
        <div className="max-w-[1280px] mx-auto text-center">
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}
          >
            Rejoignez la Communauté Omnischool
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '32px' }}>
            Des dizaines d'écoles tunisiennes nous font déjà confiance
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book-demo">
              <button
                className="transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: '#C5A059',
                  color: '#2D472C',
                  borderRadius: '8px',
                  padding: '0 32px',
                  height: '48px',
                  fontSize: '15px',
                  fontWeight: '600',
                  border: 'none'
                }}
              >
                Réserver une Démo
              </button>
            </Link>
            <button
              className="transition-all duration-200 hover:opacity-90"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                borderRadius: '8px',
                padding: '0 32px',
                height: '48px',
                fontSize: '15px',
                fontWeight: '600',
                border: '1px solid white'
              }}
            >
              Nous Contacter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}