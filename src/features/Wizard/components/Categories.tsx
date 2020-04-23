import React from 'react';
import CustomSelect from './CustomSelect';
import { CategoriesType } from '../userSlice';

const options = [
  'Potato',
  'Tomato',
  'Onion',
  'Cucumber',
  'Paprika',
];

export default function Categories(props: { categories: CategoriesType, setCategories: Function }) {
  const { categories, setCategories } = props;

  return(
    <div>
      <CustomSelect
        label="Category 1"
        options={options}
        value={categories.firstCategory}
        onChange={(firstCategory: string) => setCategories({ ...categories, firstCategory })}
      />
      <CustomSelect
        label="Category 2"
        options={options}
        value={categories.secondCategory}
        onChange={(secondCategory: string) => setCategories({ ...categories, secondCategory })}
      />
      <CustomSelect
        label="Category 3"
        options={options}
        value={categories.thirdCategory}
        onChange={(thirdCategory: string) => setCategories({ ...categories, thirdCategory })}
      />
    </div>
  )
}
