import { useState, useEffect } from 'react';
import apiClient from '../../../lib/axios';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  verifyOTP: (code: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

export function useAuth(): AuthContextType {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedToken = localStorage.getItem('auth_token');
    const storedUser = localStorage.getItem('user_data');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    });

    const data = response.data;
    
    // Store user ID for OTP verification
    localStorage.setItem('user_id', data.user.id);
    localStorage.setItem('user_email', data.user.email);
  };

  const verifyOTP = async (code: string) => {
    const userId = localStorage.getItem('user_id');
    
    const response = await apiClient.post('/otp/verify', {
      user_id: userId,
      code,
      purpose: 'login',
    });

    const data = response.data;

    // Store token and user data
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('auth_token', data.token);
    localStorage.setItem('user_data', JSON.stringify(data.user));

    // Clear temporary data
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_email');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_email');
  };

  return {
    user,
    token,
    isAuthenticated: !!token,
    login,
    verifyOTP,
    logout,
    loading,
  };
}
