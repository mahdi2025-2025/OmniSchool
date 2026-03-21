import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#2D472C' }} className="pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top border */}
        <div className="h-px mb-16" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Main Footer Content - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center mb-4">
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '700', color: 'white' }}>
                Omnischool
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.6' }} className="mb-6">
              La Solution Scolaire de Demain
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576014832405"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <Facebook size={20} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <Twitter size={20} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </a>
              <a
                href="https://www.linkedin.com/company/omnilinks-tn/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <Linkedin size={20} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="transition-opacity duration-200 hover:opacity-70"
              >
                <Instagram size={20} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                Solutions
              </h4>
              <ul className="space-y-3">
                {['Dashboard Admin', 'App Enseignant', 'App Parent', 'Dashboard Manager'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-opacity duration-200 hover:opacity-70" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
                Fonctionnalités
              </h4>
              <ul className="space-y-3">
                {['Gestion Élèves', 'Finance', 'Emploi du Temps', 'Communication'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm transition-opacity duration-200 hover:opacity-70" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} style={{ color: '#C5A059', marginTop: '2px', flexShrink: 0 }} />
                <a href="mailto:contact@omnischool.tn" className="text-sm transition-opacity duration-200 hover:opacity-70" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  contact@omnischool.tn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} style={{ color: '#C5A059', marginTop: '2px', flexShrink: 0 }} />
                <a href="tel:+21612345678" className="text-sm transition-opacity duration-200 hover:opacity-70" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  +216 12 345 678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} style={{ color: '#C5A059', marginTop: '2px', flexShrink: 0 }} />
                <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Avenue Habib Bourguiba<br />Tunis, Tunisie
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="text-center sm:text-left"
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)' }}
            >
              © 2026 Omnischool. Tous droits réservés.
            </p>

            <p
              className="text-center"
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)' }}
            >
              PoweredBy OmniLinks
            </p>

            <div
              className="flex items-center justify-center sm:justify-end gap-4"
              style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.4)' }}
            >
              <a href="#" className="transition-opacity duration-200 hover:opacity-70">
                Confidentialité
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <a href="#" className="transition-opacity duration-200 hover:opacity-70">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
