import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
        <GlobalStyle />
      </header>
    </div>
  );
}

export default App;
