import React from 'react';
import './App.css';
import firebase from "./Firestore";
import classNames from "classnames";
import styles from './App.css';
import ReCAPTCHA from "react-google-recaptcha";


class FormInput extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      submitButton: "Notify Me",
      backColor: "#3A44A1",
      exists:"false",
      value: "",
    };
    this.recaptchaRef = React.createRef();
  }
  handleChange=value=> {
      this.setState({ value });
  }
    handleSubmit = (e) => {
        e.preventDefault();
        this.recaptchaRef.current.execute();
        if(this.state.value===null){
            alert("Cannot contact ReCaptcha. Please try again")
        }
        else{
        const db = firebase.firestore();
        var userEmail=this.state.email;
        db.collection("UserEmail")
          .get()
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              if (
                doc.data().email.trim().toLowerCase() ===
                userEmail.trim().toLowerCase()
              ) {
                alert("Email already registered");
                this.setState({
                  exists: "true",
                });
            }
            });
          })
          .then((data) => {
            if (this.state.exists === "false"){
                db.collection("UserEmail").add({
                    email: this.state.email,
                });
                // this.refs.btn.setAttribute("disabled", "disabled");
                setTimeout(
                this.setState({
                    email: "",
                    submitButton: "Added",
                    backColor: "#5cb85c",
                }),
                9000
                );
            }
            else{
                this.setState({
                  exists: "false",
                });
            }
          });
        }
   };
  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      submitButton: "Notify Me",
      backColor: "#3A44A1",
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
          className={classNames(
            styles.animate,
            styles.animate && styles.grow,
            `${this.props.emai}`
          )}
          onChange={this.updateInput}
          value={this.state.email}
          placeholder="Email address"
          required
        />
        <input
          className={`${this.props.sub}`}
          ref="btn"
          style={{
            backgroundImage: `linear-gradient(${this.state.backColor}, ${this.state.backColor})`,
            color: "white",
            border: "none",
            borderRadius: "5px",
            height: "2.6em",
            width: "9em",
            outline: "none",
            textAlign: "center",
            fontWeight: "600",
            transition: "all 2s",
            fontFamily: "inherit",
          }}
          type="submit"
          value={this.state.submitButton}
        />
            <ReCAPTCHA
      ref={this.recaptchaRef}
      size="invisible"
      theme="dark"
      badge="bottomright"
      sitekey = "6LeW8qoZAAAAAMTDQ2GI-c4zyLhREiIWzhlP18kb"
      onChange = {
          this.handleChange
      }
    />
      </form>
    );
  }
}

export default FormInput;


