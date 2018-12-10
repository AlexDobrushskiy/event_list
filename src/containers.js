import {AddEventModal, AddRemoveBtnBlock, DeleteConfirmModal, EventTable, SearchField} from './components'

import {connect} from 'react-redux'
import {
    openAddForm, removeEvents, formCancel, addEvent, eventCheckboxChange,
    eventHeaderCheckboxChange, changeSearchField, closeConfirmModal, openConfirmModal
} from './actions'


const mapDispatchToPropsAddRemoveBtnBlock = (dispatch) => {
    return {
        onPlusClick: () => {
            dispatch(openAddForm())
        },
        onMinusClick: () => {
            dispatch(openConfirmModal());
        }
    }
};

export const AddRemoveBtnBlockContainer = connect(null, mapDispatchToPropsAddRemoveBtnBlock)(AddRemoveBtnBlock);

const mapDispatchToPropsAddEventModal = (dispatch) => {
    return {
        addEvent: (name, date, city) => {
            dispatch(addEvent(name, date, city))
        },
        onCancelClick: () => {
            dispatch(formCancel());
        }
    }
};

const mapStateToPropsAddEventModal = (state) => {
    return {
        isModalOpen: state.Modal.isOpen
    }
};

export const AddEventModalContainer = connect(mapStateToPropsAddEventModal, mapDispatchToPropsAddEventModal)(AddEventModal);

const mapStateToPropsEventTable = (state) => {
    return {
        events: state.Events.events,
        headerChecked: state.Events.checked
    }
};

const mapDispatchToPropsEventTable  = (dispatch) => {
    return {
        onChange: (index) => {
            dispatch(eventCheckboxChange(index))
        },
        headerCheckboxChange: (e) => {
            dispatch(eventHeaderCheckboxChange(e.target.checked))
        }
    }
};

export const EventTableContainer = connect(mapStateToPropsEventTable, mapDispatchToPropsEventTable)(EventTable);

const mapStateToPropsSearch = (state) => {
    return {
        value: state.Events.searchValue,
    }
};

const mapDispatchToPropsSearch  = (dispatch) => {
    return {
        onChange: (e) => {
            dispatch(changeSearchField(e.target.value))
        }
    }
};

export const SearchFieldContainer = connect(mapStateToPropsSearch, mapDispatchToPropsSearch)(SearchField);

const mapStateToPropsDeleteConfirmModal = (state) => {
    return {
        isOpen: state.ConfirmModal.isOpen,
    }
};

const mapDispatchToPropsDeleteConfirmModal  = (dispatch) => {
    return {
        onOK: () => {
            dispatch(closeConfirmModal());
            dispatch(removeEvents());
        },
        onCancel: () => {
            dispatch(closeConfirmModal())
        }
    }
};

export const DeleteConfirmModalContainer = connect(mapStateToPropsDeleteConfirmModal, mapDispatchToPropsDeleteConfirmModal)(DeleteConfirmModal);
