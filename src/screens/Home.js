import React from 'react';
import { Carousel, Tab, Tabs, Row, Col, Container } from 'react-bootstrap';
import FirstCloth from '../assets/images/cloths1.jpg';
import SecondCloth from '../assets/images/cloths2.jpg';
import ThirtCloth from '../assets/images/cloths3.jpg';
import Man1 from '../assets/images/man1.jpg';
import Man2 from '../assets/images/man2.jpg';
import Man3 from '../assets/images/man3.jpg';
import Man4 from '../assets/images/man4.jpg';
import Man5 from '../assets/images/man5.jpg';
import Man6 from '../assets/images/man6.jpg';
import Man7 from '../assets/images/man7.jpg';
import Man8 from '../assets/images/man8.jpg';
import Man9 from '../assets/images/man9.jpg';

import Woman1 from '../assets/images/woman1.jpg';
import Woman2 from '../assets/images/woman2.jpg';
import Woman3 from '../assets/images/woman3.jpg';
import Woman4 from '../assets/images/woman4.jpg';
import Woman5 from '../assets/images/woman5.jpg';
import Woman6 from '../assets/images/woman6.jpg';
import Woman7 from '../assets/images/woman7.jpg';
import Woman8 from '../assets/images/woman8.jpg';
import Woman9 from '../assets/images/woman9.jpg';

import Children1 from '../assets/images/children1.jpg';
import Children2 from '../assets/images/children2.jpg';
import Children3 from '../assets/images/children3.jpg';
import Children4 from '../assets/images/children4.jpg';
import Children5 from '../assets/images/children5.jpg';
import Children6 from '../assets/images/children6.jpg';
import Children7 from '../assets/images/children7.jpg';
import Children8 from '../assets/images/children8.jpg';
import Children9 from '../assets/images/children9.jpg';

import Product from '../components/Product';

import Mask1 from '../assets/images/mask_1 (1).jpg';
import Mask2 from '../assets/images/mask_1 (2).jpg';
import Mask3 from '../assets/images/mask_1 (4).jpg';
import Mask4 from '../assets/images/mask_1 (3).jpg';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            man_products: [
                Man1,
                Man2,
                Man3,
                Man4, Man5, Man6, Man7, Man8, Man9
            ],
            woman_products: [
                Woman1, Woman2, Woman3, Woman4, Woman5, Woman6, Woman7, Woman8, Woman9
            ],
            children_products: [
                Children1, Children2, Children3, Children4, Children5, Children6, Children7, Children8, Children9
            ],
            all_products: [],
            transition: true,
        }
        for (let c in this.state.children_products) {
            this.state.all_products.push(this.state.children_products[c]);
        }
        for (let w in this.state.woman_products) {
            this.state.all_products.push(this.state.woman_products[w]);
        }
        for (let m in this.state.man_products) {
            this.state.all_products.push(this.state.man_products[m]);
        }
    }


    render() {
        return (
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