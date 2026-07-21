export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'warehouse_manager' | 'commodity_buyer' | 'institutional_underwriter' | 'admin';
  createdAt: string;
  updatedAt?: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegistrationData extends UserCredentials {
  name: string;
  role?: User['role'];
}
