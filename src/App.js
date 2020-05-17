import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import history from './service/history'
import { Spinner } from 'react-bootstrap';
import Mask1 from './assets/images/mask_1 (1).jpg';
import Mask2 from './assets/images/mask_1 (2).jpg';
import Mask3 from './assets/images/mask_1 (4).jpg';
import Mask4 from './assets/images/mask_1 (3).jpg';

import { Carousel, Tab, Tabs, Row, Col, Container } from 'react-bootstrap';
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
      // <Router history={history} >
      //   <Header
      //       company_name={this.state.company_name}
      //     />
      //   {this.state.initialLoading?(
      //     <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'500px'}}>
      //       <Spinner animation="border" variant="success" />
      //     </div>
      //   ):(
      //   <div style={{ backgroundColor: '#dae6be' }}>
      //     <Routes />
      //     <Footer />
      //   </div>
      //   )}
      // </Router>
      <div>
                {/* slider sections */}
                <br />
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Mask1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>One Use Masks</h3>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Mask2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Free Size</h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Mask3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 style={{color:'black'}}>3Ply Material</h3>
                            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                <div style={{margin:'5%'}}>
                    <img src={Mask4} style={{width:'100%',height:'100%'}} />
                </div>
                {/* Products Exhibit sections */}
                {/* <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: '5%',
                    marginTop: '3%'
                }}>
                    <Tabs activeKey={this.state.key} onSelect={(key) => this.setState({ key: key })} variant={'pills'}
                        transition={null}>
                        <Tab eventKey={1} title="All" style={{ marginTop: '2%' }}>
                            <Container>
                                <Row className="show-grid" style={{}}>
                                    {this.state.all_products.map((a, index) => (
                                        <Col xs={6} md={4} lg={4} style={{ marginBottom: '2%' }} key={index}>
                                            <Product
                                                product_image={a}
                                            />
                                        </Col>
                                    )
                                    )}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={2} title="Man" style={{ marginTop: '2%' }}>
                            <Container>
                                <Row className="show-grid" style={{}}>
                                    {this.state.man_products.map((a, index) => (
                                        <Col xs={6} md={4} lg={4} style={{ marginBottom: '2%' }} key={index}>
                                            <Product
                                                product_image={a}
                                            />
                                        </Col>
                                    )
                                    )}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={3} title="Woman" style={{ marginTop: '2%' }}>
                            <Container>
                                <Row className="show-grid" style={{}}>
                                    {this.state.woman_products.map((a, index) => (
                                        <Col xs={6} md={4} lg={4} style={{ marginBottom: '2%' }} key={index}>
                                            <Product
                                                product_image={a}
                                            />
                                        </Col>
                                    )
                                    )}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={4} title="Children" style={{ marginTop: '2%' }}>
                            <Container>
                                <Row className="show-grid" style={{}}>
                                    {this.state.children_products.map((a, index) => (
                                        <Col xs={6} md={4} lg={4} style={{ marginBottom: '2%' }} key={index}>
                                            <Product
                                                product_image={a}
                                            />
                                        </Col>
                                    )
                                    )}
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </div> */}
            </div>
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