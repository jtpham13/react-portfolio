
import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const emailAddress = "mailto:joeypham13@email.com"

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

const emailForm= (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!email){
        setErrorMessage("Email is required");
        return;
    }else{
        if (!validateEmail(email)){
            setErrorMessage("Email is invalid");
            return;
        }else{
            if (!message){
                setErrorMessage("Message is required");
                return;
            }else{
                if(!name){
                    setErrorMessage("Name is required");
                    return;
                }
            }
        }
    }
};

const nameForm= (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!name){
        setErrorMessage("Name is required");
        return;
    }else{
        if (!email){
            setErrorMessage("Email is required");
            return;
        }else{
            if (!validateEmail(email)){
                setErrorMessage("Email is invalid");
                return;
            }else {
                if(!message){
                    setErrorMessage("Message is required");
                    return;
                }
            }
        }
    }
}

const messageForm= (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!message){
        setErrorMessage("Message is required");
        return;
    }else{
        if (!email){
            setErrorMessage("Email is required");
            return;
        }else{
            if (!validateEmail(email)){
                setErrorMessage("Email is invalid");
                return;
            }else {
                if(!name){
                    setErrorMessage("Name is required");
                    return;
                }
            }
        }
    }
}


  return (
    <div className="container text-center">
      <h1>Hello {name}</h1>
      <form className="form" >
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={emailForm}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={nameForm}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={messageForm}
          type="message"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <h4> 
        You can reach me via 
        <a href={emailAddress}>Email</a>
      </h4>
    </div>
  );
}

export default Contact;
