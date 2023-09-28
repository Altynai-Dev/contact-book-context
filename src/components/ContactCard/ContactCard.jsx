import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ContactCard.module.css'

const ContactCard = ({person}) => {
  return (
    <div className={style.contactCard}>
        <NavLink to={`/details/${person.id}`}>
            <div>{person.name}</div>
        </NavLink>
    </div>
  )
}

export default ContactCard