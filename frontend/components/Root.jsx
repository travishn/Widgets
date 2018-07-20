import React from 'react';
import Clock from './clock';
import Tab from './tab';

const Root = ({store}) => {
  return (
    <div className="main-wrapper">
      <Clock />
      <Tab store={store}/>
    </div>
  );
};

export default Root;