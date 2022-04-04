import React from "react";
import "../pages/Home.css";

function Footer() {
  return (
    <footer>

      <div className="liste_footer">
        <h5>Plats</h5>
        <ol>
          <li>Plat 1</li>
          <li>Plat 2</li>
          <li>Plat 3</li>
          <li>Plat 4</li>
        </ol>
      </div>
      <div className="liste_footer">
        <h5>Entrée</h5>
        <ol>
          <li>Entrée 1</li>
          <li>Entrée 2</li>
          <li>Entrée 3</li>
          <li>Entrée 4</li>
        </ol>
      </div>
      <div className="liste_footer">
        <h5>Desserts</h5>
        <ol>
          <li>Dessert 1</li>
          <li>Dessert 2</li>
          <li>Dessert 3</li>
          <li>Dessert 4</li>
        </ol>
      </div>
    </footer>
  );
}

export default Footer;
