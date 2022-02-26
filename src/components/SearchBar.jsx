import React,{useEffect} from "react";
import { faMagnifyingGlass,faShuffle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar({item,setitem,handleSearch,handleRandom}){

  return(
    <div>
      <h1>Meal Finder</h1>
      <div className="header">
      <input value={item} onChange={(e)=>setitem(e.target.value)} id="search-input" placeholder="Search for meals or keywords"/>
      <button onClick={()=>{handleSearch(item)}} id="search-button"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      <button id="random-button" onClick={()=>{handleRandom()}}><FontAwesomeIcon icon={faShuffle}/></button>
      </div>
    </div>
  )
}