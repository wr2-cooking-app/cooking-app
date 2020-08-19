import React, { useState } from "react";
import Axios from "axios";

import "./Search.scss";

/*
  PLANNING:
  - Popup?
  - For now, require pressing the "search" button
*/

const RecipeSearchResult = (props) => {
  const { baseUri, data } = props;
  const { image, title } = data;
  return (
    <div className="search-result">
      <img src={`${baseUri}${image}`} alt="Recipe" />
      <label>{title}</label>
    </div>
  );
};

export default () => {
  const [titleQuery, setTitleQuery] = useState("");

  const [apiRes, setApiRes] = useState({ results: [] });

  const performSearch = async () => {
    const res = await Axios.get("/api/recipe/search", {
      params: {
        title: titleQuery
      }
    });
    setApiRes(res.data);
  };

  return (
    <section className="search">
      <input value={titleQuery} onChange={(e) => setTitleQuery(e.target.value)} />
      <button onClick={performSearch}>Search</button>
      {apiRes.results.map((result, i) => (
        <RecipeSearchResult key={i} data={result} baseUri={apiRes.baseUri} />
      ))}
    </section>
  );
};
