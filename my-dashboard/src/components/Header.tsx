import { useAuth } from '../auth/AuthContext';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1'
      }}
    >
      {/* IZQUIERDA: Menú de navegación */}
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#1abc9c' : '#ecf0f1',
            textDecoration: 'none',
            fontWeight: 'bold'
          })}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/empleados"
          style={({ isActive }) => ({
            color: isActive ? '#1abc9c' : '#ecf0f1',
            textDecoration: 'none',
            fontWeight: 'bold'
          })}
        >
          Empleados
        </NavLink>
        <NavLink
          to="/clientes"
          style={({ isActive }) => ({
            color: isActive ? '#1abc9c' : '#ecf0f1',
            textDecoration: 'none',
            fontWeight: 'bold'
          })}
        >
          Clientes
        </NavLink>
      </nav>

      {/* DERECHA: Perfil y logout */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img
          src={user?.picture}
          alt="Perfil"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
        <span>{user?.name}</span>
        <button
          onClick={logout}
          style={{
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer'
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
}
