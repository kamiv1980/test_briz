/** @format */
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { selContacts } from '../../services/contacts/selectors';
import { deleteContact } from '../../services/contacts/actions';
import { isEdit, newEditItem } from '../../services/contacts/actions';
import styles from './styles.module.css';

export const ContactList = memo(() => {
  const dispatch = useDispatch();

  const contacts = useSelector(selContacts);

  const handleEdit = (user) => () => {
    dispatch(newEditItem(user));
    dispatch(isEdit(true));
  };

  const handleDelete = (id) => () => dispatch(deleteContact(id));

  return (
    <table className={styles.list}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!!contacts.length ? (
          contacts.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.number}</td>
              <td>
                <button onClick={handleEdit(user)} className="button muted-button">
                  <EditIcon />
                </button>
                <button onClick={handleDelete(user.id)} className="button muted-button">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
});
