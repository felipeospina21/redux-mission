import React from "react";
import { useDispatch } from "react-redux";
import { filterByPercentage , filterSelect} from "../../app/votesSlice";

function Filter() {
  const dispatch = useDispatch();

  function handlePercentageClick() {
    dispatch(filterByPercentage(false));
  }

  function handleNumClick() {
    dispatch(filterByPercentage(true));
  }

  function handleChange(e){
    const value =  e.target.value
    dispatch(filterSelect(value))
  }

  return (
    <div>
      <div>
        <input
          type='radio'
          placeholder='%'
          name='filter'
          id='percentage'
          onClick={handlePercentageClick}
        />
        <label for='percentage'>Percentage</label>
      </div>

      <div>
        <input
          type='radio'
          placeholder='%'
          name='filter'
          id='numeric'
          onClick={handleNumClick}
        />
        <label for='numeric'>Numeric</label>
      </div>

      <div>
        <select name='select' onChange={handleChange}>
          <option value='todos'>todos</option>
          <option value='candidato1'>candidato1</option>
          <option value='candidato2'>candidato2</option>
          <option value='candidato3'>candidato3</option>
          <option value='candidato4'>candidato4</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
