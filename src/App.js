import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchContent from './components/SearchContent';
import RandomContent from './components/RandomContent';
import './styles/style1.css';
import './styles/style2.css';
import './styles/style3.css';


import Loader from './components/Loader';

export default function App() {
  const [isloading, setisloading] = useState(false);
  const [item, setitem] = useState('');
  const [search, setsearch] = useState([]);
  const [ingredients, setingredients] = useState([]);
  const [meal, setmeal] = useState('');
  const [img, setimg] = useState('');
  const [category, setcategory] = useState('');
  const [inst, setinst] = useState('');
  const api = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const randomapi = 'https://www.themealdb.com/api/json/v1/1/random.php';

  async function handleSearch(e) {
    if (e !== '') {
      setisloading(true);
      setitem('');
      setingredients([]);
      setmeal('');
      setimg('');
      setcategory('');
      setinst('');
      let arr = [];
      await fetch(api + e)
        .then((blob) => blob.json())
        .then((data) => arr.push(...data.meals));
      let yo = { arr: arr, item: e }
      setsearch(yo);
      setisloading(false);
    } else {
      alert('Try entering a valid meal name...');
    }
  }

  async function handleRandom() {
    setisloading(true);
    let arr = [];
    setitem('');
    setsearch([]);
    setingredients([]);
    await fetch(randomapi)
      .then((res) => res.json())
      .then((res) => arr.push(...res.meals))
      .then(() => handleUpdate(arr));
    setisloading(false)  
  }

  async function handleClick(id) {
    let arr = search.arr.filter((j) => {
      return j.idMeal === id;
    });
    handleUpdate(arr);
  }

  function handleUpdate(arr) {
    const ingredientsArray = [];

    for (let i = 1; i <= 20; i++) {
      if (arr[0][`strIngredient${i}`]) {
        ingredientsArray.push(
          `${arr[0][`strIngredient${i}`]} - ${arr[0][`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
    arr.map((meal) => {
      let temp = [meal.strCategory, meal.strArea];
      setmeal(meal.strMeal);
      setimg(meal.strMealThumb);
      setcategory(temp);
      setinst(meal.strInstructions);
    });
    setingredients(ingredientsArray);
  }

  return (
    <div className="main-container">
      <SearchBar
        item={item}
        setitem={setitem}
        handleSearch={handleSearch}
        handleRandom={handleRandom}
      />
      {(isloading)?<Loader/>:<SearchContent search={search} handleClick={handleClick}/>}  
      <RandomContent
        ingredients={ingredients}
        meal={meal}
        img={img}
        category={category}
        inst={inst}
      />
    </div>
  );
}
