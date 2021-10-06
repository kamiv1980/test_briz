/** @format */
import { actionTypes } from './actions';
import { defaultContacts } from '../../base/index';

const initialState = {
  items: JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  isEdit: false,
  editItem: { id: '', name: '', number: '' },
};

export function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return { ...state, items: [...state.items, action.payload] };

    case actionTypes.DELETE_CONTACT:
      return { ...state, items: state.items.filter((contact) => contact.id !== action.payload.id) };

    case actionTypes.IS_EDIT:
      return {
        ...state,
        isEdit: (state.isEdit = action.payload.isEdit),
      };

    case actionTypes.EDIT_ITEM:
      return {
        ...state,
        editItem: action.payload.editItem,
      };

    case actionTypes.EDIT_CONTACT:
      return {
        ...state,
        items: state.items.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, name: action.payload.name, number: action.payload.number }
            : contact,
        ),
      };

    default:
      return state;
  }
}
