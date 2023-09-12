import React from "react";
import { SearchForm } from "./components/SearchForm";
import BooksPallet from "./components/BooksPallet";

import "./css/App.css";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      inputLine: '',
      sortedBooks: '',
    };
  }

  handleSearchQuery = (e) => {
    e.preventDefault();
    let url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.inputLine.split(' ').join('+');

    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  handleSearchLine = (event) => {
    this.setState({inputLine: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <SearchForm handleSearchQuery={this.handleSearchQuery} handleSearchLine={this.handleSearchLine}/>
        <BooksPallet />
      </div>
    );
  }
}

export default App;
