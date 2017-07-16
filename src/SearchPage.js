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
        
      this.setState({
          query: keywords.trim()
      })
      console.log(this.state.query)
    }

  searchBook = (event)=>{
      //if(this.state.queryquery){
        if(event.key === 'Enter'){
        BooksAPI.search(this.state.query,10).then((extractedBook)=>(
            this.setState({resultBooks : extractedBook})
        ));
        }}
  

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
                onChange={(event)=> this.updateBookQuery(event.target.value)}
                onKeyPress={this.searchBook}/>
                </div>
            </div>

            <div className="search-books-results">
            <ol className="books-grid">
                {this.state.resultBooks.map((book,index)=>(
              <li key={index} className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
               <div className="book-authors">{book.authors}</div>
             </li>
            ))}
            </ol>
            </div> 
        </div>
      )
  }
}

export default SearchPage;