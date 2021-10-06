import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import { ContactList, ContactForm, EditForm } from './components';
import { selContacts, selIsEditing } from './services/contacts/selectors';

function App() {
  const contacts = useSelector(selContacts);
  const isEdit = useSelector(selIsEditing);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h2 className="title">Phone book</h2>
      <div className="wrapper">
        <ContactList />
        {!isEdit ? <ContactForm /> : <EditForm />}
      </div>
    </>
  );
}

export default App;
