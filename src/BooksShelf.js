import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class BooksShelf extends Component{

  render (){
    let books = this.props.books; //books to show
    let shelfType = this.props.shelfType;
    let showingBooks;
    showingBooks = books.filter((book)=>(book.shelf === shelfType))
   
    

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {this.props.bookShelfTitle} </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map((book,index) => (
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

export default BooksShelf
