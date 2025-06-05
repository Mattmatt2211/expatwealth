import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const api = import.meta.env.VITE_API_URL;

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${api}/api/auth/register`, { email, password });
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold">Register</h2>
        <input className="border p-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 w-full" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
