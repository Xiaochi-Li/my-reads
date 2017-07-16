import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component{
  state = {
      query : ``,
      resultBooks:[]
  }

  updateBookQuery = (keywords) =>{
      this.setState({
          query:''
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
      const SearchBar = (props) => (
         <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event)=> this.updateBookQuery(this.state.query)}/>
            </div>
        </div>
      )

      return(
        <div className="search-books">
            <SearchBar/>
          {/* 
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div> */}
        </div>
      )
  }
}

export default SearchPage;