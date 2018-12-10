import React, {Component} from 'react';
import {Card, CardHeader, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {AddRemoveBtnBlockContainer, SearchFieldContainer} from "./containers";
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Table, ModalFooter, Dropdown} from 'reactstrap';

export const AddRemoveBtnBlock = ({onPlusClick, onMinusClick}) => {
    return <div className="col-3">
        <button className="btn btn-link text-dark" onClick={e => {
            onPlusClick()
        }}><i className="fas fa-plus"/>
        </button>
        <button className="btn btn-link ml-4 text-dark" href="#" onClick={e => {
            onMinusClick()
        }}>
            <i className="fas fa-minus"/>
        </button>
    </div>
};

export const SearchField = ({onChange, value}) => {
    return <div className="col-5 offset-3">
        <Input type="text" placeholder="Search" onChange={onChange} value={value}/>
    </div>
};

export const Wrapper = (props) => (
    <div className="container">
        <Card className="mt-4">
            <CardHeader>
                <div className="row">
                    <AddRemoveBtnBlockContainer/>
                    <SearchFieldContainer/>
                </div>
            </CardHeader>
            {props.children}
        </Card>
    </div>
);

export class AddEventModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            eventDate: '',
            eventCity: 'Moscow'
        }
    }

    clean = () => {
        this.setState({
            eventName: '',
            eventDate: '',
            eventCity: 'Moscow'
        });
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        this.props.addEvent(this.state.eventName, this.state.eventDate, this.state.eventCity);
        this.clean();
    };

    render() {
        return <Modal isOpen={this.props.isModalOpen}>
            <ModalHeader>Add Event</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Input type="text" name="eventName" id="idEventName" placeholder="Name"
                               value={this.state.eventName} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="date" name="eventDate" id="idEventDate"
                               value={this.state.eventDate} onChange={this.handleInputChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="eventCity" id="idCitySelect" value={this.state.eventCity}
                               onChange={this.handleInputChange}>
                            <option value="Moscow">Moscow</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="Atlanta">Atlanta</option>
                            <option value="Bangkok">Bangkok</option>
                            <option value="Seoul">Seoul</option>
                            <option value="Singapore">Singapore</option>
                        </Input>
                    </FormGroup>
                    <Button color="info" onClick={this.handleSubmit} className="float-right ml-4">Add</Button>
                    <Button color="info" onClick={this.props.onCancelClick}
                            className="float-right">Cancel</Button>
                </Form>
            </ModalBody>
        </Modal>;
    }
}

const EventTableHeader = ({headerCheckboxChange, headerChecked}) => {
    return <thead>
    <tr>
        <th>
            <div>
                <input type="checkbox" id="headerCheckbox" onChange={headerCheckboxChange} checked={headerChecked}/>
            </div>
        </th>
        <th>Name</th>
        <th>Date</th>
        <th>City</th>
    </tr>
    </thead>
};

const EventTableRow = ({event, onChange, index}) => {
    const handleCheckboxClick = (e) => {
        onChange(index);
    };

    return event.show ? <tr>
        <th scope="row">
            <div>
                <input type="checkbox" checked={event.checked} onChange={handleCheckboxClick}/>
            </div>
        </th>
        <td>{event.name}</td>
        <td>{event.date}</td>
        <td>{event.city}</td>
    </tr> : null;

};

export const EventTable = ({events, onChange, headerCheckboxChange, headerChecked}) => {
    let key = 0;
    const rows = events.map((event) => <EventTableRow event={event} onChange={onChange} index={key} key={key++}/>);
    return <Table hover>
        <EventTableHeader headerCheckboxChange={headerCheckboxChange} headerChecked={headerChecked}/>
        <tbody>
        {rows}
        </tbody>
    </Table>
};

export const DeleteConfirmModal = ({isOpen, onOK, onCancel}) => {
    return <Modal isOpen={isOpen}>
        <ModalHeader>Are you sure?</ModalHeader>
        <ModalBody>
            Are you sure want to remove this events from list?
        </ModalBody>
        <ModalFooter>
            <Button color="info" onClick={onOK} className="float-right ml-4">Remove</Button>
            <Button color="info" onClick={onCancel} className="float-right">Cancel</Button>
        </ModalFooter>
    </Modal>
};