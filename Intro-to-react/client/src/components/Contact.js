import React, { Component } from 'react';
import fetcher from '../fetcher'

const CONTACTS_ENDPOINT = '/contacts'
export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: null,
      lastName: null,
      phone: null,
      email: null
    }
  }

  mapContacts(data) {
    return {
      contacts: data.map(c => {
        return {
          firstName: c.firstName,
          lastName: c.lastName,
          phone: c.phone,
          email: c.email
        }
      })
    }
  }

  fetchContacts = () => fetcher.get(CONTACTS_ENDPOINT, data => this.setState(this.mapContacts(data)))
  render = () => {
    return (
        <div className="contact" data-id="id">
          <span className="avatar small">&#9787;</span>
          <span className="title">{this.state.firstName} {this.state.lastName}</span>
        </div>
    );
  }
}
