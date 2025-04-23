import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> 536f95a4da3ff430be26c3072c2a879f140100fc


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
        const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
        const data = await response.json();
        setUsers(data.items|| []);
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

  const searchedUser=users.map((user) => (
    <div key={user.id}>
      <img
        src={user.avatar_url}
        alt={user.login}
        width="40"
        style={{ borderRadius: '50%', marginRight: '10px' }}
      />
   <Link to={`/user/${user.login}`}>
  {user.login}
</Link>

    </div>
  ))
  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Finder</h1>
<<<<<<< HEAD
      <Navbar />
=======
      <br/>
      <Navbar/>
      <br/>
      <br/>
>>>>>>> 536f95a4da3ff430be26c3072c2a879f140100fc
      <Header/>
      <br/>
      <br/>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div>
          {searchedUser}
        </div>
      )}
    </div>

  );
};

export default App;
