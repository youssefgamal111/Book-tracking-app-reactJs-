import Home from "./Home";
import SearchPage from "./SearchPage";
import { useState,useEffect } from "react";
import * as booksAPI from "./BooksAPI";
import {Routes,Route } from "react-router-dom";
const App=()=>{
    const [showSearchPage, setShowSearchpage] = useState(false);
    const [books,setBooks]=useState([]);
    const getBooks=async()=>{
      const res=await booksAPI.getAll();
      return res;
      }
    useEffect(()=>{
        const get=async()=>{
       getBooks().then(function(res){ setBooks(res)});}
       get();
        
      },[]);
      const updateBookShelf= async(book,shelf)=>{
       
    
        const res=await booksAPI.update(book,shelf);
        book.shelf=shelf;
        const newBooks=books.filter(b=>book.id!==b.id).concat([book]);
        setBooks(newBooks);
      
      }
  
return(
    <Routes>
        <Route exact path="/" element={<Home books={books} setShowSearchpage={setShowSearchpage} updateBooks={updateBookShelf} showSearchPage={showSearchPage} />} />
        <Route exact path="/Search" element={<SearchPage books={books} showSPage={setShowSearchpage} updateBooks={updateBookShelf}/>} />
        

    </Routes>);
}
export default App;