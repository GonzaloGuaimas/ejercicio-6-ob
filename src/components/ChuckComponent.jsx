import React, { useEffect, useState } from 'react'
import getRandomChuck from '../services/axiosService'
import Button from '@mui/material/Button'

export const ChuckComponent = () => {
    const [chuck, setChuck] = useState('')
    const [positive, setPositive] = useState(0)
    const [negative, setNegative] = useState(0)
    
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
    <div style={{ 'textAlign': 'center'}}>
        <h2>This is a random generator Chuck:</h2>
        <Button variant='contained'  onClick={getChuck}>Click Here!</Button>
        {<p>{chuck}</p>}

        <Button variant='contained' color="success" onClick={() => {setPositive(positive+1)}}>POSITIVE</Button>
        <Button variant='contained' color="error" onClick={() => {setNegative(negative+1)}}>NEGATIVE</Button>
        <h1>LIKE: {positive}</h1>
        <h1>DISLIKE: {negative}</h1>
    </div>
  )
}
