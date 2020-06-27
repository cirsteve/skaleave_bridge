import React, { useState } from 'react'
import JobsList from './List'
import CreateTransferJob from '../../forms/createTransferJob'

const TransferJobs = () => {
  const [jobs, setJobs] = useState([])

  const createJob = (job) => {
    setJobs([...jobs, job])
  }
  return (
    <div>
      <CreateTransferJob createJob={createJob} />
      <JobsList jobs={jobs} />
    </div>
  )
}

export default TransferJobs
