import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'escape-string-regexp'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component{
    
    state = {
        query : '',
        resultBooks:[]
    }

    updateBookQuery = (keywords) =>{
        console.log(keywords)
      this.setState({
          query: keywords.trim()
      })
    }

//   componentDidMount(){
//     BooksAPI.search(this.state.query,20).then((extractedBook)=>(
//         this.setState({
//             resultBooks : extractedBook
//         })
//     ))
//   }

  render() {
      return(
        <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event)=> this.updateBookQuery(event.target.value)}/>
            </div>
        </div>
          {/* 
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div> */}
        </div>
      )
  }
}

export default SearchPage;