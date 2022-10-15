import React, { useEffect, useState } from 'react'
import getRandomChuck from '../services/axiosService'

export const ChuckComponent = () => {
    const [chuck, setChuck] = useState('')
    
    function getChuck(){
        getRandomChuck()
        .then(res => {
            console.log(res)
            setChuck(res.data.value)
        })
        .catch(err => {
            console.log(err)
        })
    }
  
  return (
    <div>
        <h2>This is a random generator Chuck:</h2>
        <button onClick={getChuck}>Click Here!</button>
        {<p>{chuck}</p>}
    </div>
  )
}
