/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function AuthGuard({ children }: any) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, [location.pathname]);
  return children;
}
