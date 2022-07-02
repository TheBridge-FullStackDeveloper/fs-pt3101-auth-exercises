import React, { useContext } from "react";
import authContext from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Profile({ logoutUser }) {
  const navigate = useNavigate();

  const { user } = useContext(authContext);

  return (
    <div style={{ marginTop: "60px" }}>
      <h1>{user.username} profile</h1>
      <p>User Email: {user.email}</p>
      <button
        onClick={() => {
          /* navigate('/login') */
          logoutUser();
        }}
      >
        Logout
      </button>
    </div>
  );
}
