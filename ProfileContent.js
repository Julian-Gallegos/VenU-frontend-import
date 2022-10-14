import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react'
import { render } from '@testing-library/react';

class ProfileContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            venues: [],
            artist: [],
        }
    }
}

componentDidMount = async () => {

    if(this.props.auth0.isAuthenticated) {
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res._raw;

        console.log('token: ', jwt);

        const config = {
            headers: { 'Authorization': `Bearer ${jwt}`},
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER,
            url: '/profile'
        }

        const profileResponse = await axios(config);

        console.log('Profile from DB: ', profileResponse.data);

        this.setState({
            profile: profileResponse.data
        })
    };
}

getProfile = async (token) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            method: 'get',
            baseURL: SERVER,
            url: '/profile'
          }
          const getProfileData = await axios(config);
          this.setState({
            favoriteLocations: getProfileData.data
          })
        } catch (error) {
          console.error("Error in getProfile: ", error);
        }
      }

//   handleDelete = async (ProfileToDelete) => {
//     try {
//       const res = await this.props.auth0.getIdTokenClaims();
//       const token = res.__raw;
//       const config = {
//         headers: { Authorization: `Bearer ${token}` },
//         method: 'delete',
//         baseURL: SERVER,
//         url: `/place/${locationToDelete._id}`
//       }
//       const ProfileToDeleteResponse = await axios(config);
//       console.log('Delete response status: ', ProfileToDeleteResponse.status);
//       this.getProfile(token);
//     } catch (error) {
//       console.error('Error in handleDelete: ', error);
//     }
//   }


export default withAuth0(ProfileContent);