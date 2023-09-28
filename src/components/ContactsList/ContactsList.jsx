import React, { useContext, useEffect } from 'react'
import { contactsContext } from '../../context/ContactsContext'
import ContactCard from '../ContactCard/ContactCard'

const ContactsList = () => {
    const {contacts, getContacts} = useContext(contactsContext)


    useEffect(()=>{
        getContacts()
    }, [])

  return (
    <div>
        {contacts.map((person)=>(
            <ContactCard key={person.id} person={person} />
        ))}
    </div>
  )
}

export default ContactsList