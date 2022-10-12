import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../App.css';


class HomePage extends React.Component {
	render() {
		return (
			<>
				<Container style={{display: 'flex', width: '1000px'}}>
				<div id='search-container'>
					<div>
						<InputGroup className="mb-3" style={{width: '500px'}}>
							<DropdownButton
								variant="outline-secondary"
								title="Dropdown"
								id="input-group-dropdown-1"
							>
								<Dropdown.Item href="#">Location</Dropdown.Item>
								<Dropdown.Item href="#">Artist</Dropdown.Item>
							</DropdownButton>
							<Form.Control aria-label="Text input with dropdown button" style={{}}/>
						</InputGroup>
						</div>
						<div>
						<Button variant="primary" type="submit">
							Search
						</Button>
					</div>
					</div>
					
				</Container>
			</>
		)
	}
}

export default HomePage;
