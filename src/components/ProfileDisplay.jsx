import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCity, faUsers,faLink } from '@fortawesome/free-solid-svg-icons';
import Repos from './Repos';
import Navbar from './Navbar';


function ProfileDisplay() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        setUser(data);
        console.log(data)
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  if (loading) return <p>Loading profile...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    
    <div 
    style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#fff',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }} >  
      <Navbar />    
      <img src={user.avatar_url}
       alt={user.login} 
       width="100"
     height="100"
     style={{
    borderRadius: '50%', 
    objectFit: 'cover',   
    border: '2px solid #ccc', 
    }}/>
    <br />
    <h2> <strong>{user.name}</strong></h2>
    <p>{user.login}</p>
    <br />

    {user.bio && <p> {user.bio}</p>}
    <br />
    <p>For more details click the link below</p>
    <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
    <br />
    <br />
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  {user.followers > 0 && (
    <span>
      <FontAwesomeIcon icon={faUsers} /> {user.followers} followers
    </span>
  )}
  {user.following > 0 && (
    <span>
      • {user.following} following
    </span>
  )}
</div>
    <br />
    {user.company && <p><FontAwesomeIcon icon={faCity} /> {user.company}</p>}
    {user.location && <p><FontAwesomeIcon icon={faLocationDot} /> {user.location}</p>}
    {/* {user.email && <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>} */}
    {user.blog && <p><FontAwesomeIcon icon={faLink} /> {user.blog}</p>}
     
    <Repos user={user}/>
     </div>
     
  );

  
}

export default ProfileDisplay;