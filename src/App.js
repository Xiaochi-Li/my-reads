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
    console.log(index);
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

  //debugging method, delete later
  showBookState(){
    console.log(this.state);
  }

  render(){
    const {books, showBookState, screen} = this.state
    showBookState;
    return(
    <div className="app">
      <Route path="/search" render={()=>(
        <SearchPage
          changeShalf = {this.changeShalf}
        />
      )}/>
       <Route exact path="/" render={()=>(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
             <BooksShelf
              changeShalf = {this.changeShalf}
              bookShelfTitle = 'Currently to Read'
              shelfType = {`currentlyReading`}
              books = {this.state.books}>
            </BooksShelf>

            <BooksShelf
              changeShalf = {this.changeShalf}
              bookShelfTitle = 'Want to Read'
              shelfType = {`wantToRead`}
              books = {this.state.books}>
            </BooksShelf>

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
