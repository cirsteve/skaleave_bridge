import React, { useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { getGateways, addGateway, updateGateway } from '../../storage'
import { initArweave } from '../../queries/arweave'
import Button from '../atoms/inputs/buttons/Button'
import GatewayList from './GatewayList'
const loadGateways = (gateways) => gateways.map(gateway => {
  gateway.client = initArweave(gateway.gatewayParams)
  return gateway
})

const TransferJobs = () => {
  const [gateways, setGateways] = useState(loadGateways(getGateways()))

  const createGateway = (gatewayParams) => {
    const newGateway = {
      gatewayParms: gatewayParams ? { ...gatewayParams } : gatewayParams,
      created: new Date(),
      id: uuidv4(),
      wallets:[],
      client: initArweave(gatewayParams)
    }
    setGateways([...gateways, newGateway])
    addGateway(newGateway)
  }

  const addWallet = (gatewayId, wallet) => {
    const gateway = gateways.find(gateway => gateway.id === gatewayId)
    const updated = {
      ...gateway,
      wallets: [...gateway.wallets, wallet]
    }
    const index = gateways.findIndex(gateway => gateway.id === gatewayId)
    const updatedGateways = [...gateways]
    updatedGateways.splice(index, 1, updated)
    setGateways(updatedGateways)
    updateGateway(updated)
  }

  return (
    <div>
      <Button label="Connect to Default Gateway" onClick={() => createGateway()} />
      <GatewayList gateways={gateways} addWallet={addWallet} />
    </div>
  )
}

export default TransferJobs