import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks';
import {checkAuthAction} from '../store/api-actions';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps)
{
  const dispatch = useAppDispatch();
  dispatch(checkAuthAction());
  const {authorizationStatus} = useAppSelector((state) => state);
  return authorizationStatus==='AUTH' ? children : <Navigate to={'/login'}/>;
}

export default PrivateRoute;
