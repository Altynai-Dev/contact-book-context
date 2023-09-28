import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contactsContext } from '../../context/ContactsContext'

const EditContact = () => {
    const {editContactFunc, contactDetails, getContactDetails} = useContext(contactsContext)

    const {id} = useParams();

    const [editName, setEditName] = useState(contactDetails.name)
    const [editPhone, setEditPhone] = useState(contactDetails.phone)
    const [editImg, setEditImg] = useState(contactDetails.image)
    const navigate = useNavigate()
    useEffect(()=>{
        getContactDetails(id)
    }, [])

    const handleClick = () =>{
        let editedContact = {
            name: editName,
            phone: editPhone,
            image: editImg
        }
        editContactFunc(editedContact, id);
        navigate("/")
    }
  return (
    <div>
        <input 
        type="text"
        value={editName}
        onChange={(e)=>setEditName(e.target.value)}
        placeholder='name' 
        />
        <input type="text"
        value={editPhone}
        onChange={(e)=>setEditPhone(e.target.value)}
        placeholder='phone' 
        />
        <input type="text"
        value={editImg}
        onChange={(e)=>setEditImg(e.target.value)}
        placeholder='image' 
        />
        <button onClick={handleClick}>Edit</button>
    </div>
  )
}

export default EditContact