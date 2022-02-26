import React from 'react';

export default function RandomContent({ ingredients, meal, img, category, inst }) {

  if (meal, img, category, inst !== "") {
    return (
      <div className="bottom-meal-container">
        <h1>{meal}</h1>
        <img src={img} alt="Food Image" />
        <div className="bottom-meal-name">{category.map((e)=>{return <p key={e}>{e}</p> })}</div>
        <div className="bottom-meal-recipe">
          <p>{inst}</p>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ing) => {
              return <li key={ing}>{ing}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }

  return <></>
}
