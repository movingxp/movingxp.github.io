import React from 'react'
import Skill from './skill/Skill'

const Skills = () => {

  const Cpp = () => (
    <Skill skill={'C++'} level={90}/>
  )
  const Python = () => (
    <Skill skill={'Python'} level={80}/>
  )  
  const Java = () => (
    <Skill skill={'Java'} level={60}/>
  )  
  return (
    <>
        <p className='s6'>Skills</p>
        <Cpp />
        <Python />
        <Java />
        <div className='skill--container'>
            <p className='s6 gray-default fw400'>
                Other Programming Languages
            </p>
            <p className='s7 gray-dark fw500'>
                SQL, R, MIPS
            </p>
        </div>
        <div className='skill--container'>
            <p className='s6 gray-default fw400'>
                Software Development
            </p>
            <p className='s7 gray-dark fw500'>
                Git, Linux
            </p>
        </div>
        <div className='skill--container'>
            <p className='s6 gray-default fw400'>
                UI/UX Design
            </p>
            <p className='s7 gray-dark fw500'>
            Figma
            </p>
        </div>

    </>
  )
}

export default Skills