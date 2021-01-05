import React, {useState} from 'react';
import useFetchEvents from './useFetchEvents';
import { Container } from 'react-bootstrap';
import Charity from './Charity.js';
import SearchForm from './SearchForm.js'
import {Form, Col} from 'react-bootstrap'


function App() {
  const [params, setParams] = useState("");
  const {charities, loading, error} = useFetchEvents(params);

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
    e.preventDefault();
  }

  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
  }

  return (

    <Container className = "my-4">
      <h1 className = "mb-4">Charity App</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      {loading && <h1> loading ...</h1>}
      {charities.map(charity => {
        return <Charity key = {charity.ein} charity = {charity}/>
      })}
    </Container>
  );
}

export default App;
