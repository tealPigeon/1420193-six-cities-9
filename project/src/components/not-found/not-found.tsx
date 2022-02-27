import React from 'react';
import {Link} from 'react-router-dom';
import '../../public/css/main.css';

function NotFound(): JSX.Element {
  return (
    <div className={'cities__places-container container'} style={{flexDirection: 'column'}}>
      <h1>404 Not Found</h1>
      <Link to="/"><div>&#5130; Вернуться на главную</div></Link>
    </div>);
}

export default NotFound;
