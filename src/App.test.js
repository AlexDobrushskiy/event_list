import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ADD_EVENT, OPEN_ADD_FORM, REMOVE_EVENTS } from './actionTypes';
import { addEvent, openAddForm, removeEvents } from './actions';
import reducers from './reducers';

const DEFAULT_STATE = {
  ConfirmModal: {
    isOpen: false,
  },
  Events: {
    checked: false,
    events: [
      {
        checked: true,
        city: 'Moscow',
        date: '2018-12-06',
        name: 'Event 1',
        show: true,
      },
      {
        checked: true,
        city: 'San Francisco',
        date: '2018-12-12',
        name: 'Event 2',
        show: true,
      },
      {
        checked: false,
        city: 'Voskresenskoe',
        date: '2018-12-25',
        name: 'Event 3',
        show: true,
      },
    ],
    searchValue: '',
  },
  Modal: {
    isOpen: false,
  },
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('actions', () => {
  it('should create an action to open event add form', () => {
    const expectedAction = {
      type: OPEN_ADD_FORM,
    };
    expect(openAddForm()).toEqual(expectedAction);
  });
  it('should create an action to remove events', () => {
    const expectedAction = {
      type: REMOVE_EVENTS,
    };
    expect(removeEvents()).toEqual(expectedAction);
  });

  it('should create an action to add event', () => {
    const expectedAction = {
      type: ADD_EVENT,
      name: 'Event1',
      date: '12/12/12',
      city: 'Novosibirsk',
    };
    expect(addEvent('Event1', '12/12/12', 'Novosibirsk')).toEqual(expectedAction);
  });
});

describe('reducers', () => {
  it('should handle open form', () => {
    expect(reducers(undefined, { type: OPEN_ADD_FORM })).toEqual({ ...DEFAULT_STATE, Modal: { isOpen: true } });
  });

  it('should add event to store', () => {
    const eventData = {
      name: 'aaa', date: 'aaa', city: 'aaa', checked: false, show: true,
    };
    expect(reducers(undefined, { ...eventData, type: ADD_EVENT })).toEqual({
      ...DEFAULT_STATE,
      Events: { ...DEFAULT_STATE.Events, events: [...DEFAULT_STATE.Events.events, eventData] },
    });
  });
});
