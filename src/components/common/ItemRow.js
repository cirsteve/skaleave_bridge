import React from 'react'
import Flex from '../atoms/Flex'
import Box from '../atoms/Box'

export const ItemRow = ({label, value}) => (
  <Flex width={'100%'}>
    <Box width={'20%'}>
      {label}
    </Box>
    <Box>
      {value}
    </Box>
  </Flex>
)