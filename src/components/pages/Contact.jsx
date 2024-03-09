
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Contact(){
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setTextarea(event.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Email address:
        <input 
          type="text" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <textarea value={textarea} onChange={handleChange} />

        <input type="submit" />
    </form>
  )
}


export default Contact;
