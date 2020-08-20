import Axios from "axios";
import React, { useState, useContext } from "react";
import RecipeView from '../RecipeView/RecipeView';
import { RecipeIdContext } from '../../contexts/RecipeIdContext';
import "./Search.scss";

const RecipeSearchResult = (props) => {
  const [recipeId, setRecipeId] = useContext(RecipeIdContext)
  const { baseUri, data } = props;
  const { image, title, id } = data;
  return (
    <div className="search-result">
      <div><img src={`${baseUri}${image}`} alt="Recipe" onClick={() => setRecipeId(id)}/></div>
      <div><label style= {{textAlign: 'center', fontFamily: 'cursive', color: 'black', fontSize: '12px'}}>{title}</label></div>
    </div>
  );
};

export default () => {
  const [titleQuery, setTitleQuery] = useState("");

  const [apiRes, setApiRes] = useState({ results: [] });

  const [recipeId, setRecipeId] = useContext(RecipeIdContext);

  const performSearch = async () => {
    const res = await Axios.get("/api/recipes", {
      params: {
        title: titleQuery
      }
    });
    setApiRes(res.data);
  };

  // console.log(recipeId)
  return (
    <section className="search">
      <div className="textfield-container">
        <input className="search-input" value={titleQuery} onChange={(e) => setTitleQuery(e.target.value)} />
        <button className="search-button" onClick={performSearch}>Search</button>
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
