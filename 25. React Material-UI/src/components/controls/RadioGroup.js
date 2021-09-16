import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core'
import React from 'react'

export default function RadioGroup(props) {
  const {name, value, onChange, items} = props
  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <MuiRadioGroup row
        name={name}
        value={value}
        onChange={onChange}>
        {
          items.map((item) => (
            <FormControlLabel value={item.id} key={item.id} control={<Radio/>} label={item.title}/>
          ))
        }
      </MuiRadioGroup>
    </FormControl>
  )
}
