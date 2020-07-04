import React, { useState, useEffect } from 'react'
import Box from '../atoms/Box'
import { ItemRow } from '../common/ItemRow'
import { getAddressForPrivateKey, getBalance } from '../../queries/arweave'
import { Paper } from '@material-ui/core'

const Wallet = ({wallet, client}) => {
  const [walletInfo, setWalletInfo] = useState({address: null, balance: null})

  const getWalletInfo = async () => {
    const address = await getAddressForPrivateKey(client, wallet)
    const balance = await getBalance(client, address)
    setWalletInfo({address, balance})
  }

  useEffect(() => { 
    getWalletInfo()
  }, [null])
  return (
    <Paper>
      <Box flexDirection="column" width={'70%'}>
        <ItemRow label="Address" value={walletInfo.address} />
        <ItemRow label="Balance" value={walletInfo.balance} />
      </Box>
    </Paper>
  )
}

export default Wallet