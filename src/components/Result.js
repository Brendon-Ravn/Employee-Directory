import React from "react";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key= {result.id.value} className="list-group-item">
          <img alt="employee" src={result.picture.large} className="img-fluid" />
          <p>
            Name: {result.name.first} {result.name.last} | Email: {result.email} | Phone: {result.phone}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
