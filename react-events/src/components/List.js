import React from 'react'

export default class List extends React.Component {
  render () {
    let items = [
      {id: 1, name: 'Ivan'},
      {id: 2, name: 'Gosho'},
      {id: 3, name: 'Pesho'},
      {id: 4, name: 'Maria'},
    ]
    return (
      <ul>
        {items.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    )
  }
}