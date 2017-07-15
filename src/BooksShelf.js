import React, {Component} from 'react'

class BooksShelf extends Component{

  render (){
    let showingBooks = this.props.books //books to show

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
