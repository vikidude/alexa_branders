import React from 'react';
import { Table, Container } from 'react-bootstrap'

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',paddingTop:'15px', flexDirection: 'column'
                    }}>
                        <p>
                            <b>Alexa Branders is engaged</b> in manufacturing and exporting a beautiful collection of Men's Ladies & Kids garment since its inception in the year 2018. Our range of products includes Men garments.</p>
                        <p>
                            We are backed by a state-of-the-art infrastructural unit that is well-equipped with most modern machines like stitching, tailoring, finishing and high speed sewing machines that enable us to produce optimum quality products with perfect ease and comfort. As we consider offering premium quality to be our first priority, we follow stringent quality control checks at
                            every stage of the production process, starting right from the selection of raw materials till the final product dispatch.
                    </p>
                        <p>
                            Moreover, our capable logistics experts always strive to provide secure transit at our clients’ premises within the promised time frame.
                            Today, we have established ourselves as one of the popular brands in this garment industry.</p>

                    </div>

                    <Table bordered style={{
                        marginTop: '1%'
                    }} responsive>
                        <thead>
                            <tr>
                                <th colSpan={4}>
                                    <h4>Fact Sheet
                                </h4>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={4}>
                                    <h5>
                                        Basic Information</h5>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <p>
                                                Nature of Business&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                            <p>
                                                Manufacturer
                                        </p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <p>
                                                Registered Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                            <p>
                                                No. 13, MR Nagar, KPN colony (PO), Dharapuram Road, Tiruppur- 641 608, Tamil Nadu , India
                                        </p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <p>
                                                Industry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                            <p>
                                                Manufacturing and Trading of Men's Ladies and Kids Undergarment.
                                        </p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <p>
                                                Total Employees&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                            <p>
                                                50 People
                                        </p>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <p>
                                                Year of Establishment&nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                            <p>
                                                2017
                                        </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4}>
                                    <h5>Packaging/Payment and Shipment Details</h5>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <p>
                                            Payment Mode&nbsp;&nbsp;&nbsp;&nbsp;
                                        </p>
                                        <ol>
                                            <li>
                                                Cash
                                        </li>
                                            <li>Cheque</li>
                                            <li>DD</li>

                                        </ol>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <p>
                                            Shipment Mode&nbsp;&nbsp;
                                        </p>
                                        <ol>
                                            <li>
                                                Road
                                        </li>
                                        </ol>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center', marginTop: '1%', flexDirection: 'column'
                    }}>
                        <h4 style={{ textAlign: 'left' }}>
                            Infrastructure
                    </h4>

                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The company has a well-equipped state-of-the-art manufacturing unit that covers a vast area and has the capacity for carrying out large-scale production in a streamlined manner. Our production process with the aid of latest fabrication technology based tools and machines, which strengthen the infrastructure. Besides this, we have an in-house designing unit that is equipped with world-class designing software.
                    </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center', marginTop: '1%', flexDirection: 'column'
                    }}>
                        <h4 style={{ textAlign: 'left' }}>
                            Quality
                    </h4>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As far as quality is concerned, we have already proven ourselves by providing premium quality and highly durable apparels. We use only first grade fabrics like viscose, cotton and polyester that are procured from reliable and certified vendors of the market in our manufacturing processes. Moreover, to ensure their longer wearing life, these products are perfectly stitched using high-tech machines.
                    </p><p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So on, we strictly follow international standards from manufacturing to packaging. Moreover, to make sure of their quality standards, our products are well-tested on various parameters like colorfastness, stitching and tailoring through some tests conducted at our quality testing laboratory using high-end tools.
                    </p>
                    </div>
                </Container>
            </div>
        )
    }
}