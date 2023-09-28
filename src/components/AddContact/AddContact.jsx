import React, { useContext, useState } from "react";
import Home from "../Home/Home";
import { contactsContext } from "../../context/ContactsContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContact, getContacts } = useContext(contactsContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

const navigate = useNavigate('/')
  const handleClick = () => {
    if(!name || !phone || !image ){
      return
    }
    let newContact = {
      name,
      phone,
      image
    };

    addContact(newContact);

    setName("");
    setPhone("");
    setImage("");

    getContacts();
    navigate('/')
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="имя"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="номер телефона"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="изображение"
      />
      <button onClick={handleClick}>Add</button>
      <Home />
    </div>
  );
};

export default AddContact;
