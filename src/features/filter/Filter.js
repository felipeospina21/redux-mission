import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByPercentage, filterSelect } from "../../app/votesSlice";
import "./Filter.css";

function Filter() {
  const [initValue, setInitiValue] = useState(true);
  const dispatch = useDispatch();
  const defaultOption = useRef(null);

  function handleRadioChange(payload) {
    setInitiValue(!initValue);
    dispatch(filterByPercentage(payload));
  }

  function handleSelectChange(e) {
    const value = e.target.value;
    dispatch(filterSelect(value));
  }

  return (
    <>
      <h2>Filtros</h2>
      <div className='filter__container'>
        <div className='filter__element'>
          <span className='filter__title'>
            <strong>Ver como</strong>
          </span>
          <div>
            <input
              type='radio'
              placeholder='%'
              name='filter'
              id='numeric'
              checked={initValue}
              onChange={() => handleRadioChange(false)}
            />
            <label htmlFor='numeric'>Numerico</label>
          </div>
          <div>
            <input
              type='radio'
              placeholder='%'
              name='filter'
              id='percentage'
              onChange={() => handleRadioChange(true)}
            />
            <label htmlFor='percentage'>Porcentaje</label>
          </div>
        </div>

        <div className='filter__element'>
          <span className='filter__title'>
            <strong>Filtrar por</strong>
          </span>
          <select name='select' onChange={handleSelectChange}>
            <option ref={defaultOption} value='todos'>
              todos
            </option>
            <option value='candidato1'>candidato1</option>
            <option value='candidato2'>candidato2</option>
            <option value='candidato3'>candidato3</option>
            <option value='candidato4'>candidato4</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Filter;
