import React from 'react';
import Axios from 'axios';
import './app.css';
import { useState } from 'react';
import RecipeTile from './RecipeTile';
import { readSync } from 'fs';

function App() {

  const [query, setquery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan")

  const YOUR_APP_ID = '2d21728f';
  const YOUR_APP_KEY = '63700563d59fbdbfbd568667a42a092a';

  var url = `https://api.edamam.com/search?q=${query}
  &app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
  &health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Food Recipe Plaza 🍔</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input type="text"
          className="app_input"
          placeholder="enter ingrident" value={query}
          onChange={(event) => setquery(event.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />

        
      </form>
        <div className="app_recipes">
          {recipes.map(recipe => {
            return <RecipeTile recipe={recipe} />
          })}
        </div>
    </div>

      );
}

      export default App;
