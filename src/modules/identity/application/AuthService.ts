import type { User, UserCredentials, UserRegistrationData } from '../domain/User';
import type { AuthRepository } from '../domain/AuthRepository';

export class AuthService {
  #authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.#authRepository = authRepository;
  }

  async register(data: UserRegistrationData): Promise<User> {
    return this.#authRepository.register(data);
  }

  async login(credentials: UserCredentials): Promise<{ user: User; token: string }> {
    return this.#authRepository.login(credentials);
  }

  async logout(): Promise<void> {
    return this.#authRepository.logout();
  }

  async getCurrentUser(): Promise<User | null> {
    return this.#authRepository.getCurrentUser();
  }

  async forgotPassword(email: string): Promise<void> {
    return this.#authRepository.forgotPassword(email);
  }

  async resetPassword(token: string, password: string): Promise<void> {
    return this.#authRepository.resetPassword(token, password);
  }
}
