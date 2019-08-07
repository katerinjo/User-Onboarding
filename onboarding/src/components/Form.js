import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Basic = () => {
  return (
    <Form>
      <Field type='text' name='name' placeholder='name' />
      <Field type='text' name='email' placeholder='email' />
      <Field type='password' name='password' placeholder='password' />
      <Field type='checkbox' name='tos' />
      <button>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || '',
      email: props.email || '',
      password: props.password || '',
      tos: props.tos || false
    };
  },

  handleSubmit(vals) {
    alert(JSON.stringify(vals))
  }
})(Basic);