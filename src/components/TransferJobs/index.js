import React, { useState } from 'react'
import JobsList from './List'
import CreateTransferJob from '../../forms/createTransferJob'
import { jobDefaults } from '../../schemas/skale'
import { web3Client } from '../../queries/chain'
import { v4 as uuidv4 } from 'uuid';
import { getJobs, addJob } from '../../storage'



const loadJobs = (jobs) => jobs.map(job => {
  job.client = web3Client(job.endpoint)
  return job
})
const TransferJobs = () => {
  const jobsx = getJobs()
  console.log(`got jobs ${JSON.stringify(jobsx)}`)
  const [jobs, setJobs] = useState(loadJobs(getJobs()))

  const createJob = (job) => {
    const newJob = {
      ...jobDefaults,
      ...job,
      created: new Date(),
      id: uuidv4(),
      client: web3Client(job.endpoint)
    }
    setJobs([...jobs, newJob])
    addJob(newJob)

  }
  return (
    <div>
      <CreateTransferJob createJob={createJob} />
      <JobsList jobs={jobs} />
    </div>
  )
}

export default TransferJobs
