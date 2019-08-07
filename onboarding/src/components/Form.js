import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Basic = values => {
  return (
    <Form>
      <Field type='text' name='name' placeholder='name' />
      <Field type='text' name='email' placeholder='email' />
      <Field type='password' name='password' placeholder='password' />
      <label>
        <Field type="checkbox" name="tos" checked={values.tos} />
        Terms Of Service
      </label>
      <button type='submit'>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || 'something',
      email: props.email || 'valid@email.com',
      password: props.password || 'somethingelse',
      tos: props.tos || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup
      .string()
      .required('test'),
    email: Yup
      .string()
      .email()
      .required(),
    password: Yup
      .string()
      .min(5)
      .required(),
    tos: Yup
      .boolean()
      .required()
  }),

  handleSubmit(vals) {
    alert(JSON.stringify(vals))
  }
})(Basic);