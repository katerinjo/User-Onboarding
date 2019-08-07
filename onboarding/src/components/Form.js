import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Basic = () => {
  return (
    <Form>
      <Field type='text' name='name' placeholder='name' />
      <button>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: props.name || ''
    };
  },

  handleSubmit(vals) {
    alert(JSON.stringify(vals))
  }
})(Basic);