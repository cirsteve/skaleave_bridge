import * as Yup from 'yup';

export const PROTOCOL_TYPES = ['http', 'https']

const gatewayDefault = {
  host: '',
  port: null,
  protocol: 'http'
}

export const gatewaySchema = {
  defaultValues: gatewayDefault,
  schema: Yup.object({
    host: Yup.string().required(),
    port: Yup.number().required(),
    protocol: Yup.string().oneOf(PROTOCOL_TYPES).required()
  })
}