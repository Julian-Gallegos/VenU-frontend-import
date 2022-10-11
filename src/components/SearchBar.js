import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "city",
      placeholder: "Search a city for its venue info",
    }

  }

  handleSelect = (e) => {
    e.preventDefault();
    if (e.target.value === "city") {
      this.setState({ placeholder: "Search a city for its venue info", formType: "City Venues" });
    } else {
      this.setState({ placeholder: "Search an artist for their info", formType: "artist" });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }


  render() {
    return (
      <>
        <Form.Select onChange={this.handleSelect} aria-label="Default select example">
          <option value="city">City Venues</option>
          <option value="artist">Artist</option>
        </Form.Select>

        <Form onSubmit={() => this.handleSubmit()}>
          <Form.Label></Form.Label>
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Label>City</Form.Label>
            <Form.Control type="search" placeholder={this.state.placeholder} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default Searchbar;
