import React from 'react'
import { Education } from '..'
import './Background.css'
import { ReactComponent as IconUST } from '../../assets/icon-ust.svg'
import { ReactComponent as IconANU } from '../../assets/icon-anu.svg'

const Background = () => {
  
  const Hline = () => (
    <div className='hline' />
  )


  const MPhil = () => (
    <Education
      startDate={'Sep 2020'}
      endDate={'Aug 2022'}
      SchoolName={'The Hong Kong University of Science and Technology'}
      SchoolIcon={IconUST}
      Program={'MPhil, Computer Science and Engineering'}
    />
  );
  
  const Degree = () => (
    <Education
      startDate={'Sep 2016'}
      endDate={'Aug 2020'}
      SchoolName={'The Hong Kong University of Science and Technology'}
      SchoolIcon={IconUST}
      Program={'BSc, Mathematics and Economics, and Computer Science'}
      Minor={'Minor: Actuarial Mathematics'}
      Grade={'GGA: 3.76 / 4.30'}
    />
  );

  const Exchange = () => (
    <Education
      startDate={'Feb'}
      endDate={'Jun 2019'}
      SchoolName={'The Australian National University'}
      SchoolIcon={IconANU}
      Program={'Exchange Program'}
    />
  );


  const Deans = () => (
    <Education
      startDate={'Spring 2020, Fall 2019, 2018, 2017'}
      SchoolName={'Dean’s List - HKUST'}
      SchoolIcon={IconUST}
    />
  )


  return (
    <div className='background--container'>
      <p className='s6'>Education</p>
      <MPhil />
      <Degree />
      <Exchange />
      <Hline />
      <p className='s6'>{'Honors & Awards'}</p>
      <Deans />
    </div>
  )
}

export default Background