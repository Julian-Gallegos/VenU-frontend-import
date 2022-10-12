import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formType: "city",
      placeholder: "Search a city for its venue info",
      searchData: "",
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
    if (this.state.formType === "city") {
      useNavigate('/CitySearch', {
        state: {
          searchData: this.state.searchData
        }
      });
    } else {
      useNavigate('/ArtistSearch', {
        state: {
          searchData: this.state.searchData
        }
      });
    }
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
        {/* <Routes>
          <Route exact path="/">
            {this.state.searchData.length > 0 ? <Redirect to={{ pathname: "/citysearch", state: { searchData: this.state.searchData } }} /> : <></>}
          </Route>
        </Routes> */}

      </>
    )
  }
}

export default Searchbar;
