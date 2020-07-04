import Arweave from 'arweave/web';


export const initArweave = (params) => params ?
  Arweave.init(params) : Arweave.init()


export const getNetworkInfo = (arweave) => arweave.network.getInfo()


export const generateWallet = (arweave) => arweave.wallets.generate()


export const getAddressForPrivateKey = (arweave, jwt) =>
  arweave.wallets.jwkToAddress(jwt)


export const getBalance = (arweave, address) =>
  arweave.wallets.getBalance(address)


export const getLastTransactionID = (arweave, address) =>
  arweave.wallets.getLastTransactionID(address)


export const createDataTransaction = (arweave, key, data) =>
  arweave.createTransaction({ data }, key)


export const createWalletTransferTransaction = (arweave, key, target, quantity) =>
  arweave.createTransaction({ target, quantity }, key)


export const addTagToTransaction = (transaction, key, value) =>
  transaction.addTag(key, value)


export const signTransaction = (arweave, transaction, key) =>
  arweave.transactions.sign(transaction, key)


export const submitTransaction = (arweave, signedTransaction) =>
  arweave.transactions.post(signedTransaction)


export const getTransaction = (arweave, txHash) =>
  arweave.transactions.get(txHash)