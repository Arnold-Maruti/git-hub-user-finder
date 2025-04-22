import React from 'react'

function Repos({user}) {
    let myrepos=fetch(`https://api.github.com/search/user/${user}/repos`)
    .then(resp=>resp.json())
    .then(data=>data.map(datas=>
    {
        <div>
            <p>{datas.name}</p>
        </div>
    }
    ))

  return (
    <div>
        <tittle>My repositories</tittle>
        {myrepos}
    </div>
  )
}

export default Repos