import type { User, UserCredentials, UserRegistrationData } from './User';

export interface AuthRepository {
  register(data: UserRegistrationData): Promise<User>;
  login(credentials: UserCredentials): Promise<{ user: User; token: string }>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User | null>;
  forgotPassword(email: string): Promise<void>;
  resetPassword(token: string, password: string): Promise<void>;
}
