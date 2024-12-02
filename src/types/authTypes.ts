export interface User {
  id: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
