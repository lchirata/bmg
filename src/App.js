import React , { Component }from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';



class App extends Component {



  render() {

    return (
      <div className="App">
      <header className="App-header">
        <Routes />
        <GlobalStyle />
      </header>
    </div>
    );
  }
}

export default App;





