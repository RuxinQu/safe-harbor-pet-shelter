import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WithAuth, adminLogout } from "../../util/api";
import { AddPets } from "../../components/Admin/AddPets";

export default function Admin() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const Auth = async () => {
      const result = await WithAuth();
      if (result.ok) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigate("/admin/login");
      }
    };
    Auth();
  });

  return (
    isLoggedIn && (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={adminLogout} style={{ margin: "1rem" }}>
          Logout
        </button>
        <AddPets />
      </div>
    )
  );
}
