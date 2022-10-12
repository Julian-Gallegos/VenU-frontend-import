import React from 'react';
import Header from './Header.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


class CitySearch extends React.Component {
    render() {
        return (
            <>
                <Header handleFormSubmit={this.props.handleFormSubmit} handleFormChange={this.props.handleFormChange} searchQuery={this.props.searchQuery} />
                <Container>
                    <h2>Search by Location</h2>
                    <div className="search-by-location">
                        <p>{this.props.searchQuery}</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                        <p>Hello world</p>
                    </div>
                </Container>
                <Container>
                    <h2> Venue Results </h2>
                    <Container className="venue-results">
                        <Row>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Venue #1</Card.Title>
                                    <Card.Text>
                                        Info on Venue #1
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </Container>

            </>
        )
    }
}

export default CitySearch;