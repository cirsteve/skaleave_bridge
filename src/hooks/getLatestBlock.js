import { useState, useEffect } from 'react'

const GetLatestBlock = (web3Client) => {
  const [latest, setLatest] = useState(null)
  let blockNumberInterval
  useEffect(() => {
    const updateLatest = (er, blockNumber) => setLatest(blockNumber)
    web3Client.getBlockNumber(updateLatest)
    blockNumberInterval = setInterval(() => web3Client.getBlockNumber(updateLatest), 20000)
    return () => clearInterval(blockNumberInterval)
  })
  
  return latest

}
export default GetLatestBlock