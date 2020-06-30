var ls = require('local-storage');

export const getJobs = () => {
  const jobs = ls.get('jobs')
  return JSON.parse(jobs) || []
}

export const addJob = (job) => {
  const jobs = getJobs() || []
  jobs.push(job)
  ls.set('jobs', JSON.stringify(jobs))
}