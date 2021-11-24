import User from '../domain/User';
import { authAxios } from '../plugins/axios';

const register = (data: User): Promise<User> => {
  return authAxios
    .post('/register', {
      email: data.email,
      password: data.password,
      displayName: data.displayName,
    })
    .then((res) => res.data);
};

const login = (email: string, password: string): Promise<void> => {
  return authAxios
    .post('/login', {
      email,
      password,
    })
    .then((res) => res.data);
};

export { register, login };
