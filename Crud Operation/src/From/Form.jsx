import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };
const handleClick = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'https://6823bb3d65ba05803397bc76.mockapi.io/crud-todo',
      { name, email }
    );
    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
  navigate("/read")
};

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <form onSubmit={handleClick} style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '.5rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '.5rem' }}
          />
        </div>

        <button type="submit" style={{ padding: '.5rem 1rem' }}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
