import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      if (searchTerm === '') {
        setUsers([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/search/users/${searchTerm}`);
        const data = await response.json();
        setUsers(data|| []);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchUsers();
    }, 500); 

    return () => clearTimeout(timeoutId); 
  }, [searchTerm]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Finder</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img
                src={user.avatar_url}
                alt={user.login}
                width="40"
                style={{ borderRadius: '50%', marginRight: '10px' }}
              />
              <a href={user.html_url} target="_blank" rel="noreferrer">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
};

export default App;
