import React, { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { contactsContext } from '../../context/ContactsContext';
import style from './ContactDetails.module.css'

const ContactDetails = () => {
    const {id} = useParams();
    const {getContactDetails, contactDetails, deleteContact} = useContext(contactsContext)

    useEffect(()=>{
        getContactDetails(id)
    }, [])
  return (
    <div className={style.contactDetails}>
        <h1>{contactDetails.name}</h1>
        <img src={contactDetails.image} />
        <p>{contactDetails.phone}</p>
        <NavLink to={`/edit/${id}`}>
            <button>Edit</button>
        </NavLink>
        <NavLink to='/'>
            <button onClick={()=>deleteContact(id)}>Delete</button>
        </NavLink>
    </div>
  )
}

export default ContactDetails