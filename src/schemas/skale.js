import * as Yup from 'yup';

export const CHAIN_DATA_TYPES = ['BLOCK', 'BLOCK_AND_TRANSACTIONS']

export const FREQUENCY_TYPES = ['HOURLY', 'DAILY', 'MONTHLY']

export const chainDataSchema = {
  defaultValues: {
    name: '',
    endpoint: '',
    dataType: 'BLOCK',
    frequency: 'HOURLY'
  },
  schema: Yup.object({
    name: Yup.string().required(),
    endpoint: Yup.string().required(),
    dataType: Yup.string().oneOf(CHAIN_DATA_TYPES).required(),
    frequency: Yup.string().oneOf(FREQUENCY_TYPES).required()
  })
}