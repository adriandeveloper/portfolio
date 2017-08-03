import React from 'react';
import styles from './Social.scss';

const Social = () => (
  <div className="socialContainer">
    <ul className="socialUl">
      <li className="github socialLi"><a href="https://github.com/adriandeveloper" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
      <li className="twitter socialLi"><a href="https://twitter.com/adriathomas" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li className="medium socialLi"><a href="https://medium.com/@adrianlthomas" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
    </ul>
  </div>
)

export default Social;
