import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2.5rem',
          boxShadow: '0 15px 30px rgba(0,0,0,0.25)',
          textAlign: 'center',
          animation: 'fadeIn 0.6s ease-out',
        }}
      >
        {/* Logo opcional */}
        <div style={{ marginBottom: '1rem' }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Arka_logo.svg/1280px-Arka_logo.svg.png"
            alt="Logo"
            style={{ maxWidth: '100px', filter: 'grayscale(1)' }}
          />
        </div>

        <h1 style={{ fontSize: '1.6rem', color: '#2c3e50', marginBottom: '0.5rem' }}>
          Acceso Administrativo
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Inicia sesión con tu cuenta corporativa
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                login(credentialResponse.credential);
                navigate('/');
              }
            }}
            onError={() => {
              alert('Error al iniciar sesión');
            }}
            theme="filled_black"
            size="large"
            width="100%"
          />
        </div>

        <footer style={{ fontSize: '0.85rem', color: '#999' }}>
          © {new Date().getFullYear()} ArkaTech • Acceso interno
        </footer>
      </div>

      {/* Animación opcional */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
