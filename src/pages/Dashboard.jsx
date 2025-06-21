import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import JournalEntryForm from '../components/JournalEntryForm';
import api from '../services/api';

const Dashboard = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEntries = async () => {
    try {
      const res = await api.get('/journal/all');
      setEntries(res.data);
    } catch (err) {
      console.error('Failed to fetch entries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (entryData) => {
    try {
      const res = await api.post('/journal/create', entryData);
      setEntries([res.data, ...entries]);
    } catch (err) {
      console.error('Failed to create entry:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/journal/delete/${id}`);
      setEntries(entries.filter((entry) => entry._id !== id));
    } catch (err) {
      console.error('Failed to delete entry:', err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-3xl mx-auto p-4">
        <JournalEntryForm onSubmit={handleCreate} />

        {loading ? (
          <p className="text-center text-gray-500 mt-6">Loading entries...</p>
        ) : entries.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">No entries yet.</p>
        ) : (
          <div className="space-y-4">
            {entries.map((entry) => (
              <div key={entry._id} className="bg-white shadow-md rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {entry.title}
                  </h3>
                  <button
                    onClick={() => handleDelete(entry._id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-line">{entry.content}</p>
                <p className="text-xs text-gray-400 mt-2">Date: {new Date(entry.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
