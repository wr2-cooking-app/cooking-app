import Axios from "axios";
import React, { useState } from "react";
import "./Search.scss";

const RecipeSearchResult = (props) => {
  const { baseUri, data } = props;
  const { image, title } = data;
  return (
    <div className="search-result">
      <div><img src={`${baseUri}${image}`} alt="Recipe" /></div>
      <div><label style= {{textAlign: 'center', fontFamily: 'cursive', color: 'black'}}>{title}</label></div>
    </div>
  );
};

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
        <button onClick={performSearch}>Search</button>
      </div>
      <div className="search-result-box">
      {apiRes.results.map((result, i) => (
        <RecipeSearchResult className="recipe-result" key={i} data={result} baseUri={apiRes.baseUri} />
      ))}
      </div>
    </section>
  );
};
