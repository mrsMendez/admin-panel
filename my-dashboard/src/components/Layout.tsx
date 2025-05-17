import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0e1117', color: '#fff' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '220px',
          backgroundColor: '#1a1d23',
          color: '#ecf0f1',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
        }}
      >
        <h2 style={{ color: '#1abc9c', marginBottom: '2rem' }}>Admin Panel</h2>

        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#1abc9c' : '#ecf0f1',
            marginBottom: '1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '0.5rem 0',
            borderLeft: isActive ? '4px solid #1abc9c' : '4px solid transparent',
          })}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/empleados"
          style={({ isActive }) => ({
            color: isActive ? '#1abc9c' : '#ecf0f1',
            marginBottom: '1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '0.5rem 0',
            borderLeft: isActive ? '4px solid #1abc9c' : '4px solid transparent',
          })}
        >
          Empleados
        </NavLink>

        <NavLink
          to="/clientes"
          style={({ isActive }) => ({
            color: isActive ? '#1abc9c' : '#ecf0f1',
            marginBottom: '1rem',
            textDecoration: 'none',
            fontWeight: 'bold',
            padding: '0.5rem 0',
            borderLeft: isActive ? '4px solid #1abc9c' : '4px solid transparent',
          })}
        >
          Clientes
        </NavLink>

        <button
          onClick={logout}
          style={{
            marginTop: 'auto',
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
            padding: '0.6rem 1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            borderRadius: '6px',
          }}
        >
          Cerrar sesión
        </button>
      </aside>

      {/* Contenido principal */}
      <main style={{ flex: 1, padding: '2rem' }}>
        {/* Header del usuario */}
        <header
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          {user && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img
                src={user.picture}
                alt="Perfil"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <div style={{ fontWeight: 'bold', color: '#fff' }}>{user.name}</div>
            </div>
          )}
        </header>

        {/* Aquí se renderizan las páginas */}
        <Outlet />
      </main>
    </div>
  );
}
