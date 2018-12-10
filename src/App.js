import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AddEventModalContainer, DeleteConfirmModalContainer, EventTableContainer } from './containers';
import { Wrapper } from './components';
import reducers from './reducers';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar light className="justify-content-center bg-info">
                    <h4 className="text-white">Events</h4>
        </Navbar>

        <Wrapper>
          <EventTableContainer />
        </Wrapper>
        <AddEventModalContainer />
        <DeleteConfirmModalContainer />
      </Provider>);
  }
}

export default App;
