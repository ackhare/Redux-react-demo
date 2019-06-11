import React, { Component } from 'react';

import LocaleProvider from './context/LocaleContext';
import Greeting from './Greeting';
import ToggleLocale from './ToggleLocale';

class App extends Component {
  render() {
    return (
      <LocaleProvider>
        <Greeting />
        <ToggleLocale />
      </LocaleProvider>
    );
  }
}

export default App;