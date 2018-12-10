import {combineReducers} from 'redux';

const DEFAULT_EVENTS = [
    {
        name: 'Event 1',
        date: '2018-12-06',
        city: 'Moscow',
        checked: true,
        show: true
    },
    {
        name: 'Event 2',
        date: '2018-12-12',
        city: 'San Francisco',
        checked: true,
        show: true
    },
    {
        name: 'Event 3',
        date: '2018-12-25',
        city: 'Voskresenskoe',
        checked: false,
        show: true
    }];

const Modal = (state = {isOpen: false}, action) => {
    switch (action.type) {
        case 'OPEN_ADD_FORM':
            return {...state, isOpen: true};
        case 'FORM_CANCEL':
            return {...state, isOpen: false};
        case 'ADD_EVENT':
            return {...state, isOpen: false};
        default:
            return state;
    }
};

const ConfirmModal = (state = {isOpen: false}, action) => {
    switch  (action.type) {
        case 'OPEN_CONFIRM_MODAL':
            return {...state, isOpen: true};
        case 'CLOSE_CONFIRM_MODAL':
            return {...state, isOpen: false};
        default:
            return state;
    }
};

const Events = (state = {searchValue: '', checked: false, events: DEFAULT_EVENTS}, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return {
                ...state,
                events: [...state.events, {
                    name: action.name,
                    date: action.date,
                    city: action.city,
                    checked: false,
                    show: true
                }]
            };
        case 'EVENT_CHECKBOX_CHANGE':
            return {
                ...state, events: state.events.map((event, index) => {
                    if (index === action.index) {
                        return {...event, checked: !event.checked}
                    } else {
                        return {...event}
                    }
                })
            };
        case 'EVENT_HEADER_CHECKBOX_CHANGE':
            return {
                ...state,
                checked: !state.checked, events: state.events.map((event) => {
                    return {...event, checked: action.checked};
                })
            };
        case 'REMOVE_EVENTS':
            return {...state, checked: false, events: state.events.filter((event) => event.checked === false)};
        case 'SEARCH_FIELD_CHANGE':
            return {
                ...state, searchValue: action.value, events: state.events.map((event) => {
                    if (event.name.includes(action.value)) {
                        return {...event, show: true}
                    } else {
                        return {...event, show: false}
                    }
                })
            };
        default:
            return state;
    }
};

const reducers = combineReducers({
    Modal,
    Events,
    ConfirmModal
});

export default reducers;
