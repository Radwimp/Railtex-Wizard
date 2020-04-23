import React, { useEffect, useState } from 'react';
import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import CustomInput from './CustomInput';
import { ContactsType } from '../userSlice';

const validateEmail = (email: string): boolean => {
  const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return !!email.match(regexp);
};

const validatePhoneNumber = (number: string): boolean => {
  const regexp = new RegExp(/^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/);
  return !!number.match(regexp);
};

const validatePasswordConfirmation = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};

interface ContactsProps {
  contacts: ContactsType,
  setContacts: Function,
  nextButtonEnabled: boolean,
  enableNextButton: Function,
}

export default function Contacts(props: ContactsProps) {
  const [showPasswords, setShowPasswords] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { contacts, setContacts, enableNextButton, nextButtonEnabled } = props;

  const handleClickShowPassword = () => {
    setShowPasswords(!showPasswords);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(nextButtonEnabled);
    if (validateEmail(contacts.email) && validatePhoneNumber(contacts.phone) && contacts.password &&
      validatePasswordConfirmation(contacts.password, passwordConfirm)) {
      enableNextButton(true);
    } else if (nextButtonEnabled){
      enableNextButton(false);
    }
  });

  return (
    <div>
      <CustomInput
        label="Email"
        value={contacts.email}
        onChange={(email: string) => setContacts({ ...contacts, email })}
        type="email"
        error={!validateEmail(contacts.email)}
        helperText={!contacts.email ? 'Required field' : validateEmail(contacts.email) ? '' : 'Incorrect email'}
      />
      <CustomInput
        label="Phone number"
        value={contacts.phone}
        onChange={(phone: string) => setContacts({ ...contacts, phone })}
        error={!validatePhoneNumber(contacts.phone)}
        helperText={!contacts.phone ? 'Required field' : validatePhoneNumber(contacts.phone) ? '' : 'Incorrect phone number'}
      />
      <Typography variant="h6" color="primary">Password</Typography>
      <FormControl
        fullWidth
        variant="outlined"
        margin="dense"
        size="small"
        error={!contacts.password}
      >
        <OutlinedInput
          type={showPasswords ? 'text' : 'password'}
          value={contacts.password}
          onChange={(e) => setContacts({ ...contacts, password: e.target.value })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPasswords ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>{contacts.password ? '' : 'Required field'}</FormHelperText>
      </FormControl>
      <Typography variant="h6" color="primary">Password confirm</Typography>
      <FormControl
        fullWidth
        variant="outlined"
        margin="dense"
        size="small"
        error={!validatePasswordConfirmation(contacts.password, passwordConfirm)}
      >
        <OutlinedInput
          type={showPasswords ? 'text' : 'password'}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPasswords ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>{validatePasswordConfirmation(contacts.password, passwordConfirm) ? '' : 'Passwords do not match'}</FormHelperText>
      </FormControl>
    </div>
  )
}
