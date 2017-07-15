import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks.js'


class App extends Component {
  render(){
    const booksWantToRead = [
       {
        bookTitle : 'To Kill a Mockingbird',
        bookAuthors : 'Harper Lee',
      }
    ]

    return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <ListBooks
          bookShelfTitle = 'Want to Read'
          books = {booksWantToRead}>
        </ListBooks>
      </div>

      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    </div>
  )
  }
}

export default App;
