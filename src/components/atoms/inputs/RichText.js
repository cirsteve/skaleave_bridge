import React from 'react'
import ReactQuill from 'react-quill'
import { useField } from 'formik'
import 'react-quill/dist/quill.snow.css';
import ErrorMessage from './ErrorMessage';

export default (props) => {
  const [field, meta] = useField(props);
  const isError = meta.touched && !!meta.error
  console.log(`inside Rich Text\nfield error:${JSON.stringify(field, null,2)} `)
  return (
    <div style={{paddingBottom: '1.25em'}}>
      <ReactQuill
        value={field.value}
        onChange={field.onChange} />
      <ErrorMessage
        isError={isError}
        errorMsg={meta.error} />
    </div>
  )
}