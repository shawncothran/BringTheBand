import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artist: [],
      image: [],
      followers: [],
      genre: []
    };

    this.handleResponse = this.handleResponse.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // handleInput(e) {
  //   e.preventDefault();
  //   let value = this.refs.search.value
  //   handleSearch(value);
  // }

  handleSearch(e) {
    let search = this.refs.search.value.split(' ').join('%20');
    let url = (`https://api.spotify.com/v1/search?query=${search}&type=artist`);
    $.ajax({
      url,
      success: this.handleResponse
    });
  }

  handleResponse(data) {
    let response = data.artists.items;

    this.setState({
      artist: response[0].name,
      image: response[0].images[0].url,
      followers: response[0].followers.total,
      genre: response[0].genres[0]
    });
  }

  render () {
    return (
      <section>
        <input id="search"
               ref="search"
               className="search"
               type="text"
               placeholder="Who do you NEED to see?!"
               onKeyUp={this.handleSearch}/>
      </section>
    )
  }
}

export default Search;
