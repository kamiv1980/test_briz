/** @format */
/** @format */
import uuid from 'react-uuid';

export const actionTypes = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  EDIT_CONTACT: 'EDIT_CONTACT',
  EDIT_ITEM: 'EDIT_ITEM',
  IS_EDIT: 'IS_EDIT',
};

export const isEdit = (isEdit) => ({
  type: actionTypes.IS_EDIT,
  payload: {
    isEdit,
  },
});

export const newEditItem = (editItem) => ({
  type: actionTypes.EDIT_ITEM,
  payload: {
    editItem,
  },
});

export const addContact = (name, number) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: uuid(),
    name,
    number,
  },
});

export const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: {
    id,
  },
});

export const editContact = (id, name, number) => ({
  type: actionTypes.EDIT_CONTACT,
  payload: {
    id,
    name,
    number,
  },
});
