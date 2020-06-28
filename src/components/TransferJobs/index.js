import React, { useState } from 'react'
import JobsList from './List'
import CreateTransferJob from '../../forms/createTransferJob'
import { jobDefaults } from '../../schemas/skale'
import { web3Client } from '../../queries/chain'
const TransferJobs = () => {
  const [jobs, setJobs] = useState([])

  const createJob = (job) => {
    const newJob = {
      ...jobDefaults,
      ...job,
      created: new Date(),
      client: web3Client(job.endpoint)
    }
    setJobs([...jobs, newJob])
  }
  return (
    <div>
      <CreateTransferJob createJob={createJob} />
      <JobsList jobs={jobs} />
    </div>
  )
}

export default TransferJobs
