import { web3, windowWeb3 }from './web3'
import Web3 from 'web3'


const getPromisedBatch = (web, calls) => {
  const batch = new web3.BatchRequest()
  const requests = calls.map(call => {
    return new Promise((res, rej) => {
      const cb = (err, response) => err ? rej(err) : res(response)

      batch.add(call(cb))
    })
  })
  batch.execute()
  return Promise.all(requests)
}

const getBlock = (web3, blockNumber, getTransactions) => web3.eth.getBlock(blockNumber, getTransactions)

const getBlockNumber = (web3)  => web3.getBlockNumber()

const getTransactionsForBlock = async (web3, block) => {
    if (block.hash == null) {
        throw('block does not have hash')
    }
    const getTxReceipts = block.transactions.map(
      txHash => (cb) => web3.eth.getTransactionReceipt.request(txHash, cb)
    )
    const txReceipts = await getPromisedBatch(web, getTxReceipts)

    return txReceipts
}

export const getBlockAndTransactions = async (web3, blockNumber) => {
    const block = await getBlock(web3, blockNumber, false)
    const transactions = block.transactions.length ? await getTransactionsForBlock(web3, block) : []
    return {
        block,
        transactions
    }
}

export const getLogs = (web3, filters) => web3.eth.getPastLogs(filters)

export const web3Client = (endpoint) => {
  const web3 = new Web3(endpoint)
  return {
    getBlock: (blockNumber) => getBlock(web3, blockNumber, false),
    getBlockAndTxs: (blockNumber) => getBlock(web3, blockNumber, true),

  }
}
