import React from 'react';
import Header from '../../Header';
import "./Layout.css";

export default props => (
  <main className="main">
    <Header />
    {props.children}
  </main>
);
