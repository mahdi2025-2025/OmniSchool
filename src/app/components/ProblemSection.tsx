import { motion } from 'motion/react';

export function ProblemSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-4"
        >
          <span
            className="text-xs font-medium tracking-wide uppercase"
            style={{ color: '#C5A059' }}
          >
            NOTRE VISION
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: '40px', 
            fontWeight: '700', 
            color: '#2D472C',
            letterSpacing: '-0.02em'
          }}
          className="text-center mb-16"
        >
          La Technologie au Service de l'Éducation
        </motion.h2>

        {/* Vision Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          style={{
            textAlign: 'center',
            maxWidth: '760px',
            margin: '0 auto 64px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.85',
            margin: 0
          }}>
            OmniSchool est né d’une conviction : <span style={{ color: '#2D472C', fontWeight: 600 }}>redonner du temps aux écoles</span> pour se concentrer sur l’essentiel — la réussite et l’épanouissement des élèves.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.85',
            margin: 0
          }}>
            Inspirée des meilleures pratiques scandinaves, la plateforme <span style={{ color: '#2D472C', fontWeight: 600 }}>simplifie l’administration</span> et renforce la collaboration entre direction, enseignants et familles.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.85',
            margin: 0
          }}>
            En réunissant gestion, communication et planification dans un espace unique, OmniSchool aide les établissements à piloter plus sereinement — et à replacer l’apprentissage au cœur du quotidien.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '48px'
          }}
        >
          {/* Stat 1 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#2D472C',
              marginBottom: '8px'
            }}>
              +50
            </div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#6B7280'
            }}>
              Écoles Ciblées
            </div>
          </div>

          {/* Divider 1 */}
          <div style={{
            width: '1px',
            height: '60px',
            backgroundColor: '#E5E7EB'
          }} />

          {/* Stat 2 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#2D472C',
              marginBottom: '8px'
            }}>
              100%
            </div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#6B7280'
            }}>
              Tunisien & Local
            </div>
          </div>

          {/* Divider 2 */}
          <div style={{
            width: '1px',
            height: '60px',
            backgroundColor: '#E5E7EB'
          }} />

          {/* Stat 3 */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '40px',
              fontWeight: '700',
              color: '#2D472C',
              marginBottom: '8px'
            }}>
              1
            </div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#6B7280'
            }}>
              Plateforme Complète
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}