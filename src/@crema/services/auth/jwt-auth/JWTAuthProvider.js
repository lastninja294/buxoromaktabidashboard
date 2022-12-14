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
import {sha512} from 'js-sha512';

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
            admin_name: localStorage.getItem('name') || 'admin',
            admin_role:
              localStorage.getItem('token2') === sha512('admin')
                ? 'admin'
                : 'superadmin',
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
        localStorage.setItem('token2', sha512(e.data.admin_role));
        localStorage.setItem('name', e.data.admin_name);
        setAuthToken(e.token);
        setJWTAuthData({user: e.data, isAuthenticated: true, isLoading: false});
        dispatch({type: FETCH_SUCCESS});
      })
      .catch(() => {
        setJWTAuthData({
          ...firebaseData,
          isAuthenticated: false,
          isLoading: false,
        });
        dispatch({
          type: FETCH_ERROR,
          payload: "Parol yoki login xato bo'lishi mumkin",
        });
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
