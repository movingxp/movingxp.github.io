import React from 'react'
import Experience from './experience/Experience'
import data from '../../assets/data/experiencesData.json';
import './Experiences.css'

const Experiences = () => {

  const ExperienceList = () => data.data.map(
    (item, index) => 
      <Experience 
        key={item.title}
        title={item.title}
        itemList={item.items}
        haveBar={index !== data.data.length - 1}
      />
  )

  return (
    <div className='experiences--container'>
      <ExperienceList />
    </div>
  )
}

export default Experiences