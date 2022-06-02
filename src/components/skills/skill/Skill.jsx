import React from 'react'
import './Skill.css'

const Skill = ({skill, level}) => {
  return (
    <div className='skill--container'>
        <p className='s7'>{skill}</p>
        <div className='level-bar--outer'>
            <div className='level-bar--inner' 
            style={{width: `${level}%`}}>
               
            </div>       
        </div>
    </div>
  )
}

export default Skill