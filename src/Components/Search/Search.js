import React, { useState } from "react";
import Axios from "axios";

import "./Search.scss";
import { Multiselect } from "multiselect-react-dropdown";

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

const cuisineOptions = [
  { id: 1, name: "African" },
  { id: 2, name: "American" },
  { id: 3, name: "British" },
  { id: 4, name: "Cajun" },
  { id: 5, name: "Carribean" },
  { id: 6, name: "Chinese" },
  { id: 7, name: "Eastern European" },
  { id: 8, name: "European" },
  { id: 9, name: "French" },
  { id: 10, name: "German" },
  { id: 11, name: "Greek" },
  { id: 12, name: "Indian" },
  { id: 13, name: "Irish" },
  { id: 14, name: "Italian" },
  { id: 15, name: "Japanese" },
  { id: 16, name: "Jewish" },
  { id: 17, name: "Korean" },
  { id: 18, name: "Latin American" },
  { id: 19, name: "Mediterranean" },
  { id: 20, name: "Mexican" },
  { id: 21, name: "Middle Eastern" },
  { id: 22, name: "Nordic" },
  { id: 23, name: "Southern" },
  { id: 24, name: "Spanish" },
  { id: 25, name: "Thai" },
  { id: 26, name: "Vietnamese" }
];

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
      <div>
        <Multiselect
          options={cuisineOptions}
          displayValue="name"
          singleSelect={true}
          onSelect={(selectedList) => console.log(selectedList)}
        />
        {/* <Select className="selector" isMulti name="cuisine" options={cuisineOptions} closeMenuOnSelect={false} /> */}
      </div>
      <button onClick={performSearch}>Search</button>
      {apiRes.results.map((result, i) => (
        <RecipeSearchResult key={i} data={result} baseUri={apiRes.baseUri} />
      ))}
    </section>
  );
};
