import { motion } from 'motion/react';
import dash1 from '../../assets/dash1.png';

export function AssistantOverviewSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'white' }}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
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
              POUR L'ASSISTANT
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
              Toute l'Administration en Un Seul Endroit
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 pt-4">
              <p 
                style={{ 
                  fontSize: '15px', 
                  color: '#6B7280', 
                  lineHeight: '1.7',
                  maxWidth: '420px'
                }}
              >
                Omnischool est un véritable assistant pour les équipes administratives. Gérez tous les processus de l'école depuis un espace centralisé — inscriptions, finances, emploi du temps et communication.
              </p>

              <p 
                style={{ 
                  fontSize: '15px', 
                  color: '#6B7280', 
                  lineHeight: '1.7',
                  maxWidth: '420px'
                }}
              >
                Grâce aux modules de gestion des élèves, des enseignants et de la planification, Omnischool permet des flux de travail plus fluides, économisant temps et ressources.
              </p>

              <p 
                style={{ 
                  fontSize: '15px', 
                  color: '#6B7280', 
                  lineHeight: '1.7',
                  maxWidth: '420px'
                }}
              >
                Omnischool vous offre également une précision accrue dans la gestion des données, créant une base d'information fiable et unifiée pour toutes les décisions administratives.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div
              className="flex items-center justify-center overflow-hidden"
              style={{
                width: '440px',
                height: '580px',
                borderRadius: '16px',
                backgroundColor: '#DEDED8'
              }}
            >
              <img
                src={dash1}
                alt="Dashboard assistant"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}