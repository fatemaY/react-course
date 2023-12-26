import React from 'react'
import {useState} from 'react'
import './style.css'


export default function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        Age: '0-15',
        comments: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      function handleSubmit (e) {
        e.preventDefault();
        alert('Form submitted..');
      };
  return (
    <form >
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <select
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        >
          <option value="1">0-15</option>
          <option value="2">15-30</option>
          <option value="3">30-45</option>
        </select>
      </div>
      <div>
        <label htmlFor="comments">Free Text:</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>Continue</button>
      </div>
    </form>
  )
}
