import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('token');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-800">Personal Journal</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/sessions')}
          className="text-sm text-blue-600 hover:underline"
        >
          Sessions
        </button>
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
