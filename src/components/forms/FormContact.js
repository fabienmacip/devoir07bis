import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

//import from "https://www.google.com/recaptcha/api.js";

function FormContact() {
  
  const [state, handleSubmit] = useForm("mwkybeyw");
  if (state.succeeded) {
      return <p>Merci pour votre message, nous vous répondrons dans les meilleurs délais.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">
      Votre adresse mail
    </label>
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
    <textarea
      id="message"
      name="message"
      label="Votre message"
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />
    <button type="submit" disabled={state.submitting}>
      Submit
    </button>
  </form>
);
}

export default FormContact;