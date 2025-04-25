import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from './Navbar'





function Repos({user}) {
  
    const [repost,setRepo]=useState([])
    const [loading,setLoading]=useState(true);


    useEffect(()=>{
    if (user && user.login){
        setLoading(true)
    fetch(`https://api.github.com/users/${user.login}/repos`)
    .then(resp=>resp.json())
    .then(data=>{
        setRepo(data)
        setLoading(false)
    }
    )}},[user])

    

  return (
    <div className='list'>
        
        <h1>My repositories</h1>
        { loading ?(<p>Repositories loading .....</p>):(
           repost.map(repo=>
            (
                <div>
                    <p>{repo.name}</p>
                </div>
            )))
        }
    </div>
  )}


export default Repos