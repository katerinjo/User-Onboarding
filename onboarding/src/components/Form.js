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
      name: props.name || '',
      email: props.email || '',
      password: props.password || '',
      tos: props.tos || false,
      subFun: props.subFun
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

  handleSubmit(vals, { resetForm, setSubmitting }) {
    axios
      .post('https://reqres.in/api/users', vals)
      .then(res => {
        vals.subFun(res.data);
        resetForm();
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
  }
})(Basic);