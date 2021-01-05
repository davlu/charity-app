import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'
function SearchForm({description, onParamChange, handleSubmit}) {
    return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <input onChange={onParamChange} value={description} name="description" type="text" />
      <button type="submit">Submit</button>
    </form>
    )
}

export default SearchForm
