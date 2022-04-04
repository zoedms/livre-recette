import React from "react";
import "./Home.css";
import Header from "../componnent/Header";

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
        <div className="carroussel"></div>
      </main>
    </div>
  );
}

export default Home;
