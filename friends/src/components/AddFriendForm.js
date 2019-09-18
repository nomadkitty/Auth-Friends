import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriendForm =(props) =>{
  const [addForm, setAddForm] = useState({name:'', age: '', email: ''})

  const handleChange = e => {
    setAddForm({...addForm, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends', addForm)
    .then(res => {
      console.log(res)
      setAddForm(res.data);
      props.history.push('/friends')
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          typ='text'
          name='name'
          placeholder='name'
          value={addForm.name}
          onChange={handleChange}
        />
        <label>Age</label>
        <input 
          typ='number'
          name='age'
          placeholder='age'
          value={addForm.age}
          onChange={handleChange}
        />
        <label>Email</label>
        <input 
          typ='text'
          name='email'
          placeholder='email'
          value={addForm.email}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddFriendForm;