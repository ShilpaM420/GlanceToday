import React, { Component } from "react";

class Contact extends Component {
    state = {
       name: '',
       email: '',
       message: ''
    }
handleChange = (e) => {
   this.setState({
       [e.target.id]: e.target.value
   })
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
}
render(){
return (
	<div className="container">
    <form onSubmit={this.handleSubmit} className="white">
    <h3 className="grey-text text-darken-3 bold">Comment Your View</h3>

    <div className="input-field">
    <label htmlFor="name">Name</label>
    <input type="text" id="text" onChange={this.handleChange} /> 
    </div>

    <div className="input-field">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" onChange={this.handleChange} /> 
    </div>
    
    <div className="input-field">
    <label htmlFor="message">Message</label>
    <input type="text" id="message" max="100" min="3" onChange={this.handleChange} />
    </div>

    <div className="input-field">
    <button className="btn blue lighten-1 z-depth-0" onChange={this.handleSubmit}>Submit</button>
    </div>

    </form>
	</div>
)
}
}

export default Contact;
