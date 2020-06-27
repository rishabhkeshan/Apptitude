import React from 'react';
import './App.css';


function FormInput() {
  function handleSubmit(e){
      e.preventDefault();
      alert("Thank you for showing interest in the event. You will be notified soon.")

  }  
  return (
    <form onSubmit={handleSubmit}>
    < input style = {
        {
            backgroundColor: 'inherit',
            color: 'white',
            border: 'none',
            borderBottom: '2px solid #C4C4C4',
            borderBottomWidth: '1',
            marginRight: '15px',
            boxShadow: "none",
            outline:"none",
            width:"330px",
            paddingBottom:'0.5em',
            fontWeight:'700'
        }
    }
    type = "text"
    name = "name"
    placeholder = "Email address" />
    < input style = {
            {
                backgroundColor: '#3A44A1',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                height: '2.6em',
                width: '9em',
                outline: 'none',
                textAlign: 'center',
                fontWeight: '600' ,
                fontFamily:'inherit'
            }}
            type = "submit"
            value = "Notify me" />
    </form>
  );
}

export default FormInput;


