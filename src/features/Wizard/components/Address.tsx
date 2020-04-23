import React from 'react';
import CustomInput from './CustomInput';
import { AddressType } from '../userSlice';

export default function Address(props: { address: AddressType, setAddress: Function }) {
  const { address, setAddress } = props;

  return(
    <div>
      <CustomInput
        label="Country"
        value={address.country}
        onChange={(country: string) => setAddress({ ...address, country })}
      />
      <CustomInput
        label="City"
        value={address.city}
        onChange={(city: string) => setAddress({ ...address, city })}
      />
      <CustomInput
        label="Address"
        value={address.address}
        onChange={(addr: string) => setAddress({ ...address, address: addr })}
      />
    </div>
  )
}
