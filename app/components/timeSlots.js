import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Modal from 'react-bootstrap/lib/Modal';
import ModalDialog from 'react-bootstrap/lib/ModalDialog';
import ModalHeader from 'react-bootstrap/lib/ModalHeader';
import ModalTitle from 'react-bootstrap/lib/ModalTitle';
import ModalBody from 'react-bootstrap/lib/ModalBody';
import ModalFooter from 'react-bootstrap/lib/ModalFooter';

class TimeSlots extends React.Component {

  constructor() {
    super();

    this.onTimeSlotSelection = this.onTimeSlotSelection.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);  
    this.saveTimeSlot = this.saveTimeSlot.bind(this); 

    this.state = {
      show: false,
      mode: 'Reserve Time Slot',
      timeSlots: [
        { slot: '9:00 am - 10:00 am' },
        { slot: '10:00 am - 11:00 am' },
        { slot: '11:00 am - 12:00 pm' },
        { slot: '12:00 pm - 1:00 pm' },
        { slot: '1:00 pm - 2:00 pm' },
        { slot: '2:00 pm - 3:00 pm' },
        { slot: '3:00 pm - 4:00 pm' },
        { slot: '4:00 pm - 5:00 pm' }
      ]
    }
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleHide = () => {
    this.setState({ show: false });
  };

  onTimeSlotSelection = (e, element) => {
    this.setState({modalTitle: element.slot, show: true, name: '', phone: '', clicked: e.target});
    if(element.name && element.phone){
      this.setState({ name: element.name, phone: element.phone, mode: 'Edit Time Slot'});
    } else {
      this.setState({mode: 'Reserve Time Slot'})
    }
  };

  saveTimeSlot = () => {
    this.setState(state => {
      const slot = state.timeSlots.map(function(item) {
        if(item.slot === this.state.modalTitle){
          item.name = this.nameValue.value;
          item.phone = this.phoneValue.value;
          this.state.clicked.className = 'list-group-item list-group-item-danger';
        }
        return item;
      }, this);
     
    });
    this.setState({mode: 'Time Slot Reserved'});
  };
 
  renderTimeSlots = () => {
    return this.state.timeSlots.map((element) =>{
      return <ListGroupItem action onClick={(e) => this.onTimeSlotSelection(e, element)}>{element.slot}</ListGroupItem>;
    });
  };

  render() {
    return (
    <div>
      <Modal show={this.state.show} onHide={this.handleHide}>
        <ModalHeader closeButton>
          <ModalTitle>{this.state.mode} {this.state.modalTitle}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type='text' className="form-control" value={this.state.name} ref={el => this.nameValue=el}  onChange={e => this.setState({name: e.target.value})}/>
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type='text' className="form-control" value={this.state.phone} ref={el => this.phoneValue=el}  onChange={e => this.setState({phone: e.target.value})} />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={this.handleHide}>
            Close
          </Button>
          <Button variant="primary" onClick={this.saveTimeSlot}>
              Save Changes
          </Button>
        </ModalFooter>
      </Modal>
      <ListGroup> 
        {this.renderTimeSlots()}
      </ListGroup>
      </div>
    );
  }
}

export default TimeSlots;