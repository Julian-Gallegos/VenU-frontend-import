import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Form, Row, Col} from 'react-bootstrap';
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
      this.setState({ placeholder: "Search a performer for their info", formType: "artistsearch" });
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
        <Form.Select onChange={this.handleSelect} aria-label="Default select example" style={{width: '140px'}}>
          <option value="city">City Venues</option>
          <option value="artist">Performer</option>
        </Form.Select>
        <Form onSubmit={this.props.handleFormSubmit} onChange={this.props.handleFormChange} style={{display: 'flex', alignItems: 'center'}}>         
          <Form.Group className="mb-3" controlId="formSearch" style={{width: '800px', paddingTop: '16px'}}>
            <Form.Control type="search" placeholder={this.state.placeholder} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      
        {this.props.redirectHandler() ? <Navigate to={`/${this.state.formType}`} /> : <></>}

      </>
    )
  }
}

export default Searchbar;
