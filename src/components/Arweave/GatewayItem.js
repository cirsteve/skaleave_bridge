import React, { useState, useEffect, Fragment} from 'react'
import GetLatestBlock from '../../hooks/getLatestBlock'
import Box from '../atoms/Box'
import Button from '../atoms/inputs/buttons/Button'
import { ItemRow } from '../common/ItemRow'
import { getNetworkInfo, generateWallet } from '../../queries/arweave'
import Wallet from './Wallet'
import { Paper } from '@material-ui/core'

const Item = ({gateway, addWallet}) => {
  const [networkInfo, setNetworkInfo] = useState(null)
  const fetchInfo = async () => {
    const info = await getNetworkInfo(gateway.client)
    setNetworkInfo(info)
  }
  useEffect(() => fetchInfo(), [null])

  const generateNewWallet = async () => {
    const wallet = await generateWallet(gateway.client)
    console.log('generate wallet ', wallet)
    addWallet(gateway.id, wallet)
  }

  return (
    <Paper m="3">
    <Box flexDirection="column" width={'100%'}>
      {gateway.host ? 
        <Fragment>
          <ItemRow label="host" value={gateway.host} />
          <ItemRow label="port" value={gateway.port} />
          <ItemRow label="protocol" value={gateway.protocol} />
        </Fragment> : <Box>Default Gateway</Box>
      }
      {networkInfo ?
        <Fragment>
          <ItemRow label="network" value={networkInfo.network} />
          <ItemRow label="blocks" value={networkInfo.blocks} />
          <ItemRow label="latency" value={networkInfo.node_state_latency} />
        </Fragment> : <Box>Loading Network State...</Box>
      }
      <Box flexDirection="column">
        <h3>Wallets</h3>
        <Button label="Generate Wallet" onClick={generateNewWallet} />
        {gateway.wallets && gateway.wallets.length ?
          gateway.wallets.map(wallet => <Wallet wallet={wallet} client={gateway.client} />)
          :
          <Box>"No Wallets"</Box>
        }
      </Box>
    </Box>
    </Paper>
  )
  }


export default Item