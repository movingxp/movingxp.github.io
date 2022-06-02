import React from 'react'
import { Education, Skills } from '..'
import { IconUST, IconANU, IconUSTHack, IconHacklympics, IconCityHack } from '../../assets'
import './Background.css'
import Language from './language/Language'

const Background = () => {
  
  const Hline = () => (
    <div className='hline' />
  );

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

  const USTHack = () => (
    <Education
      startDate={'Apr 2021'}
      SchoolName={'The Most FAiL Award - hackUST'}
      SchoolIcon={IconUSTHack}
    />
  );

  const Hacklympic = () => (
    <Education
      startDate={'Feb 2021'}
      SchoolName={'Champion - hacklympics'}
      SchoolIcon={IconHacklympics}
    />
  );

  const CityHack = () => (
    <Education
      startDate={'Jan 2021'}
      SchoolName={'1st Runner Up - CityHack 2021'}
      SchoolIcon={IconCityHack}
    />
  );

  const Deans = () => (
    <Education
      startDate={'Spring 2020, Fall 2019, 2018, 2017'}
      SchoolName={'Dean’s List - HKUST'}
      SchoolIcon={IconUST}
    />
  );


  return (
    <div>
      <div className='background--container'>
        <p className='s6'>Education</p>
          <MPhil />
          <Degree />
          <Exchange />
        <Hline />
        <p className='s6'>{'Honors & Awards'}</p>
          <USTHack />
          <Hacklympic />
          <CityHack />
          <Deans />
        <Hline />
        <Skills />
        <Hline />
        <Language />
      </div>
    </div>
  )
}

export default Background