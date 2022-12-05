import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from '../../../../shared/constants/ActionTypes';
import {setAuthToken} from './jwt-api';
import {usePostData} from 'hooks';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({children}) => {
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const {mutateAsync} = usePostData('login');

  const dispatch = useDispatch();

  useEffect(() => {
    const getAuthUser = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      } else if (
        token &&
        (new Date().getTime() - localStorage.getItem('asdfg')) / 1000 < 60 * 60
      ) {
        setJWTAuthData({
          user: {
            admin_name: 'admin',
            admin_role: 'superadmin',
          },
          isAuthenticated: true,
        });
      }
      setAuthToken(token);
    };

    getAuthUser();
  }, []);

  // const signInUser = async ({email, password}) => {
  //   dispatch({type: FETCH_START});
  //   try {
  //     const {data} = await jwtAxios.post('auth', {email, password});
  //     localStorage.setItem('token', data.token);
  //     setAuthToken(data.token);
  //     const res = await jwtAxios.get('/auth');
  //     setJWTAuthData({user: res.data, isAuthenticated: true, isLoading: false});
  //     dispatch({type: FETCH_SUCCESS});
  //   } catch (error) {
  //     setJWTAuthData({
  //       ...firebaseData,
  //       isAuthenticated: false,
  //       isLoading: false,
  //     });
  //     dispatch({type: FETCH_ERROR, payload: error.message});
  //   }
  // };

  const signInUser = async ({name, password}) => {
    dispatch({type: FETCH_START});
    await mutateAsync({
      adminName: name,
      password: password,
    })
      .then((e) => {
        const date = new Date().getTime();
        localStorage.setItem('token', e.token);
        localStorage.setItem('asdfg', date);
        setAuthToken(e.token);
        setJWTAuthData({user: e.data, isAuthenticated: true, isLoading: false});
        dispatch({type: FETCH_SUCCESS});
      })
      .catch((err) => {
        setJWTAuthData({
          ...firebaseData,
          isAuthenticated: false,
          isLoading: false,
        });
        dispatch({type: FETCH_ERROR, payload: err.message});
      });
  };

  // const signUpUser = async ({name, email, password}) => {
  //   dispatch({type: FETCH_START});
  //   try {
  //     const {data} = await jwtAxios.post('users', {name, email, password});
  //     localStorage.setItem('token', data.token);
  //     setAuthToken(data.token);
  //     const res = await jwtAxios.get('/auth');
  //     setJWTAuthData({user: res.data, isAuthenticated: true, isLoading: false});
  //     dispatch({type: FETCH_SUCCESS});
  //   } catch (error) {
  //     setJWTAuthData({
  //       ...firebaseData,
  //       isAuthenticated: false,
  //       isLoading: false,
  //     });
  //     dispatch({type: FETCH_ERROR, payload: error.message});
  //   }
  // };

  const logout = async () => {
    localStorage.removeItem('token');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}>
      <JWTAuthActionsContext.Provider
        value={{
          logout,
          signInUser,
        }}>
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
