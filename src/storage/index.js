var ls = require('local-storage');

export const getJobs = () => {
  const jobs = ls.get('jobs')
  return JSON.parse(jobs) || []
}

export const addJob = (job) => {
  const jobs = getJobs()
  jobs.push(job)
  ls.set('jobs', JSON.stringify(jobs))
}

export const getGateways = () => {
  const gateways = ls.get('gateways')
  return JSON.parse(gateways) || []
}

export const addGateway = (gateway) => {
  const gateways = getGateways()
  gateways.push(gateway)
  console.log('adding gateway ', gateway)
  ls.set('gateways', JSON.stringify(gateways))
}

export const updateGateway = (updated) => {
  const gateways = getGateways()
  const index = gateways.findIndex(gateway => updated.id === gateway.id)
  gateways.splice(index, 1, updated)
  ls.set('gateways', JSON.stringify(gateways))
}