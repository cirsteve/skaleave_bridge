import React from 'react'
import Paper from '@material-ui/core/Paper'

export default props => 
  <Paper style={{padding: 16}}>
    {props.children}
  </Paper>