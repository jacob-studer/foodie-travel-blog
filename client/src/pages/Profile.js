import React, { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import Login from '../components/Login'
import { getMe } from '../utils/API';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  console.log(userData)


  //we only need to be able to tell if the user is logged in here, there is no functionality to GET on the profile page, only to create/post posts
  return (
    <div>
      {/* {userData ? (
          <p>Login successful</p>
      ) : ( */}
          <div>
            <Login />
        </div>
      {/* )} */}
    </div>
  )
};

export default Profile