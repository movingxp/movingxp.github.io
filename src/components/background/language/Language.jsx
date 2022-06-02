import React from 'react'
import './Language.css'

const Language = () => {
  return (
    <>
        <p className='s6'>Language</p>
        <div className='language--container'>
            <div className='language--row'>
                <p className='s7 fw500 gray-dark'>
                    Cantonese
                </p>
                <p className='s6 fw400 gray-default'>
                    Naive
                </p>
            </div>
            <div className='language--row'>
                <p className='s7 fw500 gray-dark'>
                    English
                </p>
                <p className='s6 fw400 gray-default'>
                    Professional, IELTS: 7.5
                </p>
            </div>
            <div className='language--row'>
                <p className='s7 fw500 gray-dark'>
                    Mandarin
                </p>
                <p className='s6 fw400 gray-default'>
                    Competent
                </p>
            </div>
        </div>
    </>
  )
}

export default Language