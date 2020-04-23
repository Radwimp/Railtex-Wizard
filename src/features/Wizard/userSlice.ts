import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ContactsType {
  email: string;
  phone: string;
  password: string;
}

export interface AddressType {
  country: string;
  city: string;
  address: string;
}

export interface CategoriesType {
  firstCategory: string;
  secondCategory: string;
  thirdCategory: string;
}

export interface UserState {
  contacts: ContactsType,
  address: AddressType,
  categories: CategoriesType,
}

export const initialState: UserState = {
  contacts: {
    email: '',
    phone: '',
    password: '',
  },
  address: {
    country: '',
    city: '',
    address: '',
  },
  categories: {
    firstCategory: '',
    secondCategory: '',
    thirdCategory: '',
  },
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addContacts: (state, action: PayloadAction<ContactsType>) => {
      state.contacts = action.payload;
    },
    addAddress: (state, action: PayloadAction<AddressType>) => {
      state.address = action.payload;
    },
    addCategories: (state, action: PayloadAction<CategoriesType>) => {
      state.categories = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const {
  addContacts,
  addAddress,
  addCategories,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;
