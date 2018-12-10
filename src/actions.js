import * as actionTypes from './actionTypes';

export const openAddForm = () => ({
  type: actionTypes.OPEN_ADD_FORM,
});

export const removeEvents = () => ({
  type: actionTypes.REMOVE_EVENTS,
});

export const addEvent = (name, date, city) => ({
  type: actionTypes.ADD_EVENT,
  name,
  date,
  city,
});

export const formCancel = () => ({
  type: actionTypes.FORM_CANCEL,
});

export const eventCheckboxChange = index => ({
  type: actionTypes.EVENT_CHECKBOX_CHANGE,
  index,
});

export const eventHeaderCheckboxChange = checked => ({
  type: actionTypes.EVENT_HEADER_CHECKBOX_CHANGE,
  checked,
});

export const changeSearchField = value => ({
  type: actionTypes.SEARCH_FIELD_CHANGE,
  value,
});

export const closeConfirmModal = () => ({
  type: actionTypes.CLOSE_CONFIRM_MODAL,
});

export const openConfirmModal = () => ({
  type: actionTypes.OPEN_CONFIRM_MODAL,
});
