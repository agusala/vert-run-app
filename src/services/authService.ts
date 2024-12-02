export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
  };
}

// Simulación de autenticación local
export const login = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "password") {
        resolve({
          token: "dummy_token",
          user: {
            id: "1",
            name: "John Doe",
          },
        });
      } else {
        reject(new Error("Credenciales incorrectas"));
      }
    }, 1000);
  });
};

export const logout = async (): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, 500));
};
