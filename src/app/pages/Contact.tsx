import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Calendar, MessageSquare, Headphones, MapPin, Mail, Phone, Clock, CheckCircle, ChevronDown, ChevronUp, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router';

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

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

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: 'Combien de temps dure une démo?',
      answer: 'Nos démonstrations durent environ 30 minutes. Nous vous présentons la plateforme et répondons à toutes vos questions.',
    },
    {
      question: 'La démo est-elle vraiment gratuite?',
      answer: 'Oui, absolument. La démonstration est entièrement gratuite et sans engagement de votre part.',
    },
    {
      question: 'Combien de temps faut-il pour mettre en place Omnischool?',
      answer: 'La mise en place prend généralement 1 à 2 semaines selon la taille de l\'école. Notre équipe vous accompagne à chaque étape.',
    },
    {
      question: 'Proposez-vous un support en arabe et en français?',
      answer: 'Oui, notre plateforme et notre équipe support sont disponibles en arabe et en français.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#F9F9F7', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navbar scrolled={scrolled} />

      {/* Section 1 - Hero */}
      <section style={{ backgroundColor: 'white', paddingTop: '100px', paddingBottom: '100px', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Circle - Top Left */}
        <div
          style={{
            position: 'absolute',
            top: '-285px',
            left: '-285px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none',
          }}
        />
        
        {/* Decorative Circle - Bottom Right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-240px',
            right: '-240px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            backgroundColor: 'rgba(45, 71, 44, 0.06)',
            pointerEvents: 'none',
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
            {/* Left side - Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '44px',
                  fontWeight: '700',
                  color: '#333333',
                  lineHeight: '1.1',
                  maxWidth: '440px',
                  marginBottom: '20px',
                }}
              >
                Nous Sommes Impatients de vous Entendre!
              </h1>
              <p
                style={{
                  fontSize: '15px',
                  color: '#6B7280',
                  lineHeight: '1.7',
                  maxWidth: '420px',
                }}
              >
                Nous apprécions votre visite et avons hâte de vous entendre. Si vous avez des questions, des
                suggestions ou des commentaires, n'hésitez pas à contacter notre équipe. Nous serons ravis de
                vous aider.
              </p>
            </motion.div>

            {/* Right side - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              style={{
                width: '100%',
                maxWidth: '580px',
                height: '420px',
                backgroundColor: '#DEDED8',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                marginLeft: 'auto',
              }}
            >
              <Phone size={48} style={{ color: '#9CA3AF' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - 3 Contact Cards */}
      <section style={{ backgroundColor: 'white', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Réserver une Démo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <Calendar size={36} style={{ color: '#C5A059', margin: '0 auto 16px' }} />
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                Réserver une Démo
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                Découvrez Omnischool en action avec une démonstration gratuite et personnalisée de 30 minutes.
              </p>
              <Link to="/book-demo">
                <button
                  className="transition-all duration-200 hover:opacity-90"
                  style={{
                    width: '100%',
                    height: '40px',
                    backgroundColor: '#2D472C',
                    color: 'white',
                    borderRadius: '4px',
                    border: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Réserver maintenant →
                </button>
              </Link>
            </motion.div>

            {/* Card 2 - Contacter les Ventes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              className="transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <MessageSquare size={36} style={{ color: '#C5A059', margin: '0 auto 16px' }} />
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                Contacter les Ventes
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                Parlez à notre équipe commerciale pour en savoir plus sur nos offres et tarifs adaptés à votre
                école.
              </p>
              <button
                className="transition-all duration-200"
                style={{
                  width: '100%',
                  height: '40px',
                  backgroundColor: 'white',
                  color: '#2D472C',
                  borderRadius: '4px',
                  border: '1px solid #2D472C',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
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
                Nous écrire →
              </button>
            </motion.div>

            {/* Card 3 - Support Technique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
              className="transition-all duration-200"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#2D472C')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <Headphones size={36} style={{ color: '#C5A059', margin: '0 auto 16px' }} />
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '12px',
                }}
              >
                Support Technique
              </h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '20px' }}>
                Vous êtes déjà client ? Notre équipe support est disponible pour vous aider du lundi au
                vendredi.
              </p>
              <button
                className="transition-all duration-200"
                style={{
                  width: '100%',
                  height: '40px',
                  backgroundColor: 'white',
                  color: '#2D472C',
                  borderRadius: '4px',
                  border: '1px solid #2D472C',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
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
                Accéder au support →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3 - Contact Form + Info */}
      <section style={{ backgroundColor: '#F9F9F7', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid lg:grid-cols-[55%_45%] gap-12">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '1px solid #E5E7EB',
                  padding: '40px',
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
                        marginBottom: '24px',
                      }}
                    >
                      Envoyez-nous un Message
                    </h2>

                    <form onSubmit={handleSubmit}>
                      {/* Row 1 - First Name & Last Name */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
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

                      {/* Row 2 - Email & Phone */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
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

                      {/* Row 3 - Subject */}
                      <div style={{ marginBottom: '16px' }}>
                        <label
                          style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                          htmlFor="subject"
                        >
                          Sujet
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
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
                          <option value="">Sélectionner un sujet...</option>
                          <option value="demo">Demande de démo</option>
                          <option value="features">Question sur les fonctionnalités</option>
                          <option value="pricing">Tarifs et offres</option>
                          <option value="support">Support technique</option>
                          <option value="partnership">Partenariat</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>

                      {/* Row 4 - Message */}
                      <div style={{ marginBottom: '24px' }}>
                        <label
                          style={{ display: 'block', fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Comment pouvons-nous vous aider?"
                          rows={5}
                          style={{
                            width: '100%',
                            border: '1px solid #E5E7EB',
                            borderRadius: '4px',
                            padding: '12px',
                            fontSize: '14px',
                            color: '#333333',
                            fontFamily: 'Inter, sans-serif',
                            resize: 'vertical',
                            minHeight: '120px',
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
                        Envoyer le Message →
                      </button>
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
                      Message Envoyé!
                    </h2>
                    <p style={{ fontSize: '15px', color: '#6B7280', marginBottom: '32px' }}>
                      Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
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

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#333333',
                  marginBottom: '24px',
                }}
              >
                Nos Coordonnées
              </h2>

              {/* Contact Info Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                {/* Address */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={20} style={{ color: '#2D472C', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#333333',
                          marginBottom: '4px',
                        }}
                      >
                        Adresse
                      </div>
                      <div style={{ fontSize: '14px', color: '#6B7280' }}>Tunis, Tunisie</div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Mail size={20} style={{ color: '#2D472C', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#333333',
                          marginBottom: '4px',
                        }}
                      >
                        Email
                      </div>
                      <div style={{ fontSize: '14px', color: '#6B7280' }}>contact@omnischool.tn</div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Phone size={20} style={{ color: '#2D472C', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#333333',
                          marginBottom: '4px',
                        }}
                      >
                        Téléphone
                      </div>
                      <div style={{ fontSize: '14px', color: '#6B7280' }}>+216 XX XXX XXX</div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Clock size={20} style={{ color: '#2D472C', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#333333',
                          marginBottom: '4px',
                        }}
                      >
                        Horaires
                      </div>
                      <div style={{ fontSize: '14px', color: '#6B7280' }}>Lun — Ven: 8h00 — 17h00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  className="transition-all duration-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #2D472C',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2D472C';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = '#2D472C';
                  }}
                >
                  <Linkedin size={18} style={{ color: '#2D472C', transition: 'color 0.2s ease-out' }} />
                </button>
                <button
                  className="transition-all duration-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #2D472C',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2D472C';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = '#2D472C';
                  }}
                >
                  <Facebook size={18} style={{ color: '#2D472C', transition: 'color 0.2s ease-out' }} />
                </button>
                <button
                  className="transition-all duration-200"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #2D472C',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2D472C';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    const icon = e.currentTarget.querySelector('svg');
                    if (icon) (icon as SVGElement).style.color = '#2D472C';
                  }}
                >
                  <Instagram size={18} style={{ color: '#2D472C', transition: 'color 0.2s ease-out' }} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Google Map */}
      <section style={{ backgroundColor: 'white', paddingBottom: '0' }}>
        <div style={{ paddingTop: '40px', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '24px',
              fontWeight: '600',
              color: '#333333',
              marginBottom: '8px',
            }}
          >
            Retrouvez-nous
          </h2>
          <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>Tunis, Tunisie</p>
        </div>
        <div style={{ borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204593.23865723637!2d9.996645!3d36.817550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1699000000000!5m2!1sen!2stn"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Section 5 - FAQ Strip */}
      <section style={{ backgroundColor: '#F9F9F7', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h2
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '32px',
              fontWeight: '700',
              color: '#333333',
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            Questions Fréquentes
          </h2>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  padding: '20px',
                }}
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: activeAccordion === index ? '#2D472C' : '#333333',
                      transition: 'color 0.2s ease-out',
                    }}
                  >
                    {faq.question}
                  </div>
                  {activeAccordion === index ? (
                    <ChevronUp size={20} style={{ color: '#2D472C', flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={20} style={{ color: '#6B7280', flexShrink: 0 }} />
                  )}
                </div>
                {activeAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                      overflow: 'hidden',
                      paddingTop: '12px',
                      fontSize: '14px',
                      color: '#6B7280',
                      lineHeight: '1.6',
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}