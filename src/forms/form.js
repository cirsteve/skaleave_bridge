import React from 'react'
import { Formik } from 'formik'

const Form = ({
  defaultValues,
  schema,
  getForm,
  submit
}) => {
  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={schema}
    >
      {(props) => {
        const {values, setSubmitting, resetForm, isValid} = props
        
        const onSubmit = () => {
          submit(values)
          resetForm()
        }

        return getForm(onSubmit, isValid)
      }}
    </Formik>
  );
};

export default Form