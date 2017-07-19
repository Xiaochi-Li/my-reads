import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './BooksShelf.js'
import SearchPage from './SearchPage.js'
import {Route, Link} from 'react-router-dom'


class App extends Component {
  state = {
    books: [],
    change: true
  }

  componentDidMount(){
    BooksAPI.getAll().then((extractedBooks) => {
      this.setState({
        books : extractedBooks
      })
    })
  }

  changeShalf = (event,book) =>{
    let index = this.state.books.indexOf(book);
    if(index> -1){
      this.state.books.splice(index,1)
    }
    const targetShelf = event.target.value;
    book.shelf = targetShelf;
    BooksAPI.update(book,targetShelf).then(() =>{

      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
    }
    );
  }

  render(){
    const {books, showBookState, screen} = this.state
    showBookState;
    return(
    <div className="app">

      {/*The search page, Only shown when search button is clicked*/}
      <Route path="/search" render={()=>(
        <SearchPage
          changeShalf = {this.changeShalf}
        />
      )}/>

      {/* The Shelf page, default main page */}
       <Route exact path="/" render={()=>(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">

            {/* The current reading shelf */}
             <BooksShelf
              changeShalf = {this.changeShalf}
              bookShelfTitle = 'Currently Reading'
              shelfType = {`currentlyReading`}
              books = {this.state.books}>
            </BooksShelf>

            {/* The want to read shelf */}
            <BooksShelf
              changeShalf = {this.changeShalf}
              bookShelfTitle = 'Want to Read'
              shelfType = {`wantToRead`}
              books = {this.state.books}>
            </BooksShelf>

            {/* The read shelf */}
            <BooksShelf
              changeShalf = {this.changeShalf}
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
