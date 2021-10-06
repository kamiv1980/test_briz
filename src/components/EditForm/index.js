/** @format */

import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles.module.css';
import { selEditItem } from '../../services/contacts/selectors';
import { editContact } from '../../services/contacts/actions';
import { isEdit } from '../../services/contacts/actions';

export const EditForm = memo(() => {
  const item = useSelector(selEditItem);
  const [name, setName] = useState(item.name);
  const [number, setNumber] = useState(item.number);
  const dispatch = useDispatch();
  const onEditContact = (id, name, number) => dispatch(editContact(id, name, number));

  const handleName = ({ currentTarget: { value } }) => setName(value);
  const handleNumber = ({ currentTarget: { value } }) => setNumber(value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (name === '') {
      alert('Please, input name. ');
    } else if (number === '') {
      alert('Please, input number. ');
    } else {
      onEditContact(item.id, name, number);
      dispatch(isEdit(false));
    }
  };
  const handleCancel = () => dispatch(isEdit(false));

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>Name</label>
      <input type="text" name="name" value={name} className={styles.input} onChange={handleName} />
      <label className={styles.label}>Number</label>
      <input type="text" name="number" value={number} className={styles.input} onChange={handleNumber} />
      <div className={styles.actions}>
        <button className={styles.button}>Update contact</button>
        <button className={styles.button} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
});
