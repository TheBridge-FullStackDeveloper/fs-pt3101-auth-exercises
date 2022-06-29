import React, { useContext } from "react";
import authContext from "../../context/authContext";

export default function Profile({ logoutUser }) {

  const { user } = useContext(authContext);

  return (
    <div style={{ marginTop: "60px" }}>
      <h1>{user.username} profile</h1>
      <p>User Email: {user.email}</p>
      <button
                    onClick={() => {
                        logoutUser();
                    }}
                >
                    Logout
                </button>
    </div>
  );
}
