import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './BooksShelf.js'
import SearchPage from './SearchPage.js'
import {Route, Link} from 'react-router-dom'


class App extends Component {
  state = {
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((extractedBooks) => {
      this.setState({
        books : extractedBooks
      })
    })
  }

  //debugging method, delete later
  showBookState(){
    console.log(this.state);
  }

  render(){
    //const {books, showBookState, screen} = this.state
    return(
    <div className="app">
      <Route path="/search" render={()=>(
        <SearchPage/>
      )}/>
       <Route exact path="/" render={()=>(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
             <BooksShelf
              bookShelfTitle = 'Currently to Read'
              shelfType = {`currentlyReading`}
              books = {this.state.books}>
            </BooksShelf>

            <BooksShelf
              bookShelfTitle = 'Want to Read'
              shelfType = {`wantToRead`}
              books = {this.state.books}>
            </BooksShelf>

            <BooksShelf
              bookShelfTitle = 'Read'
              shelfType = {`read`}
              books = {this.state.books}>
            </BooksShelf>
          </div>

          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      )}/>
    </div>
  )
  }
}

export default App;
