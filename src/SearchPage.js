import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'escape-string-regexp'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults.js'

class SearchPage extends Component{

    state = {
        query : '',
        resultBooks:[]
    }

    updateBookQuery = (keywords) =>{

      this.setState({
          query: keywords.trim()
      })
    }

  searchBook = (event)=>{
      //if(this.state.queryquery){
        if(event.key === 'Enter'){
        BooksAPI.search(this.state.query,10).then((extractedBook)=>(
            this.setState({resultBooks : extractedBook})
        ));
        }
      }

  render() {
      return(
        <div className="search-books">
            <SearchBar
              query= {this.state.query}
              updateBookQuery = {this.updateBookQuery}
              searchBook = {this.searchBook}
            />

            <SearchResults
              changeShalf = {this.props.changeShalf}
              resultBooks = {this.state.resultBooks}
            />
        </div>
      )
  }
}

export default SearchPage;
