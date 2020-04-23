import React from 'react';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface CustomSelectProps {
  label: string,
  value: string,
  onChange: Function,
  options: string[],
}

export default function CustomSelect(props: CustomSelectProps) {
  return (
    <div>
      <Typography
        variant="h6"
        color="primary"
      >
        {props.label}
      </Typography>
      <FormControl
        fullWidth
        variant="outlined"
        margin="dense"
      >
        <Select
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        >
          {props.options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}
