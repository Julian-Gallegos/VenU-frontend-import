import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{padding: '3px'}}>
        <img src={user.picture} alt={user.name} />
        {/* <span>{user.name}</span>
        <span>{user.email}</span> */}
      </div>
    )
  );
};

export default Profile;