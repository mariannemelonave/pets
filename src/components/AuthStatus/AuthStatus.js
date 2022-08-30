import React from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import "./AuthStatus.css";


const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p></p>;
  }
  return (
    <p className="bemvindo">
      Olá {auth.user.name}!{" "} 
      <button className="button_out"
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      >
        Sair
      </button>
    </p>
  );
};

export default AuthStatus;
