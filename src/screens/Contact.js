import React from 'react';
import { Form, Button } from 'react-bootstrap'

export default class Contact extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                    borderRadius: '25px', borderWidth: 1, borderColor: 'black', backgroundColor: '#d1e0d9',
                    height: '500px', width: '350px', marginTop: '25px',paddingBottom:'25px'
                }}>
                    <div style={{ borderBottom:'1px solid #e0d8d5',height:'60px',marginTop:'20px' }}>
                        <h3 style={{ textAlign: 'center' }}>
                            Contact Us
                        </h3>
                    </div>

                    <Form style={{ display: 'flex', flexDirection: 'column', marginLeft: '5%', marginRight: '5%',marginTop:'15px' }}>

                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Enter message..." />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </div>
        )
    }
}