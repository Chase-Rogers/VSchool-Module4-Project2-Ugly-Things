import React from 'react';
import {ThingsContextConsumer} from './ThingsContext'

const handleClick = () => {

}


function UglyThing() {

  return (
      <ThingsContextConsumer>
          {values => { 
            return (
              values.things.map((value, index) => {
                return (
                <form key={index} onSubmit={handleClick}>
                    <h1 hidden={value.hidden}>{value.title}</h1>
                    <input name='title' value={value.title} onChange={(e) => {e.preventDefault(); values.handleChange(e, index)}} hidden={!value.hidden} placeholder='Title'/>
                    <br/>
                    <h2 hidden={value.hidden}>{value.description}</h2>
                    <input name='description' value={value.description} onChange={(e) => {e.preventDefault(); values.handleChange(e, index)}}  hidden={!value.hidden} placeholder='Description'/>
                    <br/>
                    <img hidden={value.hidden} src={value.url} alt=''></img>
                    <input name='url' value={value.url} onChange={(e) => {e.preventDefault(); values.handleChange(e, index)}}  hidden={!value.hidden} placeholder='Url'/>
                    <br/>
                <button onClick={(e) => { e.preventDefault(); values.handleEdit(index)}} >{value.hidden === false? 'Edit': 'Save'}</button>
                    <button onClick={(e) => {e.preventDefault(); values.handleDelete(index)}} >Delete</button>
                </form>
                  
              )}))
          }}
      </ThingsContextConsumer>

  );
}

export default UglyThing;