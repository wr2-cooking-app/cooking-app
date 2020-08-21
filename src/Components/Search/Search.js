import Axios from "axios";
import React, { useContext, useState } from "react";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import RecipeView from "../RecipeView/RecipeView";
import Dropdown from "../Shared/Dropdown/Dropdown";
import dropdownOptions from "./dropdownOptions";
import "./Search.scss";

const RecipeSearchResult = (props) => {
  const { setRecipeId } = useContext(RecipeIdContext);
  const { baseUri, data } = props;
  const { image, title, id } = data;
  return (
    <div className="search-result">
      <div>
        <img src={`${baseUri}${image}`} alt="Recipe" onClick={() => setRecipeId(id)} />
      </div>
      <div>
        <label style={{ textAlign: "center", fontFamily: "cursive", color: "black", fontSize: "10px" }}>{title}</label>
      </div>
    </div>
  );
};

export default () => {
  const [titleQuery, setTitleQuery] = useState("");
  const [cuisineQuery, setCuisineQuery] = useState([]);
  const [dietQuery, setDietQuery] = useState("");
  const [intolerancesQuery, setIntolerancesQuery] = useState([]);

  const [apiRes, setApiRes] = useState({ results: [] });

  const performSearch = async () => {
    const res = await Axios.get("/api/recipes", {
      params: {
        title: titleQuery,
        cuisine: cuisineQuery.length > 0 ? cuisineQuery.reduce((acc, value) => `${acc},${value}`) : undefined,
        diet: dietQuery || undefined,
        intolerances:
          intolerancesQuery.length > 0 ? intolerancesQuery.reduce((acc, value) => `${acc},${value}`) : undefined
      }
    });
    setApiRes(res.data);
  };

  return (
    <section className="search">
      <div className="textfield-container">
        <input className="search-input" value={titleQuery} onChange={(e) => setTitleQuery(e.target.value)} />
        <Dropdown items={dropdownOptions.cuisine} onSelect={setCuisineQuery} placeholder="Cuisine" isMulti />
        <Dropdown items={dropdownOptions.diet} onSelect={setDietQuery} placeholder="Diet" />
        <Dropdown
          items={dropdownOptions.intolerances}
          onSelect={setIntolerancesQuery}
          placeholder="Intolerances"
          isMulti
        />
        <button className="search-button" onClick={performSearch}>
          Search
        </button>
      </div>
      <div className="search-result-box">
        {apiRes.results.map((result, i) => (
          <RecipeSearchResult className="recipe-result" key={i} data={result} baseUri={apiRes.baseUri} />
        ))}
      </div>
      <div>
        <RecipeView />
      </div>
    </section>
  );
};
