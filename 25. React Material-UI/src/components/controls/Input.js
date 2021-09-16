import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {
  const {name, label, value, error=null, onChange, ...other} = props

  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      name={name}
      {...(error && {error:true, helperText:error})}
      onChange={onChange}
      {...other}
    />
    )
}