import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/register';
//import Dashboard from './pages/Dashboard';
//import Sessions from './pages/Sessions';
import { isAuthenticated } from './utils/auth';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Uncomment these routes after their components exist */}
      {/* <Route path="/" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
      
      <Route path="/sessions" element={<Sessions />} /> */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
