import { connect } from 'react-redux';
import {
  AddEventModal, AddRemoveBtnBlock, DeleteConfirmModal, EventTable, SearchField,
} from './components';

import {
  openAddForm, removeEvents, formCancel, addEvent, eventCheckboxChange,
  eventHeaderCheckboxChange, changeSearchField, closeConfirmModal, openConfirmModal,
} from './actions';


const mapDispatchToPropsAddRemoveBtnBlock = dispatch => ({
  onPlusClick: () => {
    dispatch(openAddForm());
  },
  onMinusClick: () => {
    dispatch(openConfirmModal());
  },
});

export const AddRemoveBtnBlockContainer = connect(null, mapDispatchToPropsAddRemoveBtnBlock)(AddRemoveBtnBlock);

const mapDispatchToPropsAddEventModal = dispatch => ({
  addEvent: (name, date, city) => {
    dispatch(addEvent(name, date, city));
  },
  onCancelClick: () => {
    dispatch(formCancel());
  },
});

const mapStateToPropsAddEventModal = state => ({
  isModalOpen: state.Modal.isOpen,
});

export const AddEventModalContainer = connect(mapStateToPropsAddEventModal, mapDispatchToPropsAddEventModal)(AddEventModal);

const mapStateToPropsEventTable = state => ({
  events: state.Events.events,
  headerChecked: state.Events.checked,
});

const mapDispatchToPropsEventTable = dispatch => ({
  onChange: (index) => {
    dispatch(eventCheckboxChange(index));
  },
  headerCheckboxChange: (e) => {
    dispatch(eventHeaderCheckboxChange(e.target.checked));
  },
});

export const EventTableContainer = connect(mapStateToPropsEventTable, mapDispatchToPropsEventTable)(EventTable);

const mapStateToPropsSearch = state => ({
  value: state.Events.searchValue,
});

const mapDispatchToPropsSearch = dispatch => ({
  onChange: (e) => {
    dispatch(changeSearchField(e.target.value));
  },
});

export const SearchFieldContainer = connect(mapStateToPropsSearch, mapDispatchToPropsSearch)(SearchField);

const mapStateToPropsDeleteConfirmModal = state => ({
  isOpen: state.ConfirmModal.isOpen,
});

const mapDispatchToPropsDeleteConfirmModal = dispatch => ({
  onOK: () => {
    dispatch(closeConfirmModal());
    dispatch(removeEvents());
  },
  onCancel: () => {
    dispatch(closeConfirmModal());
  },
});

export const DeleteConfirmModalContainer = connect(mapStateToPropsDeleteConfirmModal, mapDispatchToPropsDeleteConfirmModal)(DeleteConfirmModal);
