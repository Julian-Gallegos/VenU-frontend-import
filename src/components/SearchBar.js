import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from "react-router-dom";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "citysearch",
      placeholder: "Search a city for its venue info",
    }

  }

  handleSelect = (e) => {
    e.preventDefault();
    if (e.target.value === "city") {
      this.setState({ placeholder: "Search a city for its venue info", formType: "citysearch" });
    } else {
      this.setState({ placeholder: "Search an artist for their info", formType: "artistsearch" });
    }
  }

  // handleFormChange(e) {
  //   e.preventDefault();
  //   console.log(e);
  //   //this.setState({formData: e.target.value});
  //   this.props.handleFormChange(e);

  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({searchQuery: this.state.formData});
  // }


  render() {
    return (
      <>
        <Form.Select onChange={this.handleSelect} aria-label="Default select example">
          <option value="city">City Venues</option>
          <option value="artist">Artist</option>
        </Form.Select>

        <Form onSubmit={this.props.handleFormSubmit} onChange={this.props.handleFormChange}>
          <Form.Label></Form.Label>
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Label>City</Form.Label>
            <Form.Control type="search" placeholder={this.state.placeholder} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
        {this.props.searchQuery.length > 0 ? <Navigate to={`/${this.state.formType}`} /> : <></>}
        

      </>
    )
  }
}

export default Searchbar;
