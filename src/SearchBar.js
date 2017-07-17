import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'escape-string-regexp'

class SearchBar extends Component{
  static propTypes = {
    query : PropTypes.string,
     searchBook: PropTypes.fun,
     updateBookQuery: PropTypes.fun
  }

  render(){
    const {query,updateBookQuery,searchBook} =  this.props

    return(
      <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
          <input
          type="text"
          placeholder="Search by title or author"
          value={ query}
          onChange={(event)=> updateBookQuery(event.target.value)}
          onKeyPress= {searchBook}/>
          </div>
      </div>
    )
  }
}

export default SearchBar;
