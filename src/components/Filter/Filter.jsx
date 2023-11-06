import React from 'react';

import { Div, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';

function Filter() {
  const handleFilterChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  const dispatch = useDispatch();
  return (
    <Div>
      <Label>
        <Input
          type="text"
          value={useSelector(getFilter)}
          onChange={handleFilterChange}
        />
      </Label>
    </Div>
  );
}

export default Filter;
