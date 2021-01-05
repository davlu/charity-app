import React, {useState} from 'react';
import useFetchEvents from './useFetchEvents';
import { Container } from 'react-bootstrap';
import Charity from './Charity.js';
import SearchForm from './SearchForm.js'
import {Form, Col} from 'react-bootstrap'


function App() {
  const [params, setParams] = useState("");
  const [inputValue, setInputValue] = useState("");
  const {charities, loading, error} = useFetchEvents(params);

  const handleParamChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(params);
    setParams(inputValue);
  }

  return (

    <Container className = "my-4">
      <h1 className = "mb-4">Charity App</h1>
      <SearchForm description={inputValue} onParamChange={handleParamChange} handleSubmit={handleSubmit} />
      {loading && <h1> loading ...</h1>}
      {charities.map(charity => {
        return <Charity key = {charity.ein} charity = {charity}/>
      })}
    </Container>
  );
}

export default App;
