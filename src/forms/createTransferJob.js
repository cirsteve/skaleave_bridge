import React from 'react'
import { Form } from 'formik'
import Text from '../components/atoms/inputs/Text'
import Select from '../components/atoms/inputs/Select'
import Button from '../components/atoms/inputs/buttons/Button'
import { chainDataSchema, CHAIN_DATA_TYPES, FREQUENCY_TYPES } from '../schemas/skale'
import BaseForm from './form'
const arrayToOptions = (arr) => arr.map(item => ({value: item, label: item }))
const getForm = (onSubmit, isValid) => (
  <Form>
    <h4>Configure Your Data Transfer Job</h4>
    <Text label="Name" name="name" type="string" />
    <Text label="Endpoint" name="endpoint" type="string" />
    <Select
      label="Data Type"
      name="dataType"
      options={arrayToOptions(CHAIN_DATA_TYPES)}
    />
    <Select
      label="Frequency"
      name="frequency"
      options={arrayToOptions(FREQUENCY_TYPES)}
    />
    <Button
      onClick={onSubmit}
      disabled={!isValid}
      label="Create Transfer Job" />
  </Form>
)


const CreateTransferJob = ({createJob}) => (
  <BaseForm
    defaultValues={chainDataSchema.defaultValues}
    schema={chainDataSchema.schema}
    getForm={getForm}
    submit={createJob}
  />
)

export default CreateTransferJob