import React from 'react';
import SEPractices from '../../dummydata/SEPractice';
import { useState } from 'react';

const optionItems = SEPractices.map((SEPractice) =>
              <option key={SEPractice.practice} value={SEPractice.practice}>{SEPractice.practice}</option>
          );
const Dropdown = ({onChange}) => {
  return (
      <div>
            <select onChange={onChange}>
            <option value="">Select an SE Practice </option>
              {optionItems}
            </select>
        </div>

  )
}
export default Dropdown;