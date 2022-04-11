import {AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-actions';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';

function Header(): JSX.Element
{
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state)=>state.authorizationStatus);
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href='/'>
              <img className="header__logo" src="./img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </a>
          </div>
          {
            authorizationStatus===AuthorizationStatus.Auth ?
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="/#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/" onClick={(evt) => { evt.preventDefault(); dispatch(logoutAction());}}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
              :
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/login">
                      <span className="header__signout">Log in</span>
                    </a>
                  </li>
                </ul>
              </nav>
          }

        </div>
      </div>
    </header>
  );
}

export default Header;
