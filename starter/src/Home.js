import "./App.css";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import SearchPage from "./SearchPage";
function  Home ({books,setShowSearchpage, updateBooks,showSearchPage}) {

  return (
       
    <div className="app">
      {showSearchPage ?<SearchPage books={books} showSPage={setShowSearchpage} updateContent={updateBooks}/>  : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                <ol className="books-grid"> <Shelf books={books} updateShelf={updateBooks} shelfName={"currentlyReading"} /> </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid"><Shelf books={books} updateShelf={updateBooks} shelfName={"wantToRead"} /></ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                <ol className="books-grid"><Shelf books={books} updateShelf={updateBooks} shelfName={"read"} /></ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/Search" onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</Link>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default Home;
