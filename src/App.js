import React, {Component} from 'react';
import {AddEventModalContainer, DeleteConfirmModalContainer, EventTableContainer} from './containers';
import {Wrapper} from './components';
import {Navbar} from 'reactstrap';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {createStore} from 'redux';
let store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navbar color="primary" light className="justify-content-center">
                    taksa
                </Navbar>

                <Wrapper>
                    <EventTableContainer/>
                </Wrapper>
                <AddEventModalContainer/>
                <DeleteConfirmModalContainer/>
            </Provider>)
    }
}

export default App;
