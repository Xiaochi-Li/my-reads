import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksShelf from './BooksShelf.js'


class App extends Component {
  state = {
    books: [],
    screen : false,
    booksReading : [{
      backgroundImageUrl:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
      bookTitle : 'To Kill a Mockingbird',
      bookAuthors : 'Harper Lee',
    }],
    booksWantToRead : [{
      backgroundImageUrl:'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
      bookTitle : `Ender's Game`,
      bookAuthors : 'Orson Scott Card',
    }],
    booksRead : [{
      backgroundImageUrl:'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
      bookTitle : '1776',
      bookAuthors : 'David McCullough',
    }]
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
    this.showBookState();

    return(
    <div className="app">
      {this.state.screen ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" onClick={() => this.setState({ screen: false })}>Close</a>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ):(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BooksShelf
              bookShelfTitle = 'Book test'
              books = {this.state.books}>
            </BooksShelf>
            {/* <BooksShelf
              bookShelfTitle = 'Currently to Read'
              books = {this.state.booksReading}>
            </BooksShelf>

            <BooksShelf
              bookShelfTitle = 'Want to Read'
              books = {this.state.booksWantToRead}>
            </BooksShelf>

            <BooksShelf
              bookShelfTitle = 'Read'
              books = {this.state.booksRead}>
            </BooksShelf> */}
          </div>

          <div className="open-search">
            <a onClick={() => this.setState({ screen: true })}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  )
  }
}

export default App;
