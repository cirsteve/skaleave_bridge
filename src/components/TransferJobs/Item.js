import React from 'react'

const ItemRow = ({label, value}) => (
  <div>
    <div>
      {label}
    </div>
    <div>
      {value}
    </div>
  </div>
)

const Item = ({job}) => (
  <div>
    <h3>{job.name}</h3>
    <ItemRow label="endpoint" value={job.endpoint} />
    <ItemRow label="Data Type" value={job.dataType} /> 
    <ItemRow label="Frequency" value={job.frequency} />  
  </div>
)


export default Item