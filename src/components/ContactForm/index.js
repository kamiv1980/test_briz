/** @format */

import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../services/contacts/actions';
import styles from './styles.module.css';
import { selContacts } from '../../services/contacts/selectors';

export const ContactForm = memo(() => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selContacts);
  const dispatch = useDispatch();
  const onAddContacts = (name, number) => dispatch(addContact(name, number));

  const handleName = ({ currentTarget: { value } }) => setName(value);
  const handleNumber = ({ currentTarget: { value } }) => setNumber(value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else if (name === '') {
      alert('Please, input name. ');
    } else if (number === '') {
      alert('Please, input number. ');
    } else {
      onAddContacts(name, number);
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Name</label>
      <input type="text" name="name" value={name} className={styles.input} onChange={handleName} />
      <label className={styles.label}>Number</label>
      <input type="text" name="username" value={number} className={styles.input} onChange={handleNumber} />
      <button className={styles.button}>Add new contact</button>
    </form>
  );
});
