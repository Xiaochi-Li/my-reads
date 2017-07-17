import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'escape-string-regexp'
import Book from './Book.js'

class SearchResults extends Component{
  // static propTypes = {
  //   resultBooks : PropTypes.array,
  // }

  render(){
    const {resultBooks} = this.props
    return (
      <div className="search-books-results">
      <ol className="books-grid">{
        resultBooks.map((book, index) => (<Book
          book = {book}
          key = {index}
        />))
      }
      </ol>
      </div>
    )
  }
}

export default SearchResults;
