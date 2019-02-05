import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import TimeSlots from './components/timeSlots';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}


const navbarInstance = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Scheduler Coding Assignment</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  </Navbar>
);

const jumbotronInstance = (
  <Jumbotron>
    <h2>Application Requirements:</h2>
    <p>1. Using your preferred Javascript framework, build a screen which shows a list of hour long slots from 9am to 5pm.</p>
    <p>2. When one time slot is clicked, pop up a modal which asks for name and phone number.</p>
    <p>3. When the name and phone number is submitted, the time slot selected should change to red, indicating the time slot is no longer available.</p>
    <p>4. If the red time slot is clicked on again, the modal will pop up with the name and phone number for that appointment pre-populated. Users will be able to edit the name and phone number to change the user for the appointment.</p>
  </Jumbotron>
);




ReactDOM.render(
  <div>
    <div id="navBar"></div>
    <div className="container">
      <div id="jumboTron"></div>
      <div id="scheduler">
        <TimeSlots></TimeSlots>
      </div>
    </div>
  </div>,
  document.getElementById('app')
);

ReactDOM.render(
  navbarInstance,
  document.getElementById('navBar')
);

ReactDOM.render(
  jumbotronInstance,
  document.getElementById('jumboTron')
);

