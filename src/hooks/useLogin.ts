import api from "../api/axios";

const useLogin = async (user_username: string, user_password: string) => {
  try {
    const authDetails = { username: user_username, password: user_password };
    const result = await api.post<any>("/auth/login", authDetails);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default useLogin;
