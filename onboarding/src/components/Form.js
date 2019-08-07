import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Basic = () => {
  return (
    <Form>
      <Field type='text' name='name' placeholder='test' />
    </Form>
  );
}

export default withFormik({})(Basic);