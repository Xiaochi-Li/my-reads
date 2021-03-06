import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component{

  render(){
    const {book} = this.props
    //console.log(book);
    return(
      <li  className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
          </div>
          <div className="book-shelf-changer">
            <select value= {book.shelf}
              onChange={(event) => this.props.changeShalf(event, book)}>
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
    )
  }
}

export default Book
