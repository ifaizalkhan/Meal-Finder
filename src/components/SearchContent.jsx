import React from "react";

export default function SearchContent({ search, handleClick }) {

  if (search.arr !== undefined) {
    return (
      <div className="bottom-search-container">
        <div id="heading"><h2>Search Results for '{search.item}'</h2></div>
        <div className="bottom-search-result">
          {(search.arr).map((e) => {
            return (
              <div key={e.idMeal} onClick={() => handleClick(e.idMeal)} className="bottom-search-meal-card" >
                <img src={e.strMealThumb} alt="Food Image" />
                <div className="bottom-search-hover-content"><h3 >{e.strMeal}</h3> </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return <></>
}