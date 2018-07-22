import React from 'react';
import Clock from './clock';
import Tab from './tab';
import Autocomplete from './autocomplete';
import Weather from './weather';

const Root = ({store}) => {
  return (
    <div className="main-wrapper">
      <Clock />
      <Tab store={store}/>
      <Autocomplete store={store}/>
    </div>
  );
};

export default Root;