import React, {Component} from 'react'

class BooksShelf extends Component{

  render (){
    let showingBooks = this.props.books //books to show

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {this.props.bookShelfTitle} </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <li key={book.bookTitle} className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ backgroundImage:book.backgroundImageUrl }}></div>
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
                <div className="book-title">{book.bookTitle}</div>
               <div className="book-authors">{book.bookAuthors}</div>
             </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksShelf
