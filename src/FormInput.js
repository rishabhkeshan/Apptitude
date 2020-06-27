import React from 'react';
import './App.css';
import firebase from "./Firestore";

class FormInput extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.email==""){
        alert("Please enter your email address.")
        return false;
    }
    const db = firebase.firestore();
    const userRef = db.collection("UserEmail").add({
      email:this.state.email
    });
    alert(
      "Thank you for showing interest in the event. You will be notified soon."
    );
      this.setState({
    email: ""
  });
  };
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          style={{
            backgroundColor: "inherit",
            color: "white",
            border: "none",
            borderBottom: "2px solid #C4C4C4",
            borderBottomWidth: "1",
            marginRight: "15px",
            boxShadow: "none",
            outline: "none",
            width: "330px",
            padding: "0.3em",
            fontWeight: "700",
          }}
          type="email"
          name="email"
          oninvalid="this.setCustomValidity('Username cannot be empty.')"
          onchange="this.setCustomValidity('')"
          onChange={this.updateInput}
          value={this.state.email}
          placeholder="Email address"
        />
        <input
          style={{
            backgroundColor: "#3A44A1",
            color: "white",
            border: "none",
            borderRadius: "5px",
            height: "2.6em",
            width: "9em",
            outline: "none",
            textAlign: "center",
            fontWeight: "600",
            fontFamily: "inherit",
          }}
          type="submit"
          value="Notify me"
        />
      </form>
    );
  }
}

export default FormInput;


