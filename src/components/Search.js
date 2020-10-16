import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee by name, email, or phone."
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
