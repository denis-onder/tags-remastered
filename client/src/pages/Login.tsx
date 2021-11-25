import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onClick = async (): Promise<void> => {
    try {
      await login(email as string, password as string);
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Email Address:"
        onChange={({ target: { value } }) => setEmail(value)}
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
