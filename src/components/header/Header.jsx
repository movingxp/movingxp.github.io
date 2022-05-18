import React from 'react'
import { ReactComponent as Mail } from '../../assets/icon-mail.svg'
import { ReactComponent as Phone } from '../../assets/icon-phone.svg'
import { ReactComponent as Address } from '../../assets/icon-address.svg'
import Contact from './contact/Contact'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header--name'>Chan Siu Chung</h1>
            <p className='header--role'>Software Engineer</p>
            <div className='header--contact'>
                <Contact
                    text="scchan.cs@gmail.com"
                    href="mailto:scchan.cs@gmail.com"
                ><Mail /></Contact>
                <Contact
                    text="(+852) 9194-8613"
                    href="tel:+85291948613"
                ><Phone /></Contact>
                <Contact
                    text="New Territories, Hong Kong"
                ><Address /></Contact>
            </div>
        </div>
    )
}

export default Header