import React ,{Component} from 'react'

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{}
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    console.log(e.target.dataset.name)
  }
  
  render () {
    return (
      <form>
            <div className="form-group">
            <label htmlFor="input-email">Email address</label>
        <input type="email" data-name="email" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" className="form-text text-muted">We''ll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="input-password">Password</label>
        <input type="password" data-name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-group">
        <label htmlFor="input-username">Username</label>
        <input type="text" data-name="username" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    )
  }
}