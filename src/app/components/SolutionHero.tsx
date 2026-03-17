import { motion } from 'motion/react';
import { Link } from 'react-router';

export function SolutionHero() {
  return (
    <section className="relative overflow-hidden py-32 px-6" style={{ backgroundColor: '#F9F9F7' }}>
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
                fontWeight: '600'
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
                maxWidth: '480px'
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
                maxWidth: '420px'
              }}
            >
              Une plateforme complète qui supporte élèves, parents, enseignants et administration — à chaque étape de la vie scolaire.
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
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Réserver une Démo
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Floating Mockup Cards */}
          <div className="relative h-[600px]">
            {/* Card 1 - Dashboard Admin (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="absolute top-8 left-0 overflow-hidden"
              style={{
                width: '280px',
                height: '190px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                transform: 'rotate(-1deg)'
              }}
            >
              {/* Header */}
              <div className="h-8 flex items-center justify-between px-3" style={{ backgroundColor: '#2D472C' }}>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} />
                </div>
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} />
              </div>
              
              {/* Body with Sidebar */}
              <div className="flex h-[calc(100%-32px)]">
                {/* Sidebar */}
                <div className="w-12 p-2 space-y-2" style={{ backgroundColor: '#1E3318' }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.6)' }} />
                  ))}
                </div>
                {/* Content */}
                <div className="flex-1 p-4 space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="h-2 rounded" 
                      style={{ 
                        backgroundColor: '#E5E7EB',
                        width: i === 1 ? '70%' : i === 2 ? '90%' : i === 3 ? '60%' : '85%'
                      }} 
                    />
                  ))}
                </div>
              </div>

              {/* Label Badge */}
              <div 
                className="absolute bottom-3 left-3 px-3 py-2"
                style={{
                  backgroundColor: '#2D472C',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600'
                }}
              >
                Dashboard Admin
              </div>
            </motion.div>

            {/* Card 2 - Emploi du Temps (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="absolute top-0 right-8 overflow-hidden"
              style={{
                width: '260px',
                height: '180px',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                transform: 'rotate(2deg)'
              }}
            >
              {/* Header */}
              <div className="h-8" style={{ backgroundColor: '#2D472C' }} />
              
              {/* Schedule Grid */}
              <div className="p-3">
                <div className="grid grid-cols-5 gap-1.5">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="h-5 rounded"
                      style={{ 
                        backgroundColor: i % 3 === 0 ? '#2D472C' : i % 3 === 1 ? '#C5A059' : '#E5E7EB'
                      }} 
                    />
                  ))}
                </div>
              </div>

              {/* Label Badge */}
              <div 
                className="absolute bottom-3 left-3 px-3 py-2"
                style={{
                  backgroundColor: '#C5A059',
                  color: '#2D472C',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600'
                }}
              >
                Emploi du Temps IA
              </div>
            </motion.div>

            {/* Card 3 - App Enseignant (Bottom Left - Mobile Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="absolute bottom-20 left-16 overflow-hidden"
              style={{
                width: '140px',
                height: '240px',
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                transform: 'rotate(-2deg)'
              }}
            >
              {/* Mobile Header */}
              <div className="h-10 flex flex-col justify-center items-center px-3" style={{ backgroundColor: '#2D472C' }}>
                <div className="flex gap-1 mb-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-3 space-y-2 flex-1">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="p-2 rounded space-y-1"
                    style={{ backgroundColor: '#F5F5F5' }}
                  >
                    <div className="h-1 rounded" style={{ backgroundColor: '#E5E7EB', width: '80%' }} />
                    <div className="h-1 rounded" style={{ backgroundColor: '#E5E7EB', width: '60%' }} />
                  </div>
                ))}
              </div>

              {/* Bottom Nav */}
              <div className="h-8 flex justify-around items-center px-3 border-t" style={{ borderColor: '#E5E7EB' }}>
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: i === 1 ? '#2D472C' : '#E5E7EB' }} 
                  />
                ))}
              </div>

              {/* Label Badge */}
              <div 
                className="absolute bottom-3 left-3 px-2 py-1.5"
                style={{
                  backgroundColor: '#2D472C',
                  color: 'white',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600'
                }}
              >
                App Enseignant
              </div>
            </motion.div>

            {/* Card 4 - App Parent (Bottom Right - Mobile Portrait) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
              className="absolute bottom-8 right-4 overflow-hidden"
              style={{
                width: '140px',
                height: '240px',
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                transform: 'rotate(1deg)'
              }}
            >
              {/* Mobile Header */}
              <div className="h-10 flex flex-col justify-center items-center px-3" style={{ backgroundColor: '#C5A059' }}>
                <div className="flex gap-1 mb-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }} />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-3 space-y-2 flex-1">
                {[1, 2].map((i) => (
                  <div 
                    key={i} 
                    className="p-3 rounded space-y-2"
                    style={{ backgroundColor: '#F5F5F5' }}
                  >
                    <div className="h-6 rounded" style={{ backgroundColor: '#E5E7EB' }} />
                    <div className="h-1 rounded" style={{ backgroundColor: '#E5E7EB', width: '70%' }} />
                  </div>
                ))}
              </div>

              {/* Bottom Nav */}
              <div className="h-8 flex justify-around items-center px-3 border-t" style={{ borderColor: '#E5E7EB' }}>
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ backgroundColor: i === 2 ? '#C5A059' : '#E5E7EB' }} 
                  />
                ))}
              </div>

              {/* Label Badge */}
              <div 
                className="absolute bottom-3 left-3 px-2 py-1.5"
                style={{
                  backgroundColor: '#C5A059',
                  color: '#2D472C',
                  borderRadius: '8px',
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: '600'
                }}
              >
                App Parent
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}