import { useNavigate } from "react-router-dom";
import React from "react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-section">
      <div className="h1-p">
        <h1 className="home-h1">Seu Book Manager</h1>
        <p className="home-p">
          Organize e gerencie seus livros de forma eficiente.
        </p>
      </div>

      <button
        className="button"
        onClick={() => {
          navigate("/addbooks");
        }}
      >
        Gerencie Agora!
      </button>
    </div>
  );
};

export default Home;
