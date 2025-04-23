import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './Navbar'





function Repos() {
  
    const [repost,setRepo]=useState([])


    fetch("https://api.github.com/users/Arnold-Maruti/repos")
    .then(resp=>resp.json())
    .then(data=>
        setRepo(data)
    )

  return (
    <div>
        
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