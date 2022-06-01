import React from 'react'
import './Contact.css'


const Contact = ({ text, href, children }) => {
    return (
        <div className='contact--container'>
            {children}
            {href ?
                <a href={href}>{text}</a> :
                <p>{text}</p>
            }
        </div>
    )
}

export default Contact