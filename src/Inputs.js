import React from 'react';
import {ThingsContextConsumer} from './ThingsContext'



function Inputs() {
  return (
      <ThingsContextConsumer>
          {(values, index) => {
              return (
                <form name='form' value={index} key={index} onSubmit={values.addThing} className="App">
                    <input name='title' data-lpignore="true" onChange={values.handleChange} value={values.title} placeholder='Title'></input>
                    <input name='description' data-lpignore="true" onChange={values.handleChange} value={values.description} placeholder='Description'></input>
                    <input name='url' data-lpignore="true" onChange={values.handleChange} value={values.url} placeholder='Url'></input>
                    <br/>
                    <button>Submit</button>
                </form>

              )
          }}
      </ThingsContextConsumer>
  );
}

export default Inputs;