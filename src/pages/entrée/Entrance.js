import React from "react";
import "./Entrance.css";
import Header from "../../componnent/Header";
import "../Home.css"
import salade1 from "../../assets/image-entrance/salade.jpg";
import salade2 from "../../assets/image-entrance/tapas.jpg";

function Entrance() {
  return (
    <div>
        <Header />
      <main>
        <h1 className="recette_h1">Entrée du jour :</h1>
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
        <section className="recette">
          <img className="img-recette" src={salade2} alt="salade"></img>
          <div className="list_recette">
            <ul>
              <h2 className="recette_h2">- Tapas à la française</h2>
              <li>des petits morceaux de poulet roti</li>
              <li>Un petit peu de tomate</li>
              <li>Un petit de sel et de poivre</li>
              <li>un quart d'avocat</li>
              <li>huile de parmesan</li>
              <li>galette</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Entrance;
