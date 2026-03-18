import { useState } from 'react';
import { useNavigate } from 'react-router';
import { API_BASE_URL } from '../lib/api';

type LoginResponse = {
  token: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    role: string;
  };
};

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        // Keep message generic for security. Use backend error body if present.
        setError('Identifiants incorrects');
        return;
      }

      const data = (await res.json()) as LoginResponse;

      // Only allow admin role on this screen
      if (!data?.user?.role || data.user.role !== 'ADMIN') {
        setError('Accès refusé');
        return;
      }

      localStorage.setItem('accessToken', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      localStorage.setItem('adminLoggedIn', 'true');

      navigate('/admin/analytics');
    } catch {
      setError('Impossible de se connecter au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F9F9F7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '400px',
          maxWidth: '100%',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '22px',
            fontWeight: '700',
            color: '#2D472C',
            textAlign: 'center',
          }}
        >
          Omnischool
        </div>
        <div
          style={{
            fontSize: '13px',
            color: '#6B7280',
            textAlign: 'center',
            marginTop: '8px',
            marginBottom: '32px',
          }}
        >
          Accès Administrateur
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                fontSize: '13px',
                color: '#6B7280',
                marginBottom: '8px',
                fontWeight: '500',
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@omnischool.tn"
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

          {/* Password Field */}
          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: '13px',
                color: '#6B7280',
                marginBottom: '8px',
                fontWeight: '500',
              }}
            >
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
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

          {/* Error Message */}
          {error && (
            <div
              style={{
                color: '#EF4444',
                fontSize: '13px',
                marginBottom: '16px',
                textAlign: 'center',
              }}
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              height: '48px',
              backgroundColor: '#2D472C',
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              borderRadius: '4px',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.75 : 1,
              transition: 'all 0.2s ease-out',
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.opacity = '1';
            }}
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>

        {/* Footer Note */}
        <div
          style={{
            fontSize: '12px',
            color: '#9CA3AF',
            textAlign: 'center',
            marginTop: '24px',
          }}
        >
          Accès réservé à l'équipe Omnischool
        </div>
      </div>
    </div>
  );
}
