import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Sessions from './pages/Sessions';
import { isAuthenticated } from './utils/auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sessions" element={<Sessions />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
