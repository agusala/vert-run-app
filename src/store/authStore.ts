import { create } from "zustand";
import { login, logout, AuthResponse } from "../services/authService";

interface AuthState {
  user: AuthResponse["user"] | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  loginUser: (username: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,
  error: null,

  loginUser: async (username, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await login(username, password);
      set({ user: response.user, token: response.token, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },

  logoutUser: async () => {
    set({ isLoading: true });
    await logout();
    set({ user: null, token: null, isLoading: false });
  },
}));
