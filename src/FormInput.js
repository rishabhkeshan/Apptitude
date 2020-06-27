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
    if(this.state.email===""){
        alert("Please enter your email address.")
        return false;
    }
    const db = firebase.firestore();
    db.collection("UserEmail").add({
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
            marginRight: "1em",
            boxShadow: "none",
            outline: "none",
            width: "20em",
            padding: "0.3em",
            fontWeight: "700",
          }}
          type="email"
          name="email"
          className = "emai"
          onChange={this.updateInput}
          value={this.state.email}
          placeholder="Email address"
        />
        <input
          className="sub"
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


