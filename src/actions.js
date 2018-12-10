import * as actionTypes from "./actionTypes";

export const openAddForm  = () => {
    return {
        type: actionTypes.OPEN_ADD_FORM
    }
};

export const removeEvents = () => {
    return {
        type: actionTypes.REMOVE_EVENTS
    }
};

export const addEvent = (name, date, city) => {
    return {
        type: actionTypes.ADD_EVENT,
        name,
        date,
        city
    }
};

export const  formCancel = () => {
    return {
        type: actionTypes.FORM_CANCEL
    }
};

export const eventCheckboxChange = (index) => {
    return {
        type: actionTypes.EVENT_CHECKBOX_CHANGE,
        index
    }
};

export const eventHeaderCheckboxChange = (checked) => {
    return {
        type: actionTypes.EVENT_HEADER_CHECKBOX_CHANGE,
        checked
    }
};

export const changeSearchField = (value) => {
    return {
        type: actionTypes.SEARCH_FIELD_CHANGE,
        value
    }
};

export const closeConfirmModal = () => {
    return {
        type: actionTypes.CLOSE_CONFIRM_MODAL,
    }
};

export const openConfirmModal = () => {
    return {
        type: actionTypes.OPEN_CONFIRM_MODAL,
    }
};
