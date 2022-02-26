import React from "react";

export default function SearchContent({ search, handleClick }) {

  if (search.arr !== undefined && search.arr.length>0) {
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
  else if(search.arr !== undefined && search.arr.length===0){
    return <h3 style={{margin:"20px"}}>No Result Found!!</h3>
  }

  return <></>
}