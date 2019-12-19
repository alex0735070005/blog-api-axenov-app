import axios from 'axios';

export const fetchRegistration = (target) => axios.post('/registration', {
  username: target.username.value,
  email: target.email.value,
  password: target.password.value,
});
