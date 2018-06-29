import React, {Component} from 'react'
import List from './List'
import ItemForm from './ItemForm'

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem(name) {
    this.setState(prevState => {
      let items = prevState.items
      items.push({
        id: items.length + 1,
        name: itemName
      })
    })
  }


  render() {
    return (
      <div>
        <h1>My Page</h1>
        <List />
        <ItemForm/>
      </div>
    )
  }
}