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
    <>
    <Navbar/>
    <div id="profile">
    <div 
    style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#fff',
      maxWidth: '450px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }} >    
      <img src={user.avatar_url}
       alt={user.login} 
       width="400"
     height="400"
     style={{
    borderRadius: '50%', 
    objectFit: 'cover',   
    border: '2px solid #ccc', 
    }}/>
    <br />
    <br />
    <h2> <strong>{user.name}</strong></h2>
    <br />
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
  <br />
  <br />
  <br />
  <br />
  <br />
  {user.following > 0 && (
    <span>
      • {user.following} following
    </span>
  )}
</div>
    <br />
    <br />
    {user.company && <p><FontAwesomeIcon icon={faCity} /> {user.company}</p>}
    <br />
    <br />
    {user.location && <p><FontAwesomeIcon icon={faLocationDot} /> {user.location}</p>}
    <br />
    <br />
    {user.blog && <a href={user.blog} target="_blank"><FontAwesomeIcon icon={faLink} />GitHub Blog</a>}
     
     </div>
     <div id="repos">
     <Repos user={user}/>
     </div>
     </div>
     </>
  );

  
}

export default ProfileDisplay;