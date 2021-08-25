import React, { useState } from 'react';

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const Login = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });

//   const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(userFormData);
        console.log(userFormData)
        console.log(response)
      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
      console.log(token);
    } catch (err) {
      console.error(err);

    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };


  return (
    <div>

        <h4>Creator Login
        </h4>
        <form
          onSubmit={handleFormSubmit}
        >
            <div>
                <textarea
                type='text'
                placeholder='Username'
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
                >
                </textarea>
            </div>

          <div>
            <textarea
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            >
            </textarea>
          </div>
  
          <div>
            <textarea
              type='password'
              placeholder='Password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            >
            </textarea>
          </div>
  
          <div>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
        
    </div>
  );
};

export default Login;
