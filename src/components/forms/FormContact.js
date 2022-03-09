import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

//import from "https://www.google.com/recaptcha/api.js";

function FormContact() {
  
  const [state, handleSubmit] = useForm("mwkybeyw");
  if (state.succeeded) {
      return <p>Merci pour votre message, nous vous répondrons dans les meilleurs délais.</p>;
  }

  return (
    <form onSubmit={handleSubmit} id="form-contact">
    <label htmlFor="email">
      Votre adresse mail
    </label><br />
    <input
      id="email"
      type="email" 
      name="email"
    />
    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
    <br /><br />
    <label htmlFor="message">
      Votre message
    </label><br />
    <textarea
      id="message"
      name="message"
      label="Votre message"
      rows="10"
      maxlength="1000"      
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    /><br /><br />
    <div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </div>
  </form>
);
}

export default FormContact;