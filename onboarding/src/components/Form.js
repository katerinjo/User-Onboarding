import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Basic = ({ touched, errors, tos }) => {
  return (
    <Form>
      <div>
        <Field type='text' name='name' placeholder='name' />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <Field type='text' name='email' placeholder='email' />
        {touched.email && errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <Field type='password' name='password' placeholder='password' />
        {touched.password && errors.password && <p>{errors.password}</p>}
      </div>
      <div>
      <label>
        <Field type="checkbox" name="tos" checked={tos} />
        Terms Of Service
      </label>
        {touched.tos && errors.tos && <p>{errors.tos}</p>}
      </div>

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
      .min(1, "name can't be empty")
      .required(),
    email: Yup
      .string()
      .email('not a valid email')
      .required('email required'),
    password: Yup
      .string()
      .min(5, "password needs at least 5 characters")
      .required(),
    tos: Yup
      .boolean()
      .oneOf([true], 'you must agree to the ToS')
  }),

  handleSubmit(vals) {
    axios
      .post('https://reqres.in/api/users', vals)
      .then(console.log)
      .catch(console.log)
  }
})(Basic);