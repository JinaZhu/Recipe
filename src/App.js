import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "9a33db56";
  const APP_KEY = "20afb677ae19a5226f7c2c88e8413be1";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    // add await every time you have a promise
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
