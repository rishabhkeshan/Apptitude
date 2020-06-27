import React from 'react';
import './App.css';


function FormInput() {
  return (
    <form>
    < input style = {
        {
            backgroundColor: '#313131',
            color: 'white',
            border: 'none',
            borderBottom: '2px solid #C4C4C4',
            borderBottomWidth: '1',
            marginRight: '5px',
            boxShadow: "none",
            outline:"none",
            width:"300px"
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
                height: '2.4em',
                width: '8em',
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


