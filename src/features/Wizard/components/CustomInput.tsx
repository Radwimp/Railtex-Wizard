import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

interface CustomInputProps {
  label: string,
  value: string,
  onChange: Function,
  type?: string,
  error?: boolean,
  helperText?: string,
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
      <form noValidate>
        <TextField
          fullWidth
          value={props.value}
          type={props.type}
          error={props.error}
          helperText={props.helperText}
          onChange={(e) => props.onChange(e.target.value)}
          margin="dense"
          size="small"
          variant="outlined"
        />
      </form>
    </div>
  )
}
