import React from 'react'
import GetLatestBlock from '../../hooks/getLatestBlock'
import Flex from '../atoms/Flex'
import Box from '../atoms/Box'
import Button from '../atoms/inputs/buttons/Button'

const ItemRow = ({label, value}) => (
  <Flex width={'100%'}>
    <Box width={'20%'}>
      {label}
    </Box>
    <Box>
      {value}
    </Box>
  </Flex>
)

const Item = ({job}) => {
  const latestBlockNumber = GetLatestBlock(job.client)
  const getLast10Blocks = async () => {
    const blocks = await job.client.getBlocks(latestBlockNumber - 10, latestBlockNumber)
    console.log(`got blocks ${JSON.stringify(blocks, null, 2)}`)
  }
  return (
    <Box flexDirection="column" width={'100%'}>
      <h3>{job.name}</h3>
      <ItemRow label="endpoint" value={job.endpoint} />
      <ItemRow label="latest block" value={latestBlockNumber} />
      <ItemRow label="Data Type" value={job.dataType} /> 
      <ItemRow label="Frequency" value={job.frequency} />
      <Button onClick={getLast10Blocks} label="Get 10" />
    </Box>
  )
  }


export default Item