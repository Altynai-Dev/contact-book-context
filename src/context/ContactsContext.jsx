import axios from "axios";
import React, { createContext, useReducer } from "react";
export const contactsContext = createContext();

const API = "http://localhost:8000/contacts";

const INIT_STATE = {
  contacts: [],
  contactDetails: {}
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
      case "GET_CONTACT_DETAILS":
        return {...state, contactDetails: action.payload}
    default:
      return state;
  }
};


const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addContact = async (contact) => {
    await axios.post(API, contact);
  };

  const getContacts = async () => {
    const { data } = await axios.get(`${API}`);
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  };

  const getContactDetails = async(id) =>{
    const {data} = await axios.get(`${API}/${id}`);
    dispatch ({
      type: "GET_CONTACT_DETAILS",
      payload: data
    })
  }
  const deleteContact = async(id)=>{
    await axios.delete(`${API}/${id}`)
  }

  const editContactFunc = async (editedContact, id)=>{
    await axios.patch(`${API}/${id}`, editedContact)
  }

  return (
    <contactsContext.Provider
      value={{
        contactDetails: state.contactDetails,
        contacts: state.contacts,
        addContact,
        getContacts,
        deleteContact,
        editContactFunc,
        getContactDetails
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};

export default ContactContextProvider;

