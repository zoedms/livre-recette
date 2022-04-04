import React from "react";
import "../pages/Home.css"
import Header from "../componnent/Header";
import Card from "../componnent/Card";
import Footer from "../componnent/Footer";
import Salade from "../assets/image-entrance/salade.jpg"
import Saladetomato from "../assets/image-entrance/saladetomato.jpg"
import Tapas from "../assets/image-entrance/tapas.jpg"

function Home() {
  return (
    <div>
      <Header />
      <main className="main_home">
        <h1>Nos idées recettes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quibusdam veritatis mollitia? Neque, quis nobis. Error ut voluptate
          minus magni aspernatur officia illum totam fugit sunt rem? Ullam,
          sapiente, distinctio iste officia ad deleniti, in neque accusamus enim
          rem iusto? Nobis voluptates ipsa cum eum itaque dolores. Id, maxime
          quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quibusdam veritatis mollitia? Neque, quis nobis. Error ut voluptate
          minus magni aspernatur officia illum totam fugit sunt rem? Ullam,
          sapiente, distinctio iste officia ad deleniti, in neque accusamus enim
          rem iusto? Nobis voluptates ipsa cum eum itaque dolores. Id, maxime
          quasi!
        </p>
        <article className="card_recette">
          <Card
            img={Salade}
            titre="Une bonne salade"
            paragraphe="Parfait pour l'été!"
            link="#"
          />
          <Card
            img={Tapas}
            titre="Envie de Tapas ?"
            paragraphe="Parfait pour des repas entre ami!"
            link="#"
          />
          <Card
            img={Saladetomato}
            titre="La salade de tomate"
            paragraphe="La classique mais la meilleure!"
            link="#"
          />
          <Card
            img={Salade}
            titre="Une bonne salade"
            paragraphe="Parfait pour l'été!"
            link="#"
          />
          <Card
            img={Tapas}
            titre="Envie de Tapas ?"
            paragraphe="Parfait pour des repas entre ami!"
            link="#"
          />
          <Card
            img={Saladetomato}
            titre="La salade de tomate"
            paragraphe="La classique mais la meilleure!"
            link="#"
          />
          <Card
            img={Salade}
            titre="Une bonne salade"
            paragraphe="Parfait pour l'été!"
            link="#"
          />
          <Card
            img={Tapas}
            titre="Envie de Tapas ?"
            paragraphe="Parfait pour des repas entre ami!"
            link="#"
          />
        </article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quibusdam veritatis mollitia? Neque, quis nobis. Error ut voluptate
          minus magni aspernatur officia illum totam fugit sunt rem? Ullam,
          sapiente, distinctio iste officia ad deleniti, in neque accusamus enim
          rem iusto? Nobis voluptates ipsa cum eum itaque dolores. Id, maxime
          quasi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          quibusdam veritatis mollitia? Neque, quis nobis. Error ut voluptate
          minus magni aspernatur officia illum totam fugit sunt rem? Ullam,
          sapiente, distinctio iste officia ad deleniti, in neque accusamus enim
          rem iusto? Nobis voluptates ipsa cum eum itaque dolores. Id, maxime
          quasi!
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
