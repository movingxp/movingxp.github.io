import React from 'react'
import { IconLocation } from '../../../assets'
import './Experience.css'

const DecorationPoint = ({haveBar}) => {
  return (
    <div className='point--container'>    
      <div className='point'/>
      {haveBar && <div className='bar'/>}
    </div>

  )
}

const Item = ({date, location, position, company, description, link, icon}) => {

  // const icno = icon && require(`../../../assets/${icon}`);

  // console.log (icno);

  return (
    <div className='item--container'>
      <div className='item--date'>
        <p className='gray-dark s8 fw400'>{date}</p>
        {location && 
          <p className='gray-dark s8 fw400'>
            <IconLocation style={{marginRight: 2}}/>
            {location}
          </p>}
      </div>
      <div className='item--details'>
        <div className='item--heading'>
          {icon && 
            <img 
              src={require(`../../../assets/${icon}`)} 
              alt={company} 
              width={32}
              height={33}
            />
          }
          <div className='item--title'>          
          <div className='fw700 s10'>
            {position}</div>
            {company && <div className='fw500 s9'> {company} </div>}
            {link && <div className='fw500 s9'> {link} </div>}
          </div>
        </div>
        <div className='s10 fw400 item--description'>{description}</div>
      </div>
    </div>
  )
}

const Experience = ({title, itemList, haveBar}) => {

  const ItemList = () => itemList.map(
    item => (
      <Item 
        key={item.position}
        date={item.date}
        location={item.location}
        position={item.position}
        company={item.company}
        description={item.description}
        link={item.link}
        icon={item.icon}
      /> 
    )
  );

  return (
    <div className='experience--container'>
      <DecorationPoint className='exp--grid-1' haveBar={haveBar}/>
      <div className='experience--information exp--grid-2'>
        <div className='s12 fw500 gray-darker'>
          {title}
        </div>
        <ItemList />
      </div>
    </div>
  )
}

export default Experience