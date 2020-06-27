import React from 'react'
import Job from './Item'

const List = ({jobs}) => {
  console.log(`jobs are ${JSON.stringify(jobs, null, 2)}`)
  return (
    <div>
      <h3>Data Transfer Jobs</h3>
        {jobs.length ? jobs.map(job => <Job key={job.name} job={job} />) : 'No Jobs'}
    </div>
  )
}

export default List