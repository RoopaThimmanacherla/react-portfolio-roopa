import { useState } from "react";
import "./Contact.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!message) {
      setErrorMessage(`Message is required`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1><b>Contact</b></h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>
          Email adress :
          <div>
          <input
            value={email}
            name="email"
            size="40"
            onChange={handleInputChange}
            type="text"
            placeholder="email"
          />
          </div>
        </label>
        <label>
          Name : 
          <div>
        <input
          value={name}
          name="name"
          size="40"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        </div>
        </label>
        <label>
          Message : 
          <div>
        <textarea
          value={message}
          name="message"
          rows="7" cols="43"
          onChange={handleInputChange}
          
        />
        </div>
        </label>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
