import React from 'react'
import './Education.css'

const Education = ({startDate, endDate, SchoolName, SchoolIcon, Program, Minor, Grade}) => {
  return (
    <div className='education--container'>
        <SchoolIcon/>
        <div className='education--information'>
          <p className='education--date s6'>
            {endDate 
              ? `${startDate} - ${endDate}`
              :`${startDate}`
            }
          </p>
          <p className='education--school-name s8'>
            {`${SchoolName}`}
          </p>
          {Program &&
            <p className='education--program s7'>
              {`${Program}`}
            </p>
          }
          { Minor && 
            <p className='education--minor s7'>
              {`${Minor}`}
            </p>
          }
          { Grade && 
            <p className='education--grade s7'>
              {`${Grade}`}
            </p>
          }
        </div>
    </div>
  )
}

export default Education