import React, { Component } from "react";
import SearchForm from "./Search";
import ResultList from "./Result";
import API from "../utils/API";
import Fuse from 'fuse.js'



class SearchResultContainer extends Component {
  state = {
    results: [],
    filtered: [],
  };

  componentDidMount() {
    API.getEmp()
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  }

  searchEmp = (term) => {
    const fuse = new Fuse(this.state.results, {
      keys: [
        'name.first',
        'name.last',
        'email',
        'phone'
      ]
    })

    this.setState({
      filtered: fuse.search(term).map(el => el.item)
    })

  };

  handleInputChange = event => {
    const value = event.target.value ;
    this.searchEmp(value)
  };

  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
        />
        {
          this.state.filtered.length > 0 
            ? <ResultList results={this.state.filtered} />
            : <ResultList results={this.state.results} />
        }
        
      </div>
    );
  }
}

export default SearchResultContainer;
