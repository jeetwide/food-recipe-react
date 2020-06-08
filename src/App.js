import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "c8820d8c";
  const APP_KEY = "82d85623275a21580b6fe68f9dc51285	";

  // useEffect(async () => {

  //   const data = await Axios.get(
  //     `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)

  // },[]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // You can await here
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    setRecipes(response.data.hits);
  };
  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick = () => {
    fetchData();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
