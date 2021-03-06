import Axios from "axios";
import React, { useContext, useState } from "react";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import { MealPlanIdContext } from "../../contexts/MealPlanIdContext";
import RecipeView from "../RecipeView/RecipeView";
import Dropdown from "../Shared/Dropdown/Dropdown";
import dropdownOptions from "./dropdownOptions";
import "./Search.scss";

const RecipeSearchResult = (props) => {
  const { setRecipeId } = useContext(RecipeIdContext);
  const { mealPlanId, setMealPlanId } = useContext(MealPlanIdContext);
  const { baseUri, data } = props;
  const { image, title, id } = data;
  return (
    <div className="search-result">
      <div>
        <img src={`${baseUri}${image}`} alt="Recipe" onClick={() => setRecipeId(id)} />
      </div>
      <div>
        <p className="food-label" >{title}</p>
      </div>
    </div>
  );
};

export default () => {
  const [titleQuery, setTitleQuery] = useState("");
  const [cuisineQuery, setCuisineQuery] = useState([]);
  const [dietQuery, setDietQuery] = useState("");
  const [intolerancesQuery, setIntolerancesQuery] = useState([]);
  const [mealTypeQuery, setMealTypeQuery] = useState("");

  const [apiRes, setApiRes] = useState({ results: [] });

  // const [recipeId, setRecipeId] = useContext(RecipeIdContext);
  // const [mealPlanId, setMealPlanId] = useContext(MealPlanIdContext);

  const performSearch = async () => {
    const res = await Axios.get("/api/recipes", {
      params: {
        title: titleQuery,
        cuisine: cuisineQuery.length > 0 ? cuisineQuery.reduce((acc, value) => `${acc},${value}`) : undefined,
        diet: dietQuery || undefined,
        intolerances:
          intolerancesQuery.length > 0 ? intolerancesQuery.reduce((acc, value) => `${acc},${value}`) : undefined,
        mealType: mealTypeQuery || undefined
      }
    });
    setApiRes(res.data);
  };

  return (
    <section className="search">
      <div className="textfield-container">
        <input className="search-input" value={titleQuery} onChange={(e) => setTitleQuery(e.target.value)} />
        <button className="search-button" onClick={performSearch}>
          Search
        </button>
      </div>
      <div className="drop-down">
        <Dropdown
          className="dropdown-text"
          items={dropdownOptions.cuisine}
          onSelect={setCuisineQuery}
          placeholder="Cuisine"
          isMulti
        />
        <Dropdown className="drop-text" items={dropdownOptions.diet} onSelect={setDietQuery} placeholder="Diet" />
        <Dropdown
          className="drop-text"
          items={dropdownOptions.intolerances}
          onSelect={setIntolerancesQuery}
          placeholder="Intolerances"
          isMulti
        />
        <Dropdown
          className="drop-text"
          items={dropdownOptions.mealType}
          onSelect={setMealTypeQuery}
          placeholder="Meal type"
        />
      </div>
      <div className="search-box">
        <div className="search-result-box">
          {apiRes.results.map((result, i) => (
            <RecipeSearchResult className="search-result-box" key={i} data={result} baseUri={apiRes.baseUri} />
          ))}
        </div>
      </div>
      <div>
        <RecipeView className="recipe-view" />
      </div>
    </section>
  );
};
