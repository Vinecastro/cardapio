import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao Zero 11 Bar</h1>
      <p className="home-text">
        O melhor ponto de encontro para curtir drinks incríveis, cervejas geladas e boas companhias. 
        Um ambiente sofisticado e acolhedor esperando por você! 🍻🍸
      </p>
      <Link to="/menu" className="home-button">
        Explorar Menu 🍹
      </Link>
    </div>
  );
}

export default Home;
