import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import history from './service/history'
import { Spinner } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: 'Alexa Branders',
      initialLoading:true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({initialLoading:false})
    }, 500);
  }
  render() {
    return (
      <Router history={history} >
        <Header
            company_name={this.state.company_name}
          />
        {this.state.initialLoading?(
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'500px'}}>
            <Spinner animation="border" variant="success" />
          </div>
        ):(
        <div style={{ backgroundColor: '#dae6be' }}>
          <Routes />
          <Footer />
        </div>
        )}
      </Router>
    )
  }
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;