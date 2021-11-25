import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import User from '../domain/User';

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [displayName, setDisplayName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onClick = async (): Promise<void> => {
    const data: User = {
      email,
      displayName,
      password,
    } as User;

    try {
      await register(data);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register">
      <input
        type="text"
        placeholder="Email Address:"
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="text"
        placeholder="Display Name:"
        onChange={({ target: { value } }) => setDisplayName(value)}
      />
      <input
        type="password"
        placeholder="Password:"
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  );
}
