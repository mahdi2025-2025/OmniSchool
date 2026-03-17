import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function AdminOverviewSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Left Side - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div 
              className="flex items-center justify-center"
              style={{
                width: '440px',
                height: '580px',
                borderRadius: '16px',
                backgroundColor: '#E8E8E4'
              }}
            >
              <GraduationCap size={48} style={{ color: '#9CA3AF' }} />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="space-y-4"
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
              POUR L'ADMINISTRATEUR
            </div>

            {/* Title */}
            <h2
              style={{ 
                fontFamily: 'Montserrat, sans-serif', 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#333333',
                lineHeight: '1.2',
                maxWidth: '420px'
              }}
            >
              Toute la Gestion Scolaire en Un Seul Endroit
            </h2>

            {/* Description */}
            <p 
              style={{ 
                fontSize: '15px', 
                color: '#6B7280', 
                lineHeight: '1.7',
                maxWidth: '420px',
                paddingTop: '4px'
              }}
            >
              Des processus scolaires digitaux bien conçus sont la base d'une école efficace. Omnischool centralise tout ce dont votre équipe a besoin — élèves, finances, emploi du temps et communication — dans une plateforme simple et puissante.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
