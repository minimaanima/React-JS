import React, { Component } from 'react'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{
        username: '',
        password: ''
      },
      error: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    let user = this.state.user

    let inputName = event.target.name
    let inputValue = event.target.value

    user[inputName] = inputValue
    this.setState({user}) 
  }
  onFormSubmit(event) {
    event.preventDefault()
    if (this.state.user.password.length < 6) {
      console.log(this.state.error)
      this.setState({error:'Password must be at least 6 symbols'})
      console.log(this.state.error)

      return
    }
    console.log(this.state.user)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <div>{this.state.error}</div>
      Username :
        <input type='text' value={this.state.user.username} name='username' onChange={this.onInputChange}/>
        <br/>
        Password:
        <input type='password' value={this.state.user.password} name='password' onChange={this.onInputChange}/>
        {}
        <br/>
        <input type='submit'/>
      </form>
    )
  }
}