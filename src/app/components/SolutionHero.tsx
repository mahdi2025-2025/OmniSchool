import { motion } from 'motion/react';
import { Link } from 'react-router';
import bgImage from '../../assets/bg.png';
import dashboardAdminImg from '../../assets/1.jpg';
import emploiDuTempsImg from '../../assets/2.jpg';
import appEnseignantImg from '../../assets/3.jpg';
import appParentImg from '../../assets/4.jpg';
import './SolutionHero.css';

export function SolutionHero() {
  return (
    <section
      style={{ backgroundColor: '#F9F9F7' }}
      className="relative overflow-hidden py-32 px-6"
    >
      {/* Full-cover background image (CLEAR). Readability is handled by overlays. */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'none',
            transform: 'none',
            opacity: 1,
            imageRendering: 'auto',
          }}
        />

        {/* Readability overlay (match HeroSection styling) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(249,249,247,0.92) 0%, rgba(249,249,247,0.80) 42%, rgba(249,249,247,0.15) 100%),' +
              'radial-gradient(900px 500px at 22% 28%, rgba(45, 71, 44, 0.12) 0%, rgba(45, 71, 44, 0.00) 65%),' +
              'radial-gradient(700px 420px at 78% 18%, rgba(197, 160, 89, 0.16) 0%, rgba(197, 160, 89, 0.00) 70%)',
          }}
        />

        {/* Subtle noise/texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 10%, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.00) 45%), radial-gradient(circle at 90% 20%, rgba(0,0,0,0.035) 0, rgba(0,0,0,0.00) 40%)',
            mixBlendMode: 'multiply',
            opacity: 0.25,
          }}
        />
      </div>

      {/* Decorative Circles */}
      <div
        className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(45, 71, 44, 0.06)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ backgroundColor: 'rgba(45, 71, 44, 0.06)' }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-5"
          >
            {/* Label */}
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                color: '#C5A059',
                textTransform: 'uppercase',
                fontWeight: '600',
              }}
            >
              SOLUTION COMPLÈTE
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '48px',
                fontWeight: '900',
                color: '#333333',
                lineHeight: '1.1',
                maxWidth: '480px',
              }}
            >
              Des Processus Digitaux pour Toute l'École
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '16px',
                color: '#6B7280',
                lineHeight: '1.6',
                maxWidth: '420px',
              }}
            >
              Une plateforme complète qui supporte élèves, parents, enseignants et
              administration — à chaque étape de la vie scolaire.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/book-demo">
                <button
                  className="font-semibold transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: '#2D472C',
                    color: 'white',
                    height: '48px',
                    minWidth: '160px',
                    borderRadius: '4px',
                    fontSize: '15px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Réserver une Démo
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Floating Mockup Cards */}
          <div className="solution-hero-cards">
            {/* Card 1 - Dashboard Admin (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="solution-hero-card solution-hero-card--lg"
              style={{ top: '28px', left: 0, transform: 'rotate(-1deg)' }}
            >
              <img
                src={dashboardAdminImg}
                alt="Dashboard Admin"
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--green">
                Dashboard Admin
              </div>
            </motion.div>

            {/* Card 2 - Emploi du Temps (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="solution-hero-card solution-hero-card--md"
              style={{ top: 0, right: '18px', transform: 'rotate(2deg)' }}
            >
              <img
                src={emploiDuTempsImg}
                alt="Emploi du Temps IA"
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--gold">
                Emploi du Temps IA
              </div>
            </motion.div>

            {/* Card 3 - App Enseignant (Bottom Left - Mobile Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="solution-hero-card solution-hero-card--phone"
              style={{ bottom: '84px', left: '72px', transform: 'rotate(-2deg)' }}
            >
              <img
                src={appEnseignantImg}
                alt="App Enseignant"
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--green">
                App Enseignant
              </div>
            </motion.div>

            {/* Card 4 - App Parent (Bottom Right - Mobile Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="solution-hero-card solution-hero-card--phone"
              style={{ bottom: '20px', right: '12px', transform: 'rotate(1deg)' }}
            >
              <img
                src={appParentImg}
                alt="App Parent"
                className="solution-hero-card__img"
              />
              <div className="solution-hero-card__shine" />
              <div className="solution-hero-card__badge solution-hero-card__badge--gold">
                App Parent
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}