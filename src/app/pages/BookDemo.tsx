import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CheckCircle, Mail, Phone, MapPin, LayoutDashboard, GraduationCap, Users, BarChart2 } from 'lucide-react';
import { Link } from 'react-router';

export default function BookDemo() {
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolName: '',
    email: '',
    phone: '',
    city: '',
    studentCount: '',
    apps: {
      assistant: false,
      teacher: false,
      parent: false,
      manager: false,
    },
    message: '',
  });

  const handleCheckboxChange = (app: keyof typeof formData.apps) => {
    setFormData({
      ...formData,
      apps: {
        ...formData.apps,
        [app]: !formData.apps[app],
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ backgroundColor: '#F9F9F7', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      <div className="relative" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Decorative Circles */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            backgroundColor: '#2D472C',
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-250px',
            left: '-250px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            backgroundColor: '#2D472C',
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        />

        {/* Main Content */}
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                style={{
                  fontSize: '11px',
                  color: '#C5A059',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                }}
              >
                RÉSERVER UNE DÉMO
              </div>
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#333333',
                  lineHeight: '1.1',
                  marginTop: '16px',
                }}
              >
                Découvrez Omnischool en Action
              </h1>
              <p
                style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  maxWidth: '420px',
                  marginTop: '20px',
                }}
              >
                Réservez une démonstration gratuite de 30 minutes et découvrez comment Omnischool peut
                transformer la gestion de votre école.
              </p>

              {/* Benefits */}
              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Démo personnalisée selon vos besoins',
                  'Réponse sous 24h garantie',
                  'Aucun engagement requis',
                  'Accompagnement et support inclus',
                ].map((benefit, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} style={{ color: '#C5A059', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', color: '#333333' }}>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} style={{ color: '#2D472C', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>contact@omnischool.tn</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={18} style={{ color: '#2D472C', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>+216 XX XXX XXX</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <MapPin size={18} style={{ color: '#2D472C', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#6B7280' }}>Tunis, Tunisie</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                }}
              >
                {!formSubmitted ? (
                  <>
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '22px',
                        fontWeight: '600',
                        color: '#333333',
                      }}
                    >
                      Informations sur votre école
                    </h2>

                    <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
                      {/* Row 1 - First Name & Last Name */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="firstName"
                          >
                            Prénom
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Votre prénom"
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="lastName"
                          >
                            Nom
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Votre nom"
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                      </div>

                      {/* Row 2 - School Name */}
                      <div style={{ marginBottom: '20px' }}>
                        <label
                          style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                          htmlFor="schoolName"
                        >
                          Nom de l'École
                        </label>
                        <input
                          type="text"
                          id="schoolName"
                          name="schoolName"
                          required
                          value={formData.schoolName}
                          onChange={handleInputChange}
                          placeholder="Ex: École Privée Les Oliviers"
                          style={{
                            width: '100%',
                            height: '40px',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            padding: '0 12px',
                            fontSize: '14px',
                            color: '#333333',
                            fontFamily: 'Inter, sans-serif',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                        />
                      </div>

                      {/* Row 3 - Email & Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="votre@email.com"
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="phone"
                          >
                            Téléphone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+216 XX XXX XXX"
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                      </div>

                      {/* Row 4 - City & Student Count */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="city"
                          >
                            Ville
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Ex: Tunis, Sfax..."
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          />
                        </div>
                        <div>
                          <label
                            style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                            htmlFor="studentCount"
                          >
                            Nombre d'Élèves
                          </label>
                          <select
                            id="studentCount"
                            name="studentCount"
                            required
                            value={formData.studentCount}
                            onChange={handleInputChange}
                            style={{
                              width: '100%',
                              height: '40px',
                              border: '1px solid #E5E7EB',
                              borderRadius: '4px',
                              padding: '0 12px',
                              fontSize: '14px',
                              color: '#333333',
                              fontFamily: 'Inter, sans-serif',
                              backgroundColor: 'white',
                            }}
                            onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                            onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                          >
                            <option value="">Sélectionner...</option>
                            <option value="less-100">Moins de 100 élèves</option>
                            <option value="100-200">100 — 200 élèves</option>
                            <option value="200-400">200 — 400 élèves</option>
                            <option value="400-600">400 — 600 élèves</option>
                            <option value="600+">Plus de 600 élèves</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 5 - Applications Checkboxes */}
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '12px' }}>
                          Applications qui vous intéressent
                        </label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                          <div
                            onClick={() => handleCheckboxChange('assistant')}
                            style={{
                              border: formData.apps.assistant ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.assistant ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <LayoutDashboard size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>Dashboard Assistant</span>
                            {formData.apps.assistant && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>

                          <div
                            onClick={() => handleCheckboxChange('teacher')}
                            style={{
                              border: formData.apps.teacher ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.teacher ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <GraduationCap size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>App Enseignant</span>
                            {formData.apps.teacher && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>

                          <div
                            onClick={() => handleCheckboxChange('parent')}
                            style={{
                              border: formData.apps.parent ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.parent ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <Users size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>App Parent</span>
                            {formData.apps.parent && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>

                          <div
                            onClick={() => handleCheckboxChange('manager')}
                            style={{
                              border: formData.apps.manager ? '1px solid #2D472C' : '1px solid #E5E7EB',
                              backgroundColor: formData.apps.manager ? 'rgba(45, 71, 44, 0.05)' : 'white',
                              borderRadius: '8px',
                              padding: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease-out',
                            }}
                          >
                            <BarChart2 size={18} style={{ color: '#2D472C' }} />
                            <span style={{ fontSize: '13px', color: '#333333', flex: 1 }}>Dashboard Manager</span>
                            {formData.apps.manager && <CheckCircle size={16} style={{ color: '#2D472C' }} />}
                          </div>
                        </div>
                      </div>

                      {/* Row 6 - Message */}
                      <div style={{ marginBottom: '24px' }}>
                        <label
                          style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                          htmlFor="message"
                        >
                          Message (optionnel)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Dites-nous en plus sur votre école et vos besoins..."
                          rows={4}
                          style={{
                            width: '100%',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            padding: '12px',
                            fontSize: '14px',
                            color: '#333333',
                            fontFamily: 'Inter, sans-serif',
                            resize: 'vertical',
                            minHeight: '100px',
                          }}
                          onFocus={(e) => (e.target.style.borderColor = '#2D472C')}
                          onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          height: '48px',
                          backgroundColor: '#2D472C',
                          color: 'white',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '15px',
                          fontWeight: '600',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-out',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        Envoyer ma Demande de Démo →
                      </button>

                      {/* Note */}
                      <div
                        style={{
                          fontSize: '12px',
                          color: '#9CA3AF',
                          textAlign: 'center',
                          marginTop: '12px',
                        }}
                      >
                        ✓ Réponse sous 24h ✓ Démo gratuite ✓ Sans engagement
                      </div>
                    </form>
                  </>
                ) : (
                  /* Success State */
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <CheckCircle size={64} style={{ color: '#C5A059', margin: '0 auto 24px' }} />
                    <h2
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#333333',
                        marginBottom: '12px',
                      }}
                    >
                      Demande Envoyée!
                    </h2>
                    <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
                      Nous vous contacterons dans les 24 heures pour confirmer votre démonstration.
                    </p>
                    <Link to="/">
                      <button
                        style={{
                          padding: '12px 32px',
                          backgroundColor: 'white',
                          color: '#2D472C',
                          border: '1px solid #2D472C',
                          borderRadius: '4px',
                          fontSize: '15px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-out',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#2D472C';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'white';
                          e.currentTarget.style.color = '#2D472C';
                        }}
                      >
                        Retour à l'accueil
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
