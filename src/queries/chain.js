
import Web3 from 'web3'


const getPromisedBatch = (web3, calls) => {
  const batch = new web3.BatchRequest()
  const requests = calls.map(call => {
    return new Promise((res, rej) => {
      const cb = (err, response) => err ? rej(err) : res(response)

      batch.add(call(cb))
    })
    .catch(e => console.log(`error in call ${e}`))
  })
  batch.execute()
  return Promise.all(requests)
}

const getBlock = (web3, blockNumber, getTransactions) => web3.eth.getBlock(blockNumber, getTransactions)

const getBlockNumber = (web3, cb)  => web3.eth.getBlockNumber(cb)

const getTransactionsForBlock = async (web3, block) => {
    if (block.hash == null) {
        throw('block does not have hash')
    }
    const getTxReceipts = block.transactions.map(
      txHash => (cb) => web3.eth.getTransactionReceipt.request(txHash, cb)
    )
    const txReceipts = await getPromisedBatch(web3, getTxReceipts)

    return txReceipts
}

export const getBlockAndTxReceipts = async (web3, blockNumber) => {
    const block = await getBlock(web3, blockNumber, false)
    const transactions = block.transactions.length ? await getTransactionsForBlock(web3, block) : []
    return {
        block,
        transactions
    }
}

export const getLogs = (web3, filters) => web3.eth.getPastLogs(filters)

export const getBlocks = (web3, start, end, withTxs) => {
  const calls = []
  for (start; start <= end; start++) {
    calls.push(web3.eth.getBlock(start, withTxs))
  }
  return Promise.all(calls)
}

export const getBlocksBatch = async (web3, start, end, withTxs) => {
  const calls = []
  for(start; start <= end; start++) {
    calls.push((cb) => web3.eth.getBlock.request(start, withTxs, cb))
  }
  const blocks = await getPromisedBatch(web3, calls)

  return blocks
}

export const web3Client = (endpoint) => {
  const web3 = new Web3(endpoint)
  return {
    getBlockNumber: (cb) => getBlockNumber(web3, cb),
    getBlock: (blockNumber) => getBlock(web3, blockNumber,true),
    getBlocks: (start, end) => getBlocks(web3, start, end, false),
    getBlocksBatch: (start, end) => getBlocksBatch(web3, start, end, false),
    getBlocksAndTxs: (start, end) => getBlock(web3, start, end, true),
    getBlockAndTxReceipts: (blockNumber) => getBlockAndTxReceipts(web3, blockNumber)

  }
}
