import React, { useState } from 'react';

function Form() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")


  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

 
const handleclick = () => {
    
}
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', width: '100%' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '.5rem' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setName(e.target.value) }
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
            value={formData.email}
            onChange={(e) => setEmail(e.target.value) }
            required
            style={{ width: '100%', padding: '.5rem' }}
          />
        </div>

        <button type="submit" onClick={handleclick} style={{ padding: '.5rem 1rem' }}>Submit</button>
      </form>
    </div>
  );
}

export default Form;