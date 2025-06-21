import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import api from '../services/api';

const Sessions = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSessions = async () => {
    try {
      const res = await api.get('/sessions/active');
      setSessions(res.data);
    } catch (err) {
      console.error('Failed to fetch sessions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Active Sessions</h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : sessions.length === 0 ? (
          <p className="text-center text-gray-500">No active sessions found.</p>
        ) : (
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session._id}
                className="bg-white shadow rounded-lg p-4"
              >
                <p className="text-sm text-gray-700">
                  <span className="font-medium">OS:</span> {session.os}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Browser:</span> {session.browser}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Device:</span> {session.device}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">IP:</span> {session.ip}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Last Used:</span>{' '}
                  {new Date(session.lastUsedAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sessions;
