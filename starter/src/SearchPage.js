import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as booksAPI from "./BooksAPI";

const SearchPage=({books,showSPage,updateBooks})=>{
  const [text,setText]=useState(null);
  const [queryResBooks,setQueryResBooks]=useState([]);
  useEffect(()=>{
    setText("");
  },[]);
const editText=(event)=>{
  setText(event.target.value);
  let timer;
  clearTimeout(timer);
    timer = setTimeout(() => { 
if(event.target.value.trim()!==""){searchBooks(text,10).then( function(res){ setQueryResBooks(res)});}
else setQueryResBooks([]);}
, 1100);
}
const searchBooks=async(text,n)=>{
  try{
   
    const res=await booksAPI.search(text,n);
   return res;
  }
  catch(error){
    return [];
  }
  
}


return(

  <div className="search-books">
   
    <div className="search-books-bar">
      <Link
      to="/"
        className="close-search"
        onClick={() => showSPage(false)}
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={editText}
        />
      </div>
    </div>
        <div className="search-books-results">
            <ol className="books-grid">
              {queryResBooks !==undefined&&queryResBooks.length!==0?Object.values(queryResBooks).map((book,index)=>
                <Book key ={index} book={book} ind={index} updateShelf={updateBooks} books={books}/>):""
              }
            </ol>
        </div>
</div>
);
}
export default SearchPage;