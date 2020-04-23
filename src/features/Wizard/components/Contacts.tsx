import React, { useState } from 'react';
import CustomInput from './CustomInput';
import { ContactsType } from '../userSlice';

export default function Contacts(props: { contacts: ContactsType, setContacts: Function }) {
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { contacts, setContacts } = props;

  return (
    <div>
      <CustomInput
        label="Email"
        value={contacts.email}
        onChange={(email: string) => setContacts({ ...contacts, email })}
        type="email"
      />
      <CustomInput
        label="Phone number"
        value={contacts.phone}
        onChange={(phone: string) => setContacts({ ...contacts, phone })}
      />
      <CustomInput
        label="Password"
        value={contacts.password}
        onChange={(password: string) => setContacts({ ...contacts, password })}
        type="password"
      />
      <CustomInput
        label="Password confirm"
        value={passwordConfirm}
        onChange={(passwordConfirm: string) => setPasswordConfirm(passwordConfirm)}
        type="password"
      />
    </div>
  )
}
