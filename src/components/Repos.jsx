import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './Navbar'





function Repos({user}) {
  
    const [repost,setRepo]=useState([])


    useEffect(()=>{fetch(`https://api.github.com/users/${user.login}/repos`)
    .then(resp=>resp.json())
    .then(data=>
        setRepo(data)
    )},[user])

    

  return (
    <div className='list'>
        
        <h1>My repositories</h1>
        {
           repost.map(repo=>
            (
                <div>
                    <p>{repo.name}</p>
                </div>
            ))
        }
    </div>
  )}


export default Repos