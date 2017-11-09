import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styles from './contactForm.sass'

class ContactForm extends Component {

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className={styles.topField}>
          <Field
            label='name'
            name='name'
            placeholder="Your name?"
            component='input'
            className={styles.nameInput}
          />
          <Field
            label='email'
            name='email'
            placeholder="Your e-mail?"
            component='input'
            className={styles.emailInput}
          />
        </div>
        <Field
          label='message'
          name='message'
          placeholder="How may I help you?"
          component='textarea'
          className={styles.messageInput}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }

}

function validate(values) {
  const errors = {};

  // Validate inputs from 'values
  if (!values.name) {
    errors.name = 'Enter a name';
  }

  if (!values.email) {
    errors.email = 'Enter an email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please email address'
  }
  if (!values.message) {
    errors.message = 'Enter an message';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'ContactForm'
})(
  connect(null)(ContactForm)
);