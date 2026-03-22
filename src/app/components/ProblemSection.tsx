import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function ProblemSection() {
  const { t } = useTranslation();

  const stats = t('home.vision.stats', { returnObjects: true }) as Array<{ value: string; label: string }>;

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
          <span className="text-xs font-medium tracking-wide uppercase" style={{ color: '#C5A059' }}>
            {t('home.vision.badge')}
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
            letterSpacing: '-0.02em',
          }}
          className="text-center mb-16"
        >
          {t('home.vision.title')}
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
            gap: '16px',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.85',
              margin: 0,
            }}
          >
            {t('home.vision.p1')}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.85',
              margin: 0,
            }}
          >
            {t('home.vision.p2')}
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.85',
              margin: 0,
            }}
          >
            {t('home.vision.p3')}
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
            gap: '48px',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((s, idx) => (
            <div key={`${s.value}-${idx}`} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: '#2D472C',
                    marginBottom: '8px',
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280' }}>{s.label}</div>
              </div>

              {idx < stats.length - 1 && (
                <div style={{ width: '1px', height: '60px', backgroundColor: '#E5E7EB', marginLeft: '48px' }} />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}