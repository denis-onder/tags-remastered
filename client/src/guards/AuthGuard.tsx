import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function AuthGuard({ children }: any) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  }, [location.pathname]);
  return children;
}
