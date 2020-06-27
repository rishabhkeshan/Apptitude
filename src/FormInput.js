import React from 'react';
import './App.css';
import firebase from "./Firestore";

class FormInput extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      submitButton:"Notify Me",
      disabled:"true"
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("UserEmail").add({
      email:this.state.email
    });
      setTimeout(this.setState({
    email: "",
    submitButton:"Okay",
    disabled:"true"
  }),5000);
  };
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      submitButton: "Notify Me",
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
          className={`${this.props.emai}`}
          onChange={this.updateInput}
          value={this.state.email}
          placeholder="Email address"
          required
        />
        <input
          className={`${this.props.sub}`}
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
            transition:"all 2s",
            fontFamily: "inherit",
          }}
          type="submit"
          value={this.state.submitButton}
        />
      </form>
    );
  }
}

export default FormInput;


