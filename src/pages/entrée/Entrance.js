import React from "react";
import "./Entrance.css";
import Header from "../../componnent/Header";
import "../acceuil/Home.css";
import salade1 from "../../assets/image-entrance/salade.jpg";
// import salade2 from "../../assets/image-entrance/tapas.jpg";
// import salade3 from "../../assets/image-entrance/saladetomato.jpg";

function Entrance() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <h1 className="recette_h1"></h1>
        <section className="recette">
          <img className="img-recette" src={salade1} alt="salade"></img>
          <div className="list_recette">
            <ul>
              <h2 className="recette_h2">- Salade de tomate</h2>
              <li>Un petit peu de salade</li>
              <li>Un petit peu de tomate</li>
              <li>Un petit de sel et de poivre</li>
              <li>un petit filet d'oignon</li>
              <li>huile de parmesan</li>
              <li>un bol</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Entrance;
