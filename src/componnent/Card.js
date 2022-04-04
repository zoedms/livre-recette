import React from 'react'
import "../componnent/Card.css"

function Card(props) {
  return (
    <article className='card__recette'>
      <img src={props.img} alt="Recette" className="recette__img" />
      <div className="info_recette">
        <h3>{props.titre}</h3>
        <p>{props.paragraphe}</p>
        <a href={props.link}>LA RECETTE</a>
      </div>
    </article>
  );
}

export default Card;