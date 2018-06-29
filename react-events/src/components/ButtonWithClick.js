import React, {Component} from 'react'

export default class ButtonWithClick extends Component {
  constructor(props){
    super(props)
    this.onButtonClicked = this.onButtonClicked.bind(this)
  }

  onButtonClicked () {
    console.log(this.props.name)
  }

  render () {
    return (
      <button onClick={this.onButtonClicked}>Click Me !</button>
    )
  }
}