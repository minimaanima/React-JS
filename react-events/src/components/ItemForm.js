import React from 'react';

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: ''
    }
    this.onInputChanged = this.onInputChanged.bind(this)
    this.onItemSaved = this.onItemSaved.bind(this)
  }
  

  onInputChanged (event) {
    this.setState({
      itemName: event.target.value
    })
  }

  onItemSaved(event) {
    event.preventDefault()
    console.log(this.state.itemName)
  }

  render () { 
    return (
      <form onSubmit={this.onItemSaved}>
        Item Name:
        <input type='text' name='name' onChange={this.onInputChanged} value={this.state.itemName} />
        <br/>
        <input type='submit'/>
      </form>
    )
  }
}