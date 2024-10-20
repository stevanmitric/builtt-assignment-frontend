import { notification } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('test', import.meta.env.VITE_APP_DEFAULT_USERNAME);

    if (
      email === import.meta.env.VITE_APP_DEFAULT_USERNAME &&
      password === import.meta.env.VITE_APP_DEFAULT_PASSWORD
    ) {
      const user = {
        id: 1,
        email: e.target.email.value,
      };
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/shop');
    } else {
      notification.error({
        message: 'Login Failed',
        description: 'Incorrect email or password.',
        placement: 'topRight',
        duration: 2,
      });
    }
  };

  return (
    <div className='login-container'>
      <h1>Prijavi se na svoj nalog</h1>

      <form onSubmit={handleLogin}>
        <div className='input-group'>
          <label htmlFor='email'>E-mail adresa</label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            required
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Upišite šifru</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='******'
            required
          />
        </div>

        <button type='submit'>Prijavi se na nalog</button>
      </form>
    </div>
  );
};
