import axios from 'axios';

export const fetchLogin = target => {
  return axios.post('/login', {
    security: {
      credentials: {
        email: target.email.value,
        password: target.password.value,
      }
    }
  })
}