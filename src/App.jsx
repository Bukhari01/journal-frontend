import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import Sessions from './pages/Sessions';
import { isAuthenticated } from './utils/auth';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected routes */}
      <Route path="/" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/sessions" element={isAuthenticated() ? <Sessions /> : <Navigate to="/login" />} />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
