import Axios from "axios";
import React, { useState, useContext } from "react";
import RecipeView from "../RecipeView/RecipeView";
import { RecipeIdContext } from "../../contexts/RecipeIdContext";
import "./Search.scss";
import Dropdown from "../Shared/Dropdown/Dropdown";

const RecipeSearchResult = (props) => {
  const { setRecipeId } = useContext(RecipeIdContext);
  const { baseUri, data } = props;
  const { image, title, id } = data;
  return (
    <div className="search-result">
      <div>
        <img src={`${baseUri}${image}`} alt="Recipe" />
      </div>
      <div>
        <label style={{ textAlign: "center", fontFamily: "cursive", color: "black", fontSize: "10px" }}>{title}</label>
      </div>
    </div>
  );
};

const cuisineOptions = [
  { label: "African", value: "African" },
  { label: "American", value: "American" },
  { label: "British", value: "British" },
  { label: "Cajun", value: "Cajun" },
  { label: "Carribean", value: "Carribean" },
  { label: "Chinese", value: "Chinese" },
  { label: "Eastern European", value: "Eastern European" },
  { label: "European", value: "European" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Greek", value: "Greek" },
  { label: "Indian", value: "Indian" },
  { label: "Irish", value: "Irish" },
  { label: "Italian", value: "Italian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Jewish", value: "Jewish" },
  { label: "Korean", value: "Korean" },
  { label: "Latin American", value: "Latin American" },
  { label: "Mediterranean", value: "Mediterranean" },
  { label: "Mexican", value: "Mexican" },
  { label: "Middle Eastern", value: "Middle Eastern" },
  { label: "Nordic", value: "Nordic" },
  { label: "Southern", value: "Southern" },
  { label: "Spanish", value: "Spanish" },
  { label: "Thai", value: "Thai" },
  { label: "Vietnamese", value: "Vietnamese" }
];

export default () => {
  const [titleQuery, setTitleQuery] = useState("");

  const [apiRes, setApiRes] = useState({ results: [] });

  const performSearch = async () => {
    const res = await Axios.get("/api/recipes", {
      params: {
        title: titleQuery
      }
    });
    setApiRes(res.data);
  };

  return (
    <section className="search">
      <div className="textfield-container">
        <input className="search-input" value={titleQuery} onChange={(e) => setTitleQuery(e.target.value)} />
        <Dropdown
          items={cuisineOptions}
          isMulti={true}
          onSelect={(value) => console.log("Selected " + value)}
          placeholder="Cuisine"
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
