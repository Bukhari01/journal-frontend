import { useState } from 'react';

const JournalEntryForm = ({ onSubmit }) => {
  const [entry, setEntry] = useState({ title: '', content: '', date: '' });

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(entry);
    setEntry({ title: '', content: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-2">New Journal Entry</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={entry.title}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <textarea
        name="content"
        placeholder="Write something..."
        value={entry.content}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded min-h-[100px]"
        required
      />
      <input
        type="date"
        name="date"
        value={entry.date}
        onChange={handleChange}
        className="w-full border px-4 py-2 rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Entry
      </button>
    </form>
  );
};

export default JournalEntryForm;
