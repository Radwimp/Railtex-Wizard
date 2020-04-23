import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

interface CustomInputProps {
  label: string,
  value: string,
  onChange: any,
  type?: string,
  error?: boolean,
}

export default function CustomInput(props: CustomInputProps) {
  return (
    <div>
      <Typography
        variant="h6"
        color="primary"
      >
        {props.label}
      </Typography>
      <TextField
        required
        fullWidth
        value={props.value}
        type={props.type}
        error={props.error}
        onChange={(e: any) => props.onChange(e.target.value)}
        margin="dense"
        size="small"
        id="outlined-required"
        variant="outlined"
      />
    </div>

  )
}
