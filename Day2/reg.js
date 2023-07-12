import React, { Component } from 'react';
import "./log.css";
import { Link } from 'react-router-dom';

class Registration extends Component{

  constructor() {
    super();
    this.state = {  
      fields: {},   
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  submituserRegistrationForm(e) {
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
        let fields = {};
        fields["mobile"] = "";
        fields["password"] = "";
        this.setState({fields:fields});
        alert("Your Form has been submitted successfully.");
    }
}
validateForm() {

  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  if (fields["mobile"]) {
    if (!fields["mobile"].match(/^[0-9]{10}$/)) {
      formIsValid = false;
      errors["mobile"] = "*Please enter a valid mobile no.";
    }
  }

  if (fields["password"]) {
    if (!fields["password"].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/)) {
      formIsValid = false;
      errors["password"] = "*Please enter secure and strong password.";
    }
  }

  this.setState({
    errors: errors
  });
  return formIsValid;
  
}
  render(){
    return(
        <div className="div">

          <div className="login">
            <form onSubmit= {this.submituserRegistrationForm}>
              <label className="label">Sign up</label>
              <input type="text" name="username" value={this.state.fields.username} placeholder="User name" onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.username}</div>

              <input type="email" name="email" value={this.state.fields.email} placeholder="Email" onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.email}</div>

              <input type="number" name="mobile" value={this.state.fields.mobile} placeholder="Mobile Number" onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.mobile}</div>
              
              <select name="gender" >
                <option >Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input type="password" name="password" value={this.state.fields.password} placeholder="Password" onChange={this.handleChange} required/>
              <div className="errorMsg">{this.state.errors.password}</div>

              <button >Sign up</button>
              <Link style={{textDecoration:"none"}} to="/login"><button>Back</button></Link>
            </form>
            
          </div>
        </div>
    );
    }
}
export default Registration;