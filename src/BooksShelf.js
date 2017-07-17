import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'


class BooksShelf extends Component{

  static propTypes = {
    shelfType : PropTypes.string,
    books : PropTypes.array,
  }

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
            {showingBooks.map((book,index) => (<Book
              book = {book}
              index = {index}
            />))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksShelf
