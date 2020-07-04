import React from 'react'
import Item from './GatewayItem'

const List = ({gateways, addWallet}) => {
  return (
    <div>
      <h3>Arweave Gateways</h3>
        {gateways.length ? gateways.map(gateway => <Item key={gateway.id} gateway={gateway} addWallet={addWallet} />) : 'No Gateways'}
    </div>
  )
}

export default List