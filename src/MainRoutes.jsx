import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import ContactDetails from "./components/ContactDetails/ContactDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/edit/:id" element={<EditContact />} />
      <Route path="/details/:id" element={<ContactDetails />} />
    </Routes>
  );
};

export default MainRoutes;
